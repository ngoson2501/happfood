"use client";
import { useState } from "react";

import Slider from "@/components/Slider/Slider"
import CategoriesList from "@/components/Categories/Categories"
import RecipeList from "@/components/RecipeList/RecipeList"
import LearnMore from "@/components/LearnMore/LearnMore"
import RecommendedList from "@/components/RecommendedList/RecommendedList";
import Footer from "@/components/Footer/Footer";

export default function HomePage(){

    

    return(
        <>
            
            <div className=" w-full flex gap-[20px] flex-col px-[100px] pt-[50px] h-fit ">
                
            <Slider></Slider>
            <CategoriesList></CategoriesList>
            <RecipeList></RecipeList>
            <LearnMore></LearnMore>
            <RecommendedList></RecommendedList>
            </div>
            <Footer></Footer>     
            
        </>
    )
}