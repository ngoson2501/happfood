// import Link from "next/link";

// export default function SettingLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="bg-green-500 w-full h-screen flex justify-center items-center">
//       <div
//         className="bg-white w-[80%] h-[600px] rounded-lg flex"
//         style={{
//           boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
//         }}
//       >
//         {/* Sidebar */}
//         <div className="bg-red-400 w-1/3 h-full p-4">
//           <ul className="space-y-4 text-white">
//             <li>
//               <Link href="/profile" className="hover:underline">
//                 Profile
//               </Link>
//             </li>
//             <li>
//               <Link href="/profile/change_password" className="hover:underline">
//                 Change Password
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div className="bg-yellow-500 w-2/3 h-full p-4 overflow-auto">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }


"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"; // Sử dụng hook để lấy URL hiện tại

export default function SettingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Lấy pathname hiện tại

  return (
    <div className=" w-full  flex justify-center mt-9 ">
      <div
        className="bg-white w-[90%] h-fit lg:w-[80%]  rounded-lg flex flex-col lg:flex-row"
        style={{
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Sidebar */}
        <div className=" w-full  lg:w-1/3 h-fit p-4">
          <ul className="w-full text-gray-400 flex gap-5 items-center lg:items-start flex-row lg:flex-col">
            <li className=" h-full">
              <Link
                href="/profile"
                className={` hover:underline ${
                  pathname === "/profile" ? "text-black font-bold" : ""
                }`}
              >
                Profile
              </Link>
            </li>
            <li className=" h-full">
              <Link
                href="/profile/change_password"
                className={`hover:underline ${
                  pathname === "/profile/change_password" ? "text-black font-bold" : ""
                }`}
              >
                Password
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-2/3 h-fit p-4 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
