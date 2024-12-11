"use client";

import { Input } from "antd";
import { useUser } from "@/context/User-provider";
import Image from "next/image";
import { useState, useEffect } from "react";
import { message } from "antd";

export default function ProfilePage() {

  const infoUser = useUser();
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [username, setUsername] = useState<string>(infoUser?.username || "");
  const [email, setEmail] = useState<string>(infoUser?.email || "");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (infoUser?.avatar) {
      setAvatarPreview(infoUser.avatar);
    }
    if (infoUser?.username) {
      setUsername(infoUser.username);
    }
    if (infoUser?.email) {
      setEmail(infoUser.email);
    }
  }, [infoUser]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true); // Hiển thị loading

    const formData = new FormData();
    formData.append("email", email);
    formData.append("username", username);
    if (selectedFile) {
      formData.append("avatar", selectedFile);
    }

    try {
      const response = await fetch("/api/updateProfile", {
        method: "PATCH",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        //alert("Profile updated successfully");
        //message.success("Profile updated successfully!");
        message.success("Profile updated successfully!");
        //window.location.reload(); // Tải lại trang
      } else {
        //alert(`Error: ${result.message}`);
        message.error(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      //alert("An error occurred while updating profile.");
      message.error("An error occurred while updating profile.");
    } finally {
      setIsLoading(false); // Ẩn loading
    }
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-white bg-opacity-75">
          <div
            style={{ borderTopColor: "transparent" }}
            className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
          ></div>
          <p className="ml-2">loading...</p>
        </div>
      )}
      <h1 className="text-2xl font-bold">Profile {infoUser?.role}</h1>
      <form className="flex flex-col gap-4 mt-10" onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <Image
            className="border-gray-400 border-[2px] bg-white object-cover rounded-full w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]"
            src={avatarPreview || "/icon/default_avatar.png"}
            alt="avatar"
            width={150}
            height={150}
            quality={100}
          />
        </div>
        <div>
          <label className="block text-gray-700">Avatar</label>
          <input
            type="file"
            className="bg-white w-full px-4 py-1 border-[1px] border-[#cbcbcb] rounded"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>
        <div>
          <label>User Name</label>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="User name"
            className="h-[40px]"
          />
        </div>
        <div>
          <label>Email</label>
          <Input
            value={infoUser?.email}
            placeholder="Email"
            className="h-[40px]"
            readOnly
          />
        </div>
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
