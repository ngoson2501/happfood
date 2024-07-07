// import React from "react";
// import { Carousel } from "antd";
// import "../../css/custom-carousel.css";

// const Slider = () => {
//   return (
//     <>
//       <Carousel
//         className=" custom-carousel"
//         arrows
//         autoplay
//         draggable={true}
//         infinite={true}
//       >
//         <div className=" w-full h-[626px] flex justify-center items-center ">
//           <div className=" h-full relative  flex flex-row  justify-center items-center ">
//             <div className="bg-[#E7FAFE]  w-[100%] h-full rounded-l-[50px]">
//               <div className=" w-full h-full flex flex-col justify-between  gap-[40px] p-[50px]">
//                 <div className="bg-white w-fit flex gap-3 px-[20px] py-[10px] rounded-full  justify-center items-center  ">
//                   <img src="/icon/note.svg" alt="" />
//                   <p className="text-[14px] font-[600] font-Inter">
//                     Công thức Hot
//                   </p>
//                 </div>

//                 <p
//                   className="max-w-[70%] text-[64px] font-[700] font-Inter"
//                   style={{ lineHeight: "1" }}
//                 >
//                   Cánh gà cay thơm ngon
//                 </p>
//                 <p
//                   style={{ color: "rgba(0, 0, 0, 60%)" }}
//                   className="font-Inter text-[15px]"
//                 >
//                   Cánh gà được tẩm ướp kỹ lưỡng với các gia vị cay như ớt, tiêu,
//                   và sốt cay, sau đó được nướng hoặc chiên giòn. Lớp ngoài của
//                   cánh gà giòn rụm, trong khi thịt bên trong mềm mịn, đậm đà
//                   hương vị cay nồng
//                 </p>
//                 <div className="flex gap-[20px]">
//                   <div
//                     className="px-[15px] gap-2 py-[7px] flex justify-center items-center rounded-full"
//                     style={{ backgroundColor: "rgba(0, 0, 0, 5%)" }}
//                   >
//                     <img src="icon/Timer.svg" alt="Timer" />
//                     <p>30p</p>
//                   </div>
//                   <div
//                     className="px-[15px] gap-2 py-[7px] flex justify-center items-center rounded-full"
//                     style={{ backgroundColor: "rgba(0, 0, 0, 5%)" }}
//                   >
//                     <img src="icon/ForkKnife.svg" alt="ForkKnife" />
//                     <p>Chicken</p>
//                   </div>
//                 </div>
//                 <div className="flex justify-between   ">
//                   <div className=" w-fit h-[45px] flex gap-3">
//                     <img
//                       className="object-contain object-center"
//                       src="icon/avata.png"
//                       alt="avata"
//                     />
//                     <span className="flex flex-col justify-center font-Inter">
//                       <p className="font-[700] text-[15px] ">Ngo Son</p>
//                       <p style={{ color: "rgba(0, 0, 0, 60%)" }}>15/3/2024</p>
//                     </span>
//                   </div>
//                   <div className="bg-black w-fit flex justify-center items-center gap-4 cursor-pointer rounded-[10px] py-[12px] px-[30px]">
//                     <p className="text-white w-fit font-Inter font-[500]">
//                       View Recipes
//                     </p>
//                     <img src="icon/PlayCircle.svg" alt="PlayCircle" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-slate-500 w-[100%] h-full rounded-r-[50px] relative overflow-hidden">
//               <img
//                 className="w-full h-full object-cover object-center absolute inset-0"
//                 src="images/food-img/canh-ga-cay-thom-ngon.png"
//                 alt="food"
//               />
//             </div>
//             <img
//               className="absolute top-[50px]"
//               src="/images/Badge.svg"
//               alt="Badge"
//             />
//           </div>
//         </div>

//         <div className=" w-full h-[626px] flex justify-center items-center">
//           <div className=" h-full relative  flex flex-row  justify-center items-center ">
//             <div className="bg-[#E7FAFE]  w-[100%] h-full rounded-l-[50px]">
//               <div className=" w-full h-full flex flex-col gap-[40px]  justify-between p-[50px]">
//                 <div className="bg-white w-fit flex gap-3 px-[20px] py-[10px] rounded-full  justify-center items-center  ">
//                   <img src="/icon/note.svg" alt="" />
//                   <p className="text-[14px] font-[600] font-Inter">
//                     Công thức Hot
//                   </p>
//                 </div>

