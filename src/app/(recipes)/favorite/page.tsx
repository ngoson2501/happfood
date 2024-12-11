"use client"

import ListFavoriteRecipes from '@/components/ListFavoriteRecipes/ListFavoriteRecipes';
import { useUser } from '@/context/User-provider';
import { FavoriteRecipesProvider } from '@/context/FavoriteRecipesContext';
const Favorite = ()=>{
    const infoUser = useUser();
   


    
    
    

    return(
        <>
        <FavoriteRecipesProvider>

            <ListFavoriteRecipes idAuthorRecipe={infoUser?.id || ""}></ListFavoriteRecipes>

        </FavoriteRecipesProvider>
        
        
        
        </>
    )
}

export default Favorite