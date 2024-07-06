import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import "../../css/custom-carousel.css";

const HotRecipes = () => {
  return (
    <>
      <div className=" px-[20px] lg:px-[0px] w-full h-[200px] lg:h-[500px] xl:h-[626px] flex justify-center items-center">
        <div className=" h-full relative flex flex-row justify-center items-center">
          <div className="bg-[#E7FAFE] w-[100%] h-full rounded-l-[30px] lg:rounded-l-[50px]">
            <div className=" w-full h-full flex flex-col justify-between xl:gap-[40px] p-[20px] lg:p-[50px]">
              <div className="bg-white w-fit flex gap-1 lg:gap-3 px-[8px] xl:px-[20px] py-[5px] xl:py-[10px] rounded-full justify-center items-center">
                <Image
                  className="w-[11px] h-[12px] lg:w-[24px] lg:h-[24px]"
                  src="/icon/note.svg"
                  alt="icon-note"
                  width={11}
                  height={11}
                />

                <p className="text-[8px] lg:text-[12px] xl:text-[14px] font-[600] lg:font-[600] font-Inter">
                  Công thức Hot
                </p>
              </div>

              <p
                className="max-w-[80%] lg:text-[40px]  xl:text-[64px] font-[700] font-Inter"
                style={{ lineHeight: "1" }}
              >
                Cánh gà cay thơm ngon
              </p>
              <p
                style={{ color: "rgba(0, 0, 0, 60%)" }}
                className=" font-Inter text-[8px] lg:text-[12px] xl:text-[15px] line-clamp-2 xl:line-clamp-4 truncate whitespace-normal text-clip overflow-hidden"
              >
                Cánh gà được tẩm ướp kỹ lưỡng với các gia vị cay như ớt, tiêu,
                và sốt cay, sau đó được nướng hoặc chiên giòn. Lớp ngoài của
                cánh gà giòn rụm, trong khi thịt bên trong mềm mịn, đậm đà hương
                vị cay nồng
              </p>

              <div className="flex gap-[5px] lg:gap-[20px]">
                <div
                  className="px-[10px] h-fit  lg:px-[15px] gap-1 lg:gap-2 py-[2px] lg:py-[7px] flex justify-center items-center rounded-[10px] lg:rounded-full"
                  style={{ backgroundColor: "rgba(0, 0, 0, 5%)" }}
                >
                  <Image
                    className="w-[11px] h-[11px] lg:w-[24px] lg:h-[24px]"
                    src="/icon/Timer.svg"
                    alt="Timer"
                    width={11}
                    height={11}
                  />

                  <p className="text-[8px] lg:text-[14px]">30p</p>
                </div>
                <div
                  className="px-[10px] lg:px-[15px] h-fit gap-1 lg:gap-2 py-[2px] lg:py-[7px] flex justify-center items-center rounded-full"
                  style={{ backgroundColor: "rgba(0, 0, 0, 5%)" }}
                >
                  <Image
                    className="w-[11px] h-[11px] lg:w-[24px] lg:h-[24px]"
                    src="/icon/ForkKnife.svg"
                    alt="ForkKnife"
                    width={11}
                    height={11}
                  />

                  <p className="text-[8px] lg:text-[14px]">Chicken</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="w-fit flex justify-center items-center gap-1 lg:gap-3">
                  <Image
                    className="object-cover rounded-full w-[15px] h-[15px] lg:w-[45px] lg:h-[45px]"
                    src="/images/IMG_8991.jpg"
                    alt="avata"
                    width={45}
                    height={45}
                    quality={100} // Điều chỉnh chất lượng lên mức cao nhất
                  />

                  <span className="flex text-[7px] lg:text-[15px] flex-col justify-center font-Inter">
                    <p className="font-[700]">Ngo Son</p>
                    <p style={{ color: "rgba(0, 0, 0, 60%)" }}>15/3/2024</p>
                  </span>
                </div>

                <div className="bg-black w-fit flex justify-center items-center gap-1 lg:gap-4 cursor-pointer rounded-[5px]  xl:rounded-[10px]  xl:py-[12px] px-[7px] lg:px-[20px] xl:px-[30px]">
                  <p className="text-white w-fit font-Inter text-[7px] lg:text-[12px] xl:text-[14px] font-[500]">
                    View Recipes
                  </p>
                  
                  <Image
                    className="w-[12] h-[12px] lg:w-[24px] lg:h-[24px] "
                      src="/icon/PlayCircle.svg"
                      alt="PlayCircle"
                      width={12}
                      height={12}
                    />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-500 w-[100%] h-full rounded-r-[30px] lg:rounded-r-[50px] relative overflow-hidden">
            <Image
              className="w-full h-full object-cover object-center absolute inset-0"
              src="/images/food-img/canh-ga-cay-thom-ngon.png"
              alt="food"
              fill
            />
          </div>
          <div className="absolute top-[10px] lg:top-[30px] xl:top-[50px]">
            <Image className="w-[50px] h-[50px] lg:w-[150px] lg:h-[150px]" src="/images/Badge.svg" alt="Badge" width={50} height={50} />
          </div>
         
        </div>
      </div>
    </>
  );
};

export default HotRecipes;
