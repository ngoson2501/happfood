"use client"

import { useState, useEffect } from "react";

const useFetchHotRecipes = () => {
  const [data, setData] = useState<any[]>([]); // State để lưu dữ liệu
  const [loading, setLoading] = useState(true); // State để hiển thị trạng thái loading
  const [error, setError] = useState<string | null>(null); // State để lưu lỗi (nếu có)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/recipes/get_hot_recipes");
        const result = await response.json();

        if (response.ok) {
          setData(result); // Lưu dữ liệu vào state
        } else {
          setError(result.error || "Failed to fetch data");
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error }; // Trả về các state và hàm
};

export default useFetchHotRecipes;
