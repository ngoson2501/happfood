"use client";
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SideMenu from "../SideMenu/SideMenu";
import { useUser } from '@/context/User-provider';


// Định nghĩa kiểu MenuItem với href
interface MenuItem {
  label: string;
  href: string;
  subItems: { label: string; href: string }[];
}

//Cấu trúc menuItems với các mục chính và href cho từng menu
const menuItems: {
  Home: MenuItem;
  Recipes: MenuItem;
  Categories: MenuItem;
  Blog: MenuItem;
  Contact: MenuItem;
  Library: MenuItem;
  Dashboard?: MenuItem;
  
} = {
  Home: { label: "Home", href: "/", subItems: [] },
  Recipes: { label: "Recipes", href: "/recipes", subItems: [] },
  Categories: { label: "Categories", href: "/categories", subItems: [] },
  Blog: { label: "Blog", href: "/blog", subItems: [] },
  Contact: { label: "Contact", href: "#", subItems: [{ label: "Add recipe", href: "/add_recipe" }, { label: "Generate", href: "/generate" }] },
  Library: { label: "Library", href: "#", subItems: [{ label: "Add recipe", href: "/add_recipe" }, { label: "Your recipes", href: "/your_recipes" }, { label: "Favorite recipes", href: "/favorite" }, { label: "Generate", href: "/generate" }] },
  //Dashboard: { label: "Dashboard", href: "/", subItems: [] },
};




const Header: React.FC = () => {
  //const router = useRouter(); // Khởi tạo router
  const [hoverItem, setHoverItem] = useState<string | null>(null);
  const [visibleItem, setVisibleItem] = useState<string | null>(null);
  const [stateSideMenu, setSatteSideMenu] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // Thêm state để kiểm tra trạng thái đăng nhập
  
  const infoUser = useUser();
  

  console.log("check infoUser?.avatar", infoUser?.avatar)


  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    console.log("het phien")
    setIsLoggedIn(token !== null && infoUser !== null); // Đặt isLoggedIn là true chỉ khi có cả token và infoUser
  }, [infoUser]);

  





