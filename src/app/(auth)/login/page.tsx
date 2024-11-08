
"use client";

import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from 'next/navigation'; // Thêm dòng này

const LoginPage: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Khai báo router



  const handleLogin = async () => {

    console.log('Email:', email);
    console.log('Password:', password);

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    
    const data = await res.json();
    if (res.ok) {
      console.log('Access Token:', data.accessToken);
      //console.log('Refresh Token:', data.refreshToken);

      // Lưu accessToken và refreshToken vào localStorage
    localStorage.setItem('accessToken', data.accessToken);
    //localStorage.setItem('refreshToken', data.refreshToken);
    alert("Login successful")
    // Điều hướng đến trang Home
    // router.push('/'); // Thay đổi đường dẫn này theo đường dẫn bạn muốn
    window.location.href = '/';
    } else {
      console.error('Error:', data.message);
    }
  };

  return (
    <>
      <main className=" w-screen h-screen flex justify-center items-center">
        <div
          className="bg-white w-[80%] h-[600px] rounded-lg flex"
          style={{
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div className=" w-[100%] rounded-l-lg flex justify-center items-center">
            <form
              onSubmit={e => { e.preventDefault(); handleLogin(); }}
              action=""
              className=" w-[80%] h-[80%] flex flex-col justify-center gap-[30px]"
            >
              <h1 className="text-[65px] font-[300] font-Inter ">Login</h1>
              <Input placeholder="email" className="h-[40px]" onChange={e => setEmail(e.target.value)} required/>
              <Input.Password placeholder="password" className="h-[40px]" onChange={e => setPassword(e.target.value)} required />

              <div className="w-full flex justify-end ">
                <p className="text-[#397ECE] cursor-pointer text-[15px] font-[200] w-fit border-b-[#397ECE] border-b-[0.8px] hover:text-[#0b52a2] hover:border-b-[#0b52a2]">
                  forgot your password
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="bg-[#FFCA42]  hover:bg-[#ffbe1a] cursor-pointer font-[200] w-[60%] h-[45px] rounded-full flex justify-center items-center overflow-hidden">
                        <button type="submit" className="w-full h-full">Login</button>
                </div>
              </div>
              <div className="flex justify-center items-center gap-4">
                <Image className="cursor-pointer" src="/icon/google-icon.png" alt="google-logo" width={36} height={36} />
                <Image className="cursor-pointer" src="/icon/facebook-logo.png" alt="facebook-logo" width={36} height={36} />
              </div>
            </form>
          </div>
          <div
            className="  w-full h-500 bg-no-repeat bg-center bg-cover rounded-r-lg"
            style={{
              backgroundImage: 'url("/images/background.png")',
              backgroundSize: "cover", // Đảm bảo hình nền phủ toàn bộ khu vực của div
              backgroundPosition: "center", // Đảm bảo hình nền căn giữa trong div
            }}
          >

                <Link href="/register" className="bg-[#FFCA42] hover:bg-[#ffbe1a] w-fit flex justify-center items-center gap-2 p-[5px] cursor-pointer">
                    <p>Sign up</p>
                    <Image className="object-cover object-center" src="/icon/Vector-right.png" alt="Vector-right" width={30} height={15} />
                </Link>

          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
