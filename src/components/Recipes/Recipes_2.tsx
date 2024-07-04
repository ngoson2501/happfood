import { useState } from "react";


const Recipes_2 = () => {


  return (
    <>
      <section className=" w-[275px]  h-[350px] group cursor-pointer  pb-[20px] rounded-[30px] flex flex-col gap-[20px] hover:shadow-lg ">
        <div className=" w-full h-[200px] relative overflow-hidden rounded-[20px]">
          <img
            className="w-full h-full object-cover object-center absolute inset-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110 "
            src="images/food-img/Pancake.svg"
            alt="Pancake"
          />
          <div className=" absolute z-10 w-[60px] h-[60px] right-0 flex justify-center items-center">
            <div className="bg-white w-[40px] h-[40px] rounded-full  flex gap-1 justify-center items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                // stroke="#EE8396" // Màu viền
                strokeWidth="1" // Độ dày viền
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
            <img src="icon/Timer.svg" alt="Timer" />
            <p>30p</p>
          </div>
          <div className="px-[15px] gap-2 py-[7px] flex justify-center items-center rounded-full">
            <img src="icon/ForkKnife.svg" alt="ForkKnife" />
            <p>sweet</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recipes_2;
