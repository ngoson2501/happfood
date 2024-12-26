
// "use client";
// import React, { useState } from 'react';
// import { Table, Button, Pagination, message } from 'antd';
// import AddCategoryForm from '@/components/AddCategoryForm/AddCategoryForm';
// import EditCategoryForm from '@/components/EditCategoryForm/EditCategoryForm';
// import useCategories from '../../../../../hooks/useCategories';

// const PostManagementPage: React.FC = () => {
//     const { categories, fetchCategories } = useCategories();
//     const [currentPage, setCurrentPage] = useState<number>(1);
//     const pageSize = 10;
//     const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
//     const [isEditModalVisible, setIsEditModalVisible] = useState<boolean>(false);
//     const [editData, setEditData] = useState<any>(null);    
//     const [isLoading, setIsLoading] = useState<boolean>(false);

//     console.log("check categories:", categories)

//     const handlePageChange = (page: number) => {
//         setCurrentPage(page);
//     };

//     const handleAddCategory = () => {
//         setIsModalVisible(true);
//     };

//     const handleEditCategory = (record: any) => {
//         setEditData(record);
//         setIsEditModalVisible(true);
//     };
    
//     const handleAddSubmit = async (formData: FormData): Promise<void> => {
//         setIsModalVisible(false);
//         setIsLoading(true); // Hiển thị loading
//         if (!formData.has("coverImage")) {
//             message.error("Please upload a cover image.");
//             return;
//         }

//         try {
//             const response = await fetch('/api/dashboard/categories', {
//                 method: 'POST',
//                 body: formData,
//             });

//             if (response.ok) {
//                 message.success("Category added successfully!");
//                 setIsLoading(false); // Hiển thị loading
//                 fetchCategories();
//             } else {
//                 message.error("Failed to add category");
//                 console.error("Error:", await response.text());
//             }
//         } catch (error) {
//             message.error("Failed to add category");
//             console.error("Error:", error);
//         }
//     };

    





    



//     const handleEditSubmit = async (formData: any): Promise<void> => {
//         setIsEditModalVisible(false);
//         setIsLoading(true);
//         if (!editData || !editData._id) {
//             message.error("No category selected for editing.");
//             return;
//         }
    
//         const dataToSend: any = new FormData();
    
//         // Thêm categoryId vào FormData
//         dataToSend.append('categoryId', editData._id);
//         formData.forEach((value: any, key: string) => {
//             dataToSend.append(key, value);
//         });
    
//         try {
//             const response = await fetch(`/api/dashboard/categories/update_category`, {
//                 method: 'PATCH',
//                 headers: {
//                     // Không cần thêm header X-Category-ID nữa vì đã chuyển categoryId vào FormData
//                 },
//                 body: dataToSend,
//             });
    
//             if (response.ok) {
//                 message.success("Category updated successfully!");
//                 setIsLoading(false); // Hiển thị loading
//             } else {
//                 const errorData = await response.json();
//                 message.error(`Failed to update category: ${errorData.message || 'Unknown error'}`);
//             }
//         } catch (error) {
//             message.error("Failed to update category");
//             console.error("Error:", error);
//         }
//     };
    



//     const handleDeleteCategory = (record: any) => {
//         // Xác nhận xóa
//         const confirmDelete = window.confirm("Are you sure you want to delete this category?");
        
//         if (confirmDelete) {
//             setIsLoading(true); // Hiển thị loading
    
//             // Gửi yêu cầu xóa
//             fetch(`/api/dashboard/categories/delete_category/${record._id}`, {
//                 method: 'DELETE',
//             })
//             .then(async (response) => {
//                 if (response.ok) {
//                     message.success("Category deleted successfully!");
//                     fetchCategories();  // Lấy lại danh sách category sau khi xóa thành công
//                 } else {
//                     const errorData = await response.json();
//                     message.error(`Failed to delete category: ${errorData.message || 'Unknown error'}`);
//                 }
//             })
//             .catch((error) => {
//                 message.error("Failed to delete category");
//                 console.error("Error:", error);
//             })
//             .finally(() => {
//                 setIsLoading(false); // Ẩn loading
//             });
//         }
//     };
    
    


//     const formatDate = (dateString: string) => {
//         const date = new Date(dateString);
//         const day = String(date.getDate()).padStart(2, '0');
//         const month = String(date.getMonth() + 1).padStart(2, '0');
//         const year = String(date.getFullYear()).slice(-2);
//         return `${day}/${month}/${year}`;
//     };

//     const columns = [
//         { title: 'Title', dataIndex: 'title', key: 'title' },
//         { title: 'Topic', dataIndex: 'topic', key: 'topic' },
//         {
//             title: 'Cover Image',
//             dataIndex: 'data',
//             key: 'coverImage',
//             render: (data: string) => (
//                 <img src={data} alt="Cover" className="w-12 h-12 object-cover" />
//             ),
//         },
//         { title: 'Created', dataIndex: 'createdAt', key: 'created', render: (text: string) => formatDate(text) },
//         {
//             title: 'Actions',
//             key: 'actions',
//             render: (_: any, record: any) => (
//                 <div className="flex space-x-2">
//                     <Button
//                         type="primary"
//                         className="w-[90px] text-xs"
//                         onClick={() => handleEditCategory(record)}
//                     >
//                         Edit
//                     </Button>
//                     <Button
//                     danger
//                     className="w-[90px] text-xs"
//                     onClick={() => handleDeleteCategory(record)} // Truyền categoryId vào
//                     >
//                         Delete
//                     </Button>
//             </div>
//             ),
//         },
//     ];

