"use client";

import { Input, Space } from "antd";
import React from "react";
import Image from "next/image";

import Link from "next/link";
import useLogin from "../../../../hooks/useLogin";

const LoginPage: React.FC = () => {
  const {
    emailOrUsername,
    setEmailOrUsername,
    password,
    setPassword,
    loading,
    handleLogin,
  } = useLogin(); // Sử dụng custom hook

  return (
    <>
      <main className=" w-screen h-screen flex justify-center py-[80px]">
        <div
          className="bg-white w-[80%] h-fit py-[30px] lg:py-0 lg:h-[600px] rounded-lg flex flex-col lg:flex-row"
          style={{
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div className="w-[100%] rounded-l-lg flex justify-center items-center">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
              action=""
              className="w-[80%] h-[80%] flex flex-col justify-center gap-[30px]"
            >
              <h1 className="text-center lg:text-start text-[50px] lg:text-[65px] font-[300] font-Inter">
                Login
              </h1>
              <div>
                <Input
                  placeholder="email or username"
                  className="h-[40px]"
                  value={emailOrUsername}
                  onChange={(e) => setEmailOrUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input.Password
                  placeholder="password"
                  className="h-[40px]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="w-full flex justify-end">
                <Link
                  href="/forgot_password"
                  className="text-[#397ECE] cursor-pointer text-[15px] font-[200] w-fit border-b-[#397ECE] border-b-[0.8px] hover:text-[#0b52a2] hover:border-b-[#0b52a2]"
                >
                  forgot your password
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <div className="bg-black text-white hover:bg-gray-500 cursor-pointer font-[200] w-full lg:w-[60%] h-[45px] rounded-[10px] flex justify-center items-center overflow-hidden">
                  <button type="submit" className="w-full h-full">
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center gap-4">
                <Image
                  className="cursor-pointer"
                  src="/icon/google-icon.png"
                  alt="google-logo"
                  width={36}
                  height={36}
                />
                <Image
                  className="cursor-pointer"
                  src="/icon/facebook-logo.png"
                  alt="facebook-logo"
                  width={36}
                  height={36}
                />
              </div>
              <div className="flex justify-center items-center">
                <Link
                  href="/register"
                  className="bg-white  cursor-pointer hover:underline font-[200] w-full lg:w-[60%] h-[45px]  flex justify-center items-center overflow-hidden"
                >
                  {/* <button type="submit" className="w-full h-full">
                    {loading ? "Logging in..." : "Login"}
                  </button> */}
                  Sign up
                </Link>
              </div>
            </form>
          </div>

          <div className="hidden lg:block w-full h-full  relative rounded-r-[8px] overflow-hidden">
            <Image
              className="z-10 w-full h-full object-cover object-center absolute inset-0"
              src="/images/background.png"
              alt="image_background"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Link
              href="/register"
              className="bg-[#FFCA42] hover:bg-[#ffbe1a] w-fit flex justify-center items-center gap-2 p-[5px] cursor-pointer absolute z-20"
            >
              <p>Sign up</p>
              <Image
                className="object-cover object-center "
                src="/icon/Vector-right.png"
                alt="Vector-right"
                width={30}
                height={15}
              />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;

// "use client";

// import { Input, Space } from "antd";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { GoogleLogin } from "@react-oauth/google"; // Import Google Login mới
// import useLogin from "../../../../hooks/useLogin";

// const LoginPage: React.FC = () => {
//   const {
//     emailOrUsername,
//     setEmailOrUsername,
//     password,
//     setPassword,
//     loading,
//     handleLogin,
//     handleGoogleLogin, // Thêm handler cho Google Login
//   } = useLogin(); // Sử dụng custom hook

//   const handleGoogleError = () => {
//     console.error("Google Login Failed");
//   };

//   return (
//     <>
//       <main className="w-screen h-screen flex justify-center py-[80px]">
//         <div
//           className="bg-white w-[80%] h-fit py-[30px] lg:py-0 lg:h-[600px] rounded-lg flex flex-col lg:flex-row"
//           style={{
//             boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
//           }}
//         >
//           {/* Left Column - Login Form */}
//           <div className="w-[100%] rounded-l-lg flex justify-center items-center">
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 handleLogin(); // Gọi hàm login khi submit
//               }}
//               className="w-[80%] h-[80%] flex flex-col justify-center gap-[30px]"
//             >
//               <h1 className="text-center lg:text-start text-[50px] lg:text-[65px] font-[300] font-Inter">Login</h1>

//               {/* Email or Username Input */}
//               <div>
//                 <Input
//                   placeholder="email or username"
//                   className="h-[40px]"
//                   value={emailOrUsername}
//                   onChange={(e) => setEmailOrUsername(e.target.value)}
//                   required
//                 />
//               </div>

//               {/* Password Input */}
//               <div>
//                 <Input.Password
//                   placeholder="password"
//                   className="h-[40px]"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>

//               {/* Forgot Password Link */}
//               <div className="w-full flex justify-end">
//                 <Link
//                   href="/forgot_password"
//                   className="text-[#397ECE] cursor-pointer text-[15px] font-[200] w-fit border-b-[#397ECE] border-b-[0.8px] hover:text-[#0b52a2] hover:border-b-[#0b52a2]"
//                 >
//                   Forgot your password?
//                 </Link>
//               </div>

//               {/* Submit Button */}
//               <div className="flex justify-center items-center">
//                 <div className="bg-black text-white hover:bg-gray-500 cursor-pointer font-[200] w-full lg:w-[60%] h-[45px] rounded-[10px] flex justify-center items-center overflow-hidden">
//                   <button type="submit" className="w-full h-full">
//                     {loading ? "Logging in..." : "Login"}
//                   </button>
//                 </div>
//               </div>

//               {/* Google Login */}
//               <div className="flex justify-center items-center gap-4">
//                 <GoogleLogin
//                   onSuccess={handleGoogleLogin} // Gọi hàm xử lý khi đăng nhập thành công
//                   onError={handleGoogleError} // Hàm lỗi không có tham số
//                   useOneTap={true} // Tùy chọn sử dụng One Tap
//                   containerProps={{
//                     className: "w-[60%] lg:w-[80%] flex justify-center items-center gap-2", // Áp dụng className qua containerProps
//                   }}
//                 />
//               </div>

//               {/* Sign up Link */}
//               <div className="flex justify-center items-center">
//                 <Link
//                   href="/register"
//                   className="bg-white cursor-pointer hover:underline font-[200] w-full lg:w-[60%] h-[45px] flex justify-center items-center overflow-hidden"
//                 >
//                   Sign up
//                 </Link>
//               </div>
//             </form>
//           </div>

//           {/* Right Column - Background Image and Sign-up Link */}
//           <div className="hidden lg:block w-full h-full relative rounded-r-[8px] overflow-hidden">
//             <Image
//               className="z-10 w-full h-full object-cover object-center absolute inset-0"
//               src="/images/background.png"
//               alt="image_background"
//               fill
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//             />
//             <Link
//               href="/register"
//               className="bg-[#FFCA42] hover:bg-[#ffbe1a] w-fit flex justify-center items-center gap-2 p-[5px] cursor-pointer absolute z-20"
//             >
//               <p>Sign up</p>
//               <Image
//                 className="object-cover object-center"
//                 src="/icon/Vector-right.png"
//                 alt="Vector-right"
//                 width={30}
//                 height={15}
//               />
//             </Link>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default LoginPage;

// "use client";

// import { Input } from "antd";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { GoogleLogin } from "@react-oauth/google";
// import useLogin from "../../../../hooks/useLogin";

// const LoginPage: React.FC = () => {
//   const {
//     emailOrUsername,
//     setEmailOrUsername,
//     password,
//     setPassword,
//     loading,
//     handleLogin,
//     handleGoogleLogin,
//   } = useLogin();

//   return (
//     <main className="w-screen h-screen flex justify-center py-[80px]">
//       <div
//         className="bg-white w-[80%] h-fit py-[30px] lg:py-0 lg:h-[600px] rounded-lg flex flex-col lg:flex-row"
//         style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)" }}
//       >
//         {/* Left Column - Login Form */}
//         <div className="w-[100%] rounded-l-lg flex justify-center items-center">
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               handleLogin();
//             }}
//             className="w-[80%] h-[80%] flex flex-col justify-center gap-[30px]"
//           >
//             <h1 className="text-center lg:text-start text-[50px] lg:text-[65px] font-[300] font-Inter">Login</h1>
//             <Input
//               placeholder="email or username"
//               className="h-[40px]"
//               value={emailOrUsername}
//               onChange={(e) => setEmailOrUsername(e.target.value)}
//               required
//             />
//             <Input.Password
//               placeholder="password"
//               className="h-[40px]"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <div className="w-full flex justify-end">
//               <Link
//                 href="/forgot_password"
//                 className="text-[#397ECE] cursor-pointer text-[15px] font-[200] w-fit border-b-[#397ECE] border-b-[0.8px] hover:text-[#0b52a2] hover:border-b-[#0b52a2]"
//               >
//                 Forgot your password?
//               </Link>
//             </div>
//             <div className="bg-black text-white hover:bg-gray-500 cursor-pointer font-[200] w-full lg:w-[60%] h-[45px] rounded-[10px] flex justify-center items-center">
//               <button type="submit" className="w-full h-full">
//                 {loading ? "Logging in..." : "Login"}
//               </button>
//             </div>
//             <div className="flex justify-center items-center gap-4">
//               <GoogleLogin
//                 onSuccess={handleGoogleLogin}
//                 onError={() => console.error("Google Login Failed")}
//                 useOneTap={true}
//                 containerProps={{
//                   className: "w-[60%] lg:w-[80%] flex justify-center items-center gap-2",
//                 }}
//               />
//             </div>
//             <div className="flex justify-center items-center">
//               <Link
//                 href="/register"
//                 className="bg-white cursor-pointer hover:underline font-[200] w-full lg:w-[60%] h-[45px] flex justify-center items-center"
//               >
//                 Sign up
//               </Link>
//             </div>
//           </form>
//         </div>
//         <div className="hidden lg:block w-full h-full relative rounded-r-[8px] overflow-hidden">
//           <Image
//             className="z-10 w-full h-full object-cover object-center absolute inset-0"
//             src="/images/background.png"
//             alt="image_background"
//             fill
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           />
//           <Link
//             href="/register"
//             className="bg-[#FFCA42] hover:bg-[#ffbe1a] w-fit flex justify-center items-center gap-2 p-[5px] cursor-pointer absolute z-20"
//           >
//             <p>Sign up</p>
//             <Image
//               className="object-cover object-center"
//               src="/icon/Vector-right.png"
//               alt="Vector-right"
//               width={30}
//               height={15}
//             />
//           </Link>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default LoginPage;
