"use client"
import React from 'react';

// Định nghĩa kiểu dữ liệu cho một nguyên liệu
interface Ingredient {
  name: string;
  quantity: string;
  unit: string;
}

// Props của component
interface IngredientsListProps {
  ingredients: Ingredient[];
}

const Ingredients: React.FC<IngredientsListProps> = ({ ingredients }) => {

  

  return (
    <div className="bg-white w-full h-fit py-4 px-[0px] lg:px-0">
      <p className="text-[20px] lg:text-[30px] font-Inter font-[600]">Ingredients</p>
      
      {/* Thêm lớp overflow-x-auto để hỗ trợ cuộn ngang */}
      <div className="overflow-x-auto">
        <ul className="mt-4 pb-3 leading-relaxed text-gray-700 list-disc list-inside min-w-max">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="border-b-[1px] border-b-[#e1e1e1] py-4 flex justify-between items-center">
              <span className="text-black mr-10 font-[500] py-1 rounded flex gap-[15px] items-center whitespace-pre-line">
                <div className="bg-black w-2 h-2 rounded-full"></div>
                {ingredient.name}
              </span>
              <span className="" style={{ color: "rgba(0, 0, 0, 40%)" }}>
                {ingredient.quantity} {ingredient.unit}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Ingredients;













// import React from 'react';

// // Định nghĩa kiểu dữ liệu cho một nguyên liệu
// interface Ingredient {
//   name: string;
//   quantity: string;
//   unit: string;
// }

// // Props của component
// interface IngredientsListProps {
//   ingredients: Ingredient[];
// }

// const Ingredients: React.FC<IngredientsListProps> = ({ ingredients }) => {
//   return (
//     <div className="bg-white w-full h-fit py-4 px-[0px] lg:px-0">
//       <p className="text-[20px] lg:text-[30px] font-Inter font-[600]">Ingredients</p>
      
//       {/* Thêm lớp overflow-x-auto để hỗ trợ cuộn ngang */}
//       <div className="overflow-x-auto">
//         <ul className="mt-4 pb-3 leading-relaxed text-gray-700 list-disc list-inside min-w-max">
//           {ingredients.map((ingredient, index) => {
//             // Xử lý các đoạn văn từ name của từng ingredient
//             const paragraphs = ingredient.name.split('\n').filter(paragraph => paragraph.trim() !== '');

//             return (
//               <li
//                 key={index}
//                 className="border-b-[1px] border-b-[#e1e1e1] py-4 flex justify-between items-center"
//               >
//                 <span className="text-black mr-10 font-[500] py-1 rounded flex gap-[15px] items-center">
//                   <div className="bg-black w-2 h-2 rounded-full"></div>
//                   {/* Hiển thị từng đoạn văn từ paragraphs */}
//                   {paragraphs.map((paragraph, i) => (
//                     <span key={i}>{paragraph}</span>
//                   ))}
//                 </span>
//                 <span className="" style={{ color: "rgba(0, 0, 0, 40%)" }}>
//                   {ingredient.quantity} {ingredient.unit}
//                 </span>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Ingredients;
