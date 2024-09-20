// 'use client';
// import Recipes_1 from "@/components/Recipes/Recipes_1";
// import Recipes_2 from "@/components/Recipes/Recipes_2";

// const recipes = ()=>{
//     return(
//         <>
//             <div className="bg-green-300 w-full h-fit flex gap-[20px] flex-col lg:px-[100px] lg:pt-[50px]">
//                 <div className="flex flex-col gap-[50px]">
//                     <h1 className="font-[600] text-[25px] lg:text-[45px]">
//                     Công Thức Hot
//                     </h1>
//                     <div className="  w-full h-fit  gap-[10px] lg:gap-[30px]  flex flex-wrap xl:gap-[40px] justify-center lg:justify-between items-center">
//                         <Recipes_1></Recipes_1>
//                         <Recipes_1></Recipes_1>
//                         <Recipes_1></Recipes_1>
//                         <Recipes_1></Recipes_1>
//                         <Recipes_1></Recipes_1>
//                         <Recipes_1></Recipes_1>
//                         <Recipes_1></Recipes_1>
//                         <Recipes_1></Recipes_1>
//                         <Recipes_1></Recipes_1>
//                     </div>
                    
//                 </div>
//                 <div className="flex flex-col gap-[50px]">
//                     <h1 className="font-[600] text-[25px] lg:text-[45px]">
//                     Công Thức Hot
//                     </h1>
//                     <div className="  w-full h-fit  gap-[10px] lg:gap-[30px]  flex flex-wrap xl:gap-[40px] justify-center lg:justify-between items-center">
//                         <Recipes_2></Recipes_2>
//                         <Recipes_2></Recipes_2>
//                         <Recipes_2></Recipes_2>
//                         <Recipes_2></Recipes_2>
//                         <Recipes_2></Recipes_2>
//                         <Recipes_2></Recipes_2>
//                         <Recipes_2></Recipes_2>
//                         <Recipes_2></Recipes_2>
                       
//                     </div>
                    
//                 </div>
//             </div>
//         </>
//     )
// }


// export default recipes



'use client';
import { useState } from 'react';
import Recipes_1 from "@/components/Recipes/Recipes_1";
import Recipes_2 from "@/components/Recipes/Recipes_2";

const allRecipes_1 = Array(36).fill(<Recipes_1 />); // Array of all Recipes_1 (you can replace with actual data)
const allRecipes_2 = Array(20).fill(<Recipes_2 />); // Array of all Recipes_2

const PAGE_SIZE_1 = 9;
const PAGE_SIZE_2 = 8;
const Recipes = () => {
    const [currentPage1, setCurrentPage1] = useState(1);
    const [currentPage2, setCurrentPage2] = useState(1);

    const totalRecipes_1 = allRecipes_1.length;
    const totalRecipes_2 = allRecipes_2.length;

    const handlePageChange1 = (newPage: number) => {
        setCurrentPage1(newPage);
    };

    const handlePageChange2 = (newPage: number) => {
        setCurrentPage2(newPage);
    };

    const paginatedRecipes_1 = allRecipes_1.slice((currentPage1 - 1) * PAGE_SIZE_1, currentPage1 * PAGE_SIZE_1);
    const paginatedRecipes_2 = allRecipes_2.slice((currentPage2 - 1) * PAGE_SIZE_2, currentPage2 * PAGE_SIZE_2);

    const totalPages_1 = Math.ceil(totalRecipes_1 / PAGE_SIZE_1);
    const totalPages_2 = Math.ceil(totalRecipes_2 / PAGE_SIZE_2);

    return (
        <div className="bg-white w-full h-fit flex gap-[20px] flex-col lg:px-[100px] lg:pt-[50px]">
            {/* Recipes_1 Section */}
            <div className="flex flex-col gap-[50px]">
                <h1 className="font-[600] text-[25px] lg:text-[45px]">
                    Công Thức Hot
                </h1>
                <div className="w-full h-fit gap-[10px] lg:gap-[30px] flex flex-wrap xl:gap-[40px] justify-center lg:justify-between items-center">
                    {paginatedRecipes_1}
                </div>
                {/* Pagination for Recipes_1 */}
                <div className="flex justify-center gap-[10px]">
                    <button
                        disabled={currentPage1 === 1}
                        onClick={() => handlePageChange1(currentPage1 - 1)}
                    >
                        Previous
                    </button>
                    <span>{currentPage1} / {totalPages_1}</span>
                    <button
                        disabled={currentPage1 === totalPages_1}
                        onClick={() => handlePageChange1(currentPage1 + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* Recipes_2 Section */}
            <div className="flex flex-col gap-[50px]">
                <h1 className="font-[600] text-[25px] lg:text-[45px]">
                    Công Thức New
                </h1>
                <div className="w-full h-fit gap-[10px] lg:gap-[30px] flex flex-wrap xl:gap-[40px] justify-center lg:justify-between items-center">
                    {paginatedRecipes_2}
                </div>
                {/* Pagination for Recipes_2 */}
                <div className="flex justify-center gap-[10px]">
                    <button
                        disabled={currentPage2 === 1}
                        onClick={() => handlePageChange2(currentPage2 - 1)}
                    >
                        Previous
                    </button>
                    <span>{currentPage2} / {totalPages_2}</span>
                    <button
                        disabled={currentPage2 === totalPages_2}
                        onClick={() => handlePageChange2(currentPage2 + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Recipes;
