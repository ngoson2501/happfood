"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'; // Sử dụng usePathname
import { useUser } from '@/context/User-provider';
import { FiX } from "react-icons/fi";

interface SideMenuProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  setSatteSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideMenu: React.FC<SideMenuProps> = ({ onClick, setSatteSideMenu }) => {

  const pathname = usePathname(); // Lấy đường dẫn hiện tại
  const [currentPath, setCurrentPath] = useState<string>("");
  const [accessToken, setAccessToken] = useState<string | null>(null); // Quản lý state cho accessToken
  const infoUser = useUser();
  const categories = ["Break Fast", "Lunch", "Vegan", "Meat", "Chicken", "Dessert", "Ice Cream", "Chocolate"];

  // Kiểm tra nếu accessToken tồn tại trong useEffect (chỉ thực hiện trên client)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem('accessToken');
      setAccessToken(token);
    }
  }, []); // Empty dependency array ensures this runs only once after component mounts

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Bạn có chắc chắn muốn đăng xuất?");
    if (confirmLogout) {
      try {
        // Gửi token đăng xuất
        const res = await fetch('/api/auth/logout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ accessToken }), // Gửi accessToken để backend xử lý
        });

        // Xoá token trong localStorage
        if (typeof window !== "undefined") {
          localStorage.removeItem("accessToken");
        }

        // Chuyển hướng về trang đăng nhập
        window.location.href = '/login';
      } catch (error) {
        console.error("Đăng xuất thất bại:", error);
        alert("Có lỗi xảy ra khi đăng xuất. Vui lòng thử lại.");
      }
    }
  };

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <>
      <div
        onClick={onClick}
        className="flex h-screen flex-col justify-between border-e bg-white z-40 overflow-y-scroll"
      >
        <div className="px-4 ">
          <div className="bg-white sticky top-0 py-4  flex items-center justify-between ">
            <span className=" flex h-10 w-32 items-center  text-black font-lobster italic text-[20px] font-[600] ">
              HappyFood
            </span>
            <span
              onClick={() => setSatteSideMenu(false)}
              className="cursor-pointer "
            >
              {/* <Image
                className=""
                src="/icon/cross.png"
                alt="icon-close"
                width={20}
                height={20}
                /> */}

              {/* <svg
                style={{
                  color: "rgba(0, 0, 0, 0.3)",
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg> */}

              <FiX className=" text-[20px] text-gray-600 transition-all hover:scale-105"></FiX>
            </span>
          </div>

          <ul className="mt-6 space-y-1 font-Inter">
            {/* <li>
              <a
                href="#"
                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
              >
                Recipes
              </a>
            </li> */}

            <li className={`${infoUser?.role === "admin"  ? "block" : "hidden" }`}>
              <Link
                key={currentPath}
                href="/dashboard"
                className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  transition-all ${currentPath === "/dashboard" ? "bg-[#E7FAFE] text-gray-700 scale-105" : "hover:bg-[#E7FAFE] hover:text-gray-700 hover:scale-105"}`}
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                key={currentPath}
                href="/"
                className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  transition-all ${currentPath === "/" ? "bg-[#E7FAFE] text-gray-700 scale-105" : "hover:bg-[#E7FAFE] hover:text-gray-700 hover:scale-105"}`}
              >
                Home
              </Link>
            </li>

            

            <li>
              <Link
                key={currentPath}
                href="/recipes"
                className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  transition-all ${currentPath === "/recipes" ? "bg-[#E7FAFE] text-gray-700 scale-105" : "hover:bg-[#E7FAFE] hover:text-gray-700 hover:scale-105"}`}
              >
                Recipes
              </Link>
            </li>

            <li>
              <details className=" group [&_summary::-webkit-details-marker]:hidden">
                <summary 
                //className={`flex justify-between rounded-lg px-4 py-2 text-sm font-medium text-gray-500  transition-all ${currentPath === "/categories" ||`/categories/${encodeURIComponent("Breakfast")}`||`/categories/${encodeURIComponent("Vegan")}`||`/categories/${encodeURIComponent("Meat")}`||`/categories/${encodeURIComponent("Dessert")}`||`/categories/${encodeURIComponent("Lunch")}`||`/categories/${encodeURIComponent("Chocolate")}`||`/categories/${encodeURIComponent("Chicken")}`||`/categories/${encodeURIComponent("/Ice Cream")}` ? "bg-[#E7FAFE] text-gray-700 scale-105" : "hover:bg-[#E7FAFE]  hover:text-gray-700 hover:scale-105"}`}
                  className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-[#E7FAFE] hover:text-gray-700  transition-all   hover:scale-105"
                  >
                  <span 
                    className=" w-full h-full text-sm font-medium"
                    //className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  transition-all ${currentPath === "/recipes" ? "bg-[#E7FAFE] text-gray-700 scale-105" : "hover:bg-[#E7FAFE] hover:text-gray-700 hover:scale-105"}`}
                    > Categories </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <Link
                      key={currentPath}
                      href="/categories"
                      // className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-[#E7FAFE] hover:text-gray-700"
                      className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  transition-all ${currentPath === "/categories" ? "bg-[#E7FAFE] text-gray-700 scale-105" : "hover:bg-[#E7FAFE] hover:text-gray-700 hover:scale-105"}`}
                    >
                      All
                    </Link>
                  </li>
                  <li>
                    <Link
                      key={currentPath}
                      href={{
                        pathname: `/categories/${encodeURIComponent("Break Fast")}`,
                        query: {
                          title: encodeURIComponent("Break Fast"),
                          //id: category._id,
                           // Mã hóa title trong query
                        },
                      }}

                      className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  transition-all ${currentPath === `/categories/${encodeURIComponent("Break Fast")}` ? "bg-[#E7FAFE] text-gray-700 scale-105" : "hover:bg-[#E7FAFE] hover:text-gray-700 hover:scale-105"}`}
                    >
                      Break Fast
                    </Link>
                  </li>

                  <li>
                    <Link
                      key={currentPath}
                      href={{
                        pathname: `/categories/${encodeURIComponent("Lunch")}`,
                        query: {
                          title: encodeURIComponent("Lunch"),
                          //id: category._id,
                           // Mã hóa title trong query
                        },
                      }}
                      className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  transition-all ${currentPath === `/categories/${encodeURIComponent("Lunch")}` ? "bg-[#E7FAFE] text-gray-700 scale-105" : "hover:bg-[#E7FAFE] hover:text-gray-700 hover:scale-105"}`}
                    >
                      Lunch
                    </Link>
                  </li>

                  <li>
                    <Link
                      key={currentPath}
                      href={{
                        pathname: `/categories/${encodeURIComponent("Vegan")}`,
                        query: {
                          title: encodeURIComponent("Vegan"),
                          //id: category._id,
                           // Mã hóa title trong query
                        },
                      }}
                      className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  transition-all ${currentPath === `/categories/${encodeURIComponent("Vegan")}` ? "bg-[#E7FAFE] text-gray-700 scale-105" : "hover:bg-[#E7FAFE] hover:text-gray-700 hover:scale-105"}`}
                    >
                      Vegan
                    </Link>
                  </li>

                  <li>
                    <Link
                      key={currentPath}
                      href={{
                        pathname: `/categories/${encodeURIComponent("Meat")}`,
                        query: {
                          title: encodeURIComponent("Meat"),
                          //id: category._id,
                           // Mã hóa title trong query
                        },
                      }}
                      className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  transition-all ${currentPath === `/categories/${encodeURIComponent("Meat")}` ? "bg-[#E7FAFE] text-gray-700 scale-105" : "hover:bg-[#E7FAFE] hover:text-gray-700 hover:scale-105"}`}
                    >
                      Meat
                    </Link>
                  </li>

                  <li>
                    <Link
                      key={currentPath}
                      href={{
                        pathname: `/categories/${encodeURIComponent("Chicken")}`,
                        query: {
                          title: encodeURIComponent("Chicken"),
                          //id: category._id,
                           // Mã hóa title trong query
                        },
                      }}
                      className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  transition-all ${currentPath === `/categories/${encodeURIComponent("Chicken")}` ? "bg-[#E7FAFE] text-gray-700 scale-105" : "hover:bg-[#E7FAFE] hover:text-gray-700 hover:scale-105"}`}
                    >
                      Chicken
                    </Link>
                  </li>

                  <li>
                    <Link
                      key={currentPath}
                      href={{
                        pathname: `/categories/${encodeURIComponent("Dessert")}`,
                        query: {
                          title: encodeURIComponent("Dessert"),
                          //id: category._id,
                           // Mã hóa title trong query
                        },
                      }}
                      className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  transition-all ${currentPath === `/categories/${encodeURIComponent("Dessert")}` ? "bg-[#E7FAFE] text-gray-700 scale-105" : "hover:bg-[#E7FAFE] hover:text-gray-700 hover:scale-105"}`}
                    >
                      Dessert
                    </Link>
                  </li>

                  <li>
                    <Link
                      key={currentPath}
                      href={{
                        pathname: `/categories/${encodeURIComponent("Ice Cream")}`,
                        query: {
                          title: encodeURIComponent("Ice Cream"),
                          //id: category._id,
                           // Mã hóa title trong query
                        },
                      }}
                      className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  transition-all ${currentPath === `/categories/${encodeURIComponent("Ice Cream")}` ? "bg-[#E7FAFE] text-gray-700 scale-105" : "hover:bg-[#E7FAFE] hover:text-gray-700 hover:scale-105"}`}
                    >
                      Ice Cream
                    </Link>
                  </li>

                  <li>
                    <Link
                      key={currentPath}
                      href={{
                        pathname: `/categories/${encodeURIComponent("Chocolate")}`,
                        query: {
                          title: encodeURIComponent("Ice Cream"),
                          //id: category._id,
                           // Mã hóa title trong query
                        },
                      }}
                      className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  transition-all ${currentPath === `/categories/${encodeURIComponent("Chocolate")}` ? "bg-[#E7FAFE] text-gray-700 scale-105" : "hover:bg-[#E7FAFE] hover:text-gray-700 hover:scale-105"}`}
                    >
                      Chocolate
                    </Link>
                  </li>
                </ul>
              </details>
            </li>


            <li>
              <Link
                
                href="/blog"
                className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  transition-all ${currentPath === "/blog" ? "bg-[#E7FAFE] text-gray-700 scale-105" : "hover:bg-[#E7FAFE] hover:text-gray-700 hover:scale-105"}`}
              >
                Blog
              </Link>
            </li>

           

            <li>
              <Link
                key={currentPath}
                href="/profile"
                className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  transition-all ${currentPath === "/profile" ? "bg-[#E7FAFE] text-gray-700 scale-105" : "hover:bg-[#E7FAFE] hover:text-gray-700 hover:scale-105"}`}
              >
                Setting
              </Link>
            </li>
            
            <div className={`${accessToken  ? "hidden" : "block" }`}>
            <li>
              <Link
                key={currentPath}
                href="/login"
                className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  transition-all ${currentPath === "/login" ? "bg-[#E7FAFE] text-gray-700 scale-105" : "hover:bg-[#E7FAFE] hover:text-gray-700 hover:scale-105"}`}
              >
                Login
              </Link>
            </li>
            
              <li>
                <Link
                  key={currentPath}
                  href="/register"
                  className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  transition-all ${currentPath === "/register" ? "bg-[#E7FAFE] text-gray-700 scale-105" : "hover:bg-[#E7FAFE] hover:text-gray-700 hover:scale-105"}`}
                >
                  Singn Up
                </Link>
              </li>

              </div>
              <li className={`${accessToken  ? "block" : "hidden" }`} >
                <Link
                  key={currentPath}
                  href="#"
                  className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  transition-all ${currentPath === "#" ? "bg-[#E7FAFE] text-gray-700 scale-105" : "hover:bg-[#E7FAFE] hover:text-gray-700 hover:scale-105"}`}
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </li>
            
          </ul>

          
        </div>

        

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 font-Inter">
          <div className="bg-white flex flex-col items-center gap-2 p-4 hover:bg-gray-50">
            <Image
              className="w-[80px] h-[80px] object-cover relative size-10 rounded-full"
              src={infoUser?.avatar ?? '/icon/default_avatar.png'}
              alt="avata"
              width={80} // Điều chỉnh width và height để khớp với kích thước mong muốn
              height={80}
              quality={100} // Tăng chất lượng hình ảnh lên mức cao nhất
              // Sử dụng layout intrinsic để đảm bảo chất lượng tốt nhất
            />

            <div className="flex justify-center items-center">
              <div className="text-xs">
                <p className="block text-[15px] font-[700] text-center">
                  {infoUser?.username}
                </p>
                <p className="block text-center">{infoUser?.email}</p>
              </div>
            </div>
          </div>
        </div>



      </div>
    </>
  );
};

