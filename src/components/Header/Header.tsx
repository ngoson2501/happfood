// "use client";

// import React, { useState, useEffect } from "react";

// const Header: React.FC = () => {
//   const [hover, setHover] = useState<boolean>(false);
//   const [visible, setVisible] = useState<boolean>(false);

//   useEffect(() => {
//     let timeout: NodeJS.Timeout;
//     if (hover) {
//       setVisible(true);

//     } else {
//       timeout = setTimeout(() => setVisible(false), 500); // Delay 1 giây
//     }
//     return () => clearTimeout(timeout);
//   }, [hover]);

//   return (
//     <header className="w-full h-[80px] relative">
//       <div className="bg-white w-full h-[80px]  border-b-[1px] border-b-[#e1e1e1] fixed top-0 left-0 z-50 flex items-center justify-between px-[50px]">
//         <div>
//           <span className="font-lobster italic text-[25px] font-[600] cursor-pointer">
//             HappFood
//           </span>
//         </div>

//         <div>
//           <ul className="flex gap-[50px] font-Andika">
//             <li className="cursor-pointer ">Home</li>
//             <li className="cursor-pointer ">Recipes</li>
//             <li className="cursor-pointer ">Blog</li>
//             <li className="cursor-pointer ">Contact</li>
//             <li className="cursor-pointer ">About us</li>
//           </ul>
//         </div>

//         <div className="flex">
//           <div className="relative flex justify-center items-center gap-2">
//             <span
//               className=" w-[30px] h-[30px] flex justify-center items-center relative"
//               onMouseEnter={() => setHover(true)}
//               onMouseLeave={() => setHover(false)}
//             >
//               <img
//                 className="object-contain object-center cursor-pointer "
//                 src="icon/avata.png"
//                 alt="icon-instagram"
//               />
//               <div
//                 className={`absolute bottom-[-70px] rounded-[10px] border font-Andika  w-[150px] h-[60px]  bg-white flex flex-col justify-center items-center transition-opacity duration-1000

//                     ${visible ? "" : "hidden"}`}
//                     style={{
//                         boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
//                       }}
//               >
//                 {/* ${hover ? "opacity-100" : "opacity-0"}  */}
//                 <p className="cursor-pointer ">Login</p>
//                 <p className="cursor-pointer ">Sign up</p>
//               </div>
//             </span>

//             <span>
//               <p className="font-Andika">Ngo Son</p>
//             </span>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Header: React.FC = () => {
  const [hover, setHover] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (hover) {
      setVisible(true);
    } else {
      timeout = setTimeout(() => setVisible(false), 500); // Delay 1 giây
    }
    return () => clearTimeout(timeout);
  }, [hover]);

  return (
    <header className="w-full max-w-[1425px] flex justify-center items-center h-[80px]  relative  ">
      <div className="bg-white w-full max-w-[1425px]  h-[80px]  border-b-[1px] border-b-[#e1e1e1] fixed  top-0  z-50 flex items-center justify-between px-[20px] lg:px-[50px] ">
        <div>
          <span className="font-lobster italic text-[16px] lg:text-[20px] xl:text-[25px] font-[600] cursor-pointer">
            HappFood
          </span>
        </div>

        <div className="hidden md:block md:text-[13px] lg:text-[14px] xl:text-[15px]">
          <ul className="flex gap-[50px] font-Andika">
            <li className="cursor-pointer ">Home</li>
            <li className="cursor-pointer ">Recipes</li>
            <li className="cursor-pointer ">Blog</li>
            <li className="cursor-pointer ">Contact</li>
            <li className="cursor-pointer ">About us</li>
          </ul>
        </div>

        <div className="hidden md:flex ">
          <div className="relative flex justify-center items-center gap-2">
            <span
              className="bg-blue-500 w-[30px] h-[30px]  xl:w-[40px] xl:h-[40px] flex justify-center items-center  rounded-full overflow-hidden "
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {/* <Image
                    className="object-cover rounded-full w-[15px] h-[15px] lg:w-[45px] lg:h-[45px]"
                    src="/images/IMG_8991.jpg"
                    alt="avata"
                    width={45}
                    height={45}
                    quality={100} // Điều chỉnh chất lượng lên mức cao nhất
                  /> */}

              <Image
                className="object-cover relative"
                src="/images/IMG_8991.jpg"
                alt="avata"
                width={45}
                height={45}
                quality={100}
              />

              <div
                className={`text-[12px] xl:text-[15px] absolute bottom-[-70px] z-20 rounded-[10px] border font-Andika w-[150px] h-[60px]  bg-white flex flex-col justify-center items-center gap-2 xl:gap-1 transition-opacity duration-1000 
                
                    ${visible ? "" : "hidden"}`}
                style={{
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
                }}
              >
                <p className="cursor-pointer ">Login</p>
                <p className="cursor-pointer ">Sign up</p>
              </div>
            </span>

            <span>
              <p className="font-Andika text-[12px] lg:text-[14px] xl:text-[15px]">Ngo Son</p>
            </span>
          </div>
        </div>

        <div className="block md:hidden">
          <Image
            src="/icon/menu.png"
            alt="icon-instagram"
            width={30}
            height={30}
            className="object-contain object-center cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
