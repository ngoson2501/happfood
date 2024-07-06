import React, { useEffect } from "react";

import Recipes_1 from "../Recipes/Recipes_1";

const RecipeList = () => {
  return (
    <>
      <div className="flex flex-col gap-[114px] mt-[190px]">
        <div className="flex flex-col justify-center font-Inter items-center gap-[22px]">
          <h1 className="text-[20px] xl:text-[40px] font-[700]">
            Những công thức nấu ăn tuyệt vời
          </h1>
          <p
            className="text-[12px] xl:text-[16px] text-center max-w-[700px] font-light"
            style={{ color: "rgba(0, 0, 0, 60%)" }}
          >
            Đây là tổng hợp những công thức nấu ăn tuyệt vời của những người đầu
            bếp chia sẻ ở khắp mọi nơi. Với sự đa dạng từ những cách chế biến và
            nguyên liệu
          </p>
        </div>
        <div className=" w-full h-fit  gap-[10px] lg:gap-[30px]  flex flex-wrap xl:gap-[40px] justify-center lg:justify-between items-center">
          <Recipes_1></Recipes_1>
          <Recipes_1></Recipes_1>
          <Recipes_1></Recipes_1>
          <Recipes_1></Recipes_1>
          <Recipes_1></Recipes_1>
          <Recipes_1></Recipes_1>
          <Recipes_1></Recipes_1>
          <Recipes_1></Recipes_1>
          <Recipes_1></Recipes_1>
        </div>
      </div>
    </>
  );
};

export default RecipeList;
