"use client";
import { useState, useEffect } from "react";

const useFetchRecipes = () => {
  const [data, setData] = useState<any[]>([]); // State lưu trữ dữ liệu
  const [loading, setLoading] = useState(true); // State kiểm soát trạng thái loading
  const [error, setError] = useState<string | null>(null); // State lưu lỗi nếu có

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Bắt đầu loading
      setError(null);   // Xóa lỗi trước đó

      try {
        const response = await fetch("/api/recipes/get_recipes");
        const result = await response.json();

        if (response.ok) {
          setData(result); // Lưu dữ liệu vào state
        } else {
          setError(result.message || "Failed to fetch recipes"); // Lưu lỗi từ server
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error"); // Lưu lỗi phát sinh
      } finally {
        setLoading(false); // Kết thúc loading
      }
    };

    fetchData();
  }, []); // Chỉ chạy một lần khi component được mount

  return { data, loading, error }; // Trả về dữ liệu, loading, và lỗi
};

export default useFetchRecipes;
