"use client";
import { useState, useEffect } from "react";
import { Table, Pagination, message } from "antd";
import { useUser } from "@/context/User-provider";
import { useAuthorRecipes } from "@/context/AuthorRecipesContext";
import Recipes_5 from "../Recipes/Recipes_5";

const YourRecipes_2 = () => {
  const { id: userId } = useUser() || {};
  const { recipes, loading, error, fetchRecipesByAuthor } = useAuthorRecipes();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 10;

  useEffect(() => {
    if (userId) {
      fetchRecipesByAuthor(userId);
    }
  }, [userId, fetchRecipesByAuthor]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
        <p className="ml-2">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center w-full p-2 sm:p-4">
      <div className="w-full max-w-full sm:max-w-4xl">
        <div className="flex flex-col gap-[60px] xl:gap-[114px] mt-[50px] xl:mt-[120px]">
          <div className="px-[10px] xl:px-0 flex flex-col justify-center font-Inter items-center gap-[20px] lg:gap-[30px]">
            <h1 className="text-[25px] lg:text-[30px] text-center xl:text-[40px] font-[700]">
              Những công thức nấu ăn tuyệt vời của bạn
            </h1>
            <p
              className="text-[14px] lg:text-[15px] xl:text-[16px] text-center max-w-[700px] font-light"
              style={{ color: "rgba(0, 0, 0, 60%)" }}
            >
              Đây là tổng hợp những công thức nấu ăn tuyệt vời mà bạn đã chia sẻ cho chính tôi.
            </p>
          </div>

          <div className="w-full gap-[10px] lg:gap-[30px] flex flex-wrap xl:gap-[40px] justify-center xl:px-0 lg:justify-center items-center">
            <Table
              dataSource={recipes.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
              pagination={false}
              rowKey={(record) => record.id}
              columns={[
                { title: "Name", dataIndex: "name", key: "name" },
                {
                  title: "Media",
                  dataIndex: "media",
                  key: "media",
                  render: (media: string) => (
                    <img src={media} alt="Recipe Media" className="w-12 h-12 object-cover" />
                  ),
                },
                {
                  title: "User",
                  dataIndex: "user",
                  key: "user",
                  render: (user: { _id: string; username: string }) => user.username,
                },
                {
                  title: "Created",
                  dataIndex: "createdAt",
                  key: "created",
                  render: (createdAt: string) => new Date(createdAt).toLocaleDateString(),
                },
                {
                  title: "Views",
                  dataIndex: "views",
                  key: "views",
                  render: (views: number) => views,
                },
                {
                  title: "Likes",
                  dataIndex: "likes",
                  key: "likes",
                  render: (likes: any) => (Array.isArray(likes) ? likes.length : likes),
                },
              ]}
            />
            <div className="flex justify-end mt-4">
              <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={recipes.length}
                onChange={handlePageChange}
                className="text-xs sm:text-base"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourRecipes_2;
