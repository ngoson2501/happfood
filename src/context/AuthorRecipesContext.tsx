import React, { createContext, useContext, useState} from "react";


interface IHashtag {
    value: string;
    label: string;
    _id: string
  }

interface Recipe {
  id: string;
  name: string;
  cookTime: string;
  hashtags: IHashtag[];
  media?: string; // Base64 hoặc null nếu không có media
  user: { _id: string; username: string };
  views: number;
  likes: string[];
}

interface AuthorRecipesContextType {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
  fetchRecipesByAuthor: (authorId: string) => void;
}

const AuthorRecipesContext = createContext<AuthorRecipesContextType | undefined>(undefined);

export const AuthorRecipesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRecipesByAuthor = async (authorId: string) => {
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
  
  

  return (
    <AuthorRecipesContext.Provider value={{ recipes, loading, error, fetchRecipesByAuthor }}>
      {children}
    </AuthorRecipesContext.Provider>
  );
};

export const useAuthorRecipes = () => {
  const context = useContext(AuthorRecipesContext);
  if (!context) {
    throw new Error("useAuthorRecipes must be used within an AuthorRecipesProvider");
  }
  return context;
};
