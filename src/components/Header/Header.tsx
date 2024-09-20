// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import SideMenu from "../SideMenu/SideMenu";
// const Header: React.FC = () => {
//   const [hover, setHover] = useState<boolean>(false);
//   const [visible, setVisible] = useState<boolean>(false);
//   const [stateSideMenu, setSatteSideMenu] = useState<boolean>(false);

//   useEffect(() => {
//     let timeout: NodeJS.Timeout;
//     if (hover) {
//       setVisible(true);
//     } else {
//       timeout = setTimeout(() => setVisible(false), 500); // Delay 1 giây
//     }
//     return () => clearTimeout(timeout);
//   }, [hover]);

//   const showSideMenu = () => {
//     setSatteSideMenu(true);
//   };
//   // const hiddenSideMenu = () => {
//   //   setSatteSideMenu(false);
//   // };
//   const hiddenSideMenu = (event: React.MouseEvent<HTMLDivElement>) => {
//     event.stopPropagation(); // Ngăn chặn sự kiện click lan rộng lên phần tử cha
//     setSatteSideMenu(false);
//   };

//   return (
//     <header className="w-full max-w-[1425px] flex justify-center items-center h-[80px]  relative  ">
//       <div className="bg-white w-full max-w-[1425px]  h-[80px]  border-b-[1px] border-b-[#e1e1e1] fixed  top-0  z-50 flex items-center justify-between px-[20px] lg:px-[50px] ">
//         <div>
//           <span className="font-lobster italic text-[16px] lg:text-[20px] xl:text-[25px] font-[600] cursor-pointer">
//             HappyFood
//           </span>
//         </div>

//         <div className="hidden md:block md:text-[13px] lg:text-[14px] xl:text-[15px]">
//           <ul className="flex gap-[50px] font-Andika">
//             <li className="cursor-pointer ">Home</li>
//             <li className="cursor-pointer ">Recipes</li>
//             <li className="cursor-pointer ">Blog</li>
//             <li className="cursor-pointer ">Contact</li>
//             {/* <li className="cursor-pointer ">About us</li> */}
//             <li className="cursor-pointer relative ">Library</li>
//           </ul>
//         </div>

//         <div className="hidden md:flex ">
//           <div className="bg-red-400 relative flex justify-center items-center gap-2">
//             <span
//               className="bg-blue-500 w-[30px] h-[30px]  xl:w-[40px] xl:h-[40px] flex justify-center items-center  rounded-full overflow-hidden "
//               onMouseEnter={() => setHover(true)}
//               onMouseLeave={() => setHover(false)}
//             >
//               <Image
//                 className="object-cover relative"
//                 src="/images/IMG_8991.jpg"
//                 alt="avata"
//                 width={45}
//                 height={45}
//                 quality={100}
//               />

//               <div
//                 className={`text-[12px] xl:text-[15px] absolute bottom-[-70px] z-20 rounded-[10px] border font-Andika w-[150px] h-[60px]  bg-white flex flex-col justify-center items-center gap-2 xl:gap-1 transition-opacity duration-1000 
                
//                     ${visible ? "" : "hidden"}`}
//                 style={{
//                   boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
//                 }}
//               >
//                 <p className="cursor-pointer ">Login</p>
//                 <p className="cursor-pointer ">Sign up</p>
//               </div>
//             </span>

//             <span>
//               <p className="font-Andika text-[12px] lg:text-[14px] xl:text-[15px]">
//                 Ngo Son
//               </p>
//             </span>
//           </div>
//         </div>

//         <div
//           onClick={() => showSideMenu()}
//           className="block md:hidden"
//         >
//           <Image
//             src="/icon/menu.png"
//             alt="icon-instagram"
//             width={30}
//             height={30}
//             className="object-contain object-center cursor-pointer"
//           />
//         </div>

//         <div
//           onClick={(event) => hiddenSideMenu(event)}
//           className={`fixed inset-0 h-screen pr-[150px] ${stateSideMenu ? "" : "hidden"}`}
//           style={{
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
           
//           }}
//         >
//           <SideMenu onClick={(e) => e.stopPropagation()} setSatteSideMenu={setSatteSideMenu}></SideMenu>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;












// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import SideMenu from "../SideMenu/SideMenu";

