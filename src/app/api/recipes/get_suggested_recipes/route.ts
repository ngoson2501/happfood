import { NextResponse } from "next/server";
import connect from "../../../../../utils/db";
import Recipe from "../../../../../models/recipe";

export const POST = async (req: Request) => {
  try {
    // Lấy danh sách ID từ phần body của request
    const { ids } = await req.json(); // Sử dụng req.json() để lấy body của POST request

    if (!ids || !Array.isArray(ids)) {
      return NextResponse.json({ success: false, message: "No valid ids provided" }, { status: 400 });
    }

    await connect(); // Kết nối với cơ sở dữ liệu

    // Tìm các công thức có ID tương ứng với danh sách ID đã truyền vào
    const recipes = await Recipe.find({ '_id': { $in: ids } }).populate('user', 'username');

    // Chuyển đổi thông tin công thức nấu ăn
    const recipesWithUrls = recipes.map(recipe => {
      return {
        id: recipe._id.toString(),
        name: recipe.name,
        cookTime: recipe.cookTime,
        hashtags: recipe.hashtags,
        media: recipe.media,
        user: { 
          _id: recipe.user._id.toString(),
          username: recipe.user.username,
        },
        views: recipe.views,
        likes: recipe.likes,
        ingredients: recipe.ingredients, // Thêm nguyên liệu vào kết quả trả về
      };
    });

    return NextResponse.json(recipesWithUrls); // Trả về dữ liệu công thức đã được xử lý
  } catch (error: any) {
    console.log(error); // Log lỗi nếu có
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
};
