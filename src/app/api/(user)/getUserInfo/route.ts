import { NextRequest, NextResponse } from "next/server";
import User from "../../../../../models/user"; // Đường dẫn tới mô hình User
import connect from "../../../../../utils/db";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json({ message: "User ID is required" }, { status: 400 });
    }

    await connect()

    // Tìm người dùng bằng ID
    const user = await User.findById(userId).select("-password -refreshToken");

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

   // Xử lý và định dạng dữ liệu avatar
   let avatar = null;

   if (user.avatar?.data && user.avatar?.contentType) {
     // Nếu avatar là một file binary
     avatar = `data:${user.avatar.contentType};base64,${user.avatar.data.toString("base64")}`;
   } else  {
     // Nếu avatar là chuỗi mặc định từ database
     avatar = user.avatar;
   }

    const formattedUser = {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role, // Bao gồm trường role
      avatar, // Avatar đã được xử lý
      createdAt: user.createdAt.toISOString(), // Trả về ISO string
      updatedAt: user.updatedAt.toISOString(),
    };

    // Trả về dữ liệu đã xử lý
    return NextResponse.json(formattedUser, { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