export default SideMenu;



















// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/router";

// interface SideMenuProps {
//   onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
//   setSatteSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const SideMenu: React.FC<SideMenuProps> = ({ onClick, setSatteSideMenu }) => {
//   const router = useRouter();  // Sử dụng useRouter để lấy thông tin về route hiện tại

//   return (
//     <>
//       <div
//         onClick={onClick}
//         className="flex h-screen flex-col justify-between border-e bg-white z-40 overflow-y-scroll"
//       >
//         <div className="px-4 ">
//           <div className="bg-white sticky top-0 py-4  flex items-center justify-between ">
//             <span className=" flex h-10 w-32 items-center text-black font-lobster italic text-[20px] font-[600] ">
//               HappyFood
//             </span>
//             <span
//               onClick={() => setSatteSideMenu(false)}
//               className="cursor-pointer "
//             >
//               {/* <Image src="/icon/cross.png" alt="icon-close" width={20} height={20} /> */}
//               <svg
//                 style={{
//                   color: "rgba(0, 0, 0, 0.3)",
//                 }}
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="feather feather-x"
//               >
//                 <line x1="18" y1="6" x2="6" y2="18" />
//                 <line x1="6" y1="6" x2="18" y2="18" />
//               </svg>
//             </span>
//           </div>

//           <ul className="mt-6 space-y-1 font-Inter">
//             <li>
//               <Link
//                 href="/dashboard"
//                 className={`block rounded-lg px-4 py-2 text-sm font-medium ${router.pathname === '/dashboard' ? 'bg-red-500 text-white' : 'text-gray-500'} hover:bg-[#E7FAFE] hover:text-gray-700`}
//               >
//                 Dashboard
//               </Link>
//             </li>

