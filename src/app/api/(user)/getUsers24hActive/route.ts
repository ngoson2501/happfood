// import { NextResponse } from "next/server";
// import User from "../../../../../models/user";

// export const GET = async () => {
//   try {
//     const now = new Date();
//     const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

//     // Lấy danh sách người dùng hoạt động trong vòng 24 giờ qua
//     const activeUsers = await User.find({
//       lastActive: { $gte: twentyFourHoursAgo },
//     }).select("-password -refreshToken"); // Loại bỏ password và refreshToken

//     // Định dạng lại dữ liệu trước khi trả về
//     const formattedActiveUsers = activeUsers.map(user => ({
//       id: user._id,
//       username: user.username,
//       email: user.email,
//       role: user.role,
//       avatar: user.avatar, // Nếu avatar là chuỗi
//     //   createdAt: user.createdAt.toISOString(),
//     //   updatedAt: user.updatedAt.toISOString(),
//     }));

//     return NextResponse.json({ success: true, data: formattedActiveUsers });
//   } catch (error) {
//     console.error("Error fetching active users:", error);
//     return NextResponse.json(
//       { success: false, message: "Error fetching active users" },
//       { status: 500 }
//     );
//   }
// };




import { NextResponse } from "next/server";
import User from "../../../../../models/user";

export const GET = async () => {
  try {
    const now = new Date();
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    // Lấy danh sách người dùng hoạt động trong vòng 24 giờ qua
    const activeUsers = await User.find({
      lastActive: { $gte: twentyFourHoursAgo },
    }).select("-password -refreshToken"); // Loại bỏ password và refreshToken

    // Định dạng lại dữ liệu trước khi trả về
    const formattedActiveUsers = activeUsers.map(user => ({
      id: user._id.toString(), // Đảm bảo id là chuỗi
      username: user.username,
      email: user.email,
      role: user.role,
      avatar: user.avatar || "/default-avatar.png", // Nếu không có avatar, trả về hình mặc định
    }));

    return NextResponse.json(formattedActiveUsers); // Trả về mảng dữ liệu trực tiếp
  } catch (error) {
    console.error("Error fetching active users:", error);
    return NextResponse.json(
      { success: false, message: "Error fetching active users" },
      { status: 500 }
    );
  }
};
