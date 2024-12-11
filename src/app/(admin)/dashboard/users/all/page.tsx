"use client";

import React, { useState, useEffect } from "react";
import { Table, Button, Pagination, message, Image, Select, Input } from "antd";
import EditUserForm from "@/components/EditUserForm/EditUserForm"; 



interface User {
    id: string; // hoặc number, tùy theo backend của bạn
    role: string;
    avatar: string;
    email: string;
    username: string;
    createdAt: string;
  }

const AllUsersPage: React.FC = () => {
//   const [users, setUsers] = useState([]); // Dữ liệu người dùng
//   const [filteredUsers, setFilteredUsers] = useState([]); // Người dùng sau khi áp dụng filter
// Cập nhật kiểu dữ liệu cho state
const [users, setUsers] = useState<User[]>([]); // Mảng người dùng
const [filteredUsers, setFilteredUsers] = useState<User[]>([]); // Mảng người dùng đã lọc
  const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [filterRole, setFilterRole] = useState("all"); // Giá trị filter
  const [searchKeyword, setSearchKeyword] = useState(""); // Từ khóa tìm kiếm
  const [editData, setEditData] = useState<any>(null); 
  const [isEditModalVisible, setIsEditModalVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const pageSize = 4; // Số lượng bản ghi trên mỗi trang

  // Fetch dữ liệu người dùng
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/getAllUsers");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data: User[] = await response.json(); // Ép kiểu dữ liệu trả về từ API
      setUsers(data);
      setFilteredUsers(data); // Gán dữ liệu ban đầu
    } catch (error) {
      console.error("Error fetching users:", error);
      message.error("Failed to load users.");
    } finally {
      setLoading(false);
    }
  };
  

  
  useEffect(() => {
    fetchUsers();
  }, []);

  // Xử lý khi thay đổi filter
  const handleFilterChange = (value: string) => {
    setFilterRole(value);
    applyFilters(value, searchKeyword);
  };

  // Xử lý khi thay đổi từ khóa tìm kiếm
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value;
    setSearchKeyword(keyword);
    applyFilters(filterRole, keyword);
  };

  // Hàm áp dụng bộ lọc và tìm kiếm
  const applyFilters = (role: string, keyword: string) => {
    let filtered = users;

    if (role !== "all") {
      filtered = filtered.filter((user) => user.role === role);
    }

    if (keyword.trim() !== "") {
      filtered = filtered.filter(
        (user) =>
          user.username.toLowerCase().includes(keyword.toLowerCase()) ||
          user.email.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    setFilteredUsers(filtered);
    setCurrentPage(1); // Reset về trang đầu tiên
  };






  const handleEditUser = (record: User) => {
    setEditData(record);
    setIsEditModalVisible(true);
  };
  
  const handleEditSubmit = async (formData: FormData): Promise<void> => {
    setIsEditModalVisible(false)
    setIsLoading(true); // Hiển thị loading
    try {
      const response = await fetch("/api/updateProfile", {
        method: "PATCH", // Sử dụng PATCH để khớp với logic server
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("Failed to edit user");
      }
  
     
      message.success("User updated successfully");
      setIsLoading(false); // Hiển thị loading
      fetchUsers(); // Reload users after successful update
    } catch (error) {
      console.error("Error updating user:", error);
      message.error("Failed to update user.");
    }
  };
  


  const handleDeleteUser = (record: any) => {
    // Xác nhận xóa
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    
    if (confirmDelete) {
        setIsLoading(true); // Hiển thị loading

        // Gửi yêu cầu xóa
        fetch(`/api/deleteUser/${record.id}`, {
            method: 'DELETE',
        })
        .then(async (response) => {
            if (response.ok) {
                message.success("Category deleted successfully!");
                fetchUsers(); // Lấy lại danh sách category sau khi xóa thành công
            } else {
                const errorData = await response.json();
                message.error(`Failed to delete category: ${errorData.message || 'Unknown error'}`);
            }
        })
        .catch((error) => {
            message.error("Failed to delete category");
            console.error("Error:", error);
        })
        .finally(() => {
            setIsLoading(false); // Ẩn loading
        });
    }
};
  

  // Dữ liệu người dùng hiện tại cho trang
  const currentData = filteredUsers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Hàm xử lý khi thay đổi trang
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  };

  // Cấu hình cột cho bảng
  const columns = [
    { title: "Role", dataIndex: "role", key: "role" },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar: string) =>
        avatar ? (
          <Image
            className="w-[50px] h-[50px] object-cover rounded-full border border-gray-300"
            src={avatar}
            alt="Avatar"
            width={50}
            height={50}
            style={{ borderRadius: "50%" }}
            fallback="/default-avatar.png" // Ảnh mặc định khi không load được
          />
        ) : (
          "No Avatar"
        ),
    },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Name", dataIndex: "username", key: "username" },
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
            className="w-[90px] text-xs"
            type="primary"
            style={{ marginRight: "8px" }}
            onClick={() => handleEditUser(record)}
          >
            Edit
          </Button>
          <Button
            className="w-[90px] text-xs"
            danger
            onClick={() => handleDeleteUser(record)} 
            >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex justify-center items-center w-full p-2 sm:p-4">
        {isLoading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">
                <div
                    style={{ borderTopColor: "transparent" }}
                    className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
                ></div>
                <p className="ml-2">Please Wait...</p>
                </div>
            )}
      <div className="w-full max-w-full sm:max-w-4xl">
        <div className=" flex flex-col lg:flex-row justify-between items-end mb-4">
          <div className=" w-full flex flex-col lg:flex-row lg:justify-between space-x-4 items-end">
            <Select
              className="hidden lg:block"
              value={filterRole}
              onChange={handleFilterChange}
              style={{ width: 200 }}
              options={[
                { value: "all", label: "All Roles" },
                { value: "user", label: "User" },
                { value: "admin", label: "Admin" },
              ]}
            />
            <Input
              placeholder="Search by name or email"
              value={searchKeyword}
              onChange={handleSearchChange}
              style={{ width: 300 }}
            />
          </div>
          {/* <Button
            className="mr-4 text-xs sm:text-base"
            type="primary"
            onClick={() => console.log("Add Team Member")}
          >
            Add Team Member
          </Button> */}
        </div>
        <Table
          dataSource={currentData}
          columns={columns}
          pagination={false} // Tắt phân trang mặc định của bảng
          rowKey="id"
          loading={loading} // Hiển thị trạng thái tải dữ liệu
          className="w-full overflow-auto"
        />
        <div className="flex justify-between lg:justify-center lg:items-center mt-4">
            <Select
              className="lg:hidden"
              value={filterRole}
              onChange={handleFilterChange}
              style={{ width: 200 }}
              options={[
                { value: "all", label: "All Roles" },
                { value: "user", label: "User" },
                { value: "admin", label: "Admin" },
              ]}
            />

          <Pagination
            current={currentPage}
            pageSize={pageSize}
            onChange={handlePageChange}
            total={filteredUsers.length} // Tổng số bản ghi sau khi lọc
            style={{ textAlign: "right" }}
          />
        </div>
        <EditUserForm
                    visible={isEditModalVisible}
                    onClose={() => setIsEditModalVisible(false)}
                    onSubmit={handleEditSubmit}
                    editData={editData}
        />
      </div>
    </div>
  );
};

export default AllUsersPage;
