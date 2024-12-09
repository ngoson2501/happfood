"use client";
import { useState } from "react";
import { useRef } from "react";
import Image from "next/image";
import Select, { MultiValue } from 'react-select';
import { useGetHashTags } from "../../../../hooks/useGetHashTags";
import { useUser } from '@/context/User-provider';
import { message } from "antd";

interface HashtagOption {
  value: string;
  label: string;
}

interface Ingredient {
  name: string | null;
  quantity: string | null; // Có thể là null
  unit: string | null;     // Có thể là null
}




interface Direction {
  title?: string;
  description?: string;
  image: File | null; // Chỉ một hình ảnh hoặc null
}

interface Ration {
  value: number;
  unit: string;
}

const rationUnitOptions = ["cái", "phần", "người", "suất", "hộp", "đĩa", "gram"]; // Đơn vị cho Ration
const unitOptions = ["", "trái", "quả", "củ", "cây", "lá", "ml", "lít", "gram", "kg", "muỗng canh", "cup", "bát", "tép", "nhánh", "lát", "muỗng cà phê", "nhúm nhỏ", "chút xíu", "lượng vừa đủ", "khác"];

const AddRecipe = () => {
  
  const [name, setName] = useState<string>("");
  const [ration, setRation] = useState<Ration>({ value: 1, unit: rationUnitOptions[0] });
  const [cookTime, setCookTime] = useState<string>("");
  const [hashtags, setHashtags] = useState<MultiValue<HashtagOption>>([]);
  const [description, setDescription] = useState<string>("");
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  // const [nutritionInformation, setNutritionInformation] = useState<Nutrition[]>([]);
  const [directions, setDirections] = useState<Direction[]>([]);
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [media, setMedia] = useState<File | null>(null);
  const [videoLink, setVideoLink] = useState<string>("");

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const infoUser = useUser();
  const fetchedHashTags = useGetHashTags();

console.log("fetchedHashTags check:", fetchedHashTags)

  const hashtagOptions: HashtagOption[] = fetchedHashTags.map(tag => ({
    value: tag,
    label: tag,
  }));

  const handleHashtag = (selectedOptions: MultiValue<HashtagOption>) => {
    setHashtags(selectedOptions);
  };




  const handleRationValueChange = (value: number) => {
    setRation(prevRation => ({ ...prevRation, value }));
  };

  const handleRationUnitChange = (unit: string) => {
    setRation(prevRation => ({ ...prevRation, unit }));
  };





  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: "", unit: "" }]);
  };


  // Hàm thêm Direction mới
const handleAddDirection = () => {
    setDirections([...directions, { title: "", description: "", image: null }]);
  };

  // const handleIngredientChange = (index: number, field: keyof Ingredient, value: string) => {
  //   const newIngredients = [...ingredients];
  //   newIngredients[index][field] = value;
  //   setIngredients(newIngredients);
  // }



  
  const handleIngredientChange = (index: number, field: keyof Ingredient, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value === "" ? null : value;  // Chỉ thay thế giá trị rỗng thành null
    setIngredients(newIngredients);
  };
  




// Hàm cập nhật thông tin trong một Direction
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
  
  
  
// Hàm cập nhật hình ảnh cho một Direction
// const handleDirectionImageChange = (index: number, file: File | null) => {
//     const newDirections = [...directions];
//     newDirections[index].image = file;
//     setDirections(newDirections);
//   };


const handleDirectionImageChange = (index: number, file: File | null) => {
    const newDirections = [...directions];
    newDirections[index].image = file;
    setDirections(newDirections);

    // Đặt lại giá trị của input file nếu file = null
    if (!file && fileInputRefs.current[index]) {
      fileInputRefs.current[index]!.value = ""; // Reset giá trị của input
    }
  };

  


  const handleRemoveIngredient = (index: number) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };


// Hàm xóa một Direction
const handleRemoveDirection = (index: number) => {
    const newDirections = [...directions];
    newDirections.splice(index, 1);
    setDirections(newDirections);
  };