//     return (
//         <div className="flex justify-center items-center w-full p-2 sm:p-4">
//             {isLoading && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">
//                 <div
//                     style={{ borderTopColor: "transparent" }}
//                     className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
//                 ></div>
//                 <p className="ml-2">Please Wait...</p>
//                 </div>
//             )}
//             <div className="w-full max-w-full sm:max-w-4xl">
//                 <div className="flex justify-end mb-4">
//                     <Button type="primary" onClick={handleAddCategory} className="mr-4 text-xs sm:text-base">
//                         Add Category
//                     </Button>
//                 </div>

//                 <Table
//                     dataSource={categories.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
//                     columns={columns}
//                     pagination={false}
//                     className="w-full overflow-auto"
//                 />

//                 <div className="flex justify-end mt-4">
//                     <Pagination
//                         current={currentPage}
//                         pageSize={pageSize}
//                         total={categories.length}
//                         onChange={handlePageChange}
//                         className="text-xs sm:text-base"
//                     />
//                 </div>

//                 <AddCategoryForm
//                     visible={isModalVisible}
//                     onClose={() => setIsModalVisible(false)}
//                     onSubmit={handleAddSubmit}
//                 />
//                 <EditCategoryForm
//                     visible={isEditModalVisible}
//                     onClose={() => setIsEditModalVisible(false)}
//                     onSubmit={handleEditSubmit}
//                     editData={editData}
//                 />
//             </div>
//         </div>
//     );
// };

// export default PostManagementPage;



















"use client";
import React, { useState } from 'react';
import {Modal, Table, Button, Pagination, message } from 'antd';
import usePendingRecipes from '../../../../../hooks/usePendingRecipes';



const PostManagementPage: React.FC = () => {
  
  const { recipes, loading, error, fetchRecipes } = usePendingRecipes();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const pageSize = 10;
  

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };






const handleApprove = async (record: any) => {
    console.log("check id recipe:", record.id);
    Modal.confirm({
      title: (
        <span className='font-medium text-gray-900'>
          {`Bạn có chắc chắn muốn duyệt công thức:`} <br />
          <span
            className="text-sm text-gray-700"
          >
            {record.name}
          </span>
        </span>
      ),
      onOk: async () => {
        setIsLoading(true);
        try {
          const response = await fetch(
            `/api/dashboard/recipes/approve_recipe/${record.id}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
  
          if (response.ok) {
            message.success(`Recipe "${record.name}" approved successfully!`);
            fetchRecipes();
            
            
          } else {
            const errorBody = await response.json();
            console.error("Approve failed:", errorBody);
            message.error(`Failed to approve recipe: ${errorBody.message || 'Unknown error'}`);
          }
        } catch (error) {
          console.error("Error while approving recipe:", error);
          message.error("An error occurred while approving the recipe.");
        } finally {
          setIsLoading(false);
        }
      },
      onCancel: () => {
        console.log("Approve canceled");
      },
      okText: "Approve",
      cancelText: "Cancel",
    });
  };
  


  
  
const handleReject = async (record: any) => {
    Modal.confirm({
      title: (
        <span className="text-[#971c1a] font-medium">
          {`Bạn có chắc chắn muốn xoá công thức:`} <br />
          <span className="text-[#b91b1b] text-sm">
            {record.name}
          </span>
        </span>
      ),
      onOk: async () => {
        try {
          const response = await fetch(
            `/api/recipes/recipe/delete_recipe/${record.id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
  
          if (response.ok) {
            message.success(`Recipe "${record.name}" deleted successfully!`);
            fetchRecipes();
            // router.push("/recipes"); // Điều hướng về danh sách công thức sau khi xóa
          } else {
            const errorBody = await response.json();
            console.error("Delete failed:", errorBody);
            message.error("Failed to delete recipe.");
          }
        } catch (error) {
          console.error("Error while deleting recipe:", error);
          message.error("An error occurred while deleting the recipe.");
        }
      },
      onCancel: () => {
        console.log("Delete canceled");
      },
      okText: "Delete",
      cancelText: "Cancel",
      okButtonProps: {
        className: "bg-[#b91b1b] hover:bg-[#971c1a] text-white", // Màu nền đỏ và hiệu ứng hover
      },
    });
  };
  


const handleReview = async (record: any) => {
    // Ví dụ: Chuyển hướng tới trang đánh giá công thức
    console.log("Reviewing recipe:", record);
    // Hoặc xử lý logic khác
};





const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
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
      render: (text: string) => formatDate(text),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: any) => (
        <div className="flex space-x-2">
          <Button
              type="primary"
              className="w-[90px] text-xs"
              onClick={() => handleApprove(record)}
            >
              Duyệt
          </Button>
          <Button
            danger
            className="w-[90px] text-xs"
            onClick={() => handleReject(record)}
          >
            Huỷ
          </Button>
          <Button
            type="dashed"
            className="w-[90px] text-xs"
            onClick={() => handleReview(record)}
          >
            Đánh giá
          </Button>
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

export default PostManagementPage;