//                 <p
//                   className="max-w-[70%] text-[64px] font-[700] font-Inter"
//                   style={{ lineHeight: "1" }}
//                 >
//                   Mì xào Rau Củ
//                 </p>
//                 <p
//                   style={{ color: "rgba(0, 0, 0, 60%)" }}
//                   className="font-Inter text-[15px]"
//                 >
//                   Món ăn này là một sự pha trộn hoàn hảo của các loại rau củ
//                   tươi ngon như ớt chuông, cà rốt, bắp cải, và đậu hà lan, tất
//                   cả được xào cùng với mì.
//                 </p>
//                 <div className="flex gap-[20px]">
//                   <div
//                     className="px-[15px] gap-2 py-[7px] flex justify-center items-center rounded-full"
//                     style={{ backgroundColor: "rgba(0, 0, 0, 5%)" }}
//                   >
//                     <img src="icon/Timer.svg" alt="Timer" />
//                     <p>30p</p>
//                   </div>
//                   <div
//                     className="px-[15px] gap-2 py-[7px] flex justify-center items-center rounded-full"
//                     style={{ backgroundColor: "rgba(0, 0, 0, 5%)" }}
//                   >
//                     <img src="icon/ForkKnife.svg" alt="ForkKnife" />
//                     <p>Chicken</p>
//                   </div>
//                 </div>
//                 <div className="flex justify-between    ">
//                   <div className=" w-fit h-[45px] flex gap-3">
//                     <img
//                       className="object-contain object-center"
//                       src="icon/avata.png"
//                       alt="avata"
//                     />
//                     <span className="flex flex-col justify-center font-Inter">
//                       <p className="font-[700] text-[15px] ">Layla</p>
//                       <p style={{ color: "rgba(0, 0, 0, 60%)" }}>20/6/2024</p>
//                     </span>
//                   </div>
//                   <div className="bg-black w-fit flex justify-center items-center gap-4 cursor-pointer rounded-[10px] py-[12px] px-[30px]">
//                     <p className="text-white w-fit font-Inter font-[500]">
//                       View Recipes
//                     </p>
//                     <img src="icon/PlayCircle.svg" alt="PlayCircle" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-slate-500 w-[100%] h-full rounded-r-[50px] relative overflow-hidden">
//               <img
//                 className="w-full h-full object-cover object-center absolute inset-0"
//                 src="images/food-img/mi-xao.jpeg"
//                 alt="food"
//               />
//             </div>
//             <img
//               className="absolute top-[50px]"
//               src="/images/Badge.svg"
//               alt="Badge"
//             />
//           </div>
//         </div>

//         <div className=" w-full h-[626px] flex justify-center items-center">
//           <div className=" h-full relative  flex flex-row  justify-center items-center ">
//             <div className="bg-[#E7FAFE]  w-[100%] h-full rounded-l-[50px]">
//               <div className=" w-full h-full flex flex-col gap-[40px]  justify-between p-[50px]">
//                 <div className="bg-white w-fit flex gap-3 px-[20px] py-[10px] rounded-full  justify-center items-center  ">
//                   <img src="/icon/note.svg" alt="" />
//                   <p className="text-[14px] font-[600] font-Inter">
//                     Công thức Hot
//                   </p>
//                 </div>

//                 <p
//                   className="max-w-[70%] text-[64px] font-[700] font-Inter"
//                   style={{ lineHeight: "1" }}
//                 >
//                   Há cảo
//                 </p>
//                 <p
//                   style={{ color: "rgba(0, 0, 0, 60%)" }}
//                   className="font-Inter text-[15px]"
//                 >
//                   Há cảo là một món ăn được yêu thích trong nhiều nền ẩm thực.
//                   Những chiếc bánh nhỏ xinh này có thể được nhồi đầy với nhiều
//                   nguyên liệu khác nhau, bao gồm thịt, rau củ, và hải sản, khiến
//                   chúng trở nên cực kỳ đa dạng.
//                 </p>
//                 <div className="flex gap-[20px]">
//                   <div
//                     className="px-[15px] gap-2 py-[7px] flex justify-center items-center rounded-full"
//                     style={{ backgroundColor: "rgba(0, 0, 0, 5%)" }}
//                   >
//                     <img src="icon/Timer.svg" alt="Timer" />
//                     <p>30p</p>
//                   </div>
//                   <div
//                     className="px-[15px] gap-2 py-[7px] flex justify-center items-center rounded-full"
//                     style={{ backgroundColor: "rgba(0, 0, 0, 5%)" }}
//                   >
//                     <img src="icon/ForkKnife.svg" alt="ForkKnife" />
//                     <p>Chicken</p>
//                   </div>
//                 </div>
//                 <div className="flex justify-between   ">
//                   <div className=" w-fit h-[45px] flex gap-3">
//                     <img
//                       className="object-contain object-center"
//                       src="icon/avata.png"
//                       alt="avata"
//                     />
//                     <span className="flex flex-col justify-center font-Inter">
//                       <p className="font-[700] text-[15px] ">Jonh Smith</p>
//                       <p style={{ color: "rgba(0, 0, 0, 60%)" }}>27/7/2024</p>
//                     </span>
//                   </div>
//                   <div className="bg-black w-fit flex justify-center items-center gap-4 cursor-pointer rounded-[10px] py-[12px] px-[30px]">
//                     <p className="text-white w-fit font-Inter font-[500]">
//                       View Recipes
//                     </p>
//                     <img src="icon/PlayCircle.svg" alt="PlayCircle" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-slate-500 w-[100%] h-full rounded-r-[50px] relative overflow-hidden">
//               <img
//                 className="w-full h-full object-cover object-center absolute inset-0"
//                 src="images/food-img/ha-cao.jpeg"
//                 alt="food"
//               />
//             </div>
//             <img
//               className="absolute top-[50px]"
//               src="/images/Badge.svg"
//               alt="Badge"
//             />
//           </div>
//         </div>
//       </Carousel>
//     </>
//   );
// };

// export default Slider;






// import React from "react";
// import { Carousel } from "antd";
// import HotRecipes from "./HotRecipes"; 
// import "../../css/custom-carousel.css";

// const Slider = () => {
//   return (
//     <>
//       <Carousel
//         className=" custom-carousel"
//         arrows
//         autoplay
//         draggable={true}
//         infinite={true}
//       >
//        <HotRecipes></HotRecipes>
//        {/* <HotRecipes></HotRecipes>
//        <HotRecipes></HotRecipes>
//        <HotRecipes></HotRecipes> */}
       

//       </Carousel>
//     </>
//   );
// };

// export default Slider;





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
       {/* <HotRecipes />
       <HotRecipes />
       <HotRecipes /> */}
      </Carousel>
    </>
  );
};

export default Slider;
