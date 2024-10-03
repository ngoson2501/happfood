"use client";

import Footer from "@/components/Footer/Footer"
import ItemList from "@/components/ItemList/ItemList";
import FavoriteRecipes from "@/components/FavoriteRecipes/FavoriteRecipe";
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

              <div className="bg-white w-full lg:px-[100px] lg:pt-[50px]">
                <div className="relative w-full flex flex-col xl:flex-row xl:gap-6 ">
                    <div className="xl:w-2/3 pt-[80px] lg:pt-[100px] xl:pt-[120px]">{children}</div>
                    <div className="xl:w-1/3 h-fit pt-[50px] xl:pt-[120px]">
                        <ItemList></ItemList>
                        <div className="w-full lg:h-[440px] pt-10"> 
                          <FavoriteRecipes></FavoriteRecipes>
                        </div>
                    </div>
                </div>
              </div>


              

            </FoodDirectoryProvider>
           
        </>
        
    )
  }
