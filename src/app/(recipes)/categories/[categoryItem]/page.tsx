"use client";
import { usePathname } from "next/navigation";
import Recipes_4 from "@/components/Recipes/Recipes_4"; 

type Props = {
  params: {
    categoryItem: string;
  };
};

const category = ({ params }: Props) => {
  return (
    <>
      <div className=" w-full h-fit flex gap-[20px] flex-col ">
        <h2 className=" font-[600] text-[25px] lg:text-[45px]">
          {params.categoryItem}
        </h2>
        <div className="  w-full h-fit pt-[20px]  gap-[10px] lg:gap-[30px]  flex  xl:gap-[40px] justify-center lg:justify-between items-start">
          <div className=" flex flex-col gap-[40px]">
            <Recipes_4></Recipes_4>
            <Recipes_4></Recipes_4>
            <Recipes_4></Recipes_4>
            <Recipes_4></Recipes_4>
            <Recipes_4></Recipes_4>
            <Recipes_4></Recipes_4>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default category;
