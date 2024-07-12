import React from "react";
import Image from "next/image";

const LearnMore = () => {
  return (
    <>
      <div className=" w-full h-[700px] lg:h-[550px] flex flex-col lg:flex-row mt-[50px] lg:mt-[100px] xl:mt-[175px]">
        <div className=" w-[100%] font-Inter h-full flex flex-col justify-center items-center lg:items-start gap-[20px] lg:gap-[40px]">
          <p
            className="text-center lg:text-left w-[90%] font-[600] text-[25px] lg:text-[40px] xl:text-[50px]"
            style={{ lineHeight: "1.2" }}
          >
            Everyone can be a chef in their own kitchen
          </p>
          <p
            style={{ color: "rgba(0, 0, 0, 60%)" }}
            className="text-center lg:text-left font-[300] w-[80%] text-[14px] lg:text-[15px] xl:text-[16px]"
          >
            With the right ingredients, a dash of creativity, and a sprinkle of
            passion, cooking becomes an art form accessible to all. Whether you
            are following a recipe or experimenting with flavors, the kitchen is
            your canvas, and you are the artist.
          </p>
          <span className="bg-black text-[13px] lg:text-[15px] w-fit rounded-[10px] lg:rounded-[17px] text-white px-[60px] py-[15px] xl:px-[80px] lg:py-[20px] mt-[10px] lg:mt-[40px] xl:mt-[70px]">
            Learn More
          </span>
        </div>

        <div className="bg-gradient-to-b from-white to-[#E7FAFE] lg:rounded-[30px] w-full h-full relative overflow-hidden flex items-end">
          <Image
            className=" w-full h-full object-contain absolute bottom-0"
            src="/images/banners/banner.svg"
            alt="banner"
            fill
          />
          <Image
            className="absolute top-[50px] left-8"
            src="/icon/categories/Meat.svg"
            alt="icon-vegetable"
            width={70}
            height={70}
          />
          <Image
            className="absolute botton-[0px] lg:top-[400px]"
            src="/icon/categories/tomato.svg"
            alt="icon-vegetable"
            width={50}
            height={50}
          />
          <Image
            className="absolute top-[50px] right-[30px] lg:right-[100px]"
            src="/icon/categories/onion.svg"
            alt="icon-vegetable"
            width={60}
            height={60}
          />
          <Image
            className="absolute top-[200px] right-[20px]"
            src="/icon/categories/Vegan.svg"
            alt="icon-vegetable"
            width={70}
            height={70}
          />
        </div>
      </div>
    </>
  );
};

export default LearnMore;
