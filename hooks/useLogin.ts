"use client";
import { message } from "antd";
import { useState } from "react";

const useLogin = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    console.log("check emailOrUsername:", emailOrUsername); // Debug giá trị
    console.log("check password:", password);

    if (!emailOrUsername || !password) {
      alert("Please fill in both fields");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ emailOrUsername, password }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (res.ok) {
        console.log("Access Token:", data.accessToken);
        localStorage.setItem("accessToken", data.accessToken);
        message.success("Login successful");

        // Điều hướng sau khi hiển thị thông báo
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } else {
        console.error("Error:", data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    emailOrUsername,
    setEmailOrUsername,
    password,
    setPassword,
    loading,
    handleLogin,
  };
};

export default useLogin;







