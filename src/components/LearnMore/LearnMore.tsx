const LearnMore = () => {
  return (
    <>
      <div className=" w-full h-[550px] flex  mt-[175px]">
        <div className=" w-[100%] font-Inter h-full flex flex-col justify-center gap-[40px] ">
          <p className="w-[90%] font-[600] text-[50px]"
          style={{ lineHeight: "1.2" }}>Everyone can be a chef in their own kitchen</p>
          <p style={{ color: "rgba(0, 0, 0, 60%)" }} className="font-[300] w-[80%]">
            With the right ingredients, a dash of creativity, and a sprinkle of
            passion, cooking becomes an art form accessible to all. Whether
            you're following a recipe or experimenting with flavors, the kitchen
            is your canvas, and you are the artist.
          </p>
          <span className="bg-black w-fit rounded-[17px] text-white px-[50px] py-[20px] mt-[70px]">Learn More</span>
        </div>
        <div className="bg-gradient-to-b from-white to-[#E7FAFE] rounded-[30px] w-full h-full relative overflow-hidden flex items-end">
          <img
            className="w-full h-full object-contain absolute bottom-0"
            src="images/banners/banner.svg"
            alt="banner"
          />
          <img
            className="absolute top-[50px] left-8 "
            src="icon/categories/Meat.svg"
            alt="icon-vegetable"
          />
          <img
            className="absolute top-[400px]"
            src="icon/categories/tomato.svg"
            alt="icon-vegetable"
          />
          <img
            className="absolute top-[50px] right-[130px] "
            src="icon/categories/onion.svg"
            alt="icon-vegetable"
          />
          <img
            className="absolute top-[200px] right-[20px] "
            src="icon/categories/Vegan.svg"
            alt="icon-vegetable"
          />
        </div>
      </div>
    </>
  );
};

export default LearnMore;
