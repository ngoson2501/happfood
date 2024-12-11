'use client';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';
import { useState } from 'react';
import Recipes_1 from '@/components/Recipes/Recipes_1';
import Recipes_2 from "@/components/Recipes/Recipes_2";
import useFetchHotRecipes from '../../../../hooks/useFetchHotRecipes';
import useFetchNewRecipes from '../../../../hooks/useFetchNewRecipes';

const PAGE_SIZE_1 = 9;
const PAGE_SIZE_2 = 8;
const PAGES_PER_BATCH = 6;

const Recipes = () => {
    const [currentPage1, setCurrentPage1] = useState(1);
    const [currentPage2, setCurrentPage2] = useState(1);
    const [currentBatch1, setCurrentBatch1] = useState(1);
    const [currentBatch2, setCurrentBatch2] = useState(1);

    const { data: hotRecipes, loading: loadingHotRecipes, error: errorHotRecipes } = useFetchHotRecipes("/api/recipes/get_hot_recipes");
    const { data: newRecipes, loading: loadingNewRecipes, error: errorNewRecipes } = useFetchNewRecipes("/api/recipes/get_new_recipes");

    // Nếu có lỗi hoặc đang tải dữ liệu
    if (loadingHotRecipes || loadingNewRecipes) {
        return <div>Loading...</div>;
    }

    if (errorHotRecipes || errorNewRecipes) {
        return <div>Error: {errorHotRecipes || errorNewRecipes}</div>;
    }

    const totalRecipes_1 = hotRecipes.length;
    const totalRecipes_2 = newRecipes.length;

    const totalPages_1 = Math.ceil(totalRecipes_1 / PAGE_SIZE_1);
    const totalPages_2 = Math.ceil(totalRecipes_2 / PAGE_SIZE_2);

    const totalBatches1 = Math.ceil(totalPages_1 / PAGES_PER_BATCH);
    const totalBatches2 = Math.ceil(totalPages_2 / PAGES_PER_BATCH);

    // Function to handle page change for Recipes_1
    const handlePageChange1 = (newPage: number) => {
        setCurrentPage1(newPage);
        if (newPage > currentBatch1 * PAGES_PER_BATCH) {
            setCurrentBatch1((prevBatch) => prevBatch + 1);
        } else if (newPage <= (currentBatch1 - 1) * PAGES_PER_BATCH) {
            setCurrentBatch1((prevBatch) => prevBatch - 1);
        }
    };

    // Function to handle page change for Recipes_2
    const handlePageChange2 = (newPage: number) => {
        setCurrentPage2(newPage);
        if (newPage > currentBatch2 * PAGES_PER_BATCH) {
            setCurrentBatch2((prevBatch) => prevBatch + 1);
        } else if (newPage <= (currentBatch2 - 1) * PAGES_PER_BATCH) {
            setCurrentBatch2((prevBatch) => prevBatch - 1);
        }
    };

    // Pagination logic for hot recipes
    const paginatedRecipes_1 = hotRecipes.slice((currentPage1 - 1) * PAGE_SIZE_1, currentPage1 * PAGE_SIZE_1);
    const paginatedRecipes_2 = newRecipes.slice((currentPage2 - 1) * PAGE_SIZE_2, currentPage2 * PAGE_SIZE_2);

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
                    <h1 className="font-lobster font-[600] text-[25px] lg:text-[45px]">Công Thức Hot</h1>
                    <Link href="/categories" className="bg-[#E7FAFE] text-[13px] lg:text-[16px] font-[550] rounded-[10px] lg:rounded-[20px] px-[15px] py-[10px] lg:px-[30px] lg:py-[20px]">
                        View All Categories
                    </Link>
                </div>
                <div className=" w-full h-fit gap-[10px] lg:gap-[30px] flex flex-wrap xl:gap-[40px] justify-center lg:justify-start items-center">
                    {paginatedRecipes_1.map((recipe, index) => (
                        <Recipes_1 key={index} recipe={recipe} />
                    ))}
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
                    <h1 className="font-lobster font-[600] text-[25px] lg:text-[45px]">Công Thức New</h1>
                    <Link href="/categories" className="bg-[#E7FAFE] text-[13px] lg:text-[16px] font-[550] rounded-[10px] lg:rounded-[20px] px-[15px] py-[10px] lg:px-[30px] lg:py-[20px]">
                        View All Categories
                    </Link>
                </div>
                <div className=" w-full h-fit gap-[10px] lg:gap-[30px] xl:gap-[40px] flex flex-wrap  justify-center xl:justify-start items-center">
                    {paginatedRecipes_2.map((recipe, index) => (
                        <Recipes_2 key={index} recipe={recipe} />
                    ))}
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
                        <FiChevronRight size={25} style={{ color: "rgba(0, 0, 0, 60%)" }} strokeWidth={1.5} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Recipes;
