"use client";
import { useState, useEffect } from "react";

const useFetchUsers = () => {
  const [data, setData] = useState<any[]>([]); // State lưu danh sách người dùng
  const [loading, setLoading] = useState(true); // State hiển thị trạng thái loading
  const [error, setError] = useState<string | null>(null); // State lưu lỗi nếu có

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true); // Hiển thị trạng thái loading
      setError(null);   // Xóa lỗi trước đó

      try {
        const response = await fetch("/api/getAllUsers");
        const result = await response.json();

        if (response.ok) {
          setData(result); // Lưu dữ liệu vào state
        } else {
          setError(result.message || "Failed to fetch users");
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setLoading(false); // Kết thúc trạng thái loading
      }
    };

    fetchUsers();
  }, []); // Chỉ chạy một lần khi component được render

  return { data, loading, error }; // Trả về dữ liệu, trạng thái loading, và lỗi
};

export default useFetchUsers;
