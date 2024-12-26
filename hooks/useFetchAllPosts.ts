import { useState, useEffect } from 'react';

interface Recipe {
  id: string;
  name: string;
  media: string;
  user: {
    _id: string;
    username: string;
  };
  views: number;
  likes: number;
  createdAt: string;
}

const useFetchAllPosts = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true); // Bắt đầu tải dữ liệu
        const response = await fetch('/api/recipes/get_all_posts');
        const data = await response.json();

        if (response.ok) {
          setRecipes(data);  // Lưu trữ dữ liệu vào state
        } else {
          setError(data.message || 'Failed to fetch recipes');
        }
      } catch (err: any) {
        setError('An error occurred while fetching recipes');
        console.error(err);
      } finally {
        setLoading(false);  // Kết thúc tải dữ liệu
      }
    };

    fetchRecipes();
  }, []); // Chạy 1 lần khi component được mount

  return { recipes, loading, error };
};

export default useFetchAllPosts
