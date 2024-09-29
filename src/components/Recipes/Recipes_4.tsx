

import { useState } from "react";
import Image from "next/image";



const Recipes_4 = () => {
    return (
        <>


            <section className="bg-white h-[140px] lg:h-[250px] pr-4 lg:pr-7 snap-start  group cursor-pointer  rounded-[8px]  flex flex-row gap-[10px] lg:gap-[20px]  hover:shadow-md "
            // p-[10px] lg:p-[20px] xl:p-7
           
            
            >
                <div className=" h-full  w-[40%]   relative overflow-hidden rounded-[8px] ">
                    <Image
                        className="w-full h-full object-cover object-center absolute inset-0 transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                        src="/images/food-img/Pancake.svg"
                        alt="Pancake"
                        width={300}
                        height={300}
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

                <div className=" w-[60%]  flex flex-col justify-around   lg:gap-3 xl:gap-0 py-2 lg:py-4">
                    <p
                        className=" font-Inter font-[600] text-[16px] lg:text-[18px] line-clamp-2 truncate whitespace-normal text-clip overflow-hidden"
                        style={{ lineHeight: "1.4" }}
                    >
                        Fruity Pancake with Orange & Blueberry bviks vbsjjf vbsiKJHUGIFD
                    </p>
                    <p
                        style={{ color: "rgba(0, 0, 0, 60%)" }}
                        className=" font-Inter font-[300] text-[12px] lg:text-[14px] xl:text-[15px] line-clamp-2 lg:line-clamp-4 truncate whitespace-normal text-clip overflow-hidden"
                    >
                        Cánh gà được tẩm ướp kỹ lưỡng với các gia vị cay như ớt, tiêu,
                        và sốt cay, sau đó được nướng hoặc chiên giòn. Lớp ngoài của
                        cánh gà giòn rụm, trong khi thịt bên trong mềm mịn, đậm đà hương
                        vị cay nồng. trong khi thịt bên trong mềm mịn, đậm đà hương
                        vị cay nồng
                    </p>
                    {/* <p className="text-[12px] lg:text-[15px]" style={{ color: "rgba(0, 0, 0, 60%)" }}>By Ngo Son</p> */}

                    


                    <div className="flex justify-between items-center ">


                        <div className="w-fit flex justify-center items-center gap-1 lg:gap-3">
                            <Image
                                className="object-cover rounded-full w-[30px] h-[30px] lg:w-[45px] lg:h-[45px]"
                                src="/images/IMG_8991.jpg"
                                alt="avata"
                                width={45}
                                height={45}
                                quality={100} // Điều chỉnh chất lượng lên mức cao nhất
                            />

                            <span className="flex text-[10px] lg:text-[15px] flex-col justify-center font-Inter">
                                <p className="font-[700]">Ngo Son</p>
                                <p style={{ color: "rgba(0, 0, 0, 60%)" }}>15/3/2024</p>
                            </span>
                        </div>
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




                </div>
            </section>
        </>
    );
};

export default Recipes_4