"use client";

import Footer from "@/components/Footer/Footer"
import ItemList from "@/components/ItemList/ItemList";
export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            {/* <header className="bg-yellow-500 w-[100%] h-[50px]">
            
            </header> */}
           
            <div className="w-full flex flex-col xl:flex-row px-[100px] ">
                <div className="bg-red-300">{children}</div>
                <div className="bg-green-300 pt-[112px]">
                    <ItemList></ItemList>
                </div>
            </div>
           
        </>
        
    )
  }
