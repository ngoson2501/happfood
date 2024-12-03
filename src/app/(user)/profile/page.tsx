// "use client";

// import { Input } from "antd";
// import { useUser } from "@/context/User-provider";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// export default function ProfilePage() {
//   const infoUser = useUser();
//   console.log("Profile>>>>>:", infoUser);
//   const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

//   useEffect(() => {
//     if (infoUser?.avatar) {
//       setAvatarPreview(infoUser.avatar); // Set avatar nếu có sẵn
//     }
//   }, [infoUser?.avatar]); // Cập nhật khi infoUser.avatar thay đổi

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setSelectedFile(file);
//       setAvatarPreview(URL.createObjectURL(file)); // Tạo URL để xem trước ảnh
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("email", infoUser?.email || "");
//     formData.append("username", infoUser?.username || "");
//     if (selectedFile) {
//       formData.append("avatar", selectedFile); // Đính kèm file ảnh
//     }

//     try {
//       const response = await fetch("/api/updateProfile", {
//         method: "PATCH",
//         body: formData,
//       });

//       const result = await response.json();
//       if (result.success) {
//         alert("Profile updated successfully");
//       } else {
//         alert(`Error: ${result.message}`);
//       }
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       alert("An error occurred while updating profile.");
//     }
//   };

//   return (
//     <div>
//       <h1 className="text-2xl font-bold">Profile {infoUser?.role}</h1>
//       <form className="flex flex-col gap-4 mt-10" onSubmit={handleSubmit}>
//         {/* Avatar Preview */}
//         <div className="flex justify-center">
//           <Image
//             className="border-gray-400 border-[2px] bg-white object-cover rounded-full w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]"
//             src={avatarPreview || "/icon/default_avatar.png"} // Cung cấp giá trị mặc định
//             alt="avatar"
//             width={150}
//             height={150}
//             quality={100}
//           />
//         </div>

//         {/* File Input */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Avatar</label>
//           <input
//             type="file"
//             className="bg-white w-full px-4 py-1 border-[1px] border-[#cbcbcb] rounded"
//             onChange={handleFileChange}
//             accept="image/*"
//           />
//         </div>

//         {/* Username */}
//         <div>
//           <label>User Name</label>
//           <Input value={infoUser?.username} placeholder="User name" className="h-[40px]" readOnly />
//         </div>

//         {/* Email */}
//         <div>
//           <label>Email</label>
//           <Input value={infoUser?.email} placeholder="Email" className="h-[40px]" readOnly />
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-center mt-[40px]">
//           <button
//             type="submit"
//             className="px-[30px] lg:px-[100px] py-3 lg:py-4 font-[400] text-[15px] bg-black text-white rounded-[10px] hover:bg-[#4A4A4A]"
//           >
//             Save Changes
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }





"use client";

import { Input } from "antd";
import { useUser } from "@/context/User-provider";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProfilePage() {
  const infoUser = useUser();
  console.log("Profile>>>>>:", infoUser);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [username, setUsername] = useState<string>(infoUser?.username || "");
  const [email, setEmail] = useState<string>(infoUser?.email || "");

  useEffect(() => {
    if (infoUser?.avatar) {
      setAvatarPreview(infoUser.avatar); // Set avatar nếu có sẵn
    }
    if (infoUser?.username) {
      setUsername(infoUser.username); // Set username nếu có sẵn
    }
    if (infoUser?.email) {
      setEmail(infoUser.email); // Set email nếu có sẵn
    }
  }, [infoUser]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setAvatarPreview(URL.createObjectURL(file)); // Tạo URL để xem trước ảnh
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("username", username);
    if (selectedFile) {
      formData.append("avatar", selectedFile); // Đính kèm file ảnh
    }

    try {
      const response = await fetch("/api/updateProfile", {
        method: "PATCH",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        alert("Profile updated successfully");
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("An error occurred while updating profile.");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Profile {infoUser?.role}</h1>
      <form className="flex flex-col gap-4 mt-10" onSubmit={handleSubmit}>
        {/* Avatar Preview */}
        <div className="flex justify-center">
          <Image
            className="border-gray-400 border-[2px] bg-white object-cover rounded-full w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]"
            src={avatarPreview || "/icon/default_avatar.png"} // Cung cấp giá trị mặc định
            alt="avatar"
            width={150}
            height={150}
            quality={100}
          />
        </div>

        {/* File Input */}
        <div className="">
          <label className="block text-gray-700">Avatar</label>
          <input
            type="file"
            className="bg-white w-full px-4 py-1 border-[1px] border-[#cbcbcb] rounded"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>

        {/* Editable Username */}
        <div>
          <label>User Name</label>
          <Input 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="User name" 
            className="h-[40px]" 
          />
        </div>

        {/* Editable Email */}
        {/* <div>
          <label>Email</label>
          <Input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email" 
            className="h-[40px]" 
          />
        </div> */}

        {/* Email */}
         <div>
           <label>Email</label>
           <Input value={infoUser?.email} placeholder="Email" className="h-[40px]" readOnly />
         </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-[40px]">
          <button
            type="submit"
            className="px-[30px] lg:px-[100px] py-3 lg:py-4 font-[200] text-[15px] bg-black text-white rounded-[10px] hover:bg-[#4A4A4A]"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