// Kiểm tra trạng thái đăng nhập từ context và localStorage
// useEffect(() => {
//   const token = localStorage.getItem("accessToken");
//   setIsLoggedIn(!!(token || infoUser)); // Đánh dấu là đã đăng nhập nếu có token hoặc thông tin người dùng
// }, [infoUser]);



  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (hoverItem) {
      setVisibleItem(hoverItem);
    } else {
      timeout = setTimeout(() => setVisibleItem(null), 200);
    }
    return () => clearTimeout(timeout);
  }, [hoverItem]);

  const showSideMenu = () => {
    setSatteSideMenu(true);
  };

  const hiddenSideMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setSatteSideMenu(false);
  };




  // const handleLogout = () => {
  //   // Hiển thị hộp thoại xác nhận
  //   const confirmLogout = window.confirm("Bạn có chắc chắn muốn đăng xuất?");
    
  //   // Nếu người dùng nhấn "OK"
  //   if (confirmLogout) {
  //     localStorage.removeItem("accessToken"); // Xóa accessToken
  //     localStorage.removeItem("refreshToken"); // Xóa refreshToken (nếu có)
  //     setIsLoggedIn(false); // Đánh dấu là đã đăng xuất
  //     window.location.href = '/login';
  //     // router.push("/login");
      
  //   }
  // };


  const handleLogout = async () => {
    const confirmLogout = window.confirm("Bạn có chắc chắn muốn đăng xuất?");
    if (confirmLogout) {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const  res = await fetch('/api/auth/logout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ accessToken }), // Gửi refreshToken để backend xử lý
        });

        
  
        // Xoá token trong localStorage
        localStorage.removeItem("accessToken");
        //localStorage.removeItem("refreshToken");
        setIsLoggedIn(false);
  
        // Chuyển hướng về trang đăng nhập
        window.location.href = '/login';
      } catch (error) {
        console.error("Đăng xuất thất bại:", error);
        alert("Có lỗi xảy ra khi đăng xuất. Vui lòng thử lại.");
      }
    }
  };
  
  

  return (
    <header className="w-full max-w-[1425px] flex justify-center items-center h-[80px] relative">
      <div className="bg-white w-full max-w-[1425px] h-[80px] border-b-[1px] border-b-[#e1e1e1] fixed top-0 z-50 flex items-center justify-between px-[20px] lg:px-[50px]">
        <div>
          <Link href="/" className="font-lobster italic text-[16px] lg:text-[20px] xl:text-[25px] font-[600] cursor-pointer">
            HappyFood
          </Link>
        </div>

        {/* <div className="hidden md:block md:text-[13px] lg:text-[14px] xl:text-[15px]">
          <ul className="flex gap-[50px] font-Inter">
            {Object.keys(menuItems).map((key) => {
              const menuItem = menuItems[key as keyof typeof menuItems];
              const hasSubItems = menuItem.subItems.length > 0;

              return (
                <li
                  key={key}
                  className="cursor-pointer relative flex justify-center"
                  onMouseEnter={() => setHoverItem(key)}
                  onMouseLeave={() => setHoverItem(null)}
                >
                  <Link href={menuItem.href}>{menuItem.label}</Link>
                  {hasSubItems && (
                    <div
                      className={`text-[12px] xl:text-[15px] absolute bottom-[-70px] z-20 rounded-[5px] border font-Inter w-[150px] h-[60px] bg-white flex flex-col justify-center items-center gap-2 xl:gap-1 transition-opacity duration-1000 ${
                        visibleItem === key ? "" : "hidden"
                      }`}
                      style={{
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
                      }}
                    >
                      <div>
                        {menuItem.subItems.map((subItem, idx) => (
                          <Link key={idx} href={subItem.href}>
                            <p
                              className="cursor-pointer"
                              style={{ color: "rgba(0, 0, 0, 60%)" }}
                            >
                              {subItem.label}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div> */}

<div className="hidden md:block md:text-[13px] lg:text-[14px] xl:text-[15px]">
  <ul className="flex gap-[50px] font-Inter">
    {Object.keys(menuItems).map((key) => {
      const menuItem = menuItems[key as keyof typeof menuItems];

      // Kiểm tra menuItem có tồn tại
      if (!menuItem) {
        return null; // Nếu menuItem không tồn tại, không hiển thị gì
      }

      const hasSubItems = menuItem.subItems && menuItem.subItems.length > 0; // Kiểm tra sự tồn tại của subItems

      return (
        <li
          key={key}
          className="cursor-pointer relative flex justify-center"
          onMouseEnter={() => setHoverItem(key)}
          onMouseLeave={() => setHoverItem(null)}
        >
          <Link href={menuItem.href || "#"}>{menuItem.label}</Link>
          {hasSubItems && (
            <div
              className={`text-[12px] xl:text-[15px] absolute xl:mt-[35px] z-20 rounded-[5px] border font-Inter w-[150px] h-fit bg-white flex flex-col justify-center items-center gap-2 xl:gap-1 transition-opacity duration-1000 ${
                visibleItem === key ? "" : "hidden"
              }`}
              style={{
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className='w-full cursor-pointer'>
                {menuItem.subItems.map((subItem, idx) => (
                  <Link key={idx} href={subItem.href}>
                    <p
                      className="w-full text-center py-1 hover:bg-[#a1e6f4] hover:text-white transition duration-150 ease-in-out hover:scale-105 rounded "
                      //style={{ color: "rgba(0, 0, 0, 60%)" }}
                    >
                      {subItem.label}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </li>
      );
    })}
    {/* Hiển thị mục Dashboard nếu người dùng là admin */}
    {isLoggedIn && infoUser?.role === 'admin' && (
      <li
        className="cursor-pointer relative flex justify-center"
        onMouseEnter={() => setHoverItem("Dashboard")}
        onMouseLeave={() => setHoverItem(null)}
      >
        <Link href="/dashboard">Dashboard</Link>
      </li>
    )}
  </ul>
</div>






        <div className="hidden md:flex">
          <div className="relative flex justify-center items-center gap-2">
            <span
              className=" w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex justify-center items-center rounded-full overflow-hidden"
              onMouseEnter={() => setHoverItem("avatar")}
              onMouseLeave={() => setHoverItem(null)}
            >
              
              {/* <Image
                className="object-cover relative"
                src="/defaultAvatars/elephant.png"
                alt="avatar"
                width={100}
                height={100}
                quality={100}
              /> */}
              {/* <Image
                className="object-cover relative"
                src={isLoggedIn ? infoUser.avatar : '/icon/default_avatar.png'} // Kiểm tra nếu infoUser tồn tại
                alt="avatar"
                width={100}
                height={100}
                quality={100}
              /> */}

              <Image
                className="object-cover relative"
                src={infoUser?.avatar ?? '/icon/default_avatar.png'} // Sử dụng nullish coalescing
                alt="avatar"
                width={100}
                height={100}
                quality={100}
              />


              <div
                className={`text-[12px] xl:text-[15px] absolute bottom-[-70px] z-20 rounded-[5px] border font-Inter w-[150px] h-[60px] bg-white flex flex-col justify-center items-center gap-2 xl:gap-1 transition-opacity duration-1000 ${
                  visibleItem === "avatar" ? "" : "hidden"
                }`}
                style={{
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
                }}
              >
                {/* <Link href="/login" className="cursor-pointer">Login</Link>
                <Link href="/register" className="cursor-pointer">Sign up</Link> */}


                {isLoggedIn ? (
                  <>
                    <Link href="/profile">
                      <p className="cursor-pointer">Settings</p>
                    </Link>
                    <p className="cursor-pointer" onClick={handleLogout}>Logout</p>
                  </>
                ) : (
                  <>
                    <Link href="/login">
                      <p className="cursor-pointer">Login</p>
                    </Link>
                    <Link href="/register">
                      <p className="cursor-pointer">Sign up</p>
                    </Link>
                  </>
                )}

              </div>
            </span>

            {/* <span>
              <p className="font-Inter text-[12px] lg:text-[14px] xl:text-[15px]">
                Ngo Son
              </p>
            </span> */}

            <span>
              <p className="font-Inter text-[12px] lg:text-[14px] xl:text-[15px]">
                {infoUser?.username || "Guest"}
              </p>
            </span>

          </div>
        </div>

        <div onClick={() => showSideMenu()} className="block md:hidden">
          <Image
            src="/icon/menu.png"
            alt="menu-icon"
            width={30}
            height={30}
            className="object-contain object-center cursor-pointer"
          />
        </div>

        <div
          onClick={(event) => hiddenSideMenu(event)}
          className={`fixed inset-0 h-screen pr-[150px] ${
            stateSideMenu ? "" : "hidden"
          }`}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <SideMenu
            onClick={(e) => e.stopPropagation()}
            setSatteSideMenu={setSatteSideMenu}
          ></SideMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;


