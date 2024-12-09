"use client"
import React from "react";
//import { Carousel } from "antd";
import { useRouter } from "next/navigation"; // Import useRouter
import Image from "next/image";
import "../../css/custom-carousel.css";
import useUserInfo from "../../../hooks/useUserInfo";
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

const HotRecipes: React.FC<RecipeProps> = ({ recipe }) => {


  const { increaseView } = useIncreaseView();
  const router = useRouter(); // Sử dụng hook useRouter
  const { userInfo} = useUserInfo(recipe?.user ?? null);


  console.log("id use recipe hot:",recipe?.user)


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


  const handleNavigate = async () => {
    await increaseView(recipe.id); // Gửi yêu cầu tăng view
    router.push(`/detailed_recipes?id=${recipe.id}`); // Điều hướng đến detailed_recipes với id
  };
  return (
    <>
      <div className=" lg:px-[0px] w-full h-[250px] lg:h-[500px] xl:h-[626px] flex justify-center items-center">
        <div className=" h-full relative flex flex-row justify-center items-center">
          <div className="bg-[#E7FAFE] w-[100%] h-full  lg:rounded-l-[50px]">
            <div className=" w-full h-full flex flex-col justify-between xl:gap-[40px] p-[20px] lg:p-[50px]">
              <div className="bg-white w-fit flex gap-1 lg:gap-3 px-[8px] xl:px-[20px] py-[5px] xl:py-[10px] rounded-full justify-center items-center">
                <div className="w-[11px] h-[12px] lg:w-[24px] lg:h-[24px]">

                <Image
                  className="w-[11px] h-[11px] lg:w-[24px] lg:h-[24px]"
                  src="/icon/note.svg"
                  alt="icon-note"
                  width={20}
                  height={20}
                />
                </div>
                

                <p className="text-[8px] lg:text-[12px] xl:text-[14px] font-[600] lg:font-[600] font-Inter">
                  Công thức Hot
                </p>
              </div>
              <p
                className="  text-[20px] lg:text-[40px]  xl:text-[55px] font-[700] font-Inter  line-clamp-2 truncate whitespace-normal text-clip overflow-hidden"
                style={{ lineHeight: "1.2", minHeight: "1em" }}
              >
                {recipe?.name}
              </p>

              <p
                style={{ color: "rgba(0, 0, 0, 60%)" }}
                className=" font-Inter text-[12px] lg:text-[14px] xl:text-[15px] line-clamp-2 xl:line-clamp-4 truncate whitespace-normal text-clip overflow-hidden"
              >
                {recipe.description}
              </p>

              <div className=" flex gap-[5px] xl:gap-[20px] items-center">
                <div
                  className="px-[10px] h-fit w-[50%] xl:w-[30%] lg:px-[15px] gap-1 lg:gap-2 py-[2px] lg:py-[7px] flex justify-start items-center rounded-[10px] lg:rounded-full"
                  //style={{ backgroundColor: "rgba(0, 0, 0, 5%)" }}
                >
                  <Image
                    className="w-[11px] h-[11px] lg:w-[24px] lg:h-[24px]"
                    src="/icon/Timer.svg"
                    alt="Timer"
                    width={11}
                    height={11}
                  />

                  <p
                    style={{ color: "rgba(0, 0, 0, 60%)" }}
                    className="text-[8px] lg:text-[14px]"
                  >
                    {formatCookTime(recipe?.cookTime)}
                  </p>
                </div>
                <div
                  className=" px-[10px] lg:px-[15px] w-[50%] xl:w-[70%] h-fit gap-1 lg:gap-2 py-[2px] lg:py-[7px] flex justify-start items-center rounded-full"
                  //style={{ backgroundColor: "rgba(0, 0, 0, 5%)" }}
                >
                  <Image
                    className="w-[11px] h-[11px] lg:w-[24px] lg:h-[24px]"
                    src="/icon/ForkKnife.svg"
                    alt="ForkKnife"
                    width={11}
                    height={11}
                  />

                  <p
                    style={{ color: "rgba(0, 0, 0, 60%)" }}
                    className="flex-grow text-[8px] lg:text-[14px] line-clamp-1 truncate whitespace-normal text-clip overflow-hidden"
                  >
                    {/* Hiển thị hashtags */}
                    {recipe?.hashtags.map((hashtag, index) => (
                      <span key={index} className="px-[3px]">
                        <span key={hashtag.label} className="underline">{hashtag.label}</span>
                        {index < recipe?.hashtags.length - 1 && <span className="text-red-500">, </span>}
                      </span>
                    ))}
                  </p>
                </div>

              </div>

              <div className="flex justify-between">
                <div className="w-fit flex justify-center items-center gap-1 lg:gap-3">
                  <Image
                    className="object-cover rounded-full w-[20px] h-[20px] lg:w-[45px] lg:h-[45px]"
                    src={userInfo?.avatar ?? '/icon/default_avatar.png'}
                    alt="avata"
                    width={45}
                    height={45}
                    quality={100} // Điều chỉnh chất lượng lên mức cao nhất
                  />

                  <span className="flex text-[7px] lg:text-[15px] flex-col justify-center font-Inter">
                    <p className="font-[700]">{userInfo?.username}</p>
                    <p style={{ color: "rgba(0, 0, 0, 60%)" }}>
                      {recipe?.createdAt ? formatDate(recipe.createdAt) : "No date available"}
                    </p>
                  </span>
                </div>

                <div className="bg-black w-fit flex justify-center items-center gap-1 lg:gap-4 cursor-pointer rounded-[5px]  xl:rounded-[10px]  xl:py-[12px] px-[7px] lg:px-[20px] xl:px-[30px]">
                  <p 
                  className="text-white w-fit font-Inter text-[7px] lg:text-[12px] xl:text-[14px] font-[500]"
                  onClick={handleNavigate}
                  >
                    View Recipes
                  </p>

                  <Image
                    className="w-[12] h-[12px] lg:w-[24px] lg:h-[24px] "
                    src="/icon/PlayCircle.svg"
                    alt="PlayCircle"
                    width={12}
                    height={12}
                  />
                </div>
              </div>
            </div>
          </div>

          
          <div className="bg-slate-500 w-[100%] h-full  lg:rounded-r-[50px] relative overflow-hidden">
            <Image
              className="w-full h-full object-cover object-center absolute inset-0"
              src={recipe?.media || "/images/default_image.png"}
              alt={recipe?.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
            />
          </div>
          <div className="absolute top-[10px] lg:top-[30px] xl:top-[40px]">
            <Image
              className="w-[70px] h-[70px] lg:w-[150px] lg:h-[150px]"
              src="/images/Badge.svg"
              alt="Badge"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HotRecipes;
