// import { useState, useEffect } from "react";
// import { message } from "antd";

// interface User {
//   id: string;
//   role: string;
//   avatar: string;
//   email: string;
//   username: string;
//   // createdAt: string;
//   // lastActive: string;
// }

// const useFetchActiveUsers = () => {
//   const [activeUsers, setActiveUsers] = useState<User[]>([]); // Dữ liệu người dùng trong 24h qua
//   const [loading, setLoading] = useState<boolean>(false); // Trạng thái tải dữ liệu
//   const [error, setError] = useState<string | null>(null); // Thông báo lỗi

//   const fetchActiveUsers = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch("/api/getUsers24hActive");
      
//       // Kiểm tra xem phản hồi có hợp lệ không
//       if (!response.ok) {
//         throw new Error(`Failed to fetch active users. Status: ${response.status}`);
//       }

//       // Ép kiểu dữ liệu trả về từ API
//       const data: User[] = await response.json();
//       setActiveUsers(data);
      
//     } catch (error: any) {
//       // In ra lỗi chi tiết để dễ dàng chẩn đoán
//       console.error("Error fetching active users:", error);
//       setError(error.message || "An unknown error occurred.");
//       message.error(error.message || "Failed to load active users.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch dữ liệu khi component mount
//   useEffect(() => {
//     fetchActiveUsers();
//   }, []);

//   return { activeUsers, loading, error, refetch: fetchActiveUsers };
// };

// export default useFetchActiveUsers;














import { useState, useEffect } from "react";
import { message } from "antd";

interface User {
  id: string;
  role: string;
  avatar: string;
  email: string;
  username: string;
  // createdAt: string;
  // lastActive: string;
}

const useFetchActiveUsers = () => {
  const [activeUsers, setActiveUsers] = useState<User[]>([]); // Dữ liệu người dùng trong 24h qua
  const [loading, setLoading] = useState<boolean>(false); // Trạng thái tải dữ liệu
  const [error, setError] = useState<string | null>(null); // Thông báo lỗi

//   const fetchActiveUsers = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch("/api/getUsers24hActive");
      
//       // Kiểm tra xem phản hồi có hợp lệ không
//       if (!response.ok) {
//         throw new Error(`Failed to fetch active users. Status: ${response.status}`);
//       }

//       // Ép kiểu dữ liệu trả về từ API
//       const data: User[] = await response.json();
//       setActiveUsers(data);
      
//     } catch (error: any) {
//       // In ra lỗi chi tiết để dễ dàng chẩn đoán
//       console.error("Error fetching active users:", error);
//       setError(error.message || "An unknown error occurred.");
//       message.error(error.message || "Failed to load active users.");
//     } finally {
//       setLoading(false);
//     }
//   };

const fetchActiveUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/getUsers24hActive");
  
      if (!response.ok) {
        throw new Error(`Failed to fetch active users. Status: ${response.status}`);
      }
  
      // Parse dữ liệu từ API
      const data = await response.json();
      console.log("Fetched data from API:", data); // Kiểm tra dữ liệu nhận được
  
      if (!Array.isArray(data)) {
        throw new Error("API response is not an array");
      }
  
      setActiveUsers(data);
    } catch (error: any) {
      console.error("Error fetching active users:", error);
      setError(error.message || "An unknown error occurred.");
      message.error(error.message || "Failed to load active users.");
    } finally {
      setLoading(false);
    }
  };
  
  

  // Fetch dữ liệu khi component mount
  useEffect(() => {
    fetchActiveUsers();
  }, []);

  return { activeUsers, loading, error, refetch: fetchActiveUsers };
};

export default useFetchActiveUsers;
