"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'; // Sử dụng usePathname
import { useUser } from '@/context/User-provider';
import Image from 'next/image';

const SideMenuDashboard: React.FC = () => {
  const pathname = usePathname(); // Lấy đường dẫn hiện tại
  const [currentPath, setCurrentPath] = useState<string>("");

  const infoUser = useUser();
  console.log("check info>>>>>>>>>role:", infoUser)

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <div className="font-poppins antialiased">
      <div id="view" className="h-full flex flex-row">
        <div
          id="sidebar"
          className="bg-white h-screen shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
        >
          <div className="space-y-6 md:space-y-10 mt-10">
            <h1 className="font-bold text-4xl text-center md:hidden">
              D<span className="text-[#a1e6f4]">.</span>
            </h1>
            <h1 className=" hidden md:block font-bold text-sm md:text-xl text-center">
              Dashboard<span className="text-[#a1e6f4]">.</span>
            </h1>
            <div id="profile" className=" space-y-3">
              {/* <img
                src={infoUser?.avatar ?? '/icon/default_avatar.png'}
                alt="Avatar user"
                className="w-10 md:w-16 rounded-full mx-auto"
              /> */}
              <div className="flex justify-center mt-2">
              <Image
                  src={infoUser?.avatar ?? '/icon/default_avatar.png'}
                  alt="Avatar user"
                  width={96} // Kích thước cố định tương ứng với w-24
                  height={96} // Kích thước cố định tương ứng với h-24
                  className="w-[80px] h-[80px] object-cover rounded-full border border-gray-300"
              />
            </div>
              <div>
                <h2 className="font-medium text-[16px] md:text-[18px] text-center text-[#a1e6f4]">
                {infoUser?.username || "Guest"}
                </h2>
                <p className="text-xs text-gray-500 text-center">
                {infoUser?.email || "Email..."}
                </p>
              </div>
            </div>

            <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-[#a1e6f4]">
              <input
                type="text"
                className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
                placeholder="Search"
              />
              <button className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block">
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div id="menu" className=" flex flex-col space-y-2">
              <Link href="/dashboard">
                <div className={`block text-sm font-medium py-2 px-2 rounded-md transition duration-150 ease-in-out ${currentPath === "/dashboard" ? "bg-[#a1e6f4] text-white" : "text-gray-700 hover:bg-[#a1e6f4] hover:text-white hover:scale-105"}`}>
                  Dashboard
                </div>
              </Link>

              <div className="relative">
                <input type="checkbox" id="toggleSubMenuUsers" className="hidden peer" />
                <label
                  htmlFor="toggleSubMenuUsers"
                  className={`w-full block text-sm font-medium py-2 px-2 rounded-md transition duration-150 ease-in-out cursor-pointer ${
                    currentPath === "/dashboard/users/all" ? "bg-[#a1e6f4] text-white" : "text-gray-700 hover:bg-[#a1e6f4] hover:text-white hover:scale-105"
                  }`}
                >
                  <span>Users</span>
                </label>

                <ul className="hidden peer-checked:block ml-4 space-y-1">
                  <Link href="/dashboard/users/all">
                    <li className={`block hover:scale-105 text-sm font-medium py-1 px-2 rounded-md transition duration-150 ease-in-out ${currentPath === "/dashboard/users/all" ? "bg-[#e6f7fa] text-gray-900" : "text-gray-600 hover:bg-[#e6f7fa] hover:text-gray-900"}`}>
                      All
                    </li>
                  </Link>
                  {/* <li className="hover:scale-105 text-sm font-medium text-gray-600 py-1 px-2 hover:bg-[#e6f7fa] hover:text-gray-900 rounded-md transition duration-150 ease-in-out">
                    Roles
                  </li> */}
                </ul>
              </div>



              <div className=" relative">

                <input type="checkbox" id="toggleSubMenuCategories" className="hidden peer" />
                <label
                  htmlFor="toggleSubMenuCategories"
                  className={`w-full block text-sm font-medium py-2 px-2 rounded-md transition duration-150 ease-in-out cursor-pointer ${
                    currentPath === "/dashboard/categories/all" ? "bg-[#a1e6f4] text-white" : "text-gray-700 hover:bg-[#a1e6f4] hover:text-white hover:scale-105"
                  }`}
                >
                  <span>Categories</span>
                </label>

                <ul className="hidden peer-checked:block ml-4 space-y-1 mt-1">
                  <Link href="/dashboard/categories/all">
                    <li className={`block hover:scale-105 text-sm font-medium py-1 px-2 rounded-md transition duration-150 ease-in-out ${currentPath === "/dashboard/categories/all" ? "bg-[#e6f7fa] text-gray-900" : "text-gray-600 hover:bg-[#e6f7fa] hover:text-gray-900"}`}>
                      All
                    </li>
                  </Link>
                 
                </ul>
              </div>



            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenuDashboard;








