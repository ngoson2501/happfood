import React from "react";
import Image from "next/image";

interface SideMenuProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  setSatteSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideMenu: React.FC<SideMenuProps> = ({ onClick, setSatteSideMenu }) => {
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
              <svg
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
              </svg>
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

            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-[#E7FAFE] hover:text-gray-700"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-[#E7FAFE] hover:text-gray-700"
              >
                Recipes
              </a>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-[#E7FAFE] hover:text-gray-700">
                  <span className="text-sm font-medium"> Categories </span>

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
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-[#E7FAFE] hover:text-gray-700"
                    >
                      Break Fast
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-[#E7FAFE] hover:text-gray-700"
                    >
                      Lunch
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-[#E7FAFE] hover:text-gray-700"
                    >
                      Vegan
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-[#E7FAFE] hover:text-gray-700"
                    >
                      Meat
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-[#E7FAFE] hover:text-gray-700"
                    >
                      Chicken
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-[#E7FAFE] hover:text-gray-700"
                    >
                      Dessert
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-[#E7FAFE] hover:text-gray-700"
                    >
                      Ice Cream
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-[#E7FAFE] hover:text-gray-700"
                    >
                      Chocolate
                    </a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-[#E7FAFE] hover:text-gray-700"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-[#E7FAFE] hover:text-gray-700"
              >
                Blog
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-[#E7FAFE] hover:text-gray-700"
              >
                Contact
              </a>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-[#E7FAFE] hover:text-gray-700">
                  <span className="text-sm font-medium"> Account </span>

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
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-[#E7FAFE] hover:text-gray-700"
                    >
                      Details
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-[#E7FAFE] hover:text-gray-700"
                    >
                      Security
                    </a>
                  </li>

                 
                </ul>
              </details>
            </li>

            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-[#E7FAFE] hover:text-gray-700"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-[#E7FAFE] hover:text-gray-700"
              >
                Logout
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-[#E7FAFE] hover:text-gray-700"
              >
                Singn Up
              </a>
            </li>
          </ul>
        </div>

        

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 font-Inter">
          <div className="bg-white flex flex-col items-center gap-2 p-4 hover:bg-gray-50">
            <Image
              className="w-[80px] h-[80px] object-cover relative size-10 rounded-full"
              src="/images/IMG_8991.jpg"
              alt="avata"
              width={80} // Điều chỉnh width và height để khớp với kích thước mong muốn
              height={80}
              quality={100} // Tăng chất lượng hình ảnh lên mức cao nhất
              // Sử dụng layout intrinsic để đảm bảo chất lượng tốt nhất
            />

            <div className="flex justify-center items-center">
              <div className="text-xs">
                <p className="block text-[15px] font-[700] text-center">
                  Ngo Son
                </p>
                <p className="block text-center">eric@frusciante.com</p>
              </div>
            </div>
          </div>
        </div>



      </div>
    </>
  );
};

export default SideMenu;
