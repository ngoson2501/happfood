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

const DetailRecipe = () => {
  return (
    <>
      <div className="bg-green-400 w-full h-[2000px] flex gap-[20px] flex-col lg:px-[100px] lg:pt-[50px]">
        
        
        
        
        <div className="bg-black sticky z-50 top-[80px] w-full flex flex-col xl:flex-row items-center justify-center aspect-w-16 aspect-h-9">
          <video className="w-full xl:w-2/3 h-[300px] lg:h-[450px]" controls>
            <source
              src="/videos/copy_2F59F3D5-B0A6-471A-BE61-174FB71DE42A.MOV"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="bg-yellow-300 w-full h-full xl:w-1/3 "></div>
        </div>





        <div className="bg-red-400 xl:w-2/3 flex flex-col  gap-5">
          <div className="space-y-4">
            <details
              className="group [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5   p-3 text-gray-900">
                {/* <h2 className="font-medium">
                    Nutrition Information
                </h2> */}
                <p
                  className="text-[25px] font-Inter font-[500] line-clamp-2 truncate whitespace-normal text-clip overflow-hidden"
                  style={{ lineHeight: "1.1" }}
                >
                  Black Currant Ice Cream bsfdbfj fsbjfs fsbhs fsjbv vsj v sdjsd
                  sdjhbsfd vbsjhbvs bcsj
                </p>

                <svg
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p className="mt-4 px-3 leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                veritatis molestias culpa in, recusandae laboriosam neque
                aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
              </p>
            </details>
          </div>

          <div className="flex justify-between lg:justify-start lg:gap-[60px]  items-center px-3">
            <div className="w-fit flex justify-center items-center gap-1 lg:gap-3">
              <Image
                className="object-cover rounded-full w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]"
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

          <div className="space-y-4">
            <details
              className="group [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5   p-3 text-gray-900">
                <h2 className="font-medium">Nutrition Information</h2>

                <svg
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              {/* <p className="mt-4 px-4 leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                veritatis molestias culpa in, recusandae laboriosam neque
                aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
              </p> */}

              <div className="mt-4 px-3 leading-relaxed text-gray-700">
                <table className="w-full text-left text-gray-700">
                  <tbody>
                    <tr className="">
                      <td className="py-2">Calories</td>
                      <td className="py-2 text-right">219.9 kcal</td>
                    </tr>
                    <tr className="">
                      <td className="py-2">Total Fat</td>
                      <td className="py-2 text-right">10.7 g</td>
                    </tr>
                    <tr className="">
                      <td className="py-2">Protein</td>
                      <td className="py-2 text-right">7.9 g</td>
                    </tr>
                    <tr className="">
                      <td className="py-2">Carbohydrate</td>
                      <td className="py-2 text-right">22.3 g</td>
                    </tr>
                    <tr className="">
                      <td className="py-2">Cholesterol</td>
                      <td className="py-2 text-right">37.4 mg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </details>
          </div>




            {/* <div className="bg-blue-400 xl:w-1/3 h-[400px]"></div> */}




        </div>
      </div>
    </>
  );
};

export default DetailRecipe;
