"use client"

import { useState } from "react";

interface IHashtag {
  value: string;
  label: string;
  _id: string;
}

interface Recipe {
  id: string;
  name: string;
  cookTime: string;
  hashtags: IHashtag[];
  media?: string;
  user: { _id: string; username: string };
  views: number;
  likes: string[];
}

export const useAuthorRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [fetched, setFetched] = useState<boolean>(false); // Dùng để tránh gọi API lại

  const fetchRecipesByAuthor = async (authorId: string) => {
    if (fetched) return;  // Tránh gọi API nếu đã tải dữ liệu

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/recipes/get_author_recipes/${authorId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }

      const data = await response.json();

      // Kiểm tra nếu data chứa khóa 'data' và data.data là mảng
      if (data.success && Array.isArray(data.data)) {
        setRecipes(data.data); // Cập nhật với mảng công thức nấu ăn
        setFetched(true); // Đánh dấu đã tải dữ liệu
      } else {
        setRecipes([]); // Nếu không phải mảng hoặc không có dữ liệu
        setError("Invalid response format: Expected an array");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      setRecipes([]); // Đảm bảo recipes là mảng khi có lỗi
    } finally {
      setLoading(false);
    }
  };

  return { recipes, loading, error, fetchRecipesByAuthor };
};
