// import Image from "next/image";

// const Step = ()=>{
//     return(

//         <>
        
//             <div>

//                     <ul className="mt-4  pb-3 leading-relaxed text-gray-700 list-disc list-inside t">
                    
//                     <li className="border-b-[1px] border-b-[#e1e1e1] py-4 flex flex-col " >
                        
//                         <div className="text-black  font-[500]  py-1 rounded flex gap-[15px] items-center">
//                             <div className=" bg-black w-2 h-2  rounded-full  "></div> 
//                             <p>1. Preliminary processing of grapes</p>
//                         </div> 
//                         <p className="text-[15px] font-[300]" style={{ color: "rgba(0, 0, 0, 40%)" }}>
//                             You will first put 2 tablespoons of raisins in a bowl of water and soak for 10 minutes.
//                         </p>


//                         <div className="bg-green-200 w-full h-fit flex justify-center">
//                         <div className="bg-red-200 w-[380px]  flex gap-1 flex-wrap">
//                             <Image
//                                 className="w-[100px] h-[100px] rounded-[5px] object-cover object-center transition-transform duration-500 ease-in-out transform group-hover:scale-105"
//                                 src="/images/directions/recipe34879-cook-step1-636675046932542406.jpg"
//                                 alt="Pancake"
//                                 width={100}
//                                 height={100}
//                             />
//                             <Image
//                                 className="w-[100px] h-[100px] rounded-[5px] object-cover object-center transition-transform duration-500 ease-in-out transform group-hover:scale-105"
//                                 src="/images/directions/recipe34879-cook-step1-636675046934792851.jpg"
//                                 alt="Pancake"
//                                 width={100}
//                                 height={100}
//                             />
//                             <Image
//                                 className="w-[100px] h-[100px] rounded-[5px] object-cover object-center transition-transform duration-500 ease-in-out transform group-hover:scale-105"
//                                 src="/images/directions/recipe34879-cook-step1-636675046935132610.jpg"
//                                 alt="Pancake"
//                                 width={100}
//                                 height={100}
//                             />
//                             <Image
//                                 className="w-[100px] h-[100px] rounded-[5px] object-cover object-center transition-transform duration-500 ease-in-out transform group-hover:scale-105"
//                                 src="/images/directions/recipe34879-cook-step1-636675046941182926.jpg"
//                                 alt="Pancake"
//                                 width={100}
//                                 height={100}
//                             />
//                             <Image
//                                 className="w-[100px] h-[100px] rounded-[5px] object-cover object-center transition-transform duration-500 ease-in-out transform group-hover:scale-105"
//                                 src="/images/directions/recipe34879-cook-step1-636675046941182926.jpg"
//                                 alt="Pancake"
//                                 width={100}
//                                 height={100}
//                             />
//                             <Image
//                                 className="w-[100px] h-[100px] rounded-[5px] object-cover object-center transition-transform duration-500 ease-in-out transform group-hover:scale-105"
//                                 src="/images/directions/recipe34879-cook-step1-636675046941182926.jpg"
//                                 alt="Pancake"
//                                 width={100}
//                                 height={100}
//                             />
//                             <Image
//                             className="w-[100px] h-[100px] rounded-[5px] object-cover object-center transition-transform duration-500 ease-in-out transform group-hover:scale-105"
//                             src="/images/directions/recipe34879-cook-step1-636675046941182926.jpg"
//                             alt="Pancake"
//                             width={100}
//                             height={100}
//                         />
//                             <Image
//                                 className="w-[100px] h-[100px] rounded-[5px] object-cover object-center transition-transform duration-500 ease-in-out transform group-hover:scale-105"
//                                 src="/images/directions/recipe34879-cook-step1-636675046941182926.jpg"
//                                 alt="Pancake"
//                                 width={100}
//                                 height={100}
//                             />
                             
//                         </div>

//                         </div>



//                     </li>
//                     </ul>

//             </div>
        
        
//         </>
       
//     )

// }

// export default Step



"use client"; // Add this line at the top

import Image from "next/image";
import { useState, FC } from "react";

const Step: FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div>
        <ul className="mt-4 pb-3 leading-relaxed text-gray-700 list-disc list-inside t">
          <li className="border-b-[1px] border-b-[#e1e1e1] py-4 flex flex-col">
            <div className="text-black font-[500] py-1 rounded flex gap-[15px] items-center">
              <div className="bg-black w-2 h-2 rounded-full"></div>
              <p>1. Preliminary processing of grapes</p>
            </div>
            <p
              className="text-[15px] font-[300]"
              style={{ color: "rgba(0, 0, 0, 40%)" }}
            >
              You will first put 2 tablespoons of raisins in a bowl of water and
              soak for 10 minutes.
            </p>

            <div className="bg-green-200 w-full h-fit flex justify-center">
              <div className="bg-red-200 w-[313px] flex gap-1 flex-wrap">
                {[
                  "/images/directions/recipe34879-cook-step1-636675046932542406.jpg",
                  "/images/directions/recipe34879-cook-step1-636675046934792851.jpg",
                  "/images/directions/recipe34879-cook-step1-636675046935132610.jpg",
                  "/images/directions/recipe34879-cook-step1-636675046941182926.jpg",
                  "/images/directions/recipe34879-cook-step1-636675046935132610.jpg",
                  "/images/directions/recipe34879-cook-step1-636675046941182926.jpg",
                  "/images/directions/recipe34879-cook-step1-636675046935132610.jpg",
                  "/images/directions/recipe34879-cook-step1-636675046941182926.jpg",
                  
                ].map((src, index) => (
                  <Image
                    key={index}
                    className="w-[100px] h-[100px] rounded-[5px] object-cover object-center transition-transform duration-500 ease-in-out transform group-hover:scale-105 cursor-pointer"
                    src={src}
                    alt="Pancake"
                    width={100}
                    height={100}
                    onClick={() => handleImageClick(src)}
                  />
                ))}
              </div>
            </div>

            {selectedImage && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                onClick={handleClose}
              >
                <div className="bg-white p-4 rounded">
                  <Image
                    src={selectedImage}
                    alt="Full Size"
                    width={500}
                    height={500}
                    className="object-contain"
                  />
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Step;
