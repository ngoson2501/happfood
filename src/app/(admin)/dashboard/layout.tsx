"use client";

import { useState, useEffect } from "react";
import SideMenuDashboard from "@/components/SideMenuDashboard/SideMenuDashboard";
import Footer from "@/components/Footer/Footer";
import { FaBars } from "react-icons/fa";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Cập nhật trạng thái màn hình (di động hoặc không)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Cập nhật lần đầu
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          <FaBars size={18} className="text-current" />
        </div>

        {/* SideMenuDashboard với hiệu ứng ẩn/hiện */}
        <div
        
          className={`fixed top-[80px] left-0 h-full z-30  transition-transform duration-300 ${
            isSideMenuVisible ? "translate-x-0" : "-translate-x-full"
          } ${isMobile ? "w-full" : "w-[245px]"}`}
        >


          <SideMenuDashboard />

          {/* <div className="fixed right-0 top-0 h-full w-full md:hidden z-30 bg-green-400">

          </div> */}
          
        </div>

        {/* Nội dung chính, chiếm toàn màn hình khi SideMenuDashboard ẩn đi */}
        <div
          className={`w-full transition-all duration-300 ${
            isSideMenuVisible && !isMobile ? "ml-[245px]" : "ml-0"
          }`}
        >
          {children}
          <Footer />
        </div>
      </div>

      {/* Overlay background khi SideMenuDashboard mở ở kích thước nhỏ */}
      {isSideMenuVisible && isMobile && (
        <div
          onClick={toggleSideMenu}
          className="fixed inset-0 z-20 bg-black opacity-50"
        ></div>
      )}
    </>
  );
}






