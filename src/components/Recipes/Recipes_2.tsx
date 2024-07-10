

import { useState } from "react";
import Image from "next/image";

const Recipes_2 = () => {
  return (
    <>
      {/* <section className=" w-[275px]  h-[350px] group cursor-pointer  pb-[20px] rounded-[30px] flex flex-col gap-[20px] hover:shadow-lg ">
        <div className=" w-full h-[200px] relative overflow-hidden rounded-[20px]">
          <Image
            className="w-full h-full object-cover object-center absolute inset-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110 "
            src="/images/food-img/Pancake.svg"
            alt="Pancake"
            // Sử dụng layout="responsive" nếu kích thước hình ảnh đã biết và bạn muốn hành vi đáp ứng
            width={275} // Thay thế bằng chiều rộng thực của hình ảnh của bạn
            height={200} // Thay thế bằng chiều cao thực của hình ảnh của bạn
          />
          <div className=" absolute z-10 w-[60px] h-[60px] right-0 flex justify-center items-center">
            <div className="bg-white w-[40px] h-[40px] rounded-full  flex gap-1 justify-center items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                strokeWidth="1"
                className="w-6 h-6 text-[#DBE2E5] cursor-pointer"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
        </div>
        <p
          className="px-[10px] font-Inter font-[600] text-[20px]   line-clamp-2 truncate whitespace-normal text-clip overflow-hidden"
          style={{ lineHeight: "1.4" }}
        >
          Fruity Pancake with Orange & Blueberry
        </p>
        <div className="flex gap-[20px]">
          <div className="px-[15px] gap-2 py-[7px] flex justify-center items-center rounded-full">
            <Image src="/icon/Timer.svg" alt="Timer" width={24} height={24} /> 
            <p>30p</p>
          </div>
          <div className="px-[15px] gap-2 py-[7px] flex justify-center items-center rounded-full">
            <Image src="/icon/ForkKnife.svg" alt="ForkKnife" width={24} height={24} /> 
            <p>sweet</p>
          </div>
        </div>
      </section> */}


<section className="w-[180px] h-[240px] lg:w-[275px]  lg:h-[350px] group cursor-pointer p-[10px] lg:p-[20px] xl:p-0 rounded-[15px] lg:rounded-[30px] flex flex-col gap-[10px] xl:gap-[20px]  hover:shadow-lg bor"
          >
        <div className="w-full h-[130px] lg:h-[200px]  relative overflow-hidden rounded-[10px] lg:rounded-[20px]">
          <Image
            className="w-full h-full object-cover object-center absolute inset-0 transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            src="/images/food-img/Pancake.svg"
            alt="Pancake"
            width={240}
            height={160}
          />
          {/* <div className="absolute z-10 w-[45px] h-[45px] right-0 flex justify-center items-center">
            <div className="bg-white w-[30px] h-[30px] rounded-full flex gap-1 justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                strokeWidth="1"
                className="w-4 h-4 text-[#DBE2E5] cursor-pointer"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div> */}
          <div className="absolute z-10 w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] right-0 flex justify-center items-center">
            <div className="bg-white w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] rounded-full flex gap-1 justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                strokeWidth="1"
                className="w-5 h-5 lg:w-6 lg:h-6 text-[#DBE2E5] cursor-pointer"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>

        </div>
        {/* <p
          
          className=" font-Inter font-[600] text-[16px] lg:text-[20px] line-clamp-2 truncate whitespace-normal text-clip overflow-hidden"
          style={{ lineHeight: "1.4" }}
        >
          Fruity Pancake with Orange & Blueberry
        </p> */}
         <div className="xl:px-[20px] flex flex-col gap-2 xl:gap-4">
         <p
          className=" font-Inter font-[600] text-[16px] lg:text-[20px] line-clamp-2 truncate whitespace-normal text-clip overflow-hidden"
          style={{ lineHeight: "1.4" }}
        >
          Fruity Pancake with Orange & Blueberry bviks vbsjjf vbsiKJHUGIFD
        </p>
        <div className=" flex gap-[10px] lg:gap-[25px]">
          <div className=" gap-1 py-[5px]  lg:gap-2 lg:py-[7px] flex justify-center items-center rounded-full">
            <Image className="lg:w-[23px] lg:h-[23px]" src="/icon/Timer.svg" alt="Timer" width={16} height={16} />
            <p className="text-[12px] lg:text-[15px]" style={{ color: "rgba(0, 0, 0, 60%)" }}>30p</p>
          </div>
          <div className=" gap-1 py-[5px]  lg:gap-2 lg:py-[7px] flex justify-center items-center rounded-full">
            <Image
            className="lg:w-[23px] lg:h-[23px]"
              src="/icon/ForkKnife.svg"
              alt="ForkKnife"
              width={16}
              height={16}
            />
            <p className="text-[12px] lg:text-[15px]" style={{ color: "rgba(0, 0, 0, 60%)" }}>sweet</p>
          </div>
        </div>
         </div>
      </section>
    </>
  );
};

export default Recipes_2;
