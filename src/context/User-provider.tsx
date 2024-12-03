// 'use client'
// import { createContext, useContext, useState, useEffect } from "react";

// // Interface mô tả thông tin người dùng
// export interface User {
//   id: string;
//   name: string;
//   email: string;
// }

// // Tạo context với giá trị mặc định là null (chưa có người dùng)
// const UserContext = createContext<User | null>(null);

// // Provider để cung cấp thông tin người dùng từ API và lưu vào context
// export const UserProvider = ({ children }: { children: React.ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [isCheckingToken, setIsCheckingToken] = useState(true); // Trạng thái kiểm tra token

//   // Hàm để fetch thông tin người dùng từ API
//   const fetchUser = async (accessToken: string) => {
//     try {
//       const response = await fetch('/api/user', {
//         method: 'GET',
//         headers: { 
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${accessToken}`, // Sử dụng Bearer token
//         },
//       });
  
//       if (!response.ok) {
//         throw new Error('Failed to fetch user data');
//       }
  
//       const userData: User = await response.json();
//       setUser(userData);
//     } catch (error) {
//       console.error("Failed to fetch user data:", error);
//       setUser(null); // Đảm bảo trạng thái null nếu không lấy được user
//     }
//   };
  

//   // Kiểm tra access token và fetch thông tin người dùng
//   useEffect(() => {
//     const accessToken = localStorage.getItem('accessToken');
  
//     if (!accessToken) {
//       // Chuyển hướng đến trang login nếu không có access token
//       console.log("Access Token Not Found. Please log in to continue.");
//       window.location.href = '/login';
//     } else {
//       // Gọi API để lấy thông tin người dùng
//       fetchUser(accessToken).finally(() => setIsCheckingToken(false));
//     }
//   }, []);
  

//   // Nếu đang kiểm tra token, không render gì cả
//   if (isCheckingToken) {
//     return null; // Hoặc có thể hiện thông báo loading
//   }

//   return (
//     <UserContext.Provider value={user}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// // Custom hook để sử dụng `UserContext`
// export const useUser = () => useContext(UserContext);



import { createContext, useContext, useState, useEffect } from "react";

// Interface mô tả thông tin người dùng
export interface User {
  id: string;
  username: string;
  email: string;
  role: string;
  avatar: string;
  refreshToken: string
}

// Tạo context với giá trị mặc định là null (chưa có người dùng)
const UserContext = createContext<User | null>(null);

// Provider để cung cấp thông tin người dùng từ API và lưu vào context
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isCheckingToken, setIsCheckingToken] = useState(true); // Trạng thái kiểm tra token

  // Hàm để fetch thông tin người dùng từ API
  const fetchUser = async (accessToken: string) => {
    
    try {
      const response = await fetch('/api/user', {
        method: 'POST', // Sử dụng POST thay vì GET
        body: JSON.stringify({ accessToken }), // Gửi token trong body
        headers: { 'Content-Type': 'application/json' },
      });
  
      
      
      if (!response.ok) {
        localStorage.removeItem('accessToken')
        const errorMessage = await response.text(); // Lấy thông báo lỗi từ server
        throw new Error(errorMessage); // Ném lỗi với thông báo từ server
      }
  
      const userData: User = await response.json();
      setUser(userData);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      setUser(null); // Đảm bảo trạng thái null nếu không lấy được user
    } finally {
      setIsCheckingToken(false); // Dừng kiểm tra sau khi gọi API
    }
  };

  // Kiểm tra access token và fetch thông tin người dùng nếu có
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      // Gọi API để lấy thông tin người dùng nếu có token
      fetchUser(accessToken);
      
    } else {
      // Không có accessToken, ngừng kiểm tra token
      setIsCheckingToken(false);
    }
  }, []);


  
  

  // Nếu đang kiểm tra token, không render gì cả
//   if (isCheckingToken) {
//     return <div>Loading...</div>; // Hiện loading trong khi kiểm tra token
//   }

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook để sử dụng `UserContext`
export const useUser = () => useContext(UserContext);

