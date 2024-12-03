// import { useEffect, useState } from 'react';
// import { message } from 'antd';

// // interface IRation {
// //   value: number;
// //   unit: string;
// // }

// interface IHashtag {
//   value: string;
//   label: string;
//   _id: string;
// }

// // interface IIngredient {
// //   name: string;
// //   quantity: string;
// //   unit: string;
// // }

// // interface IDirection {
// //   title: string;
// //   description: string;
// // }

// interface IRecipe {
//   _id: string;
//   name: string;
//   cookTime: string;
//   //ration: IRation;
//   hashtags: IHashtag[];
//   //description: string;
//   //ingredients: IIngredient[];
//   //directions: IDirection[];
//   media?: string; // Base64 string of media
//   user: string;
//   views: number;
//   likes: string[];
// }

// export const useGetRecipes = () => {
//   const [recipes, setRecipes] = useState<IRecipe[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch('/api/recipes/get_recipes', { method: 'GET' });
//         if (response.ok) {
//           const data = await response.json();
//           setRecipes(data);
//           setError(null);
//         } else {
//           const errorMessage = await response.text();
//           setError(errorMessage);
//           message.error("Failed to fetch recipes.");
//           console.error("Error:", errorMessage);
//         }
//       } catch (err) {
//         setError("An unexpected error occurred.");
//         message.error("Failed to fetch recipes.");
//         console.error("Error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRecipes();
//   }, []);

//   return { recipes, loading, error };
// };

