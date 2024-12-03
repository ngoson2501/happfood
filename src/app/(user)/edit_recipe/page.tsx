"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Select, { MultiValue } from "react-select";
import { useGetHashTags } from "../../../../hooks/useGetHashTags";
import { useUser } from "@/context/User-provider";
import { message } from "antd";
import { useSearchParams } from "next/navigation";
import useRecipe from "../../../../hooks/useRecipe";

interface HashtagOption {
  value: string;
  label: string;
}

interface Ingredient {
  name: string | null;
  quantity: string | null;
  unit: string | null;
}

interface Direction {
  title?: string;
  description?: string;
  image: File | null;
  previewUrl?: string | null; // For previewing uploaded images
}

interface Ration {
  value: number;
  unit: string;
}

const rationUnitOptions = ["cái", "phần", "người", "suất", "hộp", "đĩa", "gram"];
const unitOptions = [
  "",
  "trái",
  "quả",
  "củ",
  "cây",
  "lá",
  "ml",
  "lít",
  "gram",
  "kg",
  "muỗng canh",
  "cup",
  "bát",
  "tép",
  "nhánh",
  "lát",
  "muỗng cà phê",
  "nhúm nhỏ",
  "chút xíu",
  "lượng vừa đủ",
  "khác",
];

const EditRecipe = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { recipe, loading, error } = useRecipe(id);

  const [name, setName] = useState<string>("");
  const [ration, setRation] = useState<Ration>({ value: 1, unit: rationUnitOptions[0] });
  const [cookTime, setCookTime] = useState<string>("");
  const [hashtags, setHashtags] = useState<MultiValue<HashtagOption>>([]);
  const [description, setDescription] = useState<string>("");
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [directions, setDirections] = useState<Direction[]>([]);
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [media, setMedia] = useState<File | null>(null);
  const [previewMedia, setPreviewMedia] = useState<string | null>(null);
  const [previewImageStep, setPreviewImageStep] = useState<string | null>(null);
  const [videoLink, setVideoLink] = useState<string>("");
  const infoUser = useUser();
  const fetchedHashTags = useGetHashTags();

  const hashtagOptions: HashtagOption[] = fetchedHashTags.map((tag) => ({
    value: tag,
    label: tag,
  }));




console.log("check recipe>>>>>>>>>>>>>>>>>>>>>:", recipe)



useEffect(() => {
    if (recipe) {
      setName(recipe.name || "");
      setRation({
        value: Number(recipe.ration?.value || 1),
        unit: recipe.ration?.unit || rationUnitOptions[0],
      });
      setCookTime(recipe.cookTime || "");
      setDescription(recipe.description || "");
      setIngredients(recipe.ingredients || []);
      setVideoLink(recipe.videoLink || "");
      setDirections(
        recipe.directions.map((dir) => ({
          ...dir,
          image: null,
          previewUrl: dir.image || null,
        }))
      );


        // Chuyển đổi hashtags sang định dạng `react-select`
        const convertedHashtags = recipe.hashtags.map((tag: HashtagOption) => ({
            value: tag.value,
            label: tag.label,
        }));
        setHashtags(convertedHashtags);

      if (recipe.media) {
        setPreviewMedia(recipe.media);
      }
    }
  }, [recipe]);


  const handleMediaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setMedia(file);
  
      // Generate preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setPreviewMedia(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleHashtag = (selectedOptions: MultiValue<HashtagOption>) => {
    setHashtags(selectedOptions);
  };

  const handleRationValueChange = (value: number) => {
    setRation((prevRation) => ({ ...prevRation, value }));
  };

  const handleRationUnitChange = (unit: string) => {
    setRation((prevRation) => ({ ...prevRation, unit }));
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: null, quantity: null, unit: null }]);
  };

  const handleAddDirection = () => {
    setDirections([...directions, { title: "", description: "", image: null }]);
  };

  const handleIngredientChange = (index: number, field: keyof Ingredient, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value === "" ? null : value;
    setIngredients(newIngredients);
  };

  const handleDirectionChange = (
    index: number,
    field: keyof Direction,
    value: string | File | null
  ) => {
    const newDirections = [...directions];
    if (field === "image" && (value instanceof File || value === null)) {
      newDirections[index].image = value;
    } else if (typeof value === "string") {
      newDirections[index][field as "title" | "description"] = value;
    }
    setDirections(newDirections);
  };

