"use client";
import Recipes_5 from "../Recipes/Recipes_5";
import { useAuthorRecipes } from "@/context/AuthorRecipesContext";
import { useEffect } from "react";

const ListYourRecipes = ({
  idAuthorRecipe,
}: {
  idAuthorRecipe: string | undefined;
}) => {
  const { recipes, loading, error, fetchRecipesByAuthor } = useAuthorRecipes();

  useEffect(() => {
    if (idAuthorRecipe) {
      fetchRecipesByAuthor(idAuthorRecipe);
    }
  }, []);



  if (loading) {
    return (
      <>
        <div className=" hidden xl:flex xl:flex-col xl:items-center xl:justify-center  gap-5  w-full h-[450px]   snap-y  overflow-y-auto">
          <div
            style={{ borderTopColor: "transparent" }}
            className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
          ></div>
          <p className="ml-2">Recipes...</p>
        </div>
      </>
    );
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <>
      <div className="flex flex-col gap-[60px] xl:gap-[114px] mt-[50px]  xl:mt-[120px]">
        <div className=" px-[10px] xl:px-0 flex flex-col justify-center font-Inter items-center gap-[20px] lg:gap-[30px]">
          <h1 className=" text-[25px] lg:text-[30px] text-center xl:text-[40px] font-[700]">
            Những công thức nấu ăn tuyệt vời của bạn
          </h1>
          <p
            className="text-[14px] lg:text-[15px] xl:text-[16px] text-center max-w-[700px] font-light"
            style={{ color: "rgba(0, 0, 0, 60%)" }}
          >
            Đây là tổng hợp những công thức nấu ăn tuyệt vời mà bạn đã chia sẻ
            cho chính tôi. Với sự đa dạng từ những cách chế biến và nguyên liệu,
            chúng tôi cảm ơn vì những công thức vô cùng tuyệt vời mà bạn đã chia
            sẻ với chúng tôi.
          </p>
        </div>
        <div className="w-full  gap-[10px] lg:gap-[30px] flex flex-wrap xl:gap-[40px] justify-center xl:px-0 lg:justify-center items-center">
          {recipes.map((recipe) => (
            <Recipes_5 key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ListYourRecipes;
