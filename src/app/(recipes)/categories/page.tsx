'use client';
import Image from "next/image";
import { usePathname } from "next/navigation";
import FoodDirectory from "@/components/FoodDirectory/FoodDirectory";
import { useFoodDirectory } from "@/context/FoodDirectory-provider";

const categories = ()=>{

    
   
    


    return(
        <>

            <h2 className="absolute top-[23px] lg:top-0 w-full font-lobster italic  text-center  font-[600] text-[25px] lg:text-[45px]">
                    Mục lục món ăn
            </h2>
            <div className=" w-full flex gap-[20px] flex-col">
                

                {/* <div className=" w-full h-[300px] lg:rounded-[8px] overflow-hidden">
                <Image
                        src="/images/banners/cover-image-3.png"
                        alt="cover-image-3"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover object-center"
                      />
                </div> */}

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