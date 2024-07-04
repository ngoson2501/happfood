"use client";

import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import React, { useState } from "react";

const RedisterPage: React.FC = () => {
  return (
    <>
      <main className=" w-screen h-screen flex justify-center items-center">
        <div
          className="bg-white w-[80%] h-[600px] rounded-lg flex"
          style={{
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div
            className="  w-full h-500 bg-no-repeat bg-center bg-cover rounded-l-lg"
            style={{
              backgroundImage: 'url("/images/background.png")',
              backgroundSize: "cover", // Đảm bảo hình nền phủ toàn bộ khu vực của div
              backgroundPosition: "center", // Đảm bảo hình nền căn giữa trong div
            }}
          >
            <div className="bg-[#FFCA42] hover:bg-[#ffbe1a] w-fit flex justify-center items-center gap-2 p-[5px] cursor-pointer float-right">
              <img
                className="object-cover object-center w-[30px] h-[15px] rotate-180"
                src="icon/Vector-right.png"
                alt="Vector-right"
              />
              <p>Login</p>
            </div>
          </div>

          <div className=" w-[100%] rounded-l-lg flex justify-center items-center">
            <form
              action=""
              className=" w-[80%] h-[80%] flex flex-col justify-center gap-[30px]"
            >
              <h1 className="text-[65px] font-[300] font-Inter ">Sign up</h1>
              <Input placeholder="name" className="h-[40px]" />
              <Input placeholder="email" className="h-[40px]" />
              <Input.Password placeholder="password" className="h-[40px]" />

              
              <div className="flex justify-center items-center">
                <div className="bg-[#FFCA42]  hover:bg-[#ffbe1a] cursor-pointer font-[200] w-[60%] h-[45px] rounded-full flex justify-center items-center">
                  <p>Sign up</p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-4">
                <img
                  className="w-9 h-9 cursor-pointer"
                  src="/icon/google-icon.png"
                  alt="google-logo"
                />
                <img
                  className="w-9 h-9 cursor-pointer"
                  src="/icon/facebook-logo.png"
                  alt="facebook-logo"
                />
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default RedisterPage;
