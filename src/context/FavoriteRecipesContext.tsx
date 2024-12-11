"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

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

interface FavoriteRecipesContextType {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
  fetchFavoriteRecipes: (idAuthorRecipe: string) => void;
}

const FavoriteRecipesContext = createContext<FavoriteRecipesContextType | undefined>(undefined);

export const FavoriteRecipesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFavoriteRecipes = async (authorId: string) => {
    if (!authorId) {
      setError("Author ID is required");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/recipes/get_favorite_recipes/${authorId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch favorite recipes");
      }

      const data = await response.json();
      if (data.success && Array.isArray(data.data)) {
        setRecipes(data.data);
      } else {
        setRecipes([]);
        setError("Invalid response format: Expected an array");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FavoriteRecipesContext.Provider value={{ recipes, loading, error, fetchFavoriteRecipes }}>
      {children}
    </FavoriteRecipesContext.Provider>
  );
};

export const useFavoriteRecipes = () => {
  const context = useContext(FavoriteRecipesContext);
  if (!context) {
    throw new Error("useFavoriteRecipes must be used within a FavoriteRecipesProvider");
  }
  return context;
};