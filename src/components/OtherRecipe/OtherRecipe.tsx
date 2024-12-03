"use client"

import Recipes_3 from "../Recipes/Recipes_3"
import { useRecipeContext } from "@/context/RecipeContext";

const OtherRecipe = () => {

    const { recipes, loading, error } = useRecipeContext();
    if (loading) {
        return (
          <>
          
          <>
            <div className=' hidden xl:flex xl:flex-col xl:items-center xl:justify-center   gap-5  w-full h-[450px] xl:w-1/3  snap-y  overflow-y-auto'>
                <div style={{ borderTopColor: 'transparent' }} className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
                <p className="ml-2">Recipes...</p>
            </div>
          </>
          
          </>
        )
      }
    
      if (error) {
        return <p>Error: {error}</p>;
      }
    return (
        <>
            
            <div className="  w-full h-full  flex xl:flex-col xl:items-end  gap-5  snap-x  xl:snap-y  overflow-y-auto">
                
            {recipes.map((recipe) => (
            <Recipes_3 key={recipe.id} recipe={recipe} />
            ))}
                    


            </div>

        </>
    )
}


export default OtherRecipe