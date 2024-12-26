// import { useEffect, useState } from "react";

// type RecipeStat = {
//   month: number;
//   year: number;
//   count: number;
// };

// const useFetchMonthlyRecipes = () => {
//   const [data, setData] = useState<RecipeStat[] | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/api/recipes/stats/monthly");
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const result: RecipeStat[] = await response.json();
//         setData(result);
//       } catch (err: any) {
//         setError(err.message || "Unknown error");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return { data, isLoading, error };
// };

// export default useFetchMonthlyRecipes;







import { useEffect, useState } from "react";

type RecipeStat = {
  month: number;
  year: number;
  count: number;
};

const useFetchMonthlyRecipes = (year: number) => {
  const [data, setData] = useState<RecipeStat[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/recipes/stats/monthly?year=${year}`); // Truyền tham số năm vào URL
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result: RecipeStat[] = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [year]); // Cập nhật khi `year` thay đổi

  return { data, isLoading, error };
};

export default useFetchMonthlyRecipes;
