import { useState } from "react";

const useIncreaseView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const increaseView = async (recipeId: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/recipes/recipe/increase_view/${recipeId}`, {
        method: "POST",
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to increase view count");
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return { increaseView, isLoading, error };
};

export default useIncreaseView;
