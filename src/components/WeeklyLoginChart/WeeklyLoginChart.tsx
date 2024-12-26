



// "use client";

// import { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// // Đăng ký các thành phần của Chart.js
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const WeeklyLoginChart = () => {
//   const [data, setData] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/api/logins/stats/weekly");
//         if (!response.ok) {
//           throw new Error("Failed to fetch login data");
//         }
//         const result = await response.json();
//         console.log("kết quả nhận được:", result); // Log dữ liệu trả về từ API
//         setData(result);
//       } catch (err: any) {
//         setError(err.message || "Unknown error");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   // Tạo dữ liệu cho biểu đồ
//   const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//   const counts = data.map((item) => item.count);

//   const chartData = {
//     labels: labels,
//     datasets: [
//       {
//         label: "Weekly Login Counts",
//         data: counts,
//         backgroundColor: "rgba(75, 192, 192, 0.6)",
//         borderColor: "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div style={{ width: "80%", margin: "auto" }}>
//       <h3>Weekly Login Stats</h3>
//       <Bar
//         data={chartData}
//         options={{
//           responsive: true,
//           plugins: {
//             legend: {
//               display: true,
//               position: "top",
//             },
//           },
//           scales: {
//             x: {
//               title: {
//                 display: true,
//                 text: "Day of Week",
//               },
//             },
//             y: {
//               title: {
//                 display: true,
//                 text: "Number of Logins",
//               },
//             },
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default WeeklyLoginChart;




"use client";

import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Đăng ký các thành phần của Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WeeklyLoginChart = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/logins/stats/weekly");
        if (!response.ok) {
          throw new Error("Failed to fetch login data");
        }
        const result = await response.json();
        console.log("Dữ liệu nhận được:", result); // Log dữ liệu trả về từ API
        setData(result);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Tạo dữ liệu cho biểu đồ
  const labels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const counts = data.map((item) => item.count);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Weekly Login Counts",
        data: counts,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <h3 className=" text-center">Weekly Login Stats</h3>
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
            x: {
              title: {
                display: true,
                text: "Day of Week",
              },
            },
            y: {
              title: {
                display: true,
                text: "Number of Logins",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default WeeklyLoginChart;
