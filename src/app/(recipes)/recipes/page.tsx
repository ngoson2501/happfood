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
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';
import { useState } from 'react';
import Recipes_1 from "@/components/Recipes/Recipes_1";
import Recipes_2 from "@/components/Recipes/Recipes_2";

const allRecipes_1 = Array(90).fill(<Recipes_1 />); // Array of all Recipes_1
const allRecipes_2 = Array(20).fill(<Recipes_2 />);  // Array of all Recipes_2

const PAGE_SIZE_1 = 9;
const PAGE_SIZE_2 = 8;
const PAGES_PER_BATCH = 6;

const Recipes = () => {
    const [currentPage1, setCurrentPage1] = useState(1);
    const [currentPage2, setCurrentPage2] = useState(1);
    const [currentBatch1, setCurrentBatch1] = useState(1);
    const [currentBatch2, setCurrentBatch2] = useState(1);

    const totalRecipes_1 = allRecipes_1.length;
    const totalRecipes_2 = allRecipes_2.length;

    const totalPages_1 = Math.ceil(totalRecipes_1 / PAGE_SIZE_1);
    const totalPages_2 = Math.ceil(totalRecipes_2 / PAGE_SIZE_2);

    const totalBatches1 = Math.ceil(totalPages_1 / PAGES_PER_BATCH);
    const totalBatches2 = Math.ceil(totalPages_2 / PAGES_PER_BATCH);

    // Function to handle page change for Recipes_1
    const handlePageChange1 = (newPage: number) => {
        setCurrentPage1(newPage);
        // Change batch if needed
        if (newPage > currentBatch1 * PAGES_PER_BATCH) {
            setCurrentBatch1((prevBatch) => prevBatch + 1);
        } else if (newPage <= (currentBatch1 - 1) * PAGES_PER_BATCH) {
            setCurrentBatch1((prevBatch) => prevBatch - 1);
        }
    };

    // Function to handle page change for Recipes_2
    const handlePageChange2 = (newPage: number) => {
        setCurrentPage2(newPage);
        // Change batch if needed
        if (newPage > currentBatch2 * PAGES_PER_BATCH) {
            setCurrentBatch2((prevBatch) => prevBatch + 1);
        } else if (newPage <= (currentBatch2 - 1) * PAGES_PER_BATCH) {
            setCurrentBatch2((prevBatch) => prevBatch - 1);
        }
    };

    const paginatedRecipes_1 = allRecipes_1.slice((currentPage1 - 1) * PAGE_SIZE_1, currentPage1 * PAGE_SIZE_1);
    const paginatedRecipes_2 = allRecipes_2.slice((currentPage2 - 1) * PAGE_SIZE_2, currentPage2 * PAGE_SIZE_2);

    // Generate page numbers for the current batch
    const generatePageNumbers = (totalPages: number, currentPage: number, currentBatch: number) => {
        const startPage = (currentBatch - 1) * PAGES_PER_BATCH + 1;
        const endPage = Math.min(currentBatch * PAGES_PER_BATCH, totalPages);
        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    };

    return (
        <div className="bg-white w-full h-fit flex gap-[50px] lg:gap-[100px] flex-col lg:px-[100px] lg:pt-[50px]">
            {/* Recipes_1 Section */}
            <div className="flex flex-col justify-center items-center gap-[50px] pt-[50px] lg:pt-0">
                <div className=' w-full px-[10px] flex justify-between'>
                    {/* <h1 className="bg-red-200 font-lobster font-[600] text-[25px] lg:text-[45px] lg:pl:0">
                        Công Thức Hot
                    </h1> */}
                    <h1 className="font-lobster font-[600] text-[25px] lg:text-[45px]">Công Thức Hot</h1>
                    <Link href="/categories" className="bg-[#E7FAFE] text-[13px] lg:text-[16px] font-[550] rounded-[10px] lg:rounded-[20px] px-[15px] py-[10px] lg:px-[30px] lg:py-[20px]">
                        View All Categories
                    </Link>
                </div>
                <div className=" w-full h-fit gap-[10px] lg:gap-[30px] flex flex-wrap xl:gap-[40px] justify-center lg:justify-between items-center">
                    {paginatedRecipes_1}
                </div>



                {/* Pagination for Recipes_1 */}
                <div className=" border rounded-[8px] w-fit flex justify-center overflow-hidden ">
                    <button
                        className=' hover:bg-[#E7FAFE] border-r px-2'
                        disabled={currentPage1 === 1}
                        onClick={() => handlePageChange1(currentPage1 - 1)}
                    >
                        <FiChevronLeft size={25} style={{ color: "rgba(0, 0, 0, 60%)" }} strokeWidth={1.5} />
                    </button>

                    {/* Render page numbers */}
                    {generatePageNumbers(totalPages_1, currentPage1, currentBatch1).map((pageNumber) => (
                        <button
                            key={pageNumber}
                            className={`px-4 py-2 border-r w-full  hover:bg-[#E7FAFE] ${currentPage1 === pageNumber ? 'font-bold text-blue-500' : ''}`}
                            onClick={() => handlePageChange1(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    ))}

                    <button
                        className=' hover:bg-[#E7FAFE] px-2'
                        disabled={currentPage1 === totalPages_1}
                        onClick={() => handlePageChange1(currentPage1 + 1)}
                    >
                        <FiChevronRight size={25} style={{ color: "rgba(0, 0, 0, 60%)" }} strokeWidth={1.5} />
                    </button>
                </div>




            </div>

            {/* Recipes_2 Section */}
            <div className="flex flex-col justify-center items-center gap-[50px]">
            <div className=' w-full px-[10px] flex justify-between'>
                    {/* <h1 className="bg-red-200 font-lobster font-[600] text-[25px] lg:text-[45px] lg:pl:0">
                        Công Thức Hot
                    </h1> */}
                    <h1 className="font-lobster font-[600] text-[25px] lg:text-[45px]">Công Thức New</h1>
                    <Link href="/categories" className="bg-[#E7FAFE] text-[13px] lg:text-[16px] font-[550] rounded-[10px] lg:rounded-[20px] px-[15px] py-[10px] lg:px-[30px] lg:py-[20px]">
                        View All Categories
                    </Link>
                </div>
                <div className=" w-full h-fit gap-[10px] lg:gap-[30px] lg:gap-x-[50px] xl:gap-[40px] flex flex-wrap  justify-center xl:justify-between items-center">
                    {paginatedRecipes_2}
                </div>



                {/* Pagination for Recipes_2 */}
                <div className="border border-gray-300 rounded-[8px] w-fit flex overflow-hidden ">
                    <button
                        className=' border-r px-2 hover:bg-[#E7FAFE]'
                        disabled={currentPage2 === 1}
                        onClick={() => handlePageChange2(currentPage2 - 1)}
                    >
                        <FiChevronLeft size={25} style={{ color: "rgba(0, 0, 0, 60%)" }} strokeWidth={1.5} />
                    </button>

                    {/* Render page numbers */}
                    {generatePageNumbers(totalPages_2, currentPage2, currentBatch2).map((pageNumber) => (
                        <button
                            key={pageNumber}
                            className={`px-4 py-2 border-r w-full  hover:bg-[#E7FAFE] ${currentPage2 === pageNumber ? 'font-bold text-blue-500' : ''}`}
                            onClick={() => handlePageChange2(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    ))}

                    <button
                        className=' hover:bg-[#E7FAFE] px-2'
                        disabled={currentPage2 === totalPages_2}
                        onClick={() => handlePageChange2(currentPage2 + 1)}
                    >
                        <FiChevronRight size={25} style={{ color: "rgba(0, 0, 0, 60%)", font: "200" }} strokeWidth={1.5} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Recipes;
