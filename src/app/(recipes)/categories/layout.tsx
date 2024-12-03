"use client";

import Footer from "@/components/Footer/Footer"
import ItemList from "@/components/ItemList/ItemList";
import FavoriteRecipes from "@/components/FavoriteRecipes/FavoriteRecipe";
import { FoodDirectoryProvider } from "@/context/FoodDirectory-provider";
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
           
            <FoodDirectoryProvider>

              <div className="bg-white w-full lg:px-[100px] lg:pt-[50px]">
                <div className="relative w-full flex flex-col xl:flex-row xl:gap-6 ">
                    <div className="xl:w-2/3 pt-[80px] lg:pt-[100px] xl:pt-[120px]">{children}</div>
                    <div className="xl:w-1/3 h-fit pt-[50px] xl:pt-[120px]">
                        <ItemList></ItemList>
                    </div>
                </div>
              </div>


              

            </FoodDirectoryProvider>
           
        </>
        
    )
  }
















// "use client";

// import Footer from "@/components/Footer/Footer";
// import ItemList from "@/components/ItemList/ItemList";
// import { FoodDirectoryProvider } from "@/context/FoodDirectory-provider";
// import { useCheckToken } from "../../../../hooks/checkToken";
// import { useEffect, useState } from "react";

// interface AuthLayoutProps {
//   categories: any[]; // Define the categories prop type
//   children: React.ReactNode;
// }

// export default function AuthLayout({ categories, children }: AuthLayoutProps) {
//   const [fetchedCategories, setFetchedCategories] = useState<any[]>([]);
//   useCheckToken();

//   useEffect(() => {
//     const getCategories = async () => {
//       const fetched = await fetchCategories(); // Gọi API để fetch categories
//       setFetchedCategories(fetched); // Lưu dữ liệu vào state
//     };

//     getCategories();
//   }, []); // Chỉ chạy khi component mount lần đầu

//   console.log("Categories in AuthLayout:", fetchedCategories);  // Kiểm tra dữ liệu categories sau khi fetch

//   return (
//     <>
//       <FoodDirectoryProvider>
//         <div className="bg-white w-full lg:px-[100px] lg:pt-[50px]">
//           <div className="relative w-full flex flex-col xl:flex-row xl:gap-6 ">
//             <div className="xl:w-2/3 pt-[80px] lg:pt-[100px] xl:pt-[120px]">
//               {children}
//             </div>
//             <div className="xl:w-1/3 h-fit pt-[50px] xl:pt-[120px]">
//               <ItemList categories={fetchedCategories} /> {/* Passing fetched categories to ItemList */}
//             </div>
//           </div>
//         </div>
//       </FoodDirectoryProvider>
//     </>
//   );
// }

// export async function fetchCategories() {
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/dashboard/categories`);
//     if (!response.ok) {
//       throw new Error("Failed to fetch categories.");
//     }
//     const categories = await response.json();
//     console.log("Fetched categories:", categories);  // Kiểm tra dữ liệu trả về từ API
//     return categories || [];  // Return empty array if no categories found
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return [];  // Return empty array if error
//   }
// }
