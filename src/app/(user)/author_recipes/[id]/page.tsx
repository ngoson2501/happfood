"use client";
import ListAuthorRecipes from "@/components/ListAuthorRecipes/ListAuthorRecipes";
import { useUser } from "@/context/User-provider";
import { useParams } from "next/navigation";
import { AuthorRecipesProvider } from "@/context/AuthorRecipesContext";
const AuthorRecipes = () => {
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;

  return (
    <>
      <AuthorRecipesProvider>
        <ListAuthorRecipes idAuthorRecipe={id || ""}></ListAuthorRecipes>
      </AuthorRecipesProvider>
    </>
  );
};

export default AuthorRecipes