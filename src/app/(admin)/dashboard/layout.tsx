// "use client";

// import SideMenuDashboard from "@/components/SideMenuDashboard/SideMenuDashboard";
// import Footer from "@/components/Footer/Footer"

// export default function DashboardLayout({
//     children,
//   }: {
//     children: React.ReactNode
//   }) {
//     return (
//         <>
//             {/* <header className="bg-yellow-500 w-[100%] h-[50px]">
            
//             </header> */}
//             <div className="bg-red-500 flex ">
//                 <div className="">
//                     <SideMenuDashboard></SideMenuDashboard>
//                 </div>
//                 <div className="w-full">
//                     {children}
//                 </div>
//             </div>
//             <Footer></Footer>
//         </>
        
//     )
//   }







// "use client";

// import SideMenuDashboard from "@/components/SideMenuDashboard/SideMenuDashboard";
// import Footer from "@/components/Footer/Footer";
// import { FaBars } from "react-icons/fa";

// export default function DashboardLayout({
//     children,
//   }: {
//     children: React.ReactNode
//   }) {
//     return (
//         <>
//             {/* <header className="bg-yellow-500 w-[100%] h-[50px]">
            
//             </header> */}
//             <div className="w-full flex flex-1">
//                 <div className="  fixed top-[80px] left-0 h-full z-10">
//                     <SideMenuDashboard  />
//                 </div>
//                 <div 
//                         className="fixed top-[80px] left-0 z-30 bg-green-400 p-2 cursor-pointer"
                        
//                     >
//                         <FaBars size={24} color="#ffffff" />
//                     </div>
//                 <div className="ml-[245px] w-full">
//                     {children}
//                     <Footer />
//                 </div>
                
                
                
//             </div>
            
//         </>
//     )
//   }










"use client";

import { useState } from "react";
import SideMenuDashboard from "@/components/SideMenuDashboard/SideMenuDashboard";
import Footer from "@/components/Footer/Footer";
import { FaBars } from "react-icons/fa";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(true);

  // Hàm xử lý khi nhấn vào biểu tượng FaBars
  const toggleSideMenu = () => {
    setIsSideMenuVisible(!isSideMenuVisible);
  };

  return (
    <>
      <div className="w-full flex flex-1">
        {/* Icon để mở/đóng SideMenu */}
       
        <div
            onClick={toggleSideMenu}
            className="fixed top-[90px] left-0 z-40 text-sm font-medium text-gray-700 p-2 hover:bg-[#a1e6f4] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
            {/* Đặt `text-current` để biểu tượng FaBars kế thừa màu từ phần tử cha */}
            <FaBars size={18} className="text-current" />
        </div>

        {/* SideMenuDashboard với hiệu ứng ẩn/hiện */}
        <div
          className={`fixed top-[80px] left-0 h-full z-30 transition-transform duration-300 ${
            isSideMenuVisible ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SideMenuDashboard />
        </div>

        {/* Nội dung chính, chiếm toàn màn hình khi SideMenuDashboard ẩn đi */}
        <div
          className={`w-full transition-all duration-300 ${
            isSideMenuVisible ? "ml-[245px]" : "ml-0"
          }`}
        >
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}




