"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { useRouter } from "next/navigation"; // Import useRouter
import useUserInfo from "../../../hooks/useUserInfo";
import { useUser } from "@/context/User-provider";
import useIncreaseView from "../../../hooks/useIncreaseView";

interface RecipeProps {
    recipe: {
      id: string;
      name: string;
      cookTime: string;
      description: string;
      media?: string;
      hashtags: { value: string; label: string; _id: string }[];
      // user: { _id: string; username: string };
      user: string;
      views: number;
      likes: string[];
      createdAt: string;
      updatedAt: string;
    };
  }

const Recipes_4: React.FC<RecipeProps> = ({recipe}) => {
    const router = useRouter(); // Sử dụng hook useRouter
    const { increaseView } = useIncreaseView();
    const [liked, setLiked] = useState(false);
    const infoUser = useUser();
    const { userInfo} = useUserInfo(recipe?.user ?? null);


    const handleNavigate = async () => {
        await increaseView(recipe.id); // Gửi yêu cầu tăng view
        router.push(`/detailed_recipes?id=${recipe.id}`); // Điều hướng đến detailed_recipes với id
      };



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




      function formatDate(dateString: string) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0
        const year = date.getFullYear(); // Lấy năm đầy đủ
        return `${day}/${month}/${year}`;
      }


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

    return (
        <>


            <section className="bg-white h-[140px] lg:h-[250px] pr-4 lg:pr-7 snap-start  group cursor-pointer  rounded-[8px]  flex flex-row gap-[10px] lg:gap-[20px]  hover:shadow-md "
            // p-[10px] lg:p-[20px] xl:p-7
            
           
            
            >
                <div className=" h-full  w-[40%] relative overflow-hidden rounded-[8px] ">
                    <Image
                        className="w-full h-full object-cover object-center absolute inset-0 transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                        src={recipe?.media || "/images/default_image.png"}
                        alt={recipe?.name}
                        width={300}
                        height={300}
                        onClick={handleNavigate}
                    />
                    <div className="absolute z-10 w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] right-0 flex justify-center items-center">
                    {/* <div className="bg-white w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] rounded-full flex gap-1 justify-center items-center">
                        <FaHeart className="text-[#DBE2E5] text-[17px] lg:text-[22px]" />
                    </div> */}
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

                    {/* <div className="absolute z-10 w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] right-0 flex justify-center items-center">
                        <div className="bg-white w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] rounded-full flex gap-1 justify-center items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                strokeWidth="1"
                                className="w-5 h-5 lg:w-6 lg:h-6 text-[#DBE2E5] cursor-pointer"
                            >
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                        </div>
                    </div> */}

                </div>

                <div className=" w-[60%]  flex flex-col justify-around   lg:gap-3 xl:gap-0 py-2 lg:py-4">
                    <p
                        className=" font-Inter font-[600] text-[16px] lg:text-[18px] line-clamp-2 truncate whitespace-normal text-clip overflow-hidden"
                        style={{ lineHeight: "1.4" }}
                    >
                        {recipe.name}
                    </p>
                    <p
                        style={{ color: "rgba(0, 0, 0, 60%)" }}
                        className=" font-Inter font-[300] text-[12px] lg:text-[14px] xl:text-[15px] line-clamp-2 lg:line-clamp-4 truncate whitespace-normal text-clip overflow-hidden"
                    >
                        {recipe.description}
                    </p>
                    {/* <p className="text-[12px] lg:text-[15px]" style={{ color: "rgba(0, 0, 0, 60%)" }}>By Ngo Son</p> */}

                    


                    <div className="flex flex-col lg:flex-row justify-between items-center ">


                        <div className=" hidden  w-full  lg:w-[40%] lg:flex justify-start items-center gap-1 lg:gap-3">
                            <Image
                                className="object-cover rounded-full w-[30px] h-[30px] lg:w-[45px] lg:h-[45px]"
                                src={userInfo?.avatar ?? '/icon/default_avatar.png'}
                                alt="avata"
                                width={45}
                                height={45}
                                quality={100} // Điều chỉnh chất lượng lên mức cao nhất
                            />

                            <span className="flex text-[10px] lg:text-[15px] flex-col justify-center font-Inter">
                                <p className="font-[700]">{userInfo?.username}</p>
                                <p style={{ color: "rgba(0, 0, 0, 60%)" }}>
                                    {recipe?.createdAt ? formatDate(recipe.createdAt) : "No date available"}
                                </p>
                            </span>
                        </div>
                        <div className=" w-full lg:w-[60%] flex ">
                            <div className=" w-[50%] gap-1 py-[5px]  lg:gap-2 lg:py-[7px] flex justify-start items-center rounded-full">
                                <Image className="lg:w-[23px] lg:h-[23px]" src="/icon/Timer.svg" alt="Timer" width={16} height={16} />
                                <p className="text-[12px] lg:text-[15px]" style={{ color: "rgba(0, 0, 0, 60%)" }}>
                                {formatCookTime(recipe?.cookTime)}
                                </p>
                            </div>
                            <div className="  w-[50%] gap-1 py-[5px]  lg:gap-2 lg:py-[7px] flex justify-start items-center rounded-full">
                                <Image
                                    className="lg:w-[23px] lg:h-[23px]"
                                    src="/icon/ForkKnife.svg"
                                    alt="ForkKnife"
                                    width={16}
                                    height={16}
                                />
                                <p className="  text-[12px] lg:text-[15px] line-clamp-1 truncate whitespace-normal text-clip overflow-hidden" style={{ color: "rgba(0, 0, 0, 60%)" }}>

                                
                                {recipe?.hashtags.map((hashtag, index) => (
                                        <span key={hashtag.label} className=" px-[3px]">
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




                </div>
            </section>
        </>
    );
};

export default Recipes_4