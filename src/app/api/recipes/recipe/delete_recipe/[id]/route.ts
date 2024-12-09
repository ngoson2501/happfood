// import { NextResponse } from "next/server";
// import connect from "../../../../../../../utils/db"; 
// import Recipe from "../../../../../../../models/recipe";

// export async function DELETE(req: Request, { params }: { params: { id: string } }) {
//   try {
//     await connect(); // Kết nối đến cơ sở dữ liệu
//     const { id } = params;

//     const deletedRecipe = await Recipe.findByIdAndDelete(id);

//     if (!deletedRecipe) {
//       return NextResponse.json(
//         { error: "Recipe not found." },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(
//       { message: "Recipe deleted successfully." },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error deleting recipe:", error);
//     return NextResponse.json(
//       { error: "An error occurred while deleting the recipe." },
//       { status: 500 }
//     );
//   }
// }























import { NextResponse } from "next/server";
import connect from "../../../../../../../utils/db";
import Recipe from "../../../../../../../models/recipe";
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
      console.error('Could not extract publicId from URL:', imageUrl);
      throw new Error('Invalid image URL');
    }

    const publicId = match[1];
    await cloudinary.uploader.destroy(publicId);
    console.log(`Successfully deleted image with publicId: ${publicId}`);
  } catch (error) {
    console.error('Error deleting from Cloudinary:', error);
    throw new Error('Failed to delete file');
  }
};

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connect(); // Kết nối đến cơ sở dữ liệu
    const { id } = params;

    // Tìm công thức trước khi xóa
    const recipe = await Recipe.findById(id);

    if (!recipe) {
      return NextResponse.json(
        { error: "Recipe not found." },
        { status: 404 }
      );
    }

    // Xóa media chính
    if (recipe.media) {
      await deleteFromCloudinary(recipe.media);
    }

    // Xóa hình ảnh trong directions
    if (recipe.directions && Array.isArray(recipe.directions)) {
      for (const direction of recipe.directions) {
        if (direction.image) {
          await deleteFromCloudinary(direction.image);
        }
      }
    }

    // Xóa công thức khỏi cơ sở dữ liệu
    await Recipe.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Recipe deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting recipe:", error);
    return NextResponse.json(
      { error: "An error occurred while deleting the recipe." },
      { status: 500 }
    );
  }
}
