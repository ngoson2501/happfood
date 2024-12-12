"use client"
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { message } from 'antd';

interface IHashtag {
  value: string;
  label: string;
  _id: string
}

interface IRecipe {
  id: string;
  name: string;
  cookTime: string;
  hashtags: IHashtag[];
  media?: string; 
  user: { _id: string; username: string };
  //user: string;
  views: number;
  likes: string[];
}

interface RecipeContextType {
  recipes: IRecipe[];
  loading: boolean;
  error: string | null;
  setRecipes: React.Dispatch<React.SetStateAction<IRecipe[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchRecipes = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await fetch('/api/recipes/get_recipes', { method: 'GET' });
  //       if (response.ok) {
  //         const data = await response.json();
  //         setRecipes(data);
  //         setError(null);
  //       } else {
  //         const errorMessage = await response.text();
  //         setError(errorMessage);
  //         message.error("Failed to fetch recipes.");
  //         console.error("Error:", errorMessage);
  //       }
  //     } catch (err) {
  //       setError("An unexpected error occurred.");
  //       message.error("Failed to fetch recipes.");
  //       console.error("Error:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchRecipes();
  // }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/recipes/get_recipes', { method: 'GET' });
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data)) {
            setRecipes(data); // Gán nếu là mảng
            setError(null);
          } else {
            console.error("API did not return an array:", data);
            setRecipes([]); // Gán mảng rỗng nếu không đúng định dạng
            setError("Invalid data format from API.");
          }
        } else {
          const errorMessage = await response.text();
          setError(errorMessage);
          message.error("Failed to fetch recipes.");
          console.error("Error:", errorMessage);
        }
      } catch (err) {
        setError("An unexpected error occurred.");
        message.error("Failed to fetch recipes.");
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchRecipes();
  }, []);
  

  return (
    <RecipeContext.Provider value={{ recipes, loading, error, setRecipes, setLoading, setError }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error('useRecipeContext must be used within a RecipeProvider');
  }
  return context;
};






