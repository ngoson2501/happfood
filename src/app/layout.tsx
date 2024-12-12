"use client"
import "./globals.css";
import Header from "@/components/Header/Header";
import { UserProvider } from "@/context/User-provider";
import { RecipeProvider } from "@/context/RecipeContext";
import { useAuth } from "../../hooks/useAuth";
import Head from "next/head"; // Import Head từ Next.js
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    useAuth()

    return (
      <html lang="en">
        <Head>
                {/* Thêm thẻ meta vào đây */}
                <meta name="zalo-platform-site-verification" content="Q_2i1A3JV0rgxEGWw_bKUZ3yn6FSYXKyDpWt" />
                
                {/* Thêm title cho trang */}
                <title>HappyFood - Nơi chia sẻ công thức nấu ăn</title>

                {/* Thêm meta description */}
                <meta name="description" content="Chia sẻ các công thức nấu ăn ngon, dễ làm từ các đầu bếp chuyên nghiệp. Khám phá ngay!" />

                {/* Thêm meta image */}
                <meta property="og:image" content="https://front-end-happfood-fls98canu-ngosons-projects.vercel.app/logo/Logo.png" />


                {/* Thêm meta title cho các mạng xã hội */}
                <meta property="og:title" content="HappyFood - Nơi chia sẻ công thức nấu ăn" />
                <meta property="og:description" content="Khám phá những công thức nấu ăn dễ làm và hấp dẫn." />
                <meta property="og:url" content="https://front-end-happfood-fls98canu-ngosons-projects.vercel.app/" />
            </Head>
       <UserProvider>
        <RecipeProvider>
        <body className=" flex justify-center flex-col items-center  ">
            {/* Layout UI */}
          
          {/* <div className="bg-yellow-400  w-full max-w-[1425px]">
          
          </div> */}
          
          <Header></Header>
          
            
            <main className=" w-full max-w-[1425px] ">{children}</main>

            
          </body>
        </RecipeProvider>
       
          </UserProvider>
      </html>
    )
  }



