// const detailRecipe = ()=>{
//     return(
//         <>

//            <div className="bg-green-500  w-full h-[2000px] flex gap-[20px] flex-col lg:px-[100px] lg:pt-[50px]">
//                 <div className="bg-red-300 w-full h-[500px] flex flex-col">

//                 </div>
//            </div>

//         </>
//     )
// }

// export default detailRecipe



import Image from "next/image";
import Ingredients from "@/components/Ingredients/Ingredients";
import OtherRecipe from "@/components/OtherRecipe/OtherRecipe";
import Directions from "@/components/Directions/Directions";
import AuthorRecipes from "@/components/AuthorRecipes/AuthorRecipes";
import NutritionInformation from "@/components/NutritionInformation/NutritionInformation";
import FoodDescription from "@/components/FoodDescription/FoodDescription";
import MediaComponent from "@/components/MediaComponentProps/MediaComponentProps";
const DetailRecipe = () => {
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

          <MediaComponent src="/videos/copy_2F59F3D5-B0A6-471A-BE61-174FB71DE42A.MOV" isVideo={true} />
          
          {/* <MediaComponent src="/images/background.png" isVideo={false} alt="Example image" /> */}
         
           
          <AuthorRecipes></AuthorRecipes>
        </div>





        <div className="bg-white flex flex-col xl:flex-row  gap-5">
          <div className=" h-fit xl:w-2/3 px-[12px] lg:px-0 flex flex-col  ">

          

              <FoodDescription></FoodDescription>
              <NutritionInformation></NutritionInformation>

         





              <div className="flex justify-between lg:justify-start lg:gap-[60px]  items-center py-3">
                <div className="w-fit flex justify-center items-center gap-1 lg:gap-3">
                  <Image
                    className="object-cover rounded-full w-[40px] h-[40px] lg:w-[45px] lg:h-[45px]"
                    src="/images/IMG_8991.jpg"
                    alt="avata"
                    width={60}
                    height={60}
                    quality={100} // Điều chỉnh chất lượng lên mức cao nhất
                  />

                  <span className="flex text-[14px] lg:text-[15px] flex-col justify-center font-Inter">
                    <p className="font-[700]">Ngo Son</p>
                    <p style={{ color: "rgba(0, 0, 0, 60%)" }}>15/3/2024</p>
                  </span>
                </div>

                <div className=" gap-1 py-[5px]  lg:gap-2 lg:py-[7px] flex justify-center items-center rounded-full">
                  <Image
                    className="w-[25px] h-[25px] "
                    src="/icon/Timer.svg"
                    alt="Timer"
                    width={16}
                    height={16}
                  />
                  <p
                    className="text-[14px] lg:text-[15px]"
                    style={{ color: "rgba(0, 0, 0, 60%)" }}
                  >
                    30p
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
                    sweet
                  </p>
                </div>
              </div>


        

              <Ingredients></Ingredients>
              <Directions></Directions>


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