// const Header: React.FC = () => {

  
//   const [hover, setHover] = useState<boolean>(false);
//   const [visible, setVisible] = useState<boolean>(false);
//   const [hoverLibrary, setHoverLibrary] = useState<boolean>(false);
//   const [visibleLibrary, setVisibleLibrary] = useState<boolean>(false);
//   const [stateSideMenu, setSatteSideMenu] = useState<boolean>(false);

//   useEffect(() => {
//     let timeout: NodeJS.Timeout;
//     if (hover) {
//       setVisible(true);
//     } else {
//       timeout = setTimeout(() => setVisible(false), 500);
//     }
//     return () => clearTimeout(timeout);
//   }, [hover]);

//   useEffect(() => {
//     let timeout: NodeJS.Timeout;
//     if (hoverLibrary) {
//       setVisibleLibrary(true);
//     } else {
//       timeout = setTimeout(() => setVisibleLibrary(false), 200);
//     }
//     return () => clearTimeout(timeout);
//   }, [hoverLibrary]);

//   const showSideMenu = () => {
//     setSatteSideMenu(true);
//   };

//   const hiddenSideMenu = (event: React.MouseEvent<HTMLDivElement>) => {
//     event.stopPropagation();
//     setSatteSideMenu(false);
//   };

//   return (
//     <header className="w-full max-w-[1425px] flex justify-center items-center h-[80px]  relative  ">
//       <div className="bg-white w-full max-w-[1425px]  h-[80px]  border-b-[1px] border-b-[#e1e1e1] fixed  top-0  z-50 flex items-center justify-between px-[20px] lg:px-[50px] ">
//         <div>
//           <span className="font-lobster italic text-[16px] lg:text-[20px] xl:text-[25px] font-[600] cursor-pointer">
//             HappyFood
//           </span>
//         </div>

//         <div className="hidden md:block md:text-[13px] lg:text-[14px] xl:text-[15px]">
//           <ul className="flex gap-[50px] font-Andika">
//             <li className="cursor-pointer ">Home</li>
//             <li className="cursor-pointer ">Recipes</li>
//             <li className="cursor-pointer ">Blog</li>
//             <li className="cursor-pointer ">Contact</li>
//             <li
//               className="cursor-pointer relative flex justify-center"
//               onMouseEnter={() => setHoverLibrary(true)}
//               onMouseLeave={() => setHoverLibrary(false)}
//             >
//               Library
//               <div
//                 className={`text-[12px] xl:text-[15px] absolute bottom-[-70px] z-20 rounded-[10px] border font-Andika w-[150px] h-[60px]  bg-white flex flex-col justify-center items-center gap-2 xl:gap-1 transition-opacity duration-1000 
//                   ${visibleLibrary ? "" : "hidden"}`}
//                 style={{
//                   boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
//                 }}
//               >
//                 <p className="cursor-pointer ">Add recipe</p>
//                 <p className="cursor-pointer ">Generate</p>
//               </div>
//             </li>
//           </ul>
//         </div>

//         <div className="hidden md:flex ">
//           <div className="bg-red-400 relative flex justify-center items-center gap-2">
//             <span
//               className="bg-blue-500 w-[30px] h-[30px]  xl:w-[40px] xl:h-[40px] flex justify-center items-center  rounded-full overflow-hidden "
//               onMouseEnter={() => setHover(true)}
//               onMouseLeave={() => setHover(false)}
//             >
//               <Image
//                 className="object-cover relative"
//                 src="/images/IMG_8991.jpg"
//                 alt="avata"
//                 width={45}
//                 height={45}
//                 quality={100}
//               />

//               <div
//                 className={`text-[12px] xl:text-[15px] absolute bottom-[-70px] z-20 rounded-[10px] border font-Andika w-[150px] h-[60px]  bg-white flex flex-col justify-center items-center gap-2 xl:gap-1 transition-opacity duration-1000 
//                     ${visible ? "" : "hidden"}`}
//                 style={{
//                   boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
//                 }}
//               >
//                 <p className="cursor-pointer ">Login</p>
//                 <p className="cursor-pointer ">Sign up</p>
//               </div>
//             </span>

//             <span>
//               <p className="font-Andika text-[12px] lg:text-[14px] xl:text-[15px]">
//                 Ngo Son
//               </p>
//             </span>
//           </div>
//         </div>

//         <div onClick={() => showSideMenu()} className="block md:hidden">
//           <Image
//             src="/icon/menu.png"
//             alt="icon-instagram"
//             width={30}
//             height={30}
//             className="object-contain object-center cursor-pointer"
//           />
//         </div>

