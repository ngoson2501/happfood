"use client";

// const Header = () => {
//   return (
//     <>
//       <header className=" w-full h-[80px] relative">
//         <div className="bg-slate-500  w-full h-[80px] fixed top-0 left-0 z-50 flex items-center justify-between px-[50px]">
//           <div>
//             <span className="font-lobster italic text-[25px] font-[600]">
//               HappFood
//             </span>
//           </div>

//           <div>
//             <ul className="flex gap-[50px] font-Andika">
//               <li className="cursor-pointer ">Home</li>
//               <li className="cursor-pointer ">Recipes</li>
//               <li className="cursor-pointer ">Blog</li>
//               <li className="cursor-pointer ">Contact</li>
//               <li className="cursor-pointer ">About us</li>
//             </ul>
//           </div>

//           <div className=" flex">

//             <div className="flex justify-center items-center gap-2">
//               <span className="bg-white w-[30px] h-[30px] flex justify-center items-center">
//                 <img
//                   className="object-contain object-center "
//                   src="icon/avata.png"
//                   alt="icon-instagram"
//                 />
//               </span>
//               <span>
//                 <p className="font-Andika">Ngo Son</p>
//               </span>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";

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
    <header className="w-full h-[80px] relative">
      <div className="bg-white w-full h-[80px]  border-b-[1px] border-b-[#e1e1e1] fixed top-0 left-0 z-50 flex items-center justify-between px-[50px]">
        <div>
          <span className="font-lobster italic text-[25px] font-[600] cursor-pointer">
            HappFood
          </span>
        </div>

        <div>
          <ul className="flex gap-[50px] font-Andika">
            <li className="cursor-pointer ">Home</li>
            <li className="cursor-pointer ">Recipes</li>
            <li className="cursor-pointer ">Blog</li>
            <li className="cursor-pointer ">Contact</li>
            <li className="cursor-pointer ">About us</li>
          </ul>
        </div>

        <div className="flex">
          <div className="relative flex justify-center items-center gap-2">
            <span
              className=" w-[30px] h-[30px] flex justify-center items-center relative"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <img
                className="object-contain object-center cursor-pointer "
                src="icon/avata.png"
                alt="icon-instagram"
              />
              <div
                className={`absolute bottom-[-70px] rounded-[10px] border font-Andika  w-[150px] h-[60px]  bg-white flex flex-col justify-center items-center transition-opacity duration-1000 
                
                    ${visible ? "" : "hidden"}`}
                    style={{
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
                      }}
              >
                {/* ${hover ? "opacity-100" : "opacity-0"}  */}
                <p className="cursor-pointer ">Login</p>
                <p className="cursor-pointer ">Sign up</p>
              </div>
            </span>

            <span>
              <p className="font-Andika">Ngo Son</p>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
