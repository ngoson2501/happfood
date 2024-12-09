
"use client";

import Image from "next/image";
import Link from "next/link";
import useCategories from "../../../hooks/useCategories";

const FoodDirectory = () => {
  const { categories} = useCategories();

  // Phân nhóm categories theo topic
  const groupedCategories = categories.reduce((acc: any, category: any) => {
    const { topic } = category;
    if (!acc[topic]) {
      acc[topic] = [];
    }
    acc[topic].push(category);
    return acc;
  }, {});

  //console.log("Grouped categories:", groupedCategories);
  console.log("list categories:", categories)

  return (
    <div className="rounded-[8px] px-4 lg:px-0">
      {Object.keys(groupedCategories).map((topic, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-black py-3 rounded-[8px] pl-5 font-lobster font-[700] text-[18px] lg:text-[25px] mb-4">
            {topic}
          </h3>
          <div className="flex justify-center lg:justify-start gap-[10px] flex-wrap">
            {groupedCategories[topic].map((category: any) => (
              <Link
              href={{
                pathname: `/categories/${encodeURIComponent(category.title)}`,
                query: {
                  title: encodeURIComponent(category.title),
                  id: category._id,
                   // Mã hóa title trong query
                },
              }}
              prefetch={true} // Tải trước dữ liệu
              key={category._id}
              className="mb-5 w-[150px] h-[190px]"
            >
                <div className="h-3/4 rounded-[5px] overflow-hidden">
                  <Image
                    src={category.data}
                    alt={category.title}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="mt-3 h-1/4 flex justify-center">
                  <p
                    style={{ color: "rgba(0, 0, 0, 60%)" }}
                    className="font-[400] text-center"
                  >
                    {category.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodDirectory;