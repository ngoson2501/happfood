import { NextRequest, NextResponse } from "next/server";
import Recipe from "../../../../../models/recipe"; // Import model Recipe
import connect from "../../../../../utils/db"; // Import hàm kết nối DB

export async function GET(request: NextRequest) {
  try {
    // Kết nối tới cơ sở dữ liệu
    await connect();

    // Tính toán mốc thời gian 7 ngày trước
    // const sevenDaysAgo = new Date();
    // sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    // Lấy tất cả công thức được thêm vào trong 7 ngày gần đây và có status = true
    const recentRecipes = await Recipe.find({
      //createdAt: { $gte: sevenDaysAgo },
      status: true, // Chỉ lấy công thức có trạng thái là true
    }).sort({ createdAt: -1 }) // Sắp xếp theo ngày tạo mới nhất
    .limit(6);
    // Kiểm tra nếu không có công thức nào
    if (!recentRecipes || recentRecipes.length === 0) {
      return NextResponse.json({ error: "No recent recipes found" }, { status: 404 });
    }

    // Xử lý dữ liệu trước khi gửi
    const formattedRecipes = recentRecipes.map((recipe) => {
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
    console.error("Error fetching recent recipes:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}







