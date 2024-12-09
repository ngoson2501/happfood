import { NextRequest, NextResponse } from "next/server";
import connect from "../../../../../../../../utils/db";
import Category from "../../../../../../../../models/category";
import { v2 as cloudinary } from "cloudinary";

// Cấu hình Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Hàm tiện ích xóa ảnh trên Cloudinary
const deleteFromCloudinary = async (imageUrl: string): Promise<void> => {
  try {
    const regex = /\/v\d+\/(.+)\.\w+$/;
    const match = imageUrl.match(regex);
    if (!match || !match[1]) {
      throw new Error("Invalid image URL");
    }
    const publicId = match[1];
    await cloudinary.uploader.destroy(publicId); // Xóa ảnh trên Cloudinary
  } catch (error) {
    console.error("Error deleting from Cloudinary:", error);
    throw new Error("Failed to delete file from Cloudinary");
  }
};

// Xử lý DELETE request
export const DELETE = async (request: NextRequest, { params }: { params: { id: string } }) => {
  const { id } = params;  // Lấy ID của category từ URL parameters

  try {
    await connect();  // Kết nối với cơ sở dữ liệu

    // Tìm danh mục cần xóa
    const category = await Category.findById(id);
    if (!category) {
      return NextResponse.json({ success: false, message: "Category not found" }, { status: 404 });
    }

    // Nếu có ảnh (coverImage), xóa ảnh khỏi Cloudinary
    if (category.data && category.data !== "/default/image.png") {
      try {
        await deleteFromCloudinary(category.data);  // Xóa ảnh trên Cloudinary
      } catch (error) {
        console.warn("Could not delete image from Cloudinary:", error);
      }
    }

    // Xóa danh mục khỏi cơ sở dữ liệu
    await Category.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Category and its image deleted successfully",
    });
  } catch (error: any) {
    console.error("Error deleting category:", error);
    return NextResponse.json({ success: false, message: error.message || "An unexpected error occurred" }, { status: 500 });
  }
};
