// import React from 'react';



// const Ingredients = () => {
//     return (
//         <div className="bg-white w-full h-fit py-4 px-[0px] lg:px-0">
//             <p className="text-[20px] lg:text-[30px] font-Inter font-[600]">Ingredients</p>
//             <ul className="mt-4  pb-3 leading-relaxed text-gray-700 list-disc list-inside t">
               
//                 <li className="border-b-[1px] border-b-[#e1e1e1] py-4 flex justify-between items-center" >
                    
//                     <span className="text-black  font-[500]  py-1 rounded flex gap-[15px] items-center">
//                         <div className=" bg-black w-2 h-2  rounded-full  "></div> 
//                         KiWi
//                     </span> 
//                     <span className="" style={{ color: "rgba(0, 0, 0, 40%)" }}>3 trái</span>
//                 </li>
//                 <li className="border-b-[1px] border-b-[#e1e1e1] py-4 flex justify-between items-center" >
                    
//                     <span className="text-black  font-[500]  py-1 rounded flex gap-[15px] items-center">
//                         <div className=" bg-black w-2 h-2  rounded-full  "></div> 
//                         Chuối
//                     </span> 
//                     <span className="" style={{ color: "rgba(0, 0, 0, 40%)" }}>2 trái</span>
//                 </li>
//                 <li className="border-b-[1px] border-b-[#e1e1e1] py-4 flex justify-between items-center" >
                    
//                     <span className="text-black  font-[500]  py-1 rounded flex gap-[15px] items-center">
//                         <div className=" bg-black w-2 h-2  rounded-full  "></div> 
//                         Sữa hạnh nhân
//                     </span> 
//                     <span className="" style={{ color: "rgba(0, 0, 0, 40%)" }}>180 ml</span>
//                 </li>
//                 <li className="border-b-[1px] border-b-[#e1e1e1] py-4 flex justify-between items-center" >
                    
//                     <span className="text-black  font-[500]  py-1 rounded flex gap-[15px] items-center">
//                         <div className=" bg-black w-2 h-2  rounded-full  "></div> 
//                         Sữa chua
//                     </span> 
//                     <span className="" style={{ color: "rgba(0, 0, 0, 40%)" }}>150 g</span>
//                 </li>
//                 <li className="border-b-[1px] border-b-[#e1e1e1] py-4 flex justify-between items-center" >
                    
//                     <span className="text-black  font-[500]  py-1 rounded flex gap-[15px] items-center">
//                         <div className=" bg-black w-2 h-2  rounded-full  "></div> 
//                         Yến mạch
//                     </span> 
//                     <span className="" style={{ color: "rgba(0, 0, 0, 40%)" }}>4 muỗng canh</span>
//                 </li>
//                 <li className="border-b-[1px] border-b-[#e1e1e1] py-4 flex justify-between items-center" >
                    
//                     <span className="text-black  font-[500]  py-1 rounded flex gap-[15px] items-center">
//                         <div className=" bg-black w-2 h-2  rounded-full  "></div> 
//                         Gừng
//                     </span> 
//                     <span className="" style={{ color: "rgba(0, 0, 0, 40%)" }}>1 lát</span>
//                 </li>
//                 <li className="border-b-[1px] border-b-[#e1e1e1] py-4 flex justify-between items-center" >
                    
//                     <span className="text-black  font-[500]  py-1 rounded flex gap-[15px] items-center">
//                         <div className=" bg-black w-2 h-2  rounded-full  "></div> 
//                         Mật ong
//                     </span> 
//                     <span className="" style={{ color: "rgba(0, 0, 0, 40%)" }}>1 muỗng cà phê</span>
//                 </li>
               
//             </ul>
//         </div>
//     );
// }

// export default Ingredients;





import React from 'react';

interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

const ingredients: Ingredient[] = [
  { name: "KiWi", amount: 3, unit: "trái" },
  { name: "Chuối", amount: 2, unit: "trái" },
  { name: "Sữa hạnh nhân", amount: 180, unit: "ml" },
  { name: "Sữa chua", amount: 150, unit: "g" },
  { name: "Yến mạch", amount: 4, unit: "muỗng canh" },
  { name: "Gừng", amount: 1, unit: "lát" },
  { name: "Mật ong", amount: 1, unit: "muỗng cà phê" },
];

const Ingredients: React.FC = () => {
  return (
    <div className="bg-white w-full h-fit py-4 px-[0px] lg:px-0">
      <p className="text-[20px] lg:text-[30px] font-Inter font-[600]">Ingredients</p>
      <ul className="mt-4 pb-3 leading-relaxed text-gray-700 list-disc list-inside">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="border-b-[1px] border-b-[#e1e1e1] py-4 flex justify-between items-center">
            <span className="text-black font-[500] py-1 rounded flex gap-[15px] items-center">
              <div className="bg-black w-2 h-2 rounded-full"></div>
              {ingredient.name}
            </span>
            <span className="" style={{ color: "rgba(0, 0, 0, 40%)" }}>
              {ingredient.amount} {ingredient.unit}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ingredients;