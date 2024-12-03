"use client"

import ListYourRecipes from "@/components/ListYourRecipes/ListYourRecipes";
import { useUser } from '@/context/User-provider';
import { AuthorRecipesProvider } from "@/context/AuthorRecipesContext";
const yourRecipes = ()=>{
    const infoUser = useUser();
   


    console.log("infoUser>>>>>>>>>>>:", infoUser?.id)
    
    

    return(
        <>
        <AuthorRecipesProvider>

            <ListYourRecipes idAuthorRecipe={infoUser?.id || ""}></ListYourRecipes>

        </AuthorRecipesProvider>
        
        
        
        </>
    )
}



export default yourRecipes