//         <div
//           onClick={(event) => hiddenSideMenu(event)}
//           className={`fixed inset-0 h-screen pr-[150px] ${
//             stateSideMenu ? "" : "hidden"
//           }`}
//           style={{
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//           }}
//         >
//           <SideMenu
//             onClick={(e) => e.stopPropagation()}
//             setSatteSideMenu={setSatteSideMenu}
//           ></SideMenu>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;








// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import SideMenu from "../SideMenu/SideMenu";



// interface MenuItem {
//   label: string;
//   subItems: string[];
// }

// // Định nghĩa kiểu cho menuItems với các khóa cụ thể
// const menuItems: {
//   Home: MenuItem;
//   Recipes: MenuItem;
//   Blog: MenuItem;
//   Contact: MenuItem;
//   Library: MenuItem;
// } = {
//   Home: { label: "Home", subItems: ["Add recipe", "Generate"] },
//   Recipes: { label: "Recipes", subItems: [] },
//   Blog: { label: "Blog", subItems: [] },
//   Contact: { label: "Contact", subItems: ["Add recipe", "Generate"] },
//   Library: {
//     label: "Library",
//     subItems: ["Add recipe", "Generate"],
//   },
// };




// const Header: React.FC = () => {
//   const [hoverItem, setHoverItem] = useState<string | null>(null);
//   const [visibleItem, setVisibleItem] = useState<string | null>(null);
//   const [stateSideMenu, setSatteSideMenu] = useState<boolean>(false);

//   useEffect(() => {
//     let timeout: NodeJS.Timeout;
//     if (hoverItem) {
//       setVisibleItem(hoverItem);
//     } else {
//       timeout = setTimeout(() => setVisibleItem(null), 200);
//     }
//     return () => clearTimeout(timeout);
//   }, [hoverItem]);

//   const showSideMenu = () => {
//     setSatteSideMenu(true);
//   };

//   const hiddenSideMenu = (event: React.MouseEvent<HTMLDivElement>) => {
//     event.stopPropagation();
//     setSatteSideMenu(false);
//   };

//   return (
//     <header className="w-full max-w-[1425px] flex justify-center items-center h-[80px] relative">
//       <div className="bg-white w-full max-w-[1425px] h-[80px] border-b-[1px] border-b-[#e1e1e1] fixed top-0 z-50 flex items-center justify-between px-[20px] lg:px-[50px]">
//         <div>
//           <span className="font-lobster italic text-[16px] lg:text-[20px] xl:text-[25px] font-[600] cursor-pointer">
//             HappyFood
//           </span>
//         </div>

//         <div className="hidden md:block md:text-[13px] lg:text-[14px] xl:text-[15px]">
//         <ul className="flex gap-[50px] font-Inter">
//             {Object.keys(menuItems).map((key) => {
//               const menuItem = menuItems[key as keyof typeof menuItems]; // Cách này giúp TypeScript hiểu rõ kiểu của `key`.
//               const hasSubItems = menuItem.subItems.length > 0;

//               return (
//                 <li
//                   key={key}
//                   className="cursor-pointer relative flex justify-center"
//                   onMouseEnter={() => setHoverItem(key)}
//                   onMouseLeave={() => setHoverItem(null)}
//                 >
//                   {menuItem.label}
//                   {hasSubItems && (
//                     <div
//                       className={`text-[12px] xl:text-[15px] absolute bottom-[-70px]  z-20 rounded-[5px] border font-Inter  w-[150px] h-[60px] bg-white flex flex-col justify-center items-center  gap-2 xl:gap-1 transition-opacity duration-1000 ${
//                         visibleItem === key ? "" : "hidden"
//                       }`}
//                       style={{
//                         boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
//                       }}
//                     >
//                       <div>
//                         {menuItem.subItems.map((subItem, idx) => (
                          
//                             <p
//                               key={idx}
//                               className="cursor-pointer"
//                               style={{ color: "rgba(0, 0, 0, 60%)" }}
//                             >
//                             {subItem}
//                             </p>
                          
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </li>
//               );
//             })}
//           </ul>
//         </div>

