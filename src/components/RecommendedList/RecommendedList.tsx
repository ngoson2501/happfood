import Recipes_2 from "../Recipes/Recipes_2";

const RecommendedList = () => {
  return (
    <>
      <div className="flex flex-col mt-[180px] gap-[90px]">
        <div className="font-Inter  flex justify-center items-center  gap-[50px]">
          <p className="w-[100%] font-[600] text-[50px]" style={{ lineHeight: "1.2" }}>
            Try this delicious recipe to make your day
          </p>
          <p style={{ color: "rgba(0, 0, 0, 60%)" }} className="w-[100%] font-[300]">
            Try this delicious recipe to make your day. Whether you are cooking
            for yourself, your family, or friends, this dish is sure to bring
            joy and satisfaction to everyone at the table.
          </p>
        </div>
        <div className=" w-full h-fit flex flex-wrap gap-[40px] justify-center items-center">
          <Recipes_2></Recipes_2>
          <Recipes_2></Recipes_2>
          <Recipes_2></Recipes_2>
          <Recipes_2></Recipes_2>
          <Recipes_2></Recipes_2>
          <Recipes_2></Recipes_2>
          <Recipes_2></Recipes_2>
          <Recipes_2></Recipes_2>
          <Recipes_2></Recipes_2>
          <Recipes_2></Recipes_2>
        </div>
      </div>
    </>
  );
};

export default RecommendedList;
