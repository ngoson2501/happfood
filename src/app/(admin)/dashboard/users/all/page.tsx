"use client";
import React, { useState } from 'react';
import { Table, Button, Pagination } from 'antd';

const AllUsersPage: React.FC = () => {
    // Dữ liệu người dùng mô phỏng
    const mockData = Array.from({ length: 100 }, (_, index) => ({
        role: index % 2 === 0 ? 'User' : index % 3 === 0 ? 'Manager' : 'Owner',
        email: `user${index + 1}@example.com`,
        name: `User ${index + 1}`,
        created: '02/15/22',
    }));

    const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
    const pageSize = 20; // Số lượng bản ghi trên mỗi trang

    // Tính toán dữ liệu người dùng hiện tại cho trang
    const currentData = mockData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    // Hàm xử lý khi thay đổi trang
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    // Hàm xử lý khi nhấn nút "Add Team Member"
    const handleAddMember = () => {
        // Thực hiện hành động mở form hoặc modal để thêm thành viên mới
        console.log("Add Team Member clicked");
    };

    // Cấu hình cột cho bảng
    const columns = [
        { title: 'Role', dataIndex: 'role', key: 'role' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Created', dataIndex: 'created', key: 'created' },
        {
            title: 'Actions',
            key: 'actions',
            render: (_: any, record: any) => (
                <div>
                    <Button type="primary" style={{ marginRight: '8px' }}>Edit</Button>
                    <Button danger>Delete</Button>
                </div>
            ),
        },
    ];

    return (
        <div className="flex justify-center items-center w-full p-4">
            <div className="w-full max-w-3xl"> {/* Giới hạn chiều rộng bảng */}
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">User Management</h1>
                    <Button type="primary" onClick={handleAddMember}>Add Team Member</Button>
                </div>
                <Table
                    dataSource={currentData}
                    columns={columns}
                    pagination={false} // Tắt phân trang mặc định của bảng để dùng phân trang custom
                    rowKey="email"
                />
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    onChange={handlePageChange}
                    total={mockData.length} // Tổng số bản ghi từ dữ liệu mô phỏng
                    style={{ marginTop: '16px', textAlign: 'right' }}
                />
            </div>
        </div>
    );
};

export default AllUsersPage
