// "use client";

// import Category_2 from "../Categories/Category_2";
// import Image from "next/image";

// interface FoodSection {
//   title: string;
//   subItems: { label: string; coverImage: string }[];
// }

// interface FoodDirectory {
//   Ingredient: FoodSection;
//   CookingMethod: FoodSection;
//   Holidays: FoodSection;
//   Category: FoodSection;
// }

// const foodDirectory: FoodDirectory = {
//   Ingredient: {
//     title: "Nguyên liệu",
//     subItems: [
//       { label: "Bún - Mì - Miến - Phở", coverImage: "Noodles.jpeg" },
//       { label: "Thuỷ hải sản", coverImage: "Seafood.jpeg" },
//       { label: "Thịt lợn - Sườn", coverImage: "Spareribs.jpeg" },
//       { label: "Thịt gà", coverImage: "Chicken.jpeg" },
//     ],
//   },
//   CookingMethod: {
//     title: "Phương pháp nấu",
//     subItems: [{ label: "", coverImage: "" }],
//   },
//   Holidays: {
//     title: "Lễ Tết",
//     subItems: [{ label: "", coverImage: "" }],
//   },
//   Category: {
//     title: "Thể loại",
//     subItems: [{ label: "", coverImage: "" }],
//   },
// };

// const FoodDirectory = () => {
//   return (
//     <>
//       <div className="bg-green-200 ">
//         <h3 className=" font-[600] text-[18px] lg:text-[25px]">Nguyên liệu</h3>
//         <div className="flex gap-[10px] flex-wrap">

//           <div className="bg-white w-[150px] h-[190px]">
//             <div className=" h-3/4">
//               <Image
//                 src={`/images/FoodDirectory/Ingredient/Spareribs.jpeg`}
//                 alt="Spareribs"
//                 width={300}
//                 height={300}
//                 className="w-full h-full object-cover object-center"
//               />
//             </div>
//             <div className=" h-1/4 flex justify-center items-center">
//               <p className="font-[600]">Thịt lợn - Sườn</p>
//             </div>
//           </div>


//         </div>
//       </div>
//     </>
//   );
// };

// export default FoodDirectory;






// "use client";

// import Category_2 from "../Categories/Category_2";
// import Image from "next/image";

// interface FoodSection {
//   title: string;
//   subItems: { label: string; coverImage: string }[];
// }

// interface FoodDirectory {
//   Ingredient: FoodSection;
//   CookingMethod: FoodSection;
//   Holidays: FoodSection;
//   Category: FoodSection;
// }

// const foodDirectory: FoodDirectory = {
//   Ingredient: {
//     title: "Nguyên liệu",
//     subItems: [
//       { label: "Bún - Mì - Miến - Phở", coverImage: "Noodles.jpeg" },
//       { label: "Thuỷ hải sản", coverImage: "Seafood.jpeg" },
//       { label: "Thịt lợn - Sườn", coverImage: "Spareribs.jpeg" },
//       { label: "Thịt gà", coverImage: "Chicken.jpeg" },
//     ],
//   },
//   CookingMethod: {
//     title: "Phương pháp nấu",
//     subItems: [
//         { label: "Bún - Mì - Miến - Phở", coverImage: "Noodles.jpeg" },
//         { label: "Thuỷ hải sản", coverImage: "Seafood.jpeg" },
//         { label: "Thịt lợn - Sườn", coverImage: "Spareribs.jpeg" },
//         { label: "Thịt gà", coverImage: "Chicken.jpeg" },
//       ],
//   },
//   Holidays: {
//     title: "Lễ Tết",
//     subItems: [{ label: "", coverImage: "" }],
//   },
//   Category: {
//     title: "Thể loại",
//     subItems: [{ label: "", coverImage: "" }],
//   },
// };

// const FoodDirectory = () => {
//   const { Ingredient } = foodDirectory;

