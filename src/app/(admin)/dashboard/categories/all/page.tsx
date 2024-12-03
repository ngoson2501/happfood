"use client";
import React, { useState } from 'react';
import { Table, Button, Pagination, message } from 'antd';
import AddCategoryForm from '@/components/AddCategoryForm/AddCategoryForm';
import useCategories from '../../../../../../hooks/useCategories';

const AllCategoriesPage: React.FC = () => {
    const { categories, fetchCategories } = useCategories();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 10;
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);


    console.log("check categories:", categories)

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
                fetchCategories();
            } else {
                message.error("Failed to add category");
                console.error("Error:", await response.text());
            }
        } catch (error) {
            message.error("Failed to add category");
            console.error("Error:", error);
        }
    };

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
                <img src={data} alt="Cover" className="w-12 h-12 object-cover" />
            ),
        },
        { title: 'Created', dataIndex: 'createdAt', key: 'created', render: (text: string) => formatDate(text) },
        {
            title: 'Actions',
            key: 'actions',
            render: (_: any, record: any) => (
                <div className="flex space-x-2">
                    <Button type="primary" className="w-[90px] text-xs">Edit</Button>
                    <Button danger className="w-[90px] text-xs">Delete</Button>
                </div>
            ),
        },
    ];

    return (
        <div className="flex justify-center items-center w-full p-2 sm:p-4">
            <div className="w-full max-w-full sm:max-w-4xl">
                <div className="flex justify-end mb-4">
                    <Button type="primary" onClick={handleAddCategory} className="mr-4 text-xs sm:text-base">
                        Add Category
                    </Button>
                </div>

                <Table
                    dataSource={categories.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
                    columns={columns}
                    pagination={false}
                    className="w-full overflow-auto"
                />

                <div className="flex justify-end mt-4">
                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={categories.length}
                        onChange={handlePageChange}
                        className="text-xs sm:text-base"
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
