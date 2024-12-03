
"use client";

import Link from "next/link";
import useCategories from "../../../hooks/useCategories";
import useRecipesByCategory from "../../../hooks/useRecipesByCategory";

const ItemList = () => {
  const { categories } = useCategories();

  

  console.log("check categories list", categories);

  // Nhóm danh mục theo "topic"
  const groupedCategories = categories.reduce((acc: any, category: any) => {
    const { topic } = category;
    if (!acc[topic]) {
      acc[topic] = [];
    }
    acc[topic].push(category);
    return acc;
  }, {});

  return (
    <div
      className="w-full p-[40px] rounded-[8px] bg-white"
      style={{
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className="h-px flex-1 bg-black"></div>
        <span className="font-lobster px-6 text-[20px] font-semibold">
          Danh Mục
        </span>
        <div className="h-px flex-1 bg-black"></div>
      </div>

      {/* Main content */}
      <ul className="list-none space-y-4">
        {Object.entries(groupedCategories).map(([topic, items]: any) => (
          <li key={topic}>
            {/* Main category */}
            <div className="flex justify-between items-center py-2 text-left font-semibold text-[18px]">
              {topic} <span>({items.length})</span>
            </div>

            {/* Sub-items */}
            <ul className="list-none pl-6 text-gray-600">
              {items.map((item: any, index: number) => (
                
                <li key={index}>
                  <Link
                    href={{
                      pathname: `/categories/${encodeURIComponent(item.title)}`,
                      query: {
                        title: encodeURIComponent(item.title),
                        id: item._id, // Mã hóa id trong query
                      },
                    }}
                    className="py-1 flex justify-between hover:text-black transition"
                  >
                    <span>{item.title}</span>
                    <span>(0)</span>
                    
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;









// import Link from "next/link";

// interface Category {
//   _id: string;
//   title: string;
//   topic: string;
// }

// interface ItemListProps {
//   categories: Category[]; // Expected categories as an array
// }

// const ItemList = ({ categories = [] }: ItemListProps) => {  // Default to an empty array if undefined
//   console.log("Categories in ItemList:", categories);  // Kiểm tra dữ liệu categories

//   // Nhóm danh mục theo "topic"
//   const groupedCategories = categories.reduce((acc: any, category: any) => {
//     const { topic } = category;
//     if (!acc[topic]) {
//       acc[topic] = [];
//     }
//     acc[topic].push(category);
//     return acc;
//   }, {});

//   console.log("Grouped Categories:", groupedCategories);  // Kiểm tra nhóm danh mục theo topic

//   return (
//     <div
//       className="w-full p-[40px] rounded-[8px] bg-white"
//       style={{
//         boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       {/* Header */}
//       <div className="flex items-center mb-6">
//         <div className="h-px flex-1 bg-black"></div>
//         <span className="font-lobster px-6 text-[20px] font-semibold">
//           Danh Mục
//         </span>
//         <div className="h-px flex-1 bg-black"></div>
//       </div>

//       {/* Main content */}
//       {Object.entries(groupedCategories).length > 0 ? (
//         <ul className="list-none space-y-4">
//           {Object.entries(groupedCategories).map(([topic, items]: any) => (
//             <li key={topic}>
//               {/* Main category */}
//               <div className="flex justify-between items-center py-2 text-left font-semibold text-[18px]">
//                 {topic} <span>({items.length})</span>
//               </div>

//               {/* Sub-items */}
//               <ul className="list-none pl-6 text-gray-600">
//                 {items.map((item: any, index: number) => (
//                   <li key={index}>
//                     <Link
//                       href={{
//                         pathname: `/categories/${encodeURIComponent(item.title)}`,
//                         query: {
//                           title: encodeURIComponent(item.title),
//                           id: item._id, // Mã hóa id trong query
//                         },
//                       }}
//                       className="py-1 flex justify-between hover:text-black transition"
//                     >
//                       <span>{item.title}</span>
//                       <span>(0)</span>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <div className="text-center text-gray-500">Không có danh mục nào để hiển thị.</div>
//       )}
//     </div>
//   );
// };

// export default ItemList;
