// "use client"

// import React, { useState, useEffect } from 'react';
// import { Table, Pagination } from 'antd';
// import { useAuthorRecipes } from '../../../../../hooks/useFetchRecipesByAuthor';
// import { useUser } from "@/context/User-provider";

// const RecipesPage: React.FC = () => {
//   const { recipes, loading, error, fetchRecipesByAuthor } = useAuthorRecipes();
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const pageSize = 10;

//   const infoUser = useUser();  // Lấy thông tin người dùng từ context
//   const authorId = infoUser?.id;  // Lấy authorId từ infoUser

//   useEffect(() => {
//     if (authorId) {
//       fetchRecipesByAuthor(authorId);  // Gọi API khi có authorId
//     }
//   }, [authorId, fetchRecipesByAuthor]);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="text-xl">Loading...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="text-xl text-red-500">Error: {error}</div>
//       </div>
//     );
//   }

//   const columns = [
//     { title: "Name", dataIndex: "name", key: "name" },
//     {
//       title: "Media",
//       dataIndex: "media",
//       key: "media",
//       render: (media: string) => (
//         <img src={media} alt="Recipe Media" className="w-12 h-12 object-cover" />
//       ),
//     },
//     {
//       title: "User",
//       dataIndex: "user",
//       key: "user",
//       render: (user: { _id: string; username: string }) => user.username,
//     },
//     {
//       title: "Created",
//       dataIndex: "createdAt",
//       key: "created",
//       render: (createdAt: string) => new Date(createdAt).toLocaleDateString(),
//     },
//     {
//       title: "Views",
//       dataIndex: "views",
//       key: "views",
//       render: (views: number) => views,
//     },
//     {
//       title: "Likes",
//       dataIndex: "likes",
//       key: "likes",
//       render: (likes: any) => Array.isArray(likes) ? likes.length : likes, // Kiểm tra nếu likes là mảng, dùng .length
//     },
    
//   ];

//   return (
//     <div className="flex justify-center items-center w-full p-2 sm:p-4">
//       <div className="w-full max-w-full sm:max-w-4xl">
//         <Table
//           dataSource={recipes.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
//           columns={columns}
//           pagination={false}
//           className="w-full overflow-auto"
//           rowKey={(record) => record.id}
//         />
//         <div className="flex justify-end mt-4">
//           <Pagination
//             current={currentPage}
//             pageSize={pageSize}
//             total={recipes.length}
//             onChange={handlePageChange}
//             className="text-xs sm:text-base"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecipesPage;













"use client"

import React, { useState, useEffect } from 'react';
import { Table, Pagination, Button } from 'antd';
import { useAuthorRecipes } from '../../../../../hooks/useFetchRecipesByAuthor';
import { useUser } from "@/context/User-provider";

const RecipesPage: React.FC = () => {
  const { recipes, loading, error, fetchRecipesByAuthor } = useAuthorRecipes();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 10;

  const infoUser = useUser();  // Lấy thông tin người dùng từ context
  const authorId = infoUser?.id;  // Lấy authorId từ infoUser

  useEffect(() => {
    if (authorId) {
      fetchRecipesByAuthor(authorId);  // Gọi API khi có authorId
    }
  }, [authorId, fetchRecipesByAuthor]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl">Loading...</div>
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

  const handleEdit = (id: string) => {
    console.log(`Edit recipe with ID: ${id}`);
    // Thêm logic để điều hướng đến trang chỉnh sửa hoặc hiển thị form chỉnh sửa
  };

  const handleDelete = (id: string) => {
    console.log(`Delete recipe with ID: ${id}`);
    // Thêm logic để xóa công thức
  };

  const columns = [
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
      render: (likes: any) => Array.isArray(likes) ? likes.length : likes, // Kiểm tra nếu likes là mảng, dùng .length
    },
    {
      title: "Actions",
      key: "actions",
      render: (text: string, record: any) => (
        <div className="flex space-x-2">
          <Button type="primary" onClick={() => handleEdit(record.id)} size="small">Edit</Button>
          <Button danger onClick={() => handleDelete(record.id)} size="small">Delete</Button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex justify-center items-center w-full p-2 sm:p-4">
      <div className="w-full max-w-full sm:max-w-4xl">
        <Table
          dataSource={recipes.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
          columns={columns}
          pagination={false}
          className="w-full overflow-auto"
          rowKey={(record) => record.id}
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
  );
};

export default RecipesPage;
