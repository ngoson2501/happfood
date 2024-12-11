"use client";

import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Select, Space } from "antd";
import React, { useState } from "react";
import Image from 'next/image';
import Link from "next/link";

const { Option } = Select;

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"user" | "admin">("user"); // Trạng thái cho vai trò

  const handleRegister = async () => {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ username, email, password, role }), // Thêm role vào body
        headers: { 'Content-Type': 'application/json' },
      });
  
      // Kiểm tra nếu phản hồi không ok
      console.log("res: ", res);

      if (!res.ok) {
        const errorText = await res.text(); // Lấy lỗi dưới dạng text
        console.error('Error response from server:', errorText); // Ghi log lỗi từ server
        throw new Error(errorText);
      }
  
      const data = await res.json();
      console.log('Data:', data);

      alert("Sign up successful");
      window.location.href = '/login';

    } catch (error: any) {
      console.error('Error:', error.message);
    }
  };

  

  return (
    <>
      <main className="w-screen h-screen flex justify-center items-center">
        <div
          className="w-[80%] h-[600px] rounded-lg flex"
          style={{
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
          }}
        >
          {/* <div
            className="w-full h-500 bg-no-repeat bg-center bg-cover rounded-l-lg"
            style={{
              backgroundImage: 'url("/images/background.png")',
              backgroundSize: "cover", // Đảm bảo hình nền phủ toàn bộ khu vực của div
              backgroundPosition: "center", // Đảm bảo hình nền căn giữa trong div
            }}
          >
            <Link href="/login" className="bg-[#FFCA42] hover:bg-[#ffbe1a] w-fit flex justify-center items-center gap-2 p-[5px] cursor-pointer float-right">
              <Image
                className="object-cover object-center w-[30px] h-[15px] rotate-180"
                src="/icon/Vector-right.png"
                alt="Vector-right"
                width={30}
                height={15}
              />
              <p>Login</p>
            </Link>
          </div> */}



          <div className="hidden lg:flex justify-end w-full h-full  relative overflow-hidden ">
            <Image
            className="z-10 w-full h-full object-cover object-center absolute inset-0"
            src="/images/background.png"
            alt="image_background"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
            />
            <Link
              href="/login"
              className="bg-[#FFCA42] hover:bg-[#ffbe1a] w-fit flex justify-center items-center gap-2 p-[5px] cursor-pointer absolute z-20 "
            >
              
              <Image
                className="object-cover object-center w-[30px] h-[15px] rotate-180"
                src="/icon/Vector-right.png"
                alt="Vector-right"
                width={30}
                height={15}
              />
              <p>Login</p>
            </Link>

          </div>




          <div className="w-[100%] rounded-l-lg flex justify-center items-center">
            <form
              onSubmit={e => { e.preventDefault(); handleRegister(); }}
              action=""
              className="w-[80%] h-[80%] flex flex-col justify-center gap-[25px]"
            >
             
              <h1 className="text-center lg:text-start text-[50px] lg:text-[65px] font-[300] font-Inter">Sign up</h1>
              <div>
                <Input placeholder="Name" className="h-[40px]" onChange={e => setUsername(e.target.value)} required />
              </div>
              <div>
                <Input placeholder="Email" className="h-[40px]" onChange={e => setEmail(e.target.value)} required />
              </div>
              <div>
                <Input.Password placeholder="Password" className="h-[40px]" onChange={e => setPassword(e.target.value)} required />
              </div>

              {/* Thêm phần chọn vai trò */}
              
                <div className="w-full">
                <Select
                  value={role}
                  onChange={value => setRole(value)}
                  className="h-[40px] w-full"
                  placeholder="Select role"
                >
                  <Option value="user">User</Option>
                  <Option value="admin">Admin</Option>
                </Select>
                </div>
              

              <div className="flex w-full justify-center items-center">
                <div className="bg-black hover:bg-gray-500 text-white cursor-pointer font-[200] w-full lg:w-[60%] h-[45px] rounded-[10px] flex justify-center items-center overflow-hidden">
                  <button type="submit" className="w-full h-full">Sign up</button>
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
                <Link href="/login" className="bg-white  cursor-pointer hover:underline font-[200] w-full lg:w-[60%] h-[45px]  flex justify-center items-center overflow-hidden">
                  {/* <button type="submit" className="w-full h-full">
                    {loading ? "Logging in..." : "Login"}
                  </button> */}
                  Login
                </Link>
              </div>

            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default RegisterPage;
