"use client"
import React from "react";
import { Carousel } from "antd";
import HotRecipes from "./HotRecipes";
import useFetchHotRecipes from "../../../hooks/useFetchHotRecipes";
import "../../css/custom-carousel.css";

const Slider = () => {
  const { data: hotRecipes, loading, error } = useFetchHotRecipes(
    "/api/recipes/get_hot_recipes"
  ); // Sử dụng custom hook

  // Log dữ liệu nhận được
  console.log("Hot Recipes Data:", hotRecipes);

  if (loading) {
    return(
      <>
          <div className='flex items-center justify-center h-full'>
              <div style={{ borderTopColor: 'transparent' }} className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
              <p className="ml-2">Recipes Hot...</p>
          </div>
      </>
    )
  }

  if (error) {
    return(
      <>
          <div className='flex items-center justify-center h-full'>
              <p className="ml-2">Error: {error}</p>
          </div>
      </>
    )
  }

  return (
    <Carousel
      className="custom-carousel"
      arrows
      autoplay
      draggable={true}
      infinite={true}
    >
      {hotRecipes.map((recipe, key) => (
        <HotRecipes key={recipe.id || key} recipe={recipe} />
      ))}
    </Carousel>
  );
};

export default Slider;
