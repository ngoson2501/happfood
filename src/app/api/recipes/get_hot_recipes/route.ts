import { NextRequest, NextResponse } from "next/server";
import Recipe from "../../../../../models/recipe"; // Import model Recipe
import connect from "../../../../../utils/db"; // Import hàm kết nối DB

export async function GET() {
  try {
    // Kết nối tới cơ sở dữ liệu
    await connect();

    // Lấy 4 công thức có số views cao nhất và trường status là true
    const hotRecipes = await Recipe.find({ status: true })
      .sort({ views: -1 })
      .limit(4);

    // Kiểm tra nếu không có công thức nào
    if (!hotRecipes || hotRecipes.length === 0) {
      return NextResponse.json({ error: "No recipes found" }, { status: 404 });
    }

    // Xử lý dữ liệu trước khi gửi
    const formattedRecipes = hotRecipes.map((recipe) => {
      return {
        id: recipe._id.toString(), // Chuyển ObjectId thành chuỗi
        name: recipe.name,
        cookTime: recipe.cookTime,
        hashtags: recipe.hashtags,
        user: recipe.user ? recipe.user.toString() : null,
        views: recipe.views,
        likes: recipe.likes,
        description: recipe.description,
        media: recipe.media,
        createdAt: recipe.createdAt,
        updatedAt: recipe.updatedAt,
      };
    });

    // Trả về dữ liệu đã được xử lý
    return NextResponse.json(formattedRecipes);
  } catch (error) {
    console.error("Error fetching hot recipes:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
