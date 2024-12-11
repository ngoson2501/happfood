"use client"
import { useState, useEffect } from "react";

const useRecipesByCategory = (categoryTitle: string) => {
  const [recipes, setRecipes] = useState<any[]>([]); // State lưu công thức
  const [loading, setLoading] = useState<boolean>(true); // Trạng thái tải
  const [error, setError] = useState<string | null>(null); // Lỗi nếu có

  useEffect(() => {
    const fetchRecipes = async () => {
      if (!categoryTitle) {
        setError("Không tìm thấy danh mục tiêu đề.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(`/api/recipes/get_recipesWithCategory`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "Category-Title": categoryTitle,
          }),
        });

        if (!response.ok) {
          const errorBody = await response.json();
          throw new Error(errorBody.message || "Lỗi khi tải công thức");
        }

        const data = await response.json();
        setRecipes(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [categoryTitle]);

  return { recipes, loading, error };
};

export default useRecipesByCategory;
