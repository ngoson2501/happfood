"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";



interface CategoryData {
  title: string;
  label: string;
  coverImage: string;
  color: string;
  href: string;
}

interface CategoryProps {
  category: CategoryData; // Nhận toàn bộ đối tượng category
}

// {title, label, coverImage, color, href }
const Category: React.FC<CategoryProps> = ({ category }) => {
  return (
    <>
      <Link
        href={{
          pathname: `/categories/${category.title}`,
          query: {
            item: JSON.stringify(category),
          },
        }}
        className="relative w-[150px] h-[170px] rounded-[20px] xl:w-[180px] xl:h-[202px] xl:rounded-[30px] flex flex-col items-center justify-center gap-[10px] xl:gap-[20px] cursor-pointer hover:shadow-md"
        style={{
          background: `linear-gradient(to bottom, white, ${category.color})`,
        }}
      >
        <div className="relative">
          <Image
            src={`/icon/categories/${category.coverImage}`}
            alt={category.title}
            width={60}
            height={60}
            className="xl:w-[80px] xl:h-[80px] relative z-10"
          />
          <Image
            src={`/icon/categories/${category.coverImage}`}
            alt={`${category.title}-Shadow`}
            width={60}
            height={60}
            className="xl:w-[80px] xl:h-[80px] absolute top-0 left-0 blur-md opacity-50"
            style={{ transform: "translate(5px, 5px)" }}
          />
        </div>
        <p className="font-Inter font-[600] text-[16px] xl:text-[18px]">
          {category.label}
        </p>
      </Link>
    </>
  );
};

export default Category;
