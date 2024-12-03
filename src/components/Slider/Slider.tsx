// import React from "react";
// import { Carousel } from "antd";
// import HotRecipes from "./HotRecipes"; 
// import "../../css/custom-carousel.css";

// const Slider = () => {
//   return (
//     <>
//       <Carousel
//         className="custom-carousel"
//         arrows
//         autoplay
//         draggable={true}
//         infinite={true}
        
//       >
//        <HotRecipes />

//       </Carousel>
//     </>
//   );
// };

// export default Slider;



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
    return <div>Loading...</div>; // Hiển thị trạng thái loading
  }

  if (error) {
    return <div>Error: {error}</div>; // Hiển thị lỗi nếu có
  }

  return (
    <Carousel
      className="custom-carousel"
      arrows
      autoplay
      draggable={true}
      infinite={true}
    >
      {hotRecipes.map((recipe) => (
        <HotRecipes key={recipe._id} recipe={recipe} />
      ))}
    </Carousel>
  );
};

export default Slider;