//             <li>
//               <Link
//                 href="/"
//                 className={`block rounded-lg px-4 py-2 text-sm font-medium ${router.pathname === '/' ? 'bg-red-500 text-white' : 'text-gray-500'} hover:bg-[#E7FAFE] hover:text-gray-700`}
//               >
//                 Home
//               </Link>
//             </li>

//             <li>
//               <Link
//                 href="/recipes"
//                 className={`block rounded-lg px-4 py-2 text-sm font-medium ${router.pathname === '/recipes' ? 'bg-red-500 text-white' : 'text-gray-500'} hover:bg-[#E7FAFE] hover:text-gray-700`}
//               >
//                 Recipes
//               </Link>
//             </li>

//             {/* Các link khác */}
//           </ul>
//         </div>

//         <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 font-Inter">
//           <div className="bg-white flex flex-col items-center gap-2 p-4 hover:bg-gray-50">
//             <Image
//               className="w-[80px] h-[80px] object-cover relative size-10 rounded-full"
//               src="/images/IMG_8991.jpg"
//               alt="avata"
//               width={80} // Điều chỉnh width và height để khớp với kích thước mong muốn
//               height={80}
//               quality={100} // Tăng chất lượng hình ảnh lên mức cao nhất
//             />
//             <div className="flex justify-center items-center">
//               <div className="text-xs">
//                 <p className="block text-[15px] font-[700] text-center">
//                   Ngo Son
//                 </p>
//                 <p className="block text-center">eric@frusciante.com</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SideMenu;
