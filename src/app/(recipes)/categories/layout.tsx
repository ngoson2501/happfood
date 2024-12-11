"use client";


import ItemList from "@/components/ItemList/ItemList";


import { useAuth } from "../../../../hooks/useAuth";
import { useCheckToken } from "../../../../hooks/checkToken";


export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    useCheckToken()


    

    // useAuth()


    return (
        <>
            {/* <header className="bg-yellow-500 w-[100%] h-[50px]">
            
            </header> */}
           
              <div className="bg-white w-full lg:px-[100px] lg:pt-[50px]">
                <div className="relative w-full flex flex-col xl:flex-row xl:gap-6 ">
                    <div className="xl:w-2/3 pt-[80px] lg:pt-[100px] xl:pt-[120px]">{children}</div>
                    <div className="xl:w-1/3 h-fit pt-[50px] xl:pt-[120px]">
                        <ItemList></ItemList>
                    </div>
                </div>
              </div>
           
        </>
        
    )
  }



