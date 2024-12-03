//'use client';
import Image from "next/image";
import { usePathname } from "next/navigation";
import FoodDirectory from "@/components/FoodDirectory/FoodDirectory";
import { useFoodDirectory } from "@/context/FoodDirectory-provider";
import { useCheckRefreshToken } from "../../../../hooks/useCheckRefreshToken";
//import { useRefreshAccessToken } from "../../../../hooks/useRefreshAccessToken";
import { useAuth } from "../../../../hooks/useAuth";
import { useUser } from '@/context/User-provider';




const categories = ()=>{

    //const infoUser = useUser();

    // if (infoUser !== null) {
    //     // Sử dụng infoUser ở đây vì TypeScript biết nó không phải là null
    //     console.log("<<<<<<<check infoUser>>>>>>>:",infoUser.email);
    //   }
    // useCheckRefreshToken(); // Sử dụng hook để kiểm tra refreshToken
    // useRefreshAccessToken(); // Sử dụng hook để làm mới accessToken
   
    


    return(
        <>

            <h2 className="absolute top-[23px] lg:top-0 w-full font-lobster italic  text-center  font-[600] text-[25px] lg:text-[45px]">
                    Mục lục món ăn
            </h2>
            <div className=" w-full flex gap-[20px] flex-col">
                

               

                <FoodDirectory></FoodDirectory>



                

            </div>
        </>
    )
}


export default categories






















// import Image from "next/image";
// import Link from "next/link";

// interface Category {
//   _id: string;
//   title: string;
//   data: string; // Base64 image data
//   contentType: string;
//   topic: string;
// }

// async function fetchCategories(): Promise<Category[]> {
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/dashboard/categories`, {
//       cache: "no-store", // Tương tự getServerSideProps
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch categories.");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return [];
//   }
// }

// const categories = async () => {
//   // Fetch data from API
//   const categories = await fetchCategories();


  

//   if (categories.length === 0) {
//     return <div>No categories found.</div>;
//   }

//   // Phân nhóm categories theo topic
//   const groupedCategories = categories.reduce((acc: any, category: Category) => {
//     const { topic } = category;
//     if (!acc[topic]) {
//       acc[topic] = [];
//     }
//     acc[topic].push(category);
//     return acc;
//   }, {});

//   return (
//     <>
//       <h2 className="absolute top-[23px] lg:top-0 w-full font-lobster italic text-center font-[600] text-[25px] lg:text-[45px]">
//         Mục lục món ăn
//       </h2>
//       <div className="w-full flex gap-[20px] flex-col">
//         <div className="rounded-[8px] px-4 lg:px-0">
//           {Object.keys(groupedCategories).map((topic, index) => (
//             <div key={index} className=" mb-6">
//               <h3 className="text-black py-3 rounded-[8px] pl-5 font-lobster font-[700] text-[18px] lg:text-[25px] mb-4">
//                 {topic}
//               </h3>
//               <div className="flex justify-start gap-[10px] flex-wrap">
//                 {groupedCategories[topic].map((category: Category) => (
//                   <Link
//                     href={{
//                       pathname: `/categories/${encodeURIComponent(category.title)}`,
//                       query: { title: encodeURIComponent(category.title), id: category._id },
//                     }}
//                     prefetch={true} // Prefetch dữ liệu trước
//                     key={category._id}
//                     className=" mb-5 w-[150px] h-[190px]"
//                   >
//                     <div className="h-3/4 rounded-[5px] overflow-hidden">
//                       <Image
//                         src={category.data}
//                         alt={category.title}
//                         width={300}
//                         height={300}
//                         className="w-full h-full object-cover object-center"
//                       />
//                     </div>
//                     <div className="mt-3 h-1/4 flex justify-center">
//                       <p
//                         style={{ color: "rgba(0, 0, 0, 60%)" }}
//                         className="font-[400] text-center"
//                       >
//                         {category.title}
//                       </p>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default categories;





























// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// interface Category {
//   _id: string;
//   title: string;
//   data: string; // Base64 image data
//   contentType: string;
//   topic: string;
// }

// async function fetchCategories(): Promise<Category[]> {
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/dashboard/categories`, {
//       cache: "no-store", // Tương tự getServerSideProps
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch categories.");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return [];
//   }
// }

// const CategoriesPage = () => {
//   const [categories, setCategories] = useState<Category[]>([]);

//   useEffect(() => {
//     const getCategories = async () => {
//       const fetchedCategories = await fetchCategories();
//       setCategories(fetchedCategories);
//     };

//     getCategories();
//   }, []);

//   if (categories.length === 0) {
//     return <div>No categories found.</div>;
//   }

//   // Phân nhóm categories theo topic
//   const groupedCategories = categories.reduce((acc: any, category: Category) => {
//     const { topic } = category;
//     if (!acc[topic]) {
//       acc[topic] = [];
//     }
//     acc[topic].push(category);
//     return acc;
//   }, {});

//   return (
//     <div>
//       <h2 className="absolute top-[23px] lg:top-0 w-full font-lobster italic text-center font-[600] text-[25px] lg:text-[45px]">
//         Mục lục món ăn
//       </h2>
//       <div className="w-full flex gap-[20px] flex-col">
//         <div className="rounded-[8px] px-4 lg:px-0">
//           {Object.keys(groupedCategories).map((topic, index) => (
//             <div key={index} className="mb-6">
//               <h3 className="text-black py-3 rounded-[8px] pl-5 font-lobster font-[700] text-[18px] lg:text-[25px] mb-4">
//                 {topic}
//               </h3>
//               <div className="flex justify-start gap-[10px] flex-wrap">
//                 {groupedCategories[topic].map((category: Category) => (
//                   <Link
//                     href={{
//                       pathname: `/categories/${encodeURIComponent(category.title)}`,
//                       query: { title: encodeURIComponent(category.title), id: category._id },
//                     }}
//                     prefetch={true} // Prefetch dữ liệu trước
//                     key={category._id}
//                     className="mb-5 w-[150px] h-[190px]"
//                   >
//                     <div className="h-3/4 rounded-[5px] overflow-hidden">
//                       <Image
//                         src={category.data}
//                         alt={category.title}
//                         width={300}
//                         height={300}
//                         className="w-full h-full object-cover object-center"
//                       />
//                     </div>
//                     <div className="mt-3 h-1/4 flex justify-center">
//                       <p
//                         style={{ color: "rgba(0, 0, 0, 60%)" }}
//                         className="font-[400] text-center"
//                       >
//                         {category.title}
//                       </p>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoriesPage;
