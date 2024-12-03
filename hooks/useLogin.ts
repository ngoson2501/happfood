// hooks/useLogin.ts
import { useState } from "react";

// const useLogin = () => {
//   const [emailOrUsername, setEmailOrUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async () => {
//     if (!emailOrUsername || !password) {
//       alert("Please fill in both fields");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch("/api/auth/login", {
//         method: "POST",
//         body: JSON.stringify({ emailOrUsername, password }),
//         headers: { "Content-Type": "application/json" },
//       });

//       const data = await res.json();
//       if (res.ok) {
//         console.log("Access Token:", data.accessToken);
//         localStorage.setItem("accessToken", data.accessToken);
//         alert("Login successful");
//         window.location.href = "/"; // Điều hướng về trang Home
//       } else {
//         console.error("Error:", data.message);
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     emailOrUsername,
//     setEmailOrUsername,
//     password,
//     setPassword,
//     loading,
//     handleLogin,
//   };
// };

// export default useLogin;





//hooks/useLogin.ts
const useLogin = () => {
    const [emailOrUsername, setEmailOrUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
  
    const handleLogin = async () => {
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
          alert("Login successful");
          window.location.href = "/"; // Điều hướng về trang Home
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






  
// const useLogin = (newPassword?: string) => {
//     const [emailOrUsername, setEmailOrUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [loading, setLoading] = useState(false);
  
//     const handleLogin = async () => {
//       if (!emailOrUsername || (!password && !newPassword)) {
//         alert("Please fill in both fields");
//         return;
//       }
  
//       setLoading(true);
//       try {
//         const res = await fetch("/api/auth/login", {
//           method: "POST",
//           body: JSON.stringify({ emailOrUsername, password: newPassword || password }),
//           headers: { "Content-Type": "application/json" },
//         });
  
//         const data = await res.json();
//         if (res.ok) {
//           console.log("Access Token:", data.accessToken);
//           localStorage.setItem("accessToken", data.accessToken);
//           alert("Login successful");
//           window.location.href = "/"; // Điều hướng về trang Home
//         } else {
//           console.error("Error:", data.message);
//         }
//       } catch (error) {
//         console.error("Login error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     const setPasswordFromForgotPassword = (newPassword: string) => {
//       setPassword(newPassword); // Cập nhật mật khẩu từ ForgotPassword
//     };
  
//     return {
//       emailOrUsername,
//       setEmailOrUsername,
//       password,
//       setPassword,
//       loading,
//       handleLogin,
//       setPasswordFromForgotPassword, // Trả về hàm này cho ForgotPasswordPage
//     };
//   };
  

//   export default useLogin;