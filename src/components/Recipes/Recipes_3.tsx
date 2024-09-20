

import { useState } from "react";
import Image from "next/image";



const Recipes_3 = () => {
    return (
        <>


            <section className="bg-[#E7FAFE] h-[240px] lg:w-[275px] lg:h-[350px]  xl:w-[370px]   snap-start  group cursor-pointer p-[10px] lg:p-[20px] xl:p-3 rounded-[15px]  flex flex-col xl:flex-row gap-[10px]   hover:shadow-lg  "
            >
                <div className=" w-[150px] h-[130px] lg:w-[220px] lg:h-[180px] xl:h-[130px]  xl:w-1/2   relative overflow-hidden rounded-[15px] ">
                    <Image
                        className="w-full h-full object-cover object-center absolute inset-0 transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                        src="/images/food-img/Pancake.svg"
                        alt="Pancake"
                        width={300}
                        height={160}
                    />

                    {/* <div className="absolute z-10 w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] right-0 flex justify-center items-center">
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
                    </div> */}

                </div>

                <div className=" xl:w-1/2  flex flex-col justify-center lg:gap-2 xl:gap-0 ">
                    <p
                        className=" font-Inter font-[600] text-[16px] lg:text-[18px] line-clamp-2 truncate whitespace-normal text-clip overflow-hidden"
                        style={{ lineHeight: "1.4" }}
                    >
                        Fruity Pancake with Orange & Blueberry bviks vbsjjf vbsiKJHUGIFD
                    </p>
                    <p className="text-[12px] lg:text-[15px]" style={{ color: "rgba(0, 0, 0, 60%)" }}>By Ngo Son</p>
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

export default Recipes_3;
