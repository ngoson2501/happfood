

// const Favorite = ()=>{
//     return(
//         <>
        
//         <div className="bg-red-400  w-full h-[500px]  flex xl:flex-col xl:items-center  gap-5  snap-x  xl:snap-y  overflow-y-auto">
                
//                 {/* <Recipes_3></Recipes_3>
//                 <Recipes_3></Recipes_3>
//                 <Recipes_3></Recipes_3>
//                 <Recipes_3></Recipes_3>
//                 <Recipes_3></Recipes_3>
//                 <Recipes_3></Recipes_3>
//                 <Recipes_3></Recipes_3>
//                 <Recipes_3></Recipes_3>
//                 <Recipes_3></Recipes_3>
//                 <Recipes_3></Recipes_3>
//                 <Recipes_3></Recipes_3>
//                 <Recipes_3></Recipes_3>
//                 <Recipes_3></Recipes_3> */}


//         </div>
//         </>
//     )
// }

// export default Favorite










"use client"

import ListFavoriteRecipes from '@/components/ListFavoriteRecipes/ListFavoriteRecipes';
import { useUser } from '@/context/User-provider';
import { FavoriteRecipesProvider } from '@/context/FavoriteRecipesContext';
const Favorite = ()=>{
    const infoUser = useUser();
   


    //console.log("infoUser>>>>>>>>>>>:", infoUser?.id)
    
    

    return(
        <>
        <FavoriteRecipesProvider>

            <ListFavoriteRecipes idAuthorRecipe={infoUser?.id || ""}></ListFavoriteRecipes>

        </FavoriteRecipesProvider>
        
        
        
        </>
    )
}

export default Favorite