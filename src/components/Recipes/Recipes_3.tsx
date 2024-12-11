"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import useUserInfo from "../../../hooks/useUserInfo";
import { useUser } from "@/context/User-provider";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import useIncreaseView from "../../../hooks/useIncreaseView";




interface RecipeProps {
    recipe: {
      id: string;
      name: string;
      cookTime: string;
      media?: string;
      hashtags: { value: string; label: string; _id: string }[];
      // user: { _id: string; username: string };
      user: { _id: string; username: string };
      //user?: string, 
      views: number;
      likes: string[];
    };
  }

const Recipes_3: React.FC<RecipeProps> = ({ recipe }) => {
    const [liked, setLiked] = useState(false);
    const { increaseView } = useIncreaseView();
    const router = useRouter(); // Sử dụng hook useRouter
    const infoUser = useUser();
    // const { userInfo} = useUserInfo(recipe?.user ?? null);
    console.log("<check>:",infoUser?.id)
    //console.log("check id của người user>>>>", { user: recipe.user._id }); 
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
        //console.log("check id của người user>>>>", { user: recipe.user._id }); // In ra userId thay vì toàn bộ đối tượng
    
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

   

      const handleNavigate = async () => {
        await increaseView(recipe.id); // Gửi yêu cầu tăng view
        router.push(`/detailed_recipes/${recipe.id}`); // Điều hướng đến detailed_recipes với id
      };


    //   const formatCookTime = (cookTime: string) => {
    //     // Tách giờ và phút từ chuỗi
    //     const [hours, minutes] = cookTime.split(":").map(Number);
      
    //     // Tạo định dạng hiển thị
    //     if (hours > 0) {
    //       return `${hours}h ${minutes}m`;
    //     } else {
    //       return `${minutes}m`;
    //     }
    //   };



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


            <section className="bg-[#E7FAFE] h-[250px] lg:w-[275px] lg:h-fit  xl:w-[370px]   snap-start  group cursor-pointer p-[10px] lg:p-[20px] xl:p-3 rounded-[15px]  flex flex-col justify-between  xl:flex-row gap-[10px]   hover:shadow-lg  "
            >
                <div className=" w-[150px] h-[130px] lg:w-[220px] lg:h-[180px] xl:h-[160px]  xl:w-1/2   relative overflow-hidden rounded-[15px] ">
                    <Image
                        className="w-full h-full object-cover object-center absolute inset-0 transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                        // src="/images/food-img/Pancake.svg"
                        // alt="Pancake"
                        src={recipe?.media || "/images/default_image.png"}
                        alt={recipe?.name}
                        width={300}
                        height={160}
                        onClick={handleNavigate}
                    />

                    
                    <div className="absolute z-10 w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] right-0 flex justify-center items-center">
                    {/* <div className="bg-white w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] rounded-full flex gap-1 justify-center items-center">
                        <FaHeart className="text-[#DBE2E5] text-[17px] lg:text-[22px]" />
                    </div> */}
                    <div
                        className="bg-white w-[30px] h-[30px] lg:w-[36px] lg:h-[36px] rounded-full flex gap-1 justify-center items-center cursor-pointer"
                        onClick={handleHeartClick} // Gán sự kiện click
                    >
                        {/* Áp dụng màu đỏ nếu đã được click, màu xám nếu chưa */}
                        <FaHeart
                        className={`${
                            liked ? "text-red-500" : "text-[#DBE2E5]"
                        } text-[17px] lg:text-[20px]`}
                        />
                    </div>
                    </div>

                </div>

                <div className=" xl:w-1/2  flex flex-col justify-center lg:gap-2  ">
                    <p
                        className=" font-Inter font-[600] text-[16px] lg:text-[18px] line-clamp-2 truncate whitespace-normal text-clip overflow-hidden"
                        style={{ lineHeight: "1.4" }}
                    >
                        {recipe?.name}
                    </p>
                    <p className="text-[12px] lg:text-[15px]" style={{ color: "rgba(0, 0, 0, 60%)" }}>By {recipe?.user.username}</p>
                    <div className=" flex gap-1 xl:gap-2 flex-1 xl:flex-none xl:flex-wrap-reverse ">
                        <div className=" w-full gap-[2px] py-2 xl:py-0  flex  items-center rounded-full">
                            <Image className=" lg:w-[23px] lg:h-[23px]" src="/icon/Timer.svg" alt="Timer" width={16} height={16} />
                            <p className=" text-[12px] lg:text-[15px]" style={{ color: "rgba(0, 0, 0, 60%)" }}>
                                {formatCookTime(recipe?.cookTime)}
                            </p>
                        </div>
                        
                        <div className=" w-full gap-[2px] py-2 xl:py-0  flex  items-center rounded-full">
                            <Image
                                className="lg:w-[23px] lg:h-[23px]"
                                src="/icon/ForkKnife.svg"
                                alt="ForkKnife"
                                width={16}
                                height={16}
                            />
                            <p
                                className="text-[12px] lg:text-[15px] line-clamp-1 truncate whitespace-normal  text-clip overflow-hidden"
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

export default Recipes_3;














