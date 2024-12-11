"use client"
import { useEffect, useState } from "react";
import Recipes_3 from "../Recipes/Recipes_3"
import { useAuthorRecipes } from "@/context/AuthorRecipesContext";

const AuthorRecipes = ({ idAuthorRecipe }: { idAuthorRecipe: string | undefined })=>{

    const { recipes, loading, error, fetchRecipesByAuthor } = useAuthorRecipes();
    
    useEffect(() => {
      if (idAuthorRecipe) {
        fetchRecipesByAuthor(idAuthorRecipe);
      }
    }, [idAuthorRecipe]);


    // // Log the recipes data to the console
    // useEffect(() => {
    //     if (recipes.length > 0) {
    //       console.log("Fetched recipes>>>>>>>>>>>>>:", recipes);
    //     }
    //   }, [recipes]);
  
    if (!idAuthorRecipe) {
      return(
        <>
            <div className=' hidden xl:flex xl:flex-col xl:items-center xl:justify-center   gap-5  w-full h-[450px] xl:w-1/3  snap-y  overflow-y-auto'>
                {/* <div style={{ borderTopColor: 'transparent' }} className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div> */}
                <p className="ml-2">No author selected.</p>
            </div>
        </>
      )
    }
  
    if (loading) {
      return(
        <>
            <div className=' hidden xl:flex xl:items-center xl:justify-center   gap-3  w-full h-[450px] xl:w-1/3  snap-y  overflow-y-auto'>
                <div style={{ borderTopColor: 'transparent' }} className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
                <p className="ml-2">Recipes...</p>
            </div>
        </>
      )
    }
  
    if (error) {
      return(
        <>
            <div className=' hidden xl:flex xl:flex-col xl:items-center xl:justify-center   gap-5  w-full h-[450px] xl:w-1/3  snap-y  overflow-y-auto'>
                {/* <div style={{ borderTopColor: 'transparent' }} className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div> */}
                <p className="ml-2">Error: {error}</p>
            </div>
        </>
      )
    }

    return(
        <>
        
        <div className="bg-white hidden xl:flex xl:flex-col xl:items-end   gap-5  w-full h-[450px] xl:w-1/3  snap-y  overflow-y-auto">

            
            {recipes.map((recipe) => (
            <Recipes_3 key={recipe.id} recipe={recipe} />
            ))}

          </div>
        </>
    )
}

export default AuthorRecipes