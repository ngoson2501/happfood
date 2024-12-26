"use client"; // Đảm bảo dùng chính xác "use client" ở đây
import React, { useState, useEffect } from "react";
import { Table, Button, Pagination, message, Image, Select, Input } from "antd";
import useFetchActiveUsers from "../../../../hooks/useFetchActiveUsers";
import usePendingRecipes from "../../../../hooks/usePendingRecipes";
import { useRecipeContext } from "@/context/RecipeContext";
import useFetchUsers from "../../../../hooks/useFetchUsers";
import MonthlyRecipesChart from "@/components/MonthlyRecipesChart/MonthlyRecipesChart";
import WeeklyLoginChart from "@/components/WeeklyLoginChart/WeeklyLoginChart";

import { FiUsers } from "react-icons/fi";
import { GoNote } from "react-icons/go";
import Link from "next/link";


interface User {
  id: string;
  role: string;
  avatar: string;
  email: string;
  username: string;
}

const DashboardPage: React.FC = () => {
  const { activeUsers, loading, error, refetch } = useFetchActiveUsers();
  const { recipes } = usePendingRecipes();
  const { recipes:AllPost } = useRecipeContext();
  const { data: AllUsers } = useFetchUsers(); // Gọi hook

  const [filterRole, setFilterRole] = useState("all"); // Filter state
  const [searchKeyword, setSearchKeyword] = useState(""); // Search keyword state
  const pageSize = 4; // Number of records per page
  const [currentPage, setCurrentPage] = useState(1); // Current page

  //const { frequencyData} = useFetchFrequencyData();

  console.log("activeUsers>>>>>", activeUsers); // Debugging activeUsers data

  // Handle filter change
  const handleFilterChange = (value: string) => {
    setFilterRole(value);
  };

  // Handle search change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.target.value);
  };

  // Apply filters and search
  const applyFilters = () => {
    if (!Array.isArray(activeUsers)) {
      console.log("activeUsers is not an array", activeUsers); // Debugging invalid data
      return [];
    }

    let filtered = activeUsers;

    if (filterRole !== "all") {
      filtered = filtered.filter((user) => user.role === filterRole);
    }

    if (searchKeyword.trim() !== "") {
      filtered = filtered.filter(
        (user) =>
          user.username.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          user.email.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    }

    return filtered;
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Handle edit user
  const handleEditUser = (user: User) => {
    // Your edit logic here
    console.log(user);
  };

  // Data to display in the table
  const currentData = applyFilters().slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Table columns configuration
  const columns = [
    { title: "Role", dataIndex: "role", key: "role" },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar: string) => (
        <Image
          className="w-[50px] h-[50px] object-cover rounded-full border border-gray-300"
          src={avatar}
          alt="Avatar"
          width={50}
          height={50}
          fallback="/default-avatar.png"
        />
      ),
    },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Name", dataIndex: "username", key: "username" },
    // {
    //   title: 'Actions',
    //   key: 'actions',
    //   render: (_: any, user: User) => (
    //     <Button type="primary" onClick={() => handleEditUser(user)}>
    //       Edit
    //     </Button>
    //   ),
    // },
  ];

  // Log dữ liệu trong bảng
  console.log("currentData:", currentData);

  return (
    <div className="bg-white flex flex-col justify-center items-center w-full p-2 sm:p-4">

      <div className="bg-white w-full max-w-full sm:max-w-4xl">
        <div className=" w-full  flex gap-4 flex-wrap">
          
          
          <Link href="/dashboard/post_management" className="bg-white h-[130px] w-min-[250px] w-[288px] flex justify-center items-center rounded-[10px] group hover:cursor-pointer shadow-lg">
            <div className="flex justify-center items-center gap-5 transform group-hover:scale-105 transition-transform duration-300">
              <GoNote className="text-[50px]" />
              <div className="flex flex-col">
                <span className="font-[700] text-[20px]">New Post</span>
                <span className="text-[25px] text-red-500">+ {recipes.length}</span>
              </div>
            </div>
          </Link>

          <Link href="/dashboard/recipes/all" className="bg-white h-[130px] w-min-[250px] w-[288px] flex justify-center items-center rounded-[10px] group hover:cursor-pointer shadow-lg">
            <div className="flex justify-center items-center gap-5 transform group-hover:scale-105 transition-transform duration-300">
              <GoNote className="text-[50px]" />
              <div className="flex flex-col">
                <span className="font-[700] text-[20px]">All Post</span>
                <span className="text-[25px] text-green-600">+ {AllPost.length}</span>
              </div>
            </div>
          </Link>
          
          <Link href="/dashboard/users/all" className="bg-white h-[130px] w-min-[250px] w-[288px] flex justify-center items-center rounded-[10px] group hover:cursor-pointer shadow-lg">
            <div className="flex justify-center items-center gap-5 transform group-hover:scale-105 transition-transform duration-300">
              <FiUsers className="text-[50px]" />
              <div className="flex flex-col">
                <span className="font-[700] text-[20px]">Users</span>
                <span className="text-[25px] text-green-600">+ {AllUsers.length}</span>
              </div>
            </div>
          </Link>

         

        </div>

        
        <div className=" flex flex-col lg:flex-row justify-between items-end my-7">
          <div className=" w-full flex  lg:justify-between space-x-3 items-end">
            <Select
              className="w-[120px]"
              value={filterRole}
              onChange={handleFilterChange}
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
            />
          </div>
        </div>

        {/* Loading and error handling */}
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}

        <Table
          dataSource={currentData}
          columns={columns}
          rowKey="id"
          loading={loading}
          pagination={false}
          className="w-full overflow-auto"
        />

        <div className="flex justify-between lg:justify-center lg:items-center mt-4">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={applyFilters().length}
            onChange={handlePageChange}
          />
        </div>

        <div className="my-7">
          <WeeklyLoginChart /> {/* Thêm component WeeklyLoginChart ở đây */}
        </div>

        <div>
          <MonthlyRecipesChart />
        </div>


      </div>
    </div>
  );
};

export default DashboardPage;
