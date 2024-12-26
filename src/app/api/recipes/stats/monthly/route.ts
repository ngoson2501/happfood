// import { NextRequest, NextResponse } from "next/server";
// import Recipe from "../../../../../../models/recipe";
// import connect from "../../../../../../utils/db";

// export async function GET() {
//   try {
//     // Kết nối tới cơ sở dữ liệu
//     await connect();

//     // Nhóm và đếm số lượng công thức theo từng tháng
//     const monthlyStats = await Recipe.aggregate([
//       {
//         $match: { status: true }, // Chỉ lấy các công thức có status true
//       },
//       {
//         $group: {
//           _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
//           count: { $sum: 1 }, // Đếm số công thức trong mỗi nhóm
//         },
//       },
//       {
//         $sort: { "_id.year": 1, "_id.month": 1 }, // Sắp xếp theo năm và tháng
//       },
//     ]);

//     // Định dạng dữ liệu trước khi trả về
//     const formattedStats = monthlyStats.map((stat) => ({
//       year: stat._id.year,
//       month: stat._id.month,
//       count: stat.count,
//     }));

//     return NextResponse.json(formattedStats);
//   } catch (error) {
//     console.error("Error fetching monthly recipe stats:", error);
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//   }
// }








import { NextRequest, NextResponse } from "next/server";
import Recipe from "../../../../../../models/recipe";
import connect from "../../../../../../utils/db";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const year = parseInt(searchParams.get("year") || "2023"); // Lấy giá trị 'year' từ query string, mặc định là 2023

  try {
    // Kết nối tới cơ sở dữ liệu
    await connect();

    // Nhóm và đếm số lượng công thức theo từng tháng trong năm đã chọn
    const monthlyStats = await Recipe.aggregate([
      {
        $match: { 
          status: true, 
          "createdAt": { $gte: new Date(`${year}-01-01`), $lt: new Date(`${year + 1}-01-01`) } 
        }, // Lọc công thức theo năm
      },
      {
        $group: {
          _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
          count: { $sum: 1 }, // Đếm số công thức trong mỗi nhóm
        },
      },
      {
        $sort: { "_id.year": 1, "_id.month": 1 }, // Sắp xếp theo năm và tháng
      },
    ]);

    // Định dạng dữ liệu trước khi trả về
    const formattedStats = monthlyStats.map((stat) => ({
      year: stat._id.year,
      month: stat._id.month,
      count: stat.count,
    }));

    return NextResponse.json(formattedStats);
  } catch (error) {
    console.error("Error fetching monthly recipe stats:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
