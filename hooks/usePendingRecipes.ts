"use client"

import { useState, useEffect } from 'react';

interface Recipe {
  id: string;
  name: string;
  media: string;
  user: {
    _id: string;
    username: string;
  };
  createdAt: string;
}

const usePendingRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/recipes/get_recipes_pending_approval');
      if (!response.ok) {
        throw new Error('Failed to fetch pending recipes');
      }

      const data = await response.json();
      setRecipes(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return { recipes, loading, error, fetchRecipes };
};

export default usePendingRecipes;
