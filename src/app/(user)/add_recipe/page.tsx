
// const AddRecipe = ()=>{
//     return(

//         <>
        
        
//             <div className="bg-red-400 w-full h-[1000px] flex gap-[20px] flex-col lg:px-[100px] lg:pt-[50px]">




//             </div>
        
        
//         </>
        
//     )
// }

// export default AddRecipe

"use client";


import { useState } from "react";
import Image from "next/image";

interface Ingredient {
  name: string;
  quantity: string;
  unit: string;
}

interface Nutrition {
  name: string;
  quantity: string;
  unit: string;
}

interface Direction {
  title: string;
  description: string;
  images: string[];
}

const AddRecipe = () => {
  const [name, setName] = useState<string>("");
  const [cookTime, setCookTime] = useState<string>("");
  const [topic, setTopic] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [nutritionInformation, setNutritionInformation] = useState<Nutrition[]>([]);
  const [directions, setDirections] = useState<Direction[]>([]);
  const [media, setMedia] = useState<File | null>(null);

  const unitOptions = ["", "trái", "ml", "g", "muỗng canh", "lát", "muỗng cà phê", "khác"];
  const nutritionUnitOptions = ["", "kcal", "g", "mg"];

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: "", unit: "" }]);
  };

  const handleAddNutrition = () => {
    setNutritionInformation([...nutritionInformation, { name: "", quantity: "", unit: "" }]);
  };

  const handleAddDirection = () => {
    setDirections([...directions, { title: "", description: "", images: [""] }]);
  };

  const handleIngredientChange = (index: number, field: keyof Ingredient, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    setIngredients(newIngredients);
  };

  const handleNutritionChange = (index: number, field: keyof Nutrition, value: string) => {
    const newNutritionInformation = [...nutritionInformation];
    newNutritionInformation[index][field] = value;
    setNutritionInformation(newNutritionInformation);
  };


  const handleDirectionChange = (
    index: number,
    field: keyof Direction,
    value: string | string[]
  ) => {
    const newDirections = [...directions];
  
    if (field === "images") {
      // Field 'images' expects an array of strings
      newDirections[index].images = Array.isArray(value) ? value : [value];
    } else if (typeof value === "string") {
      // Other fields expect a single string value
      newDirections[index][field] = value;
    }
  
    setDirections(newDirections);
  };
  


  const handleDirectionImageChange = (directionIndex: number, imageIndex: number, file: File) => {
    const newDirections = [...directions];
    const newImages = [...newDirections[directionIndex].images];
    
    // Chắc chắn rằng file đã được chọn
    if (file) {
      newImages[imageIndex] = URL.createObjectURL(file); // Gán chuỗi vào mảng
      newDirections[directionIndex].images = newImages; // Cập nhật lại mảng images
      setDirections(newDirections);
    }
  };
  

  // const handleDirectionChange = (index: number, field: keyof Direction, value: string) => {
  //   const newDirections = [...directions];
  //   newDirections[index][field] = value;
  //   setDirections(newDirections);
  // };

  // const handleDirectionImageChange = (directionIndex: number, imageIndex: number, file: File) => {
  //   const newDirections = [...directions];
  //   const newImages = [...newDirections[directionIndex].images];
  //   newImages[imageIndex] = URL.createObjectURL(file);
  //   newDirections[directionIndex].images = newImages;
  //   setDirections(newDirections);
  // };



  
  

  const handleAddDirectionImageField = (index: number) => {
    const newDirections = [...directions];
    newDirections[index].images.push("");
    setDirections(newDirections);
  };

  const handleRemoveDirectionImageField = (directionIndex: number, imageIndex: number) => {
    const newDirections = [...directions];
    newDirections[directionIndex].images.splice(imageIndex, 1);
    setDirections(newDirections);
  };

  const handleRemoveIngredient = (index: number) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handleRemoveNutrition = (index: number) => {
    const newNutritionInformation = [...nutritionInformation];
    newNutritionInformation.splice(index, 1);
    setNutritionInformation(newNutritionInformation);
  };

  const handleRemoveDirection = (index: number) => {
    const newDirections = [...directions];
    newDirections.splice(index, 1);
    setDirections(newDirections);
  };

  const handleMediaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setMedia(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = {
      name,
      cookTime,
      topic,
      description,
      nutritionInformation,
      ingredients,
      directions,
      media,
    };
    console.log(formData);
  };

  return (
    <div className="bg-white w-full lg:px-[100px] mx-auto p-4 xl:flex gap-9">
      <div className="hidden xl:block xl:w-2/5 max-h-[700px] rounded-[20px] relative overflow-auto">
        <Image
          className="w-full h-full object-cover "
          src="/images/banners/cover-image.jpeg"
          alt="cover-image"
          layout="fill"
        />
      </div>
      <div className="w-full xl:w-3/5 font-Inter">
        <h1 className="text-2xl font-[600] mb-4 lg:text-[45px]">Add Recipe</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Cook Time</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded"
              value={cookTime}
              onChange={(e) => setCookTime(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Topic</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              className="w-full px-4 py-2 border rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Nutrition Information</label>
            {nutritionInformation.map((nutrition, index) => (
              <div key={index} className="flex space-x-2 mb-2 items-center">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-1/3 px-4 py-2 border rounded"
                  value={nutrition.name}
                  onChange={(e) => handleNutritionChange(index, "name", e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Quantity"
                  className="w-1/3 px-4 py-2 border rounded"
                  value={nutrition.quantity}
                  onChange={(e) => handleNutritionChange(index, "quantity", e.target.value)}
                />
                <select
                  className="w-1/3 px-4 py-2 border rounded"
                  value={nutrition.unit}
                  onChange={(e) => handleNutritionChange(index, "unit", e.target.value)}
                >
                  {nutritionUnitOptions.map((option, i) => (
                    <option key={i} value={option}>{option}</option>
                  ))}
                </select>
                <button
                  type="button"
                  className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
                  onClick={() => handleRemoveNutrition(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex justify-center">
              <button
                type="button"
                className="px-4 py-2 font-[300] text-[#999999] hover:text-black"
                onClick={handleAddNutrition}
              >
                + Add Nutrition
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Ingredients</label>
            {ingredients.map((ingredient, index) => (
              <div key={index} className="flex space-x-2 mb-2 items-center">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-1/3 px-4 py-2 border rounded"
                  value={ingredient.name}
                  onChange={(e) => handleIngredientChange(index, "name", e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Quantity"
                  className="w-1/3 px-4 py-2 border rounded"
                  value={ingredient.quantity}
                  onChange={(e) => handleIngredientChange(index, "quantity", e.target.value)}
                  required
                />
                <select
                  className="w-1/3 px-4 py-2 border rounded"
                  value={ingredient.unit}
                  onChange={(e) => handleIngredientChange(index, "unit", e.target.value)}
                  required
                >
                  {unitOptions.map((option, i) => (
                    <option key={i} value={option}>{option}</option>
                  ))}
                </select>
                <button
                  type="button"
                  className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
                  onClick={() => handleRemoveIngredient(index)}
                >
                  Remove
                </button>
              </div>
            ))}
              <div className="flex justify-center">
                  <button
                  type="button"
                  className="px-4 py-2 font-[300] text-[#999999] hover:text-black"
                  onClick={handleAddIngredient}
                >
                  + Add Ingredient
                </button>
              </div>
          </div>









          <div className="mb-4">
            <label className="block text-gray-700">Directions</label>
            {directions.map((direction, directionIndex) => (
              <div key={directionIndex} className="">
                <h3 className="text-lg font-bold mb-2">Step {directionIndex + 1}</h3>
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full px-4 py-2 border rounded mb-2"
                  value={direction.title}
                  onChange={(e) => handleDirectionChange(directionIndex, "title", e.target.value)}
                  required
                />
                <textarea
                  placeholder="Description"
                  className="w-full px-4 py-2 border rounded mb-2"
                  value={direction.description}
                  onChange={(e) => handleDirectionChange(directionIndex, "description", e.target.value)}
                  required
                ></textarea>


                <div className="">

                  <div className="">
                      {direction.images.map((image, imageIndex) => (
                      <div key={imageIndex} className="flex items-center mb-2">
                        <input
                          type="file"
                          className="w-full px-4 py-2 border rounded"
                          onChange={(e) => handleDirectionImageChange(directionIndex, imageIndex, e.target.files![0])}
                          accept="image/*"
                        />
                        <button
                          type="button"
                          className="ml-2 font-[300] px-2 py-1 text-[#999999] hover:text-black"
                          onClick={() => handleRemoveDirectionImageField(directionIndex, imageIndex)}
                        >
                          X
                        </button>
                      </div>
                    ))}
                    
                  </div>
                    
                  <div className=" flex justify-end">
                    <button
                        type="button"
                        className="px-4 py-2 bg-white shadow-md font-[300] text-[#999999] hover:text-black rounded"
                       
                        onClick={() => handleAddDirectionImageField(directionIndex)}
                      >
                        Add Image
                    </button>
                  </div>
                  

                </div>

                <div className=" flex justify-center">
                    <button
                      type="button"
                      className="ml-2 font-[300] px-4 py-2 text-[#999999] hover:text-black"
                      onClick={() => handleRemoveDirection(directionIndex)}
                    >
                      - Remove Step
                    </button>
                  </div>
                
              </div>
            ))}
            <div className=" flex justify-center">
              <button
                type="button"
                className="px-4 font-[300] py-2 text-[#999999] hover:text-black"
                onClick={handleAddDirection}
              >
                + Add Step
              </button>
            </div>
          </div>








          <div className="mb-4">
            <label className="block text-gray-700">Media</label>
            <input
              type="file"
              className="w-full px-4 py-2 border rounded"
              onChange={handleMediaChange}
              accept="image/*,video/*"
            />
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-[100px] py-4 bg-black text-white rounded-[10px] hover:bg-[#4A4A4A]"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
