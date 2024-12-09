"use client";

import Footer from "@/components/Footer/Footer"
import ItemList from "@/components/ItemList/ItemList";
import FavoriteRecipes from "@/components/FavoriteRecipes/FavoriteRecipe";

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















// import Footer from "@/components/Footer/Footer";
// import ItemList from "@/components/ItemList/ItemList";
// import { useAuth } from "../../../../hooks/useAuth";

// export interface Category {
//   _id: string;
//   title: string;
//   data: string; // Dữ liệu Base64 của ảnh
//   contentType: string;
//   topic: string;
//   createdAt: string;
// }

// export default async function AuthLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   // Fetch categories từ API trong Server Component
//   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/dashboard/categories`);
//   if (!response.ok) {
//     throw new Error("Failed to fetch categories.");
//   }
//   const categories: Category[] = await response.json(); // Lấy danh sách categories từ API

//   return (
//     <>
//       <div className="bg-white w-full lg:px-[100px] lg:pt-[50px]">
//         <div className="relative w-full flex flex-col xl:flex-row xl:gap-6 ">
//           <div className="xl:w-2/3 pt-[80px] lg:pt-[100px] xl:pt-[120px]">
//             {children}
//           </div>
//           <div className="xl:w-1/3 h-fit pt-[50px] xl:pt-[120px]">
//             {/* Truyền categories vào ItemList */}
//             <ItemList categories={categories} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
