


"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AuthorRecipesProvider } from "@/context/AuthorRecipesContext";
import { useSearchParams } from "next/navigation";
import useRecipe from "../../../../hooks/useRecipe";
import useUserInfo from "../../../../hooks/useUserInfo";
// import { useUser } from '@/context/User-provider';
import Ingredients from "@/components/Ingredients/Ingredients";
import OtherRecipe from "@/components/OtherRecipe/OtherRecipe";
import Directions from "@/components/Directions/Directions";
import AuthorRecipes from "@/components/AuthorRecipes/AuthorRecipes";
//import NutritionInformation from "@/components/NutritionInformation/NutritionInformation";
import FoodDescription from "@/components/FoodDescription/FoodDescription";
import MediaComponent from "@/components/MediaComponentProps/MediaComponentProps";




// type User = {
//   avatar: string;
//   username: string;
// };



const DetailRecipe = () => {

  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // Lấy id từ query
  // Sử dụng hook để fetch dữ liệu
  const { recipe, loading, error } = useRecipe(id);
  // // context để lấy thông tin người dùng
  // const infoUser = useUser();
  const { userInfo} = useUserInfo(recipe?.user ?? null);

  

  console.log("check avatar nguoi dung:", userInfo?.avatar)


  const formatCookTime = (cookTime: string) => {
    // Tách giờ và phút từ chuỗi
    const [hours, minutes] = cookTime.split(":").map(Number);
  
    // Tạo định dạng hiển thị
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else {
      return `${minutes} minutes`;
    }
  };

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0
    const year = date.getFullYear(); // Lấy năm đầy đủ
    return `${day}/${month}/${year}`;
  }
  



  if (loading){
    return(
      <>
       <div className=" h-screen flex items-center justify-center w-full">
          <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
              
                  <svg fill='none' className="w-6 h-6 lg:w-10 lg:h-10 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
                    <path clipRule='evenodd'
                      d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
                      fill='currentColor' fillRule='evenodd' />
                  </svg>

            
            <div className="lg:text-[20px]">Loading ...</div>
          </div>
        </div>
      </>
    )
  } 

  if (error) return <p>Error: {error}</p>;
  if (!recipe) return <p>No recipe found.</p>;






  return (
    <>
      <div className="bg-white w-full  flex gap-[20px] flex-col lg:px-[100px] lg:pt-[50px]">
        
        
        
        
        <div className="w-full gap-5 flex flex-col xl:flex-row items-center justify-center aspect-w-16 aspect-h-9">
          {/* <div className="bg-black w-full xl:w-2/3 h-[300px] lg:h-[450px]">

            <video className="bg-black w-full h-full" controls>
              <source
                src="/videos/copy_2F59F3D5-B0A6-471A-BE61-174FB71DE42A.MOV"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

          </div> */}

          <MediaComponent 
            // src="/videos/copy_2F59F3D5-B0A6-471A-BE61-174FB71DE42A.MOV"
            // src="/images/food-img/ha-cao.jpeg"
            src={recipe?.media || "/images/default_image.png"}
            // isVideo={false}
          />
          
          {/* <MediaComponent src="/images/background.png" isVideo={false} alt="Example image" /> */}
         
           <AuthorRecipesProvider>
                <AuthorRecipes idAuthorRecipe={userInfo?.id || ""}></AuthorRecipes>
           </AuthorRecipesProvider>
          
        </div>





        <div className="bg-white flex flex-col xl:flex-row  gap-5">
          <div className=" h-fit xl:w-2/3 px-[12px] lg:px-0 flex flex-col  ">

          

              <FoodDescription
                name = {recipe?.name}
                description = {recipe?.description}
              ></FoodDescription>
              {/* <NutritionInformation></NutritionInformation> */}

         





              <div className="flex justify-between flex-wrap-reverse  gap-[30px] lg:gap-0 lg:justify-between lg:items-center py-3">
                <div className=" w-fit flex justify-center items-center gap-1 lg:gap-3">
                  <Image
                    className="object-cover rounded-full w-[40px] h-[40px] lg:w-[45px] lg:h-[45px]"
                    //src="/images/IMG_8991.jpg"
                    src={userInfo?.avatar ?? '/icon/default_avatar.png'}
                    alt="avata"
                    width={60}
                    height={60}
                    quality={100} // Điều chỉnh chất lượng lên mức cao nhất
                  />

                  <span className="flex text-[14px] lg:text-[15px] flex-col justify-center font-Inter">
                    <p className="font-[700]">{userInfo?.username}</p>
                    <p style={{ color: "rgba(0, 0, 0, 60%)" }}>
                      {recipe?.createdAt ? formatDate(recipe.createdAt) : "No date available"}
                    </p>
                  </span>
                </div>



                <div className="flex flex-wrap-reverse gap-2 lg:gap-5">

                <div className="gap-1 py-[5px]  lg:gap-2 lg:py-[7px] flex  items-center rounded-full">
                  <Image
                    className="w-[25px] h-[25px] "
                    src="/icon/Timer.svg"
                    alt="Timer"
                    width={16}
                    height={16}
                  />
                  <p
                    className="text-[14px] lg:text-[15px] text-[#004C99]"
                    //style={{ color: "rgba(0, 0, 0, 60%)" }}
                  >
                    {formatCookTime(recipe?.cookTime)}
                  </p>
                </div>

                <div className=" gap-1 py-[5px]  lg:gap-2 lg:py-[7px] flex justify-center items-center rounded-full">
                  <Image
                    className="w-[25px] h-[25px] "
                    src="/icon/ForkKnife.svg"
                    alt="ForkKnife"
                    width={16}
                    height={16}
                  />
                  <p
                    className="text-[14px] lg:text-[15px]"
                    style={{ color: "rgba(0, 0, 0, 60%)" }}
                  >
                    {recipe?.hashtags.map((hashtag, index) => (
                      <span key={hashtag.label} className="px-[3px]">
                        <span className="underline text-[#004C99]">{hashtag.label}</span>
                        {/* Kiểm tra nếu không phải phần tử cuối cùng thì thêm dấu phẩy */}
                        {index < recipe?.hashtags.length - 1 && (
                          <span className="text-red-500">{","}</span>
                        )}
                      </span>
                    ))}


                  </p>
                </div>

                </div>




              </div>


        

              <Ingredients
                ingredients= {recipe?.ingredients}
              ></Ingredients>
              <Directions
                directions= {recipe?.directions}
                videoLink = {recipe?.videoLink}
              ></Directions>


            {/* <div className="bg-black w-full  h-fit">
                    <Ingredients></Ingredients>
                    <Directions></Directions>
            </div> */}



          </div>




            <div className="  w-full xl:block xl:w-1/3 h-fit">
                <div className=" hidden xl:flex w-full h-[380px] relative">
                    <Image
                        className="w-auto h-auto max-w-full max-h-full object-contain object-center absolute inset-0 m-auto transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                        src="/images/banners/Ads.png"
                        alt="Pancake"
                        width={290}
                        height={280}
                    />
                </div>


                <div className=" flex flex-col w-full  h-[330px] lg:h-[465px] xl:h-[940px]">
                    <p className="px-[12px] lg:px-[0px] xl:px-[30px] py-[20px] text-[20px] lg:text-[30px] font-Inter font-[600]">Other Recipe</p>
                    <OtherRecipe></OtherRecipe>
            
                </div>

            </div>

            




        </div>



        {/* <div className="bg-white w-full h-fit flex flex-col xl:flex-row gap-5 ">

                <div className="bg-red-300 w-full xl:w-2/3 h-fit">
                <Ingredients></Ingredients>
                </div>
                <div className=" w-full xl:w-1/3 h-[260px] lg:h-[365px] xl:h-[750px]">
              
                     <OtherRecipe></OtherRecipe>
                
                </div>

        </div> */}

        





         
      </div>
    </>
  );
};

export default DetailRecipe;