//         <div className="hidden md:flex ">
//           <div className=" relative flex justify-center items-center gap-2">
//             <span
//               className="bg-blue-500 w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex justify-center items-center rounded-full overflow-hidden"
//               onMouseEnter={() => setHoverItem("avatar")}
//               onMouseLeave={() => setHoverItem(null)}
//             >
//               <Image
//                 className="object-cover relative"
//                 src="/images/IMG_8991.jpg"
//                 alt="avatar"
//                 width={45}
//                 height={45}
//                 quality={100}
//               />

//               <div
//                 className={`text-[12px] xl:text-[15px] absolute bottom-[-70px] z-20 rounded-[5px] border font-Inter  w-[150px] h-[60px] bg-white flex flex-col justify-center items-center gap-2 xl:gap-1 transition-opacity duration-1000 ${
//                   visibleItem === "avatar" ? "" : "hidden"
//                 }`}
//                 style={{
//                   boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
//                 }}
//               >
//                 <p className="cursor-pointer">Login</p>
//                 <p className="cursor-pointer">Sign up</p>
//               </div>
//             </span>

//             <span>
//               <p className="font-Inter text-[12px] lg:text-[14px] xl:text-[15px]">
//                 Ngo Son
//               </p>
//             </span>
//           </div>
//         </div>

//         <div onClick={() => showSideMenu()} className="block md:hidden">
//           <Image
//             src="/icon/menu.png"
//             alt="menu-icon"
//             width={30}
//             height={30}
//             className="object-contain object-center cursor-pointer"
//           />
//         </div>

//         <div
//           onClick={(event) => hiddenSideMenu(event)}
//           className={`fixed inset-0 h-screen pr-[150px] ${
//             stateSideMenu ? "" : "hidden"
//           }`}
//           style={{
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//           }}
//         >
//           <SideMenu
//             onClick={(e) => e.stopPropagation()}
//             setSatteSideMenu={setSatteSideMenu}
//           ></SideMenu>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;





"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SideMenu from "../SideMenu/SideMenu";

// Định nghĩa kiểu MenuItem với href
interface MenuItem {
  label: string;
  href: string;
  subItems: { label: string; href: string }[];
}

// Cấu trúc menuItems với các mục chính và href cho từng menu
const menuItems: {
  Home: MenuItem;
  Recipes: MenuItem;
  Blog: MenuItem;
  Contact: MenuItem;
  Library: MenuItem;
} = {
  Home: { label: "Home", href: "/", subItems: [] },
  Recipes: { label: "Recipes", href: "/recipes", subItems: [] },
  Blog: { label: "Blog", href: "/blog", subItems: [] },
  Contact: { label: "Contact", href: "/contact", subItems: [{ label: "Add recipe", href: "/add_recipe" }, { label: "Generate", href: "/generate" }] },
  Library: { label: "Library", href: "/library", subItems: [{ label: "Add recipe", href: "/add_recipe" }, { label: "Generate", href: "/generate" }] },
};

const Header: React.FC = () => {
  const [hoverItem, setHoverItem] = useState<string | null>(null);
  const [visibleItem, setVisibleItem] = useState<string | null>(null);
  const [stateSideMenu, setSatteSideMenu] = useState<boolean>(false);

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

  return (
    <header className="w-full max-w-[1425px] flex justify-center items-center h-[80px] relative">
      <div className="bg-white w-full max-w-[1425px] h-[80px] border-b-[1px] border-b-[#e1e1e1] fixed top-0 z-50 flex items-center justify-between px-[20px] lg:px-[50px]">
        <div>
          <span className="font-lobster italic text-[16px] lg:text-[20px] xl:text-[25px] font-[600] cursor-pointer">
            HappyFood
          </span>
        </div>

        <div className="hidden md:block md:text-[13px] lg:text-[14px] xl:text-[15px]">
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
        </div>

        <div className="hidden md:flex">
          <div className="relative flex justify-center items-center gap-2">
            <span
              className="bg-blue-500 w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] flex justify-center items-center rounded-full overflow-hidden"
              onMouseEnter={() => setHoverItem("avatar")}
              onMouseLeave={() => setHoverItem(null)}
            >
              <Image
                className="object-cover relative"
                src="/images/IMG_8991.jpg"
                alt="avatar"
                width={45}
                height={45}
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
                <p className="cursor-pointer">Login</p>
                <p className="cursor-pointer">Sign up</p>
              </div>
            </span>

            <span>
              <p className="font-Inter text-[12px] lg:text-[14px] xl:text-[15px]">
                Ngo Son
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
