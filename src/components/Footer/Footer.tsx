// const Footer = () => {

//     const scrollToTop = () => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       };
//   return (
//     <>
//       <footer className="bg-gray-100 mt-[170px]">
//         <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
//           <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
//             <button
//               className="inline-block rounded-full bg-black p-2 text-white shadow transition hover:bg-slate-600 sm:p-3 lg:p-4"
//               onClick={scrollToTop}
//             >
//               <span className="sr-only">Back to top</span>

//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//           </div>

//           <div className="lg:flex lg:items-end lg:justify-between">
//             <div>
//               <div className=" flex justify-center lg:justify-start">
//                 <span className="font-lobster italic text-[25px] font-[600] cursor-pointer">HappyFood</span>
//               </div>

//               <p className="mx-auto mt-6 max-w-md text-center font-Inter leading-relaxed text-gray-500 lg:text-left">
//                 Welcome to HappyFood, your ultimate destination for home-cooked
//                 meal inspiration!
//               </p>
//             </div>

//             <ul className="mt-12 font-Andika flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
//               <li>
//                 <a
//                   className="text-gray-700 transition hover:text-gray-700/75"
//                   href="#"
//                 >
//                   {" "}
//                   Recipes{" "}
//                 </a>
//               </li>

//               <li>
//                 <a
//                   className="text-gray-700 transition hover:text-gray-700/75"
//                   href="#"
//                 >
//                   {" "}
//                   Blog{" "}
//                 </a>
//               </li>

//               <li>
//                 <a
//                   className="text-gray-700 transition hover:text-gray-700/75"
//                   href="#"
//                 >
//                   {" "}
//                   Contact{" "}
//                 </a>
//               </li>

//               <li>
//                 <a
//                   className="text-gray-700 transition hover:text-gray-700/75"
//                   href="#"
//                 >
//                   {" "}
//                   About us{" "}
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <ul className=" flex justify-center lg:justify-end items-center gap-[40px] mt-12">
//                 <li className="cursor-pointer ">
//                     <img src="icon/001-facebook.svg" alt="icon-facebook" />
//                 </li>
//                 <li className="cursor-pointer ">
//                     <img src="icon/003-twitter.svg" alt="icon-twitter" />
//                 </li>
//                 <li className="cursor-pointer ">
//                     <img src="icon/004-instagram.svg" alt="icon-instagram" />
//                 </li>
//             </ul>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;



import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-white mt-[170px]  ">
        <div className="relative mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8 lg:pt-24 flex flex-col justify-between">
          <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <button
              className="inline-block rounded-full bg-black p-2 text-white shadow transition hover:bg-slate-600 sm:p-3 lg:p-4"
              onClick={scrollToTop}
            >
              <span className="sr-only">Back to top</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="flex justify-center lg:justify-start">
                <span className="font-lobster italic text-[25px] font-[600] cursor-pointer">
                  HappyFood
                </span>
              </div>

              <p className="mx-auto mt-6 max-w-md text-center font-Inter leading-relaxed text-gray-500 lg:text-left">
                Welcome to HappyFood, your ultimate destination for home-cooked
                meal inspiration!
              </p>
            </div>

            <ul className="mt-12 font-Andika flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                  Recipes
                </a>
              </li>
              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                  Contact
                </a>
              </li>
              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#">
                  About us
                </a>
              </li>
            </ul>
          </div>

          <ul className=" lg:border-t pb-[40px] lg:py-[50px]  flex justify-center lg:justify-end items-center gap-[40px] mt-12">
            <li className="cursor-pointer">
              <img src="icon/001-facebook.svg" alt="icon-facebook" />
            </li>
            <li className="cursor-pointer">
              <img src="icon/003-twitter.svg" alt="icon-twitter" />
            </li>
            <li className="cursor-pointer">
              <img src="icon/004-instagram.svg" alt="icon-instagram" />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
