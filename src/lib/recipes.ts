// lib/recipes.ts
export const getRecipes = async () => {
    try {
      const response = await fetch("/api/recipes/get_recipes"); // API endpoint của bạn
      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }
      const recipes = await response.json(); // Giả sử API trả về dữ liệu ở dạng JSON
      return { recipes, loading: false, error: null };
    } catch (error: any) {
      return { recipes: [], loading: false, error: error.message };
    }
  };
  