// "use client";
// import { usePathname } from "next/navigation";
// import Recipes_4 from "@/components/Recipes/Recipes_4"; 

// type Props = {
//   params: {
//     categoryItem: string;
//   };
// };

// const category = ({ params }: Props) => {
//   return (
//     <>
//       <div className=" w-full h-fit flex gap-[20px] flex-col ">
//         <h2 className=" font-[600] text-[25px] lg:text-[45px]">
//           {params.categoryItem}
//         </h2>
//         <div className="  w-full h-fit gap-[10px] lg:gap-[30px]  flex  xl:gap-[40px] justify-center lg:justify-between items-start">
//           <div className=" flex flex-col gap-[20px] lg:gap-[40px] ">
//             <Recipes_4></Recipes_4>
//             <Recipes_4></Recipes_4>
//             <Recipes_4></Recipes_4>
//             <Recipes_4></Recipes_4>
//             <Recipes_4></Recipes_4>
//             <Recipes_4></Recipes_4>
//           </div>
          
//         </div>
//       </div>
//     </>
//   );
// };

// export default category;




// "use client"; // Nếu bạn cần sử dụng các hook client-side

// import { useSearchParams, usePathname } from "next/navigation"; // Sử dụng useSearchParams
// import Recipes_4 from "@/components/Recipes/Recipes_4"; 
// import { FoodSection } from "@/context/FoodDirectory-provider"; 
// import { useFoodDirectory } from "@/context/FoodDirectory-provider";


// const CategoryPage = () => {
//   // const searchParams = useSearchParams(); // Lấy search params
//   // const label = searchParams.get('label'); // Lấy giá trị label từ search params

//   // const foodDirectory = useFoodDirectory()

//   // const pathname = usePathname(); // Lấy pathname từ URL
//   // const sectionKey = pathname.split('/').pop(); // Tách sectionKey từ pathname

//   // // Tìm phần tương ứng với sectionKey trong foodDirectory
//   // const section = foodDirectory[sectionKey]
//   // const subItem = section?.subItems.find((item: { title: string; label: string; coverImage: string }) => item.title === label);


//   // console.log(sectionKey);
//   // console.log(subItem?.label); // Đảm bảo 'subItem' lấy đúng giá trị 'label'
  

//   return (
//     <>
//       <div className="w-full h-fit flex gap-[20px] flex-col">
//         <h2 className="font-[600] text-[25px] lg:text-[45px]">
//           {/* {subItem?.label}  */}
//         </h2>
//         <div className="w-full h-fit gap-[10px] lg:gap-[30px] flex xl:gap-[40px] justify-center lg:justify-between items-start">
//           <div className="flex flex-col gap-[20px] lg:gap-[40px]">
//             <Recipes_4 />
//             <Recipes_4 />
//             <Recipes_4 />
//             <Recipes_4 />
//             <Recipes_4 />
//             <Recipes_4 />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CategoryPage;







"use client"; // Nếu bạn cần sử dụng các hook client-side

import { useSearchParams } from "next/navigation"; // Sử dụng useSearchParams
import Recipes_4 from "@/components/Recipes/Recipes_4"; 
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const searchParams = useSearchParams(); // Lấy search params
  const itemParam = searchParams.get('item'); // Lấy chuỗi JSON của item từ query
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    if (itemParam) {
      // Chuyển chuỗi JSON thành đối tượng và lưu vào state
      try {
        const parsedItem = JSON.parse(itemParam);
        setItem(parsedItem);
      } catch (error) {
        console.error("Error parsing item:", error);
      }
    }
  }, [itemParam]);

  return (
    <>
      <div className="w-full h-fit flex gap-[20px] flex-col">
        <h2 className="font-[600] text-[25px] lg:text-[45px]">
          {item?.label} {/* Hiển thị trường 'label' từ đối tượng item */}
        </h2>
        <div className="w-full h-fit gap-[10px] lg:gap-[30px] flex xl:gap-[40px] justify-center lg:justify-between items-start">
          <div className="flex flex-col gap-[20px] lg:gap-[40px]">
            <Recipes_4 />
            <Recipes_4 />
            <Recipes_4 />
            <Recipes_4 />
            <Recipes_4 />
            <Recipes_4 />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;

