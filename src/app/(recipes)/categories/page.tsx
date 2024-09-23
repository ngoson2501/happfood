'use client';
import { usePathname } from "next/navigation";

const categories = ()=>{
    return(
        <>
            <div className=" w-full h-[900px] flex gap-[20px] flex-col lg:px-[100px] lg:pt-[20px]">
                <h2 className=" font-[600] text-[25px] lg:text-[45px]">
                    Mục lục món ăn
                </h2>

            </div>
        </>
    )
}


export default categories