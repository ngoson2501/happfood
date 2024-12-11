"use client";
import { useState } from "react";
import { Input, message } from "antd"; // Import Input từ antd
import useLogin from "../../../../hooks/useLogin"; // Import hook useLogin

const ForgotPasswordPage = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [newPassword, setNewPassword] = useState<string | null>(null); // State để lưu mật khẩu mới
  const {
    emailOrUsername: loginUsername,
    setEmailOrUsername: setLoginUsername,
    password,
    setPassword,
    loading: loginLoading,
    handleLogin,
  } = useLogin(); // Sử dụng hook login

  console.log("newpassword>>>>>", newPassword);
  console.log("setEmailOrUsername>>>>>", emailOrUsername);

  const handleSubmit = async () => {
    if (!emailOrUsername) {
      message.error("Please enter your email or username");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/forgotPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailOrUsername }),
      });

      const data = await response.json();
      if (response.ok) {
        message.success("Password reset successfully");
        setNewPassword(data.newPassword); // Lưu mật khẩu mới vào state để hiển thị trong form
      } else {
        message.error(data.message || "An error occurred");
      }
    } catch (error) {
      console.error("Error:", error);
      message.error("Failed to reset password. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoginWithNewPassword = () => {
    if (!newPassword) {
      message.error("New password is required to login");
      return;
    }

    if (emailOrUsername) {
      setLoginUsername(emailOrUsername); // Cập nhật email/username từ form vào login hook
      setPassword(newPassword); // Cập nhật mật khẩu mới vào login hook
      handleLogin(); // Gọi handleLogin từ hook
    } else {
      message.error("Email or Username is required for login");
    }
  };

  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <div
        className="h-auto bg-white w-[350px] rounded-lg flex flex-col p-6 pb-10"
        style={{
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
        }}
      >
        <h1 className=" text-[30px] font-[500] text-center">Forgot Password</h1>
        <p className="text-center text-sm text-gray-600 mb-4">
          Please enter your username or email address. You will receive a new
          password.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Ngừng submit form mặc định khi nhấn vào nút "Submit"
            handleSubmit();
          }}
          className="flex flex-col gap-6 mt-6"
        >
          <div className="">
            <label className="block mb-2 font-medium">Email or Username</label>
            <Input
              placeholder="Enter your email or username"
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              className="mb-4 h-[40px]"
            />
          </div>

          {/* Chỉ hiển thị khi có mật khẩu mới */}
          {newPassword && (
            <div className="">
              <label className="block mb-2 font-medium">
                Your New Password
              </label>
              <Input.Password
                className="h-[40px]"
                value={newPassword} // Gán giá trị từ state newPassword
                readOnly
              />
            </div>
          )}

          <div className="flex gap-4 mt-6">
            <button
              type="submit"
              className={`w-full h-[50px] bg-black text-white font-[200] rounded-lg ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

            {/* Đổi type của nút Login thành "button" */}
            {newPassword && (
              <button
                type="button" // Đổi từ "submit" thành "button"
                className={`w-full h-[50px] bg-white text-black font-[200] rounded-lg border-[1px] border-gray-600 ${
                  loginLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleLoginWithNewPassword}
                disabled={loginLoading}
              >
                {loginLoading ? "Logging in..." : "Login"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
