
"use client";
import { useUser } from "@/context/User-provider";
import { useState } from "react";
import { Input, message } from "antd";

export default function ChangePasswordPage() {
  const infoUser = useUser();  // Lấy thông tin người dùng từ context hoặc provider
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Hiển thị loading

    if (!infoUser?.email) {
      message.error("Email is required");
      return;
    }

    // Gửi yêu cầu PATCH
    const response = await fetch("/api/updatePassword", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: infoUser.email,  // Gửi email người dùng vào body yêu cầu
        currentPassword,
        newPassword,
        confirmPassword,
      }),
    });

    const data = await response.json();

    if (data.success) {
      message.success(data.message);
      setIsLoading(false); // Ẩn loading
    } else {
      message.error(data.message);
    }
  };

  return (
    <div>
       {isLoading && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-white bg-opacity-75">
          <div
            style={{ borderTopColor: "transparent" }}
            className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
          ></div>
          <p className="ml-2">loading...</p>
        </div>
      )}
      <h1 className="text-2xl font-bold">Change Password</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-10">
        <div>
          <label>Current Password</label>
          <Input.Password
            className="h-[40px]"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>New Password</label>
          <Input.Password
            className="h-[40px]"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirm New Password</label>
          <Input.Password
            className="h-[40px]"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        
        {/* Submit Button */}
        <div className="flex justify-center mt-[40px]">
          <button
            type="submit"
            className="px-[30px] lg:px-[100px] py-3 lg:py-4 font-[200] text-[15px] bg-black text-white rounded-[10px] hover:bg-[#4A4A4A] focus:outline-none"
          >
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
}











// // Client side (ví dụ trong component ChangePasswordPage)
// "use client";
// import { useUser } from "@/context/User-provider";
// import { useState } from "react";
// import { Input, Button, message } from "antd";

// export default function ChangePasswordPage() {
//   const infoUser = useUser();  // Lấy thông tin người dùng từ context hoặc provider
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!infoUser?.email) {
//       message.error("Email is required");
//       return;
//     }

//     // Gửi yêu cầu PATCH
//     const response = await fetch("/api/updatePassword", {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: infoUser.email,  // Gửi email người dùng vào body yêu cầu
//         currentPassword,
//         newPassword,
//         confirmPassword,
//       }),
//     });

//     const data = await response.json();

//     if (data.success) {
//       message.success(data.message);
//     } else {
//       message.error(data.message);
//     }
//   };

//   return (
//     <div>
//       <h1 className="text-2xl font-bold">Change Password</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-10">
//         <div>
//           <label>Current Password</label>
//           <Input.Password
//             className="h-[40px]"
//             value={currentPassword}
//             onChange={(e) => setCurrentPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>New Password</label>
//           <Input.Password
//             className="h-[40px]"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Confirm New Password</label>
//           <Input.Password
//             className="h-[40px]"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>
        

//         {/* Submit Button */}
//          <div className="flex justify-center mt-[40px]">
//           <Button type="primary" htmlType="submit" className="px-[30px] lg:px-[100px] py-3 lg:py-4 font-[400] text-[15px] bg-black text-white rounded-[10px] hover:bg-[#4A4A4A] !important">
//             Update Password
//           </Button>
//          </div>

//       </form>
//     </div>
//   );
// }
