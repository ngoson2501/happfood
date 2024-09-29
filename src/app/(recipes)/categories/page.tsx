'use client';
import { usePathname } from "next/navigation";
import FoodDirectory from "@/components/FoodDirectory/FoodDirectory";
import { useFoodDirectory } from "@/context/FoodDirectory-provider";

const categories = ()=>{

    
   
    


    return(
        <>
            <div className="w-full flex gap-[20px] flex-col">
                <h2 className=" font-[600] text-[25px] lg:text-[45px]">
                    Mục lục món ăn
                </h2>

                <FoodDirectory></FoodDirectory>



                {/* <div className="bg-green-200 ">
                    <h3 className=" font-[600] text-[18px] lg:text-[25px]">
                        Nguyên liệu
                    </h3>
                    <div className="flex gap-[10px] flex-wrap">
                        <Category_2></Category_2>
                        <Category_2></Category_2>
                        <Category_2></Category_2>
                        <Category_2></Category_2>
                        <Category_2></Category_2>
                        <Category_2></Category_2>
                        <Category_2></Category_2>
                    </div>

                </div> */}
                {/* <div className="bg-green-400 h-[300px]">
                    <h3 className=" font-[600] text-[18px] lg:text-[25px]">
                        Phương pháp nấu
                    </h3>
                </div>
                <div className="bg-pink-300 h-[300px]">
                    <h3 className=" font-[600] text-[18px] lg:text-[25px]">
                        Lễ Tế
                    </h3>
                </div>
                <div className="bg-slate-400  h-[300px]">
                    <h3 className=" font-[600] text-[18px] lg:text-[25px]">
                        Thể loại
                    </h3>
                </div> */}

            </div>
        </>
    )
}


export default categories