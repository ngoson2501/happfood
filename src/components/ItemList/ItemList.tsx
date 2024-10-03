// "use client"
// import { useFoodDirectory } from "@/context/FoodDirectory-provider";
// import { FoodSection } from "@/context/FoodDirectory-provider";


// const ItemList = () => {

//   const foodDirectory = useFoodDirectory()

//   console.log(foodDirectory)

//   return (
//     <>
//       <div
//         className="bg-white w-full p-[40px] rounded-[8px]"
//         style={{
//           boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Điều chỉnh shadow theo ý bạn
//         }}
//       >
//         <span className="flex items-center">
//           <span className="h-px flex-1 bg-black"></span>
//           <span className="font-lobster shrink-0 px-6 text-[20px] font-[600]">Danh Mục</span>
//           <span className="h-px flex-1 bg-black"></span>
//         </span>

//         <div className="w-full">
//           {/* Danh mục */}
//           <ul className="list-none">
//             {/* Category 1 */}
//             <li className="mb-4">
//               <button className="flex justify-between w-full py-2 text-left font-semibold text-[18px]">
//                 Biblelicious <span>(52)</span>
//               </button>
//               <ul className="list-none pl-6 text-gray-600">
//                 <li className="py-1 flex justify-between">
//                   <span>Mẹo vặt</span> <span>(39)</span>
//                 </li>
//               </ul>
//             </li>

//             {/* Category 2 */}
//             <li className="mb-4">
//               <button className="flex justify-between w-full py-2 text-left font-semibold text-[18px]">
//                 Cảm hứng sống <span>(156)</span>
//               </button>
//               <ul className="list-none pl-6 text-gray-600">
//                 <li className="py-1 flex justify-between">
//                   <span>Góc nhỏ Esheep</span> <span>(38)</span>
//                 </li>
//                 <li className="py-1 flex justify-between">
//                   <span>Ký ức Hà Nội</span> <span>(58)</span>
//                 </li>
//                 <li className="py-1 flex justify-between">
//                   <span>Nhật kí xây mơ</span> <span>(25)</span>
//                 </li>
//               </ul>
//             </li>

//             {/* Category 3 */}
//             <li className="mb-4">
//               <button className="flex justify-between w-full py-2 text-left font-semibold text-[18px]">
//                 Công Thức <span>(389)</span>
//               </button>
//               <ul className="list-none pl-6 text-gray-600">
//                 <li className="py-1 flex justify-between">
//                   <span>Bánh mì</span> <span>(6)</span>
//                 </li>
//                 <li className="py-1 flex justify-between">
//                   <span>Bánh ngọt</span> <span>(41)</span>
//                 </li>
//                 <li className="py-1 flex justify-between">
//                   <span>Breakfast</span> <span>(18)</span>
//                 </li>
//                 <li className="py-1 flex justify-between">
//                   <span>Đồ uống</span> <span>(34)</span>
//                 </li>
//                 <li className="py-1 flex justify-between">
//                   <span>Khai vị</span> <span>(15)</span>
//                 </li>
//                 <li className="py-1 flex justify-between">
//                   <span>Korean Food</span> <span>(28)</span>
//                 </li>
//                 <li className="py-1 flex justify-between">
//                   <span>Món chính</span> <span>(114)</span>
//                 </li>
//                 <li className="py-1 flex justify-between">
//                   <span>Món phụ</span> <span>(37)</span>
//                 </li>
//                 <li className="py-1 flex justify-between">
//                   <span>Món tráng miệng</span> <span>(32)</span>
//                 </li>
//                 <li className="py-1 flex justify-between">
//                   <span>Món Việt Nam</span> <span>(130)</span>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };
// export default ItemList;








"use client";
import Link from "next/link";
import { useFoodDirectory } from "@/context/FoodDirectory-provider";

const ItemList = () => {
  const foodDirectory = useFoodDirectory();

  return (
    <>
      <div
        className="w-full p-[40px] rounded-[8px]"
        style={{
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <span className="flex items-center">
          <span className="h-px flex-1 bg-black"></span>
          <span className="font-lobster shrink-0 px-6 text-[20px] font-[600]">
            Danh Mục
          </span>
          <span className="h-px flex-1 bg-black"></span>
        </span>

        <div className="w-full">
          <ul className="list-none">
            {/* Duyệt qua từng danh mục lớn trong foodDirectory */}
            {Object.entries(foodDirectory).map(([key, category]) => (
              <li key={key} className="mb-4">
                <button className="flex justify-between w-full py-2 text-left font-semibold text-[18px]">
                  {category.title} <span>({category.subItems.length})</span>
                </button>
                <ul className="list-none pl-6 text-gray-600">
                  {/* Duyệt qua các mục con (subItems) của danh mục hiện tại */}
                  {category.subItems.map((subItem: { title: string; label: string; coverImage: string }, index: number) => (

                    
                    <Link 
                      href={{
                        pathname: `/categories/${subItem.title}`,
                        query: {
                            item: JSON.stringify(subItem),
                        }
                      }} 
                      key={index} 
                      className="py-1 flex justify-between">
                      <span>{subItem.label}</span>{" "}
                      {/* <span>({subItem.count || 0})</span> */}
                      <span>(0)</span>
                    </Link>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ItemList;