//   const handleDirectionImageChange = (index: number, file: File | null) => {
//     const newDirections = [...directions];
//     newDirections[index].image = file;
//     setDirections(newDirections);
//     if (!file && fileInputRefs.current[index]) {
//       fileInputRefs.current[index]!.value = "";
//     }
//   };

const handleDirectionImageChange = (index: number, file: File | null) => {
    const newDirections = [...directions];
    newDirections[index].image = file;
    setDirections(newDirections);
  
    // Xử lý hiển thị preview
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setPreviewImageStep(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImageStep(null);
    }
  
    if (!file && fileInputRefs.current[index]) {
      fileInputRefs.current[index]!.value = "";
    }
  };
  
  



  const handleRemoveIngredient = (index: number) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handleRemoveDirection = (index: number) => {
    const newDirections = [...directions];
    newDirections.splice(index, 1);
    setDirections(newDirections);
  };


  const setFileInputRef = (index: number, ref: HTMLInputElement | null) => {
    fileInputRefs.current[index] = ref;
  };







 
      


const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("videoLink", videoLink);
    formData.append("ration", JSON.stringify(ration));
    formData.append("cookTime", cookTime);
    formData.append("description", description);
    formData.append("id", infoUser?.id || "");
    
    if (id) {
        formData.append("idRecipe", id);
      }
  
    hashtags.forEach((hashtag, index) =>
      formData.append(`hashtags[${index}]`, JSON.stringify(hashtag))
    );
  
    ingredients.forEach((ingredient, index) =>
      formData.append(
        `ingredients[${index}]`,
        JSON.stringify({
          name: ingredient.name || "",
          quantity: ingredient.quantity || "",
          unit: ingredient.unit || "",
        })
      )
    );
  



    directions.forEach((direction, index) => {
        // formData.append(`directions[${index}][title]`, direction.title);
        // formData.append(`directions[${index}][description]`, direction.description);
        // if (direction.title) {
        //   formData.append(`directions[${index}][title]`, direction.title);
        // }
        // if (direction.description) {
        //   formData.append(`directions[${index}][description]`, direction.description);
        // }

        if (direction.title !== undefined) {
          formData.append(`directions[${index}][title]`, direction.title);
        }
      
        if (direction.description !== undefined) {
          formData.append(`directions[${index}][description]`, direction.description);
        }
      
        // Chỉ thêm image vào formData nếu không null
        if (direction.image && typeof direction.image !== "undefined") {
          formData.append(`directions[${index}][image]`, direction.image);
        }
      });





  
    if (media) {
      formData.append("media", media);
    }
  
    try {
      const response = await fetch("/api/recipes/recipe/edit_recipe", {
        method: "PATCH",  // Sử dụng PATCH thay vì POST
        body: formData,
      });
  
      if (response.ok) {
        message.success("Recipe updated successfully!");
      } else {
        message.error("Failed to update recipe");
        console.error("Error:", await response.text());
      }
    } catch (error) {
      message.error("Failed to update recipe");
      console.error("Error:", error);
    }
  };
  







  return (

    <div className=" w-full lg:px-[100px] mx-auto p-4 xl:flex gap-9 pt-[30px] lg:pt-[60px]">
      <div className=" hidden xl:block xl:w-2/5 max-h-[700px] rounded-[20px] relative overflow-auto">
        <Image
          className="w-full h-full object-cover "
          src="/images/banners/cover-image-1.jpeg"
          alt="cover-image"
          layout="fill"
        />
      </div>





      {/* from add recipe */}
      <div className="font-[300] w-full xl:w-3/5 font-Inter">
        <h1 className=" text-2xl text-center font-lobster font-[600] mb-4 lg:text-[45px] lg:mb-[50px]">Edit Recipe</h1>
        
        <form onSubmit={handleSubmit}>


          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className=" w-full px-4 py-2 border-[1px] border-[#cbcbcb] rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>






          



<div className="mb-4">
            <label className="block text-gray-700">Media</label>
            <input
              type="file"
              className="w-full px-4 py-2 border-[1px] border-[#cbcbcb] rounded"
              onChange={handleMediaChange}
              accept="image/*,video/*"
            />
            {previewMedia && (
              <div className="mt-4">
                <Image
                  src={previewMedia}
                  alt="Preview"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            )}
          </div>









  


<div className="mb-4">
            <label className="block text-gray-700 mb-2">Ration</label>
            <div className="flex items-center border-[1px] border-[#cbcbcb] rounded overflow-hidden">
              <input
                type="number"
                className="w-full px-4 py-2 border-none focus:outline-none"
                value={ration.value}
                onChange={(e) => handleRationValueChange(Number(e.target.value))}
                required
                min="1"
                placeholder="Số lượng"
              />
              <select
                className="px-3 py-2 bg-white border-l-[1px] border-[#cbcbcb] focus:outline-none"
                value={ration.unit}
                onChange={(e) => handleRationUnitChange(e.target.value)}
                required
              >
                {rationUnitOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          





          <div className="mb-4">
            <label className="block text-gray-700">Cook Time</label>
            <input
              type="time"
              className="w-full px-4 py-2 border-[1px] border-[#cbcbcb] rounded"
              value={cookTime}
              onChange={(e) => setCookTime(e.target.value)}
              required
            />
          </div>






          {/* <div className="mb-4">
            <label className="block text-gray-700"># Hashtags</label>
            <Select
              isMulti
              value={hashtags}
              onChange={handleHashtag}
              options={hashtagOptions}
              className="w-full "
              placeholder="Chọn # hashtags..."
            />
            <div className="mt-2">
              {hashtags && hashtags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  <span>Hashtags đã chọn: </span>
                  {hashtags.map((hashtag) => (
                    <span
                      key={hashtag.value}
                      className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold "
                    >
                      #{hashtag.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div> */}


<div className="mb-4">
  <label className="block text-gray-700"># Hashtags</label>
  <Select
    isMulti
    value={hashtags}
    onChange={handleHashtag}
    options={hashtagOptions}
    className="w-full "
    placeholder="Chọn # hashtags..."
  />
  <div className="mt-2">
    {hashtags && hashtags.length > 0 && (
      <div className="flex flex-wrap gap-1">
        <span>Hashtags đã chọn: </span>
        {hashtags.map((hashtag) => (
          <span
            key={hashtag.value}
            className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold "
          >
            #{hashtag.label}
          </span>
        ))}
      </div>
    )}
  </div>
</div>








          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              className="w-full px-4 py-2 border-[1px] border-[#cbcbcb] rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>











          <div className="mb-4">
            <label className="block text-gray-700">Ingredients</label>
            {ingredients.map((ingredient, index) => (
              <div key={index} className="flex space-x-2 mb-2 items-center">
                {/* <input
                  type="text"
                  placeholder="Name"
                  className="w-1/3 px-4 py-2 border-[1px] border-[#cbcbcb] rounded"
                  value={ingredient.name || ""}  // Đảm bảo nếu name là null hoặc undefined, sẽ dùng chuỗi rỗng
                  onChange={(e) => handleIngredientChange(index, "name", e.target.value)}
                  
                /> */}
                 <textarea
                
                placeholder="Name"
                className="w-1/3 h-[42px] px-4 py-2 border-[1px] border-[#cbcbcb] rounded"
                value={ingredient.name || ""}  // Đảm bảo nếu name là null hoặc undefined, sẽ dùng chuỗi rỗng
                onChange={(e) => handleIngredientChange(index, "name", e.target.value)}
                ></textarea>

                <input
                  type="text"
                  placeholder="Quantity"
                  className="w-1/3 px-4 py-2 border-[1px] border-[#cbcbcb] rounded"
                  value={ingredient.quantity || ""}  // Đảm bảo nếu quantity là null hoặc undefined, sẽ dùng chuỗi rỗng
                  onChange={(e) => handleIngredientChange(index, "quantity", e.target.value)}
                />

                <select
                  className="w-1/3 px-4 py-2 border-[1px] border-[#cbcbcb] rounded"
                  value={ingredient.unit || ""}  // Đảm bảo nếu unit là null hoặc undefined, sẽ dùng chuỗi rỗng
                  onChange={(e) => handleIngredientChange(index, "unit", e.target.value)}
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








          {/* <div className="mb-4">
      <label className="block text-gray-700">Directions</label>
      {directions.map((direction, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg font-bold mb-2">Step {index + 1}</h3>
          <input
            type="text"
            placeholder="Title"
            className="w-full px-4 py-2 border-[1px] border-[#cbcbcb] rounded mb-2"
            value={direction.title}
            onChange={(e) => handleDirectionChange(index, "title", e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            className="w-full px-4 py-2 border-[1px] border-[#cbcbcb] rounded mb-2"
            value={direction.description}
            onChange={(e) => handleDirectionChange(index, "description", e.target.value)}
            required
          ></textarea>

          <div className="mb-4">
            <input
              type="file"
              className="w-full px-4 py-2 border-[1px] border-[#cbcbcb] rounded"
              onChange={(e) =>
                handleDirectionImageChange(index, e.target.files ? e.target.files[0] : null)
              }
              ref={(ref) => setFileInputRef(index, ref)} // Gán ref cho input
              accept="image/*"
            />
            {direction.image && (
              <button
                type="button"
                className="mt-2 px-2 py-1 text-red-500 hover:text-red-700"
                onClick={() => handleDirectionImageChange(index, null)}
              >
                Remove Image
              </button>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              className="font-[300] px-4 py-2 text-[#999999] hover:text-black"
              onClick={() => handleRemoveDirection(index)}
            >
              - Remove Step
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-center">
        <button
          type="button"
          className="px-4 py-2 font-[300] text-[#999999] hover:text-black"
          onClick={handleAddDirection}
        >
          + Add Step
        </button>
      </div>
    </div> */}












 {/* <div className="mb-4">
            <label className="block text-gray-700">Directions</label>
            {directions.map((direction, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-bold mb-2">Step {index + 1}</h3>
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full px-4 py-2 border-[1px] border-[#cbcbcb] rounded mb-2"
                  value={direction.title}
                  onChange={(e) =>
                    handleDirectionChange(index, "title", e.target.value)
                  }
                  required
                />
                <textarea
                  placeholder="Description"
                  className="w-full px-4 py-2 border-[1px] border-[#cbcbcb] rounded mb-2"
                  value={direction.description}
                  onChange={(e) =>
                    handleDirectionChange(index, "description", e.target.value)
                  }
                  required
                />
                <div>
                  <input
                    type="file"
                    ref={(ref) => setFileInputRef(index, ref)}
                    accept="image/*"
                    onChange={(e) =>
                      handleDirectionImageChange(
                        index,
                        e.target.files ? e.target.files[0] : null
                      )
                    }
                  />
                </div>
                {direction.image && (
                  <img
                    src={direction.image}
                    alt={`Step ${index + 1}`}
                    className="w-32 h-32 mt-2 object-cover rounded"
                  />
                )}
                <button
                  type="button"
                  className="px-4 py-2 bg-red-500 text-white rounded mt-2"
                  onClick={() => handleRemoveDirection(index)}
                >
                  Remove Step
                </button>
              </div>
            ))}
            <button
              type="button"
              className="px-4 py-2 bg-green-500 text-white rounded"
              onClick={handleAddDirection}
            >
              Add Step
            </button>
          </div>  */}










{/* Directions */}


{/* <div className="mb-4">
            <label className="block text-gray-700">Directions</label>
            {directions.map((direction, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-bold mb-2">Step {index + 1}</h3>
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full px-4 py-2 border-[1px] border-[#cbcbcb] rounded mb-2"
                  value={direction.title}
                  onChange={(e) => handleDirectionChange(index, "title", e.target.value)}
                />
                <textarea
                  placeholder="Description"
                  className="w-full px-4 py-2 border-[1px] border-[#cbcbcb] rounded mb-2"
                  value={direction.description}
                  onChange={(e) => handleDirectionChange(index, "description", e.target.value)}
                />
                <input
                  type="file"
                  className="w-full px-4 py-2 border-[1px] border-[#cbcbcb] rounded"
                  onChange={(e) =>
                    handleDirectionChange(index, "image", e.target.files?.[0] || null)
                  }
                />
                {direction.previewUrl && (
                  <div className="mt-4">
                    <Image
                      src={direction.previewUrl}
                      alt={`Direction Step ${index + 1}`}
                      width={200}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddDirection}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Add Step
            </button>
          </div> */}
 








{/* Directions */}
<div className="mb-4">
  <label className="block text-gray-700">Directions</label>
  {directions.map((direction, index) => (
    <div key={index} className="mb-6">
      <h3 className="text-lg font-bold mb-2">Step {index + 1}</h3>
      
      {/* Title Input */}
      <input
        type="text"
        placeholder="Title"
        className="w-full px-4 py-2 border-[1px] border-[#cbcbcb] rounded mb-2"
        value={direction.title ?? ""}
        onChange={(e) => handleDirectionChange(index, "title", e.target.value)}
        //required
      />
      
      {/* Description Textarea */}
      <textarea
        placeholder="Description"
        className="w-full px-4 py-2 border-[1px] border-[#cbcbcb] rounded mb-2"
        value={direction.description ?? ""}
        onChange={(e) => handleDirectionChange(index, "description", e.target.value)}
        //required
      ></textarea>

      {/* File Input for Image */}
      <div className="mb-4">
        <input
          type="file"
          className="w-full px-4 py-2 border-[1px] border-[#cbcbcb] rounded"
          onChange={(e) =>
            handleDirectionImageChange(index, e.target.files ? e.target.files[0] : null)
          }
          ref={(ref) => setFileInputRef(index, ref)} // Gán ref cho input
          accept="image/*"
        />

        {/* Remove Image Button */}
        {direction.image && (
          <button
            type="button"
            className="mt-2 px-2 py-1 text-red-500 hover:text-red-700"
            onClick={() => handleDirectionImageChange(index, null)}
          >
            Remove Image
          </button>
        )}
        
        {/* Display image preview if available */}
        {direction.previewUrl && (
          <div className="mt-4">
            <label>Current image</label>
            <Image
              src={direction.previewUrl}
              alt={`Direction Step ${index + 1}`}
              width={200}
              height={200}
              className="rounded-lg"
            />
          </div>
        )}

        
      </div>

      {/* Remove Step Button */}
      <div className="flex justify-center">
        <button
          type="button"
          className="font-[300] px-4 py-2 text-[#999999] hover:text-black"
          onClick={() => handleRemoveDirection(index)}
        >
          - Remove Step
        </button>
      </div>
    </div>
  ))}

  {/* Add Step Button */}
  <div className="flex justify-center">
    <button
      type="button"
      className="px-4 py-2 font-[300] text-[#999999] hover:text-black"
      onClick={handleAddDirection}
    >
      + Add Step
    </button>
  </div>
</div>









      <div className="mb-4">
            <label className="block text-gray-700">Link Video</label>
            <input
              placeholder="Link video hướng dẫn"
              type="text"
              className=" w-full px-4 py-2 border-[1px] border-[#cbcbcb] rounded"
              value={videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
              
            />
      </div>





          
          
          <div className="flex justify-between mt-[40px]">
          <button
              type="submit"
              className="px-[100px] font-[400]  py-4 bg-[#6FCFE2] text-white rounded-[10px] hover:bg-[#3FACC1]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-[100px] font-[400]  py-4 bg-black text-white rounded-[10px] hover:bg-[#4A4A4A]"
            >
              Save Recipe
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EditRecipe;
