import { NextRequest, NextResponse } from "next/server";
import User from "../../../../../models/user"; // Đường dẫn tới mô hình User
import connect from "../../../../../utils/db";

export async function GET(req: NextRequest) {
  try {
    await connect();

    // Lấy danh sách tất cả người dùng
    const users = await User.find().select("-password -refreshToken"); // Loại bỏ trường không cần thiết

    // Định dạng dữ liệu trả về
    const formattedUsers = users.map(user => ({
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      avatar: user.avatar, // Nếu avatar là chuỗi
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    }));

    return NextResponse.json(formattedUsers, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
