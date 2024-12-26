"use client";
import ListYourRecipes from "@/components/ListYourRecipes/ListYourRecipes";
import { useUser } from "@/context/User-provider";
import { AuthorRecipesProvider } from "@/context/AuthorRecipesContext";
import YourRecipes_2 from "@/components/YourRecipes/YourRecipes";
const YourRecipes = () => {
  const infoUser = useUser();

  return (
    <>
      <AuthorRecipesProvider>
        <ListYourRecipes idAuthorRecipe={infoUser?.id || ""}></ListYourRecipes>
      </AuthorRecipesProvider>
    </>
  );
};

export default YourRecipes;




