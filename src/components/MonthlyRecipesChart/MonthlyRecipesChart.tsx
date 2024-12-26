
"use client";

import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import useFetchMonthlyRecipes from "../../../hooks/useFetchMonthlyRecipes";

// Đăng ký các thành phần của Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Hàm tạo danh sách các tháng cho một năm cụ thể
const generateMonths = (year: number) => {
  const months = [];
  for (let i = 1; i <= 12; i++) {
    months.push({ month: i, year, count: 0 });
  }
  return months;
};

const MonthlyRecipesChart = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Năm hiện tại
  const { data, isLoading, error } = useFetchMonthlyRecipes(selectedYear); // Truyền năm được chọn vào hook

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Tạo dữ liệu mặc định cho năm được chọn (12 tháng)
  const allMonths = generateMonths(selectedYear);

  // Kết hợp dữ liệu API với dữ liệu mặc định
  const combinedData = allMonths.map((month) => {
    const matchingData = data?.find(
      (stat) => stat.month === month.month && stat.year === month.year
    );
    return {
      ...month,
      count: matchingData ? matchingData.count : 0,
    };
  });

  // Định dạng dữ liệu cho biểu đồ
  const labels = combinedData.map((stat) => `${stat.month}/${stat.year}`);
  const counts = combinedData.map((stat) => stat.count);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Recipes Added",
        data: counts,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
        <h3 className=" text-center">Monthly Recipes Statistics</h3>
      <div style={{ marginBottom: "20px" }}>
        {/* Bộ chọn năm */}
        <label htmlFor="yearSelect">Select Year: </label>
        <select
          id="yearSelect"
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
        >
          <option value={2023}>2023</option>
          <option value={2024}>2024</option>
          <option value={2025}>2025</option>
        </select>
      </div>

      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
          },
          scales: {
            x: { title: { display: true, text: "Month/Year" } },
            y: { title: { display: true, text: "Number of Recipes" } },
          },
        }}
      />
    </div>
  );
};

export default MonthlyRecipesChart;
