

"use client";

//import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Modal, Select, message } from "antd";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const { Option } = Select;

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"user" | "admin">("user");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [adminCode, setAdminCode] = useState("");

  // Trạng thái lỗi
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const handleRegister = async () => {
    setErrors({ username: "", email: "", password: "", role: "" }); // Reset lỗi
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ username, email, password, role }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const data = await res.json();
        if (data.errors) {
          setErrors(data.errors); // Gán lỗi từ server vào state
        } else {
          throw new Error(data.message || "Something went wrong");
        }
      } else {
        message.success("Sign up successful");
        window.location.href = "/login";
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };

  const handleRoleChange = (value: "user" | "admin") => {
    if (value === "admin") {
      setIsModalVisible(true);
    } else {
      setRole("user");
    }
  };

  const handleAdminCodeSubmit = () => {
    if (adminCode === "Iam Admin") {
      setRole("admin");
      setIsModalVisible(false);
      setAdminCode("");
      message.success("Admin role selected successfully!");
    } else {
      message.error("Invalid code. You can only select 'User' role.");
      setRole("user");
      setIsModalVisible(false);
      setAdminCode("");
    }
  };

  return (
    <>
      <main className="w-screen h-screen flex justify-center py-[80px]">
        <div
          className="w-[80%] h-[600px] rounded-lg flex"
          style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)" }}
        >
          <div className="hidden lg:flex justify-end w-full h-full rounded-l-[8px] relative overflow-hidden">
            <Image
              className="z-10 w-full h-full object-cover object-center absolute inset-0"
              src="/images/background.png"
              alt="image_background"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Link
              href="/login"
              className="bg-[#FFCA42] hover:bg-[#ffbe1a] w-fit flex justify-center items-center gap-2 p-[5px] cursor-pointer absolute z-20"
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
              onSubmit={(e) => {
                e.preventDefault();
                handleRegister();
              }}
              className="w-[80%] h-[80%] flex flex-col justify-center gap-[25px]"
            >
              <h1 className="text-center lg:text-start text-[50px] lg:text-[65px] font-[300] font-Inter">
                Sign up
              </h1>
              <div>
                <Input
                  placeholder="Name"
                  className={`h-[40px] ${errors.username ? "border-red-500" : ""}`}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                )}
              </div>
              <div>
                <Input
                  placeholder="Email"
                  className={`h-[40px] ${errors.email ? "border-red-500" : ""}`}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <Input.Password
                  placeholder="Password"
                  className={`h-[40px] ${errors.password ? "border-red-500" : ""}`}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <div className="w-full">
                <Select
                  value={role}
                  onChange={handleRoleChange}
                  className={`h-[40px] w-full ${errors.role ? "border-red-500" : ""}`}
                  placeholder="Select role"
                >
                  <Option value="user">User</Option>
                  <Option value="admin">Admin</Option>
                </Select>
                {errors.role && (
                  <p className="text-red-500 text-sm mt-1">{errors.role}</p>
                )}
              </div>

              <div className="flex w-full justify-center items-center">
                <div className="bg-black hover:bg-gray-500 text-white cursor-pointer font-[200] w-full lg:w-[60%] h-[45px] rounded-[10px] flex justify-center items-center overflow-hidden">
                  <button type="submit" className="w-full h-full">
                    Sign up
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
                  href="/login"
                  className="bg-white cursor-pointer hover:underline font-[200] w-full lg:w-[60%] h-[45px] flex justify-center items-center overflow-hidden"
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Modal
        title="Admin Role Verification"
        open={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
          setRole("user");
        }}
        onOk={handleAdminCodeSubmit}
      >
        <p>Please enter the admin code to proceed:</p>
        <Input.Password
          placeholder="Enter admin code"
          value={adminCode}
          onChange={(e) => setAdminCode(e.target.value)}
        />
      </Modal>
    </>
  );
};

export default RegisterPage;
