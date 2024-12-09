"use client"
import { useState, useEffect } from "react";

const useFetchNewRecipes = (url: string) => {
  const [data, setData] = useState<any[]>([]); // State lưu dữ liệu
  const [loading, setLoading] = useState(true); // State hiển thị trạng thái loading
  const [error, setError] = useState<string | null>(null); // State lưu lỗi nếu có

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
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
  }, [url]);

  return { data, loading, error }; // Trả về dữ liệu, loading, và lỗi
};

export default useFetchNewRecipes;
