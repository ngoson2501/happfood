import { NextResponse } from 'next/server';
import Recipe from '../../../../../models/recipe';
import connect from '../../../../../utils/db';  // Đảm bảo import kết nối DB

export async function POST(request: Request) {
  try {
    const { "Category-Title": categoryTitle } = await request.json(); // Lấy title từ body của request

    if (!categoryTitle) {
      return NextResponse.json({ message: "Thiếu Category-Title trong request" }, { status: 400 });
    }

    // Kết nối tới MongoDB
    await connect();

    // Console ra giá trị nhận được từ client
    console.log("Category-Title received from client:", categoryTitle);

    // Tìm các công thức có chứa Category-Title trong mảng hashtags
    const recipes = await Recipe.find({
      "hashtags.value": categoryTitle,
    });

    

    if (recipes.length === 0) {
      return NextResponse.json({ message: "Chưa có công thức liên quan" }, { status: 404 });
    }

    // Xử lý dữ liệu trước khi gửi
    const formattedRecipes = recipes.map((recipe) => {
      const mediaBase64 = recipe.media
        ? `data:${recipe.contentType};base64,${recipe.media.toString("base64")}`
        : null;

      return {
        id: recipe._id.toString(), // Chuyển ObjectId thành chuỗi
        name: recipe.name,
        cookTime: recipe.cookTime,
        hashtags: recipe.hashtags,
        user: recipe.user ? recipe.user.toString() : null,
        views: recipe.views,
        likes: recipe.likes,
        description: recipe.description,
        //media: mediaBase64, // Chuyển đổi media sang base64 nếu có
        media: recipe.media,
        createdAt: recipe.createdAt,
        updatedAt: recipe.updatedAt,
      };
    });

    // Trả về dữ liệu đã được xử lý
    return NextResponse.json(formattedRecipes, { status: 200 });

  } catch (err) {
    console.error("Error fetching recipes:", err);
    return NextResponse.json({ message: "Có lỗi khi truy vấn công thức" }, { status: 500 });
  }
}