// Cập nhật ref khi render từng input file
const setFileInputRef = (index: number, ref: HTMLInputElement | null) => {
    fileInputRefs.current[index] = ref;
  };







  const handleMediaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setMedia(event.target.files[0]);
    }
  };





          const handleSubmit = async (event: React.FormEvent) => {
            event.preventDefault();
            setIsLoading(true); // Hiển thị loading

          
            const formData = new FormData();
            formData.append('name', name);
            formData.append('videoLink', videoLink);
            // formData.append('ration', ration.toString());
            formData.append('cookTime', cookTime);
            formData.append('description', description);
            formData.append('id', infoUser?.id || '');

            
            // Chuyển đối tượng ration thành JSON
            formData.append('ration', JSON.stringify(ration));


            hashtags.forEach((hashtag, index) => {
              formData.append(`hashtags[${index}]`, JSON.stringify(hashtag));
            });
          
            ingredients.forEach((ingredient, index) => {
              formData.append(`ingredients[${index}]`, JSON.stringify({
                name: ingredient.name || "",       // Đảm bảo name là chuỗi rỗng thay vì null
                quantity: ingredient.quantity || "", // Đảm bảo quantity là chuỗi rỗng thay vì null
                unit: ingredient.unit || ""         // Đảm bảo unit là chuỗi rỗng thay vì null
              }));
            });
            
            
          
            // Trong handleSubmit, xử lý hình ảnh của mỗi Direction
            directions.forEach((direction, index) => {
                // formData.append(`directions[${index}][title]`, direction.title);
                // formData.append(`directions[${index}][description]`, direction.description);

                if (direction.title !== undefined) {
                  formData.append(`directions[${index}][title]`, direction.title);
                }
              
                if (direction.description !== undefined) {
                  formData.append(`directions[${index}][description]`, direction.description);
                }
                
                if (direction.image) {
                formData.append(`directions[${index}][image]`, direction.image);
                }
            });
              



          
            if (media) {
              formData.append('media', media);
            }
          
            // Log tất cả các giá trị trong formData trước khi gửi đi


            console.log("Form Data (Client Side):");
            formData.forEach((value, key) => {
              console.log(key, value);
            });

          
            try {
              //const response = await fetch('/api/recipes/recipe/add_recipe', {
                const response = await fetch('/api/recipes/recipe/add_recipe_2', {
                method: 'POST',
                body: formData,
              });
          
              if (response.ok) {
                message.success("Recipe added successfully!");
                setIsLoading(false); // Ẩn loading
          
                // Reset tất cả các trường
                // setName('');
                // setRation({ value: 1, unit: rationUnitOptions[0] });
                // setCookTime('');
                // setHashtags([]);
                // setDescription('');
                // setIngredients([]);
                // // setNutritionInformation([]);
                // setDirections([]);
                // setMedia(null);  // Đảm bảo rằng media được reset thành null
          
                setIsModalVisible(false);
              } else {
                message.error("Failed to add recipe");
                console.error("Error:", await response.text());
              }
            } catch (error) {
              message.error("Failed to add recipe");
              console.error("Error:", error);
            }




          };
          
      









  return (

    <div className=" w-full lg:px-[100px] mx-auto p-4 xl:flex gap-9 pt-[30px] lg:pt-[60px]">
      
      
      {isLoading && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-white bg-opacity-75">
          <div
            style={{ borderTopColor: "transparent" }}
            className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
          ></div>
          <p className="ml-2">Adding Recipe...</p>
        </div>
      )}
      
      
      <div className=" hidden xl:block xl:w-2/5 max-h-[700px] rounded-[20px] relative overflow-auto">
        <Image
          className="w-full h-full object-cover "
          src="/images/banners/cover-image.jpeg"
          alt="cover-image"
          layout="fill"
        />
      </div>





      {/* from add recipe */}
      <div className="font-[300] w-full xl:w-3/5 font-Inter">
        <h1 className=" text-2xl text-center font-lobster font-[600] mb-4 lg:text-[45px] lg:mb-[50px]">Add Recipe</h1>
        
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
                >

                </textarea>

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








          <div className="mb-4">
      <label className="block text-gray-700">Directions</label>
      {directions.map((direction, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg font-bold mb-2">Step {index + 1}</h3>
          <input
            type="text"
            placeholder="Title"
            className="w-full px-4 py-2 border-[1px] border-[#cbcbcb] rounded mb-2"
            value={direction.title ?? ""}
            onChange={(e) => handleDirectionChange(index, "title", e.target.value)}
            //required
          />
          <textarea
            placeholder="Description"
            className="w-full px-4 py-2 border-[1px] border-[#cbcbcb] rounded mb-2"
            value={direction.description ?? ""}
            onChange={(e) => handleDirectionChange(index, "description", e.target.value)}
            //required
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
              className="font-[300] px-4 py-2 text-red-500 hover:text-black"
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




          
          
          <div className="flex justify-center mt-[40px]">
            <button
              type="submit"
              className="px-[100px] font-[400]  py-4 bg-black text-white rounded-[10px] hover:bg-[#4A4A4A]"
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
