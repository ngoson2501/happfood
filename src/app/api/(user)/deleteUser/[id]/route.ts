import { NextRequest, NextResponse } from "next/server";
import connect from "../../../../../../utils/db";
import User from "../../../../../../models/user";
import { v2 as cloudinary } from "cloudinary";

// Cấu hình Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Hàm tiện ích để xóa file khỏi Cloudinary
const deleteFromCloudinary = async (imageUrl: string): Promise<void> => {
  try {
    const regex = /\/v\d+\/(.+)\.\w+$/;
    const match = imageUrl.match(regex);
    if (!match || !match[1]) {
      throw new Error("Invalid image URL");
    }
    const publicId = match[1];
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error("Error deleting from Cloudinary:", error);
    throw new Error("Failed to delete file");
  }
};

export const DELETE = async (request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    await connect();

    const userId = params.id;

    // Tìm người dùng dựa trên ID
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }

    // Danh sách các avatar mặc định
    const defaultAvatars = [
      "/defaultAvatars/cat.png",
      "/defaultAvatars/cow.png",
      "/defaultAvatars/frog.png",
      "/defaultAvatars/elephant.png",
    ];

    // Nếu avatar không phải là avatar mặc định, xóa khỏi Cloudinary
    if (user.avatar && !defaultAvatars.includes(user.avatar)) {
      try {
        await deleteFromCloudinary(user.avatar);
      } catch (error: any) {
        console.warn(
          `Could not delete avatar from Cloudinary: ${error.message}`
        );
      }
    }

    // Xóa người dùng khỏi cơ sở dữ liệu
    await User.findByIdAndDelete(userId);

    return NextResponse.json({ success: true, message: "User deleted successfully" });
  } catch (error: any) {
    console.error("Error deleting user:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
};
