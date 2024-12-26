
// import { NextRequest, NextResponse } from "next/server";
// import User from "../../../../../../../models/user";
// import connect from "../../../../../../../utils/db";

// export async function GET() {
//   try {
//     await connect(); // Kết nối cơ sở dữ liệu

//     const today = new Date();
//     // Điều chỉnh startOfWeek và endOfWeek để bao gồm Chủ Nhật
//     const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1)); // Monday
//     const endOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 7)); // Sunday

//     // Nếu hôm nay là Chủ Nhật, điều chỉnh lại ngày bắt đầu tuần
//     if (today.getDay() === 0) {
//       startOfWeek.setDate(startOfWeek.getDate() - 7); // Điều chỉnh lại ngày bắt đầu tuần cho chính xác
//     }

//     const logins = await User.aggregate([
//       {
//         $match: {
//           lastActive: { $gte: startOfWeek, $lt: endOfWeek },
//         },
//       },
//       {
//         $project: {
//           dayOfWeek: { $dayOfWeek: "$lastActive" },
//         },
//       },
//       {
//         $group: {
//           _id: "$dayOfWeek",
//           count: { $sum: 1 },
//         },
//       },
//       {
//         $sort: { _id: 1 },
//       },
//     ]);

//     // Đảm bảo rằng Chủ Nhật sẽ có giá trị 0 nếu không có người đăng nhập
//     const formattedData = [1, 2, 3, 4, 5, 6, 7].map((day) => {
//       const dayData = logins.find((login) => login._id === day);
//       return {
//         day,
//         count: dayData ? dayData.count : 0,
//       };
//     });

//     return NextResponse.json(formattedData);
//   } catch (error: any) {
//     console.error("Error fetching weekly login data:", error);
//     return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
//   }
// }





import { NextRequest, NextResponse } from "next/server";
import User from "../../../../../../../models/user";
import connect from "../../../../../../../utils/db";

export async function GET() {
  try {
    await connect(); // Kết nối cơ sở dữ liệu

    const today = new Date();
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1)); // Monday
    const endOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 7)); // Sunday

    // Thực hiện query MongoDB để nhóm theo từng ngày trong tuần
    const logins = await User.aggregate([
      {
        $match: {
          lastActive: { $gte: startOfWeek, $lt: endOfWeek },
        },
      },
      {
        $project: {
          dayOfWeek: { $dayOfWeek: "$lastActive" }, // Lấy ngày trong tuần (1 = Sunday, 7 = Saturday)
        },
      },
      {
        $group: {
          _id: "$dayOfWeek",
          count: { $sum: 1 },
        },
      },
      {
        $sort: { _id: 1 }, // Sắp xếp theo thứ tự từ Chủ Nhật (1) đến Thứ Bảy (7)
      },
    ]);

    // Đảm bảo trả về dữ liệu cho tất cả các ngày trong tuần, nếu không có đăng nhập thì trả về 0
    const formattedData = [1, 2, 3, 4, 5, 6, 7].map((day) => {
      const dayData = logins.find((login) => login._id === day);
      return {
        day,
        count: dayData ? dayData.count : 0,
      };
    });

    return NextResponse.json(formattedData);
  } catch (error: any) {
    console.error("Error fetching weekly login data:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
