import React from "react";
import { Carousel } from "antd";
import HotRecipes from "./HotRecipes"; 
import "../../css/custom-carousel.css";

const Slider = () => {
  return (
    <>
      <Carousel
        className="custom-carousel"
        arrows
        autoplay
        draggable={true}
        infinite={true}
        
      >
       <HotRecipes />
       <HotRecipes />
       <HotRecipes />
       <HotRecipes />
      </Carousel>
    </>
  );
};

export default Slider;
