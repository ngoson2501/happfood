"use client"
import React from "react";
import Link from "next/link";
import Category from "./Category";




interface CategoryData {
  title: string;
  label: string;
  coverImage: string;
  color: string;
  //href: string
}

const CategoriesList = () => {
  

  const listCategories: CategoryData[] = [
    { title: "Breakfast", label: "Breakfast", coverImage: "Breakfast.svg", color: "#f2f3ee" },
    { title: "Vegan", label: "Vegan", coverImage: "Vegan.svg", color: "#f2f9ec" },
    { title: "Meat", label: "Meat", coverImage: "Meat.svg", color: "#fbe9e8" },
    { title: "Dessert", label: "Dessert", coverImage: "Dessert.svg", color: "#fef5e6" },
    { title: "Lunch", label: "Lunch", coverImage: "Lunch.svg", color: "#f3f3f3" },
    { title: "Chocolate", label: "Chocolate", coverImage: "Chocolate.svg", color: "#f3f3f3" },
    { title: "Chicken", label: "Chicken", coverImage: "chicken.png", color: "#ffebd4" },
    { title: "Ice Cream", label: "Ice Cream", coverImage: "iceCream.png", color: "#ffd7ca" }
  ];




  return (
    <div className="flex flex-col gap-[50px] mt-[50px]  xl:mt-[160px]">
      <div className="px-[10px] xl:px-0 flex font-Inter justify-between items-center">
        <h1 className="font-[600] text-[25px] lg:text-[45px]">Categories</h1>

       
        
        <Link href="/categories" className="bg-[#E7FAFE] text-[13px] lg:text-[16px] font-[550] rounded-[10px] lg:rounded-[20px] px-[15px] py-[10px] lg:px-[30px] lg:py-[20px]">
          View All Categories
        </Link>
      </div>
      <div className=" w-full h-fit flex flex-wrap   justify-center  items-center gap-[20px] lg:gap-[40px]">
        {listCategories.map((category, index) => (
          <Category
            key={index}
            category={category}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