//   return (
//     <>
//       <div className="bg-green-200 ">
//         <h3 className=" font-[600] text-[18px] lg:text-[25px]">
//           {Ingredient.title}
//         </h3>
//         <div className="flex gap-[10px] flex-wrap">
//           {Ingredient.subItems.map((item, index) => (
//             <div key={index} className="bg-white w-[150px] h-[190px]">
//               <div className="h-3/4">
//                 <Image
//                   src={`/images/FoodDirectory/Ingredient/${item.coverImage}`}
//                   alt={item.label}
//                   width={300}
//                   height={300}
//                   className="w-full h-full object-cover object-center"
//                 />
//               </div>
//               <div className="h-1/4 flex justify-center items-center">
//                 <p className="font-[600]">{item.label}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default FoodDirectory;




"use client";

import Image from "next/image";
import Link from "next/link";
import { useFoodDirectory } from "@/context/FoodDirectory-provider";
import { FoodSection } from "@/context/FoodDirectory-provider";

// interface FoodSection {
//   title: string;
//   subItems: { label: string; coverImage: string }[];
// }

// interface FoodDirectory {
//   Ingredient: FoodSection;
//   CookingMethod: FoodSection;
//   Holidays: FoodSection;
//   Category: FoodSection;
// }

// const foodDirectory: FoodDirectory = {
//   Ingredient: {
//     title: "Nguyên liệu",
//     subItems: [
//       { label: "Bún - Mì - Miến - Phở", coverImage: "Noodles.jpeg" },
//       { label: "Thuỷ hải sản", coverImage: "Seafood.jpeg" },
//       { label: "Thịt lợn - Sườn", coverImage: "Spareribs.jpeg" },
//       { label: "Thịt gà", coverImage: "Chicken.jpeg" },
//     ],
//   },
//   CookingMethod: {
//     title: "Phương pháp nấu",
//     subItems: [
//       { label: "Chiên - Rán", coverImage: "Fried.jpeg" },
//       { label: "Nướng", coverImage: "Roast.jpeg" },
//       { label: "Xào - rang - Rim", coverImage: "Stir-fry.jpeg" },
//       { label: "Hầm -Luộc - Hấp", coverImage: "Stew-boil.jpeg" },
//       { label: "Canh - Súp", coverImage: "Soup.jpeg" },
//     ],
//   },
//   Holidays: {
//     title: "Lễ Tết",
//     subItems: [
//       { label: "Tết Nguyên Đán", coverImage: "Tet.jpeg" },
//       { label: "Trung Thu", coverImage: "Trung-Thu.jpeg" },
//       { label: "Giáng Sinh", coverImage: "Christmas.jpeg" },
//     ],
//   },
//   Category: {
//     title: "Thể loại",
//     subItems: [
//       { label: "Món chính", coverImage: "Main-Dish.jpeg"},
//       { label: "Món tráng miệng", coverImage: "Dessert.jpeg" },
//       { label: "Món khai vị", coverImage: "Appetizer.jpeg" },
//       { label: "Đồ uống", coverImage: "Beverage.jpeg" },
//     ],
//   },
// };

const FoodDirectory = () => {


    const foodDirectory = useFoodDirectory()



    
  return (
    <>
      <div className=" p-4">
        {Object.keys(foodDirectory).map((sectionKey, index) => {
            
          const section = (foodDirectory as any)[sectionKey] as FoodSection;
            
          return (
            <div key={index} className="mb-6">
              <h3 className="font-[600] text-[18px] lg:text-[25px] mb-4">
                {section.title}
              </h3>
              <div className=" flex justify-center lg:justify-start  gap-[10px] flex-wrap">
                {section.subItems.map((item, idx) => (
                  <Link 
                    href={{
                        pathname: `/categories/${sectionKey}`,
                        query: {
                            label: item.title
                        }
                    }} 
                    key={idx} 
                    className="bg-white w-[150px] h-[190px]"
                  >
                    <div className="h-3/4 rounded-[5px] overflow-hidden  ">
                      <Image
                        src={`/images/FoodDirectory/${sectionKey}/${item.coverImage}`}
                        alt={item.label}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="h-1/4 flex justify-center items-center">
                      <p className="font-[600] text-center">{item.label}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FoodDirectory;
