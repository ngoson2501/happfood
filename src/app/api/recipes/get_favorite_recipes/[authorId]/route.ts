import { NextRequest, NextResponse } from "next/server";
import Recipe from "../../../../../../models/recipe"; // Đường dẫn tới model Recipe
import connect from "../../../../../../utils/db"; // Kết nối từ file connect của bạn.

export async function GET(req: NextRequest, { params }: { params: { authorId: string } }) {
  const { authorId } = params;

  if (!authorId) {
    return NextResponse.json({
      success: false,
      message: "Author ID is required."
    }, { status: 400 });
  }

  try {
    // Sử dụng hàm connect để kết nối tới MongoDB.
    await connect();

    // Tìm các công thức mà người dùng với authorId đã like.
    const recipes = await Recipe.find({ likes: authorId })
      .populate("user", "username") // Populate thông tin user với trường username
      .exec();

    if (!recipes || recipes.length === 0) {
      return NextResponse.json({
        success: true,
        message: "No favorite recipes found for this user.",
        data: []
      });
    }

    // Chuyển đổi dữ liệu media nếu cần thiết và định dạng kết quả trả về.
    const recipesWithBase64 = recipes.map(recipe => {
      return {
        id: recipe._id.toString(),
        name: recipe.name,
        cookTime: recipe.cookTime,
        hashtags: recipe.hashtags,
        media: recipe.media, // Giữ nguyên media (giả định là URL)
        user: recipe.user, // Thông tin user đã populate
        views: recipe.views,
        likes: recipe.likes
      };
    });

    return NextResponse.json({
      success: true,
      data: recipesWithBase64
    });
  } catch (error: any) {
    console.error("Error fetching favorite recipes:", error);
    return NextResponse.json({
      success: false,
      message: error.message || "An error occurred while fetching favorite recipes."
    }, { status: 500 });
  }
}
