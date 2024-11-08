
// "use client";
// import React, { useState, useEffect } from 'react';
// import { Table, Button, Pagination, message } from 'antd';
// import AddCategoryForm from '@/components/AddCategoryForm/AddCategoryForm';

// interface Category {
//     title: string;
//     created: string;
//     contentType: string;
//     topic: string; // Thêm trường topic vào interface
// }

// const AllCategoriesPage: React.FC = () => {
//     const [categories, setCategories] = useState<Category[]>([]);
//     const [currentPage, setCurrentPage] = useState<number>(1);
//     const pageSize = 20;
//     const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

//     const handlePageChange = (page: number) => {
//         setCurrentPage(page);
//     };

//     const handleAddCategory = () => {
//         setIsModalVisible(true);
//     };

//     const handleSubmit = async (formData: FormData): Promise<void> => {
//         console.log("Form Data Submitted:");
//         formData.forEach((value, key) => {
//             console.log(key, value);
//         });

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
//                 setIsModalVisible(false);
//                 // Gọi lại API để lấy lại danh sách categories nếu cần
//                 // fetchCategories();
//             } else {
//                 message.error("Failed to add category");
//                 console.error("Error:", await response.text());
//             }
//         } catch (error) {
//             message.error("Failed to add category");
//             console.error("Error:", error);
//         }
//     };

//     const columns = [
//         { title: 'Title', dataIndex: 'title', key: 'title' },
//         { title: 'Topic', dataIndex: 'topic', key: 'topic' }, // Thêm cột topic vào bảng
//         {
//             title: 'Cover Image',
//             dataIndex: 'coverImage',
//             key: 'coverImage',
//             render: (text: string) => <img src={text} alt="Cover" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
//         },
//         { title: 'Created', dataIndex: 'created', key: 'created' },
//         {
//             title: 'Actions',
//             key: 'actions',
//             render: (_: any, record: Category) => (
//                 <div>
//                     <Button type="primary" style={{ marginRight: '8px' }}>Edit</Button>
//                     <Button danger>Delete</Button>
//                 </div>
//             ),
//         },
//     ];

//     return (
//         <div className="flex justify-center items-center w-full p-4">
//             <div className="w-full max-w-4xl">
//                 <Button type="primary" onClick={handleAddCategory} style={{ marginBottom: '16px' }}>
//                     Add Category
//                 </Button>
//                 <Table
//                     dataSource={categories.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
//                     columns={columns}
//                     pagination={false}
//                 />
//                 <Pagination
//                     current={currentPage}
//                     pageSize={pageSize}
//                     total={categories.length}
//                     onChange={handlePageChange}
//                     style={{ marginTop: '16px' }}
//                 />
//                 <AddCategoryForm
//                     visible={isModalVisible}
//                     onClose={() => setIsModalVisible(false)}
//                     onSubmit={handleSubmit}
//                 />
//             </div>
//         </div>
//     );
// };

// export default AllCategoriesPage;













"use client";
import React, { useState, useEffect } from 'react';
import { Table, Button, Pagination, message } from 'antd';
import AddCategoryForm from '@/components/AddCategoryForm/AddCategoryForm';

interface Category {
    _id: string;
    title: string;
    data: string; // Dữ liệu Base64 của ảnh
    contentType: string;
    topic: string;
    createdAt: string;
}

const AllCategoriesPage: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 10;
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    useEffect(() => {
        fetchCategories();  // Gọi API để lấy danh sách categories
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await fetch('/api/dashboard/categories', { method: 'GET' });
            if (response.ok) {
                const data = await response.json();
                setCategories(data);
            } else {
                message.error("Failed to fetch categories.");
                console.error("Error:", await response.text());
            }
        } catch (error) {
            message.error("Failed to fetch categories.");
            console.error("Error:", error);
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleAddCategory = () => {
        setIsModalVisible(true);
    };

    const handleSubmit = async (formData: FormData): Promise<void> => {
        if (!formData.has("coverImage")) {
            message.error("Please upload a cover image.");
            return;
        }

        try {
            const response = await fetch('/api/dashboard/categories', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                message.success("Category added successfully!");
                setIsModalVisible(false);
                fetchCategories();  // Cập nhật danh sách categories
            } else {
                message.error("Failed to add category");
                console.error("Error:", await response.text());
            }
        } catch (error) {
            message.error("Failed to add category");
            console.error("Error:", error);
        }
    };



    // const formatDate = (dateString: string) => {
    //     const date = new Date(dateString);
    //     return date.toLocaleDateString(); // Chỉ lấy ngày tháng năm
    // };


    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(-2);
        return `${day}/${month}/${year}`;
    };

    const columns = [
        { title: 'Title', dataIndex: 'title', key: 'title' },
        { title: 'Topic', dataIndex: 'topic', key: 'topic' },
        {
            title: 'Cover Image',
            dataIndex: 'data',
            key: 'coverImage',
            render: (data: string) => (
                <img src={data} alt="Cover" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
            ),
        },
        { title: 'Created', dataIndex: 'createdAt', key: 'created', render: (text: string) => formatDate(text) },
        {
            title: 'Actions',
            key: 'actions',
            render: (_: any, record: Category) => (
                <div>
                    <Button type="primary" style={{ marginRight: '8px' }}>Edit</Button>
                    <Button danger>Delete</Button>
                </div>
            ),
        },
    ];

    return (
        <div className="flex justify-center items-center w-full p-4">
            <div className="w-full max-w-4xl">
                {/* Wrapper div to align Button and Pagination to the right */}
                <div className="flex justify-end mb-4">
                    <Button type="primary" onClick={handleAddCategory} className="mr-4">
                        Add Category
                    </Button>
                </div>

                <Table
                    dataSource={categories.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
                    columns={columns}
                    pagination={false}
                />

                {/* Wrapper div to align Pagination to the right */}
                <div className="flex justify-end mt-4">
                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={categories.length}
                        onChange={handlePageChange}
                    />
                </div>
                
                <AddCategoryForm
                    visible={isModalVisible}
                    onClose={() => setIsModalVisible(false)}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
};

export default AllCategoriesPage;














