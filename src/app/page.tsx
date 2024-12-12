"use client"
import Slider from "@/components/Slider/Slider"
import CategoriesList from "@/components/Categories/CategoriesList";
import RecipesList from "@/components/RecipesList/RecipesList"
import LearnMore from "@/components/LearnMore/LearnMore"
import RecommendedList from "@/components/RecommendedList/RecommendedList";
import Footer from "@/components/Footer/Footer";
import Head from "next/head"; // Import Head từ Next.js


function HomePage(){
    return(
        <>
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
            <div className="bg-white w-full flex gap-[20px] flex-col lg:px-[100px] lg:pt-[50px] h-fit ">
                
            <Slider></Slider>
            <CategoriesList></CategoriesList>
            <RecipesList></RecipesList>
            <LearnMore></LearnMore>
            <RecommendedList></RecommendedList>
            
            </div>
            <Footer></Footer>     
            
        </>
    )
}


export default HomePage