"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter
import { FaHeart } from "react-icons/fa";
import { useUser } from "@/context/User-provider";
import useIncreaseView from "../../../hooks/useIncreaseView";


interface RecipeProps {
  recipe: {
    id: string;
    name: string;
    cookTime: string;
    media?: string;
    hashtags: { value: string; label: string; _id: string }[];
    user: { _id: string; username: string };
    views: number;
    likes: string[];
  };
}


const Recipes_2: React.FC<RecipeProps> = ({ recipe }) => {
  const [liked, setLiked] = useState(false);
  const router = useRouter(); // Sử dụng hook useRouter
  const infoUser = useUser();
  const { increaseView } = useIncreaseView();



  useEffect(() => {
    // Kiểm tra xem recipe và recipe.likes có phải là mảng hợp lệ không
    if (infoUser && Array.isArray(recipe?.likes)) {
      // Kiểm tra nếu likes có chứa ID người dùng
      if (recipe.likes.includes(infoUser.id)) {
        setLiked(true); // Nếu ID người dùng có trong mảng likes thì setLiked là true
      } else {
        setLiked(false); // Nếu không có thì setLiked là false
      }
    }
  }, [infoUser, recipe?.likes]); // Thực hiện khi infoUser hoặc recipe.likes thay đổi

  const sendLikeToServer = async (isLiked: boolean) => {
    console.log(">>>>>>>>>>>>>>>>", { user: recipe.id }); // In ra userId thay vì toàn bộ đối tượng
    
    try {
      const response = await fetch(`/api/recipes/recipe/like_recipe/${recipe.id}`, {
        method: isLiked ? "POST" : "DELETE", // POST khi like, DELETE khi unlike
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: infoUser?.id }), // Chỉ truyền userId
      });

      if (!response.ok) {
        const errorBody = await response.text();
        console.error("Error response:", errorBody);
      }
    } catch (error) {
      console.error("Error while sending like/unlike:", error);
    }
  };


  const formatCookTime = (cookTime: string | undefined) => {
    if (!cookTime || typeof cookTime !== "string") {
        return "N/A"; // Hoặc giá trị mặc định bạn muốn hiển thị
    }

    // Tách giờ và phút từ chuỗi
    const [hours, minutes] = cookTime.split(":").map(Number);

    // Tạo định dạng hiển thị
    if (hours > 0) {
        return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
};



  const handleNavigate = async () => {
    await increaseView(recipe.id); // Gửi yêu cầu tăng view
    router.push(`/detailed_recipes/${recipe.id}`); // Điều hướng đến detailed_recipes với id
  };

  const handleHeartClick = async () => {
    const previousState = liked;
    setLiked(!liked); // Cập nhật trạng thái liked

    try {
      await sendLikeToServer(!previousState); // Gửi yêu cầu thích hoặc bỏ thích
    } catch (error) {
      console.error("Error during like action:", error);
      setLiked(previousState); // Khôi phục trạng thái trước khi có lỗi
    }
  };



  return (
    <>
      


<section className="w-[180px] h-[240px] lg:w-[275px]  lg:h-[350px] group cursor-pointer p-[10px] lg:p-[20px] xl:p-0 rounded-[15px] lg:rounded-[30px] flex flex-col gap-[10px] xl:gap-[20px]  hover:shadow-lg bor"
          >
        <div className="w-full h-[130px] lg:h-[200px] xl:h-[60%] relative overflow-hidden rounded-[10px] lg:rounded-[20px]">
          <Image
            className="w-full h-full object-cover object-center absolute inset-0 transition-transform duration-500 ease-in-out transform group-hover:scale-105"
            src={recipe?.media || "/images/default_image.png"}
            alt={recipe?.name}
            width={240}
            height={160}
            onClick={handleNavigate}
          />
{/* <div className="relative w-full h-[130px]">
  <Image
    className="object-cover object-center absolute inset-0 transition-transform duration-500 ease-in-out transform group-hover:scale-105"
    src={recipe?.media || "/images/default_image.png"}
    alt={recipe?.name}
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 180px"
    onClick={handleNavigate}
  />
</div> */}


          <div className="absolute z-10 w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] right-0 flex justify-center items-center">
          
            <div
              className="bg-white w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] rounded-full flex gap-1 justify-center items-center cursor-pointer"
              onClick={handleHeartClick} // Gán sự kiện click
            >
              {/* Áp dụng màu đỏ nếu đã được click, màu xám nếu chưa */}
              <FaHeart
                className={`${
                  liked ? "text-red-500" : "text-[#DBE2E5]"
                } text-[17px] lg:text-[22px]`}
              />
            </div>
          </div>

        </div>
        {/* <p
          
          className=" font-Inter font-[600] text-[16px] lg:text-[20px] line-clamp-2 truncate whitespace-normal text-clip overflow-hidden"
          style={{ lineHeight: "1.4" }}
        >
          Fruity Pancake with Orange & Blueberry
        </p> */}
         <div className=" xl:h-[40%] xl:px-[20px] flex flex-col gap-2 xl:gap-4  ">
         <p
          className=" font-Inter font-[600] text-[16px] lg:text-[20px] line-clamp-2 truncate whitespace-normal text-clip overflow-hidden"
          style={{ lineHeight: "1.4" }}
        >
          {recipe?.name}
        </p>



        {/* <div className=" flex gap-[10px] lg:gap-[25px]">
          <div className=" gap-1 py-[5px]  lg:gap-2 lg:py-[7px] flex justify-center items-center rounded-full">
            <Image className="lg:w-[23px] lg:h-[23px]" src="/icon/Timer.svg" alt="Timer" width={16} height={16} />
            <p className="text-[12px] lg:text-[15px]" style={{ color: "rgba(0, 0, 0, 60%)" }}>30p</p>
          </div>
          <div className=" gap-1 py-[5px]  lg:gap-2 lg:py-[7px] flex justify-center items-center rounded-full">
            <Image
            className="lg:w-[23px] lg:h-[23px]"
              src="/icon/ForkKnife.svg"
              alt="ForkKnife"
              width={16}
              height={16}
            />
            <p className="text-[12px] lg:text-[15px]" style={{ color: "rgba(0, 0, 0, 60%)" }}>sweet</p>
          </div>
        </div> */}
        <div className="flex  lg:gap-[25px]">
        
        
        
        
        <div className=" w-[50%] lg:w-full gap-1 py-[5px] lg:gap-2 lg:py-[7px] flex  items-center rounded-full">
          <Image
            className="lg:w-[25px] lg:h-[25px]"
            src="/icon/Timer.svg"
            alt="Timer"
            width={16}
            height={16}
          />
          <p
            className="text-[12px] lg:text-[15px]"
            style={{ color: "rgba(0, 0, 0, 60%)" }}
          >
            {formatCookTime(recipe?.cookTime)}
          </p>
        </div>




        <div className=" w-[50%] lg:w-full gap-1 py-[5px] lg:gap-2 lg:py-[7px] flex  items-center rounded-full">
          <Image
            className="lg:w-[25px] lg:h-[25px]"
            src="/icon/ForkKnife.svg"
            alt="ForkKnife"
            width={16}
            height={16}
          />
          <p
            className="text-[12px] lg:text-[15px] line-clamp-1 truncate whitespace-normal text-clip overflow-hidden"
            style={{ color: "rgba(0, 0, 0, 60%)" }}
          >
            {/* Đoạn này đã thay bằng hashtags */}
            {recipe?.hashtags.map((hashtag, index) => (
                      <span key={hashtag.label} className="px-[3px]">
                        <span className="underline ">{hashtag.label}</span>
                        {/* Kiểm tra nếu không phải phần tử cuối cùng thì thêm dấu phẩy */}
                        {index < recipe?.hashtags.length - 1 && (
                          <span className="text-red-500">{","}</span>
                        )}
                      </span>
            ))}
          </p>
        </div>
      </div>




         </div>
      </section>
    </>
  );
};

export default Recipes_2;
