"use client"

import { useState, useEffect } from "react";

type Recipe = {
  id: string;
  name: string;
  cookTime: string;
  ration: { value: string; unit: string } | null;
  hashtags: { value: string; label: string }[];
  description: string;
  ingredients: { name: string; quantity: string; unit: string }[];
  directions: { title: string; description: string; image: string | null }[];
  media: string | null;
  user: string | null;
  views: number;
  likes: string[];
  videoLink: string;
  createdAt: string;
  updatedAt: string;
};

const useRecipe = (id: string | null) => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const response = await fetch(`/api/recipes/get_recipe/${id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch recipe: ${response.statusText}`);
        }

        const data: Recipe = await response.json();
        setRecipe(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  return { recipe, loading, error };
};

export default useRecipe;
