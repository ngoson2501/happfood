import React from "react";
import Image from "next/image";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className=" mt-[170px] lg:py-[50px]">
        <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8  flex flex-col justify-center">
          {/* <div className="absolute end-6 top-0 sm:end-6 sm:top-0 lg:end-8 lg:top-0"> */}
          <div className="fixed end-8 bottom-[40px] lg:bottom-[70px]   z-50">
            <button
              className="inline-block rounded-full bg-black p-1 text-white shadow transition hover:bg-slate-600 lg:p-3"
              onClick={scrollToTop}
            >
              <span className="sr-only">Back to top</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="  py-3 flex flex-col justify-center items-center gap-[20px] md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex  justify-center md:justify-start">
                <span className=" font-lobster italic text-[16px] xl:text-[25px] font-[600] cursor-pointer">
                  HappyFood
                </span>
              </div>

              <p className="mt-4 text-[8px] lg:text-[12px] mx-auto  max-w-md text-center font-Inter leading-relaxed text-gray-500 md:text-left">
                Welcome to HappyFood, your ultimate destination for home-cooked
                meal inspiration!
              </p>
            </div>

            <ul className=" text-[8px] lg:text-[15px]  font-Andika flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  Recipes
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  About us
                </a>
              </li>
            </ul>
          </div>

          <ul className=" md:border-t md:mt-[40px] py-[10px] lg:py-[30px] flex items-center  justify-center md:justify-end  gap-[40px] ">
            <li className=" cursor-pointer flex justify-center">
              <Image
                className=" xl:w-[27px] xl:h-[27px]"
                src="/icon/001-facebook.svg"
                alt="icon-facebook"
                width={7}
                height={7}
              />
            </li>
            <li className=" cursor-pointer">
              <Image
                className=" xl:w-[32px] xl:h-[32px]"
                src="/icon/003-twitter.svg"
                alt="icon-twitter"
                width={16}
                height={16}
              />
            </li>
            <li className=" cursor-pointer">
              <Image
                className=" xl:w-[30px] xl:h-[30px]"
                src="/icon/004-instagram.svg"
                alt="icon-instagram"
                width={16}
                height={16}
              />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
