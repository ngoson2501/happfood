"use client"
import Slider from "@/components/Slider/Slider"
import CategoriesList from "@/components/Categories/CategoriesList";
import RecipesList from "@/components/RecipesList/RecipesList"
import LearnMore from "@/components/LearnMore/LearnMore"
import RecommendedList from "@/components/RecommendedList/RecommendedList";
import Footer from "@/components/Footer/Footer";
import Search from "@/components/Search/Search";


function HomePage(){
    return(
        <>
            <div className="bg-white w-full flex gap-[20px] flex-col lg:px-[100px] lg:pt-[30px] h-fit ">
            {/* <Search></Search> */}
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