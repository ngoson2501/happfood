"use client";

import Footer from "@/components/Footer/Footer"
import ItemList from "@/components/ItemList/ItemList";
import { FoodDirectoryProvider } from "@/context/FoodDirectory-provider";

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            {/* <header className="bg-yellow-500 w-[100%] h-[50px]">
            
            </header> */}
           
            <FoodDirectoryProvider>
              <div className=" w-full flex flex-col xl:flex-row xl:gap-6 lg:px-[100px] pt-[20px] lg:pt-[40px]">
                  <div className=" xl:w-2/3">{children}</div>
                  <div className="xl:w-1/3 xl:pt-[88px]">
                      <ItemList></ItemList>
                  </div>
              </div>
            </FoodDirectoryProvider>
           
        </>
        
    )
  }
