import { NextResponse } from 'next/server';
import connect from '../../../../../utils/db';
import Recipe from '../../../../../models/recipe';

export const GET = async () => {
  try {
    await connect();  // Kết nối với cơ sở dữ liệu

    // Lấy tất cả các công thức nấu ăn và populate trường username từ bảng User
    const recipes = await Recipe.find(
      { 'status': { $eq: true } }
    ).populate('user', 'username');

    // Chuyển đổi thông tin công thức nấu ăn
    const recipesWithUrls = recipes.map(recipe => {
      return {
        id: recipe._id.toString(),  // Chuyển ObjectId thành chuỗi
        name: recipe.name,
        //cookTime: recipe.cookTime,
        //ration: recipe.ration,  // Giữ lại ration
        //description: recipe.description,  // Giữ lại mô tả
        //hashtags: recipe.hashtags,  // Giữ lại hashtags
        // ingredients: recipe.ingredients,  // Giữ lại nguyên liệu
        // directions: recipe.directions.map(direction => ({
        //   title: direction.title,
        //   description: direction.description,
        //   image: direction.image,  // Trả về trực tiếp URL hình ảnh từ Cloudinary
        // })),
        media: recipe.media,  // Trả về URL của media từ Cloudinary
        //user: recipe.user.username,  // Trả về tên người dùng đã populate
        user: { 
          _id: recipe.user._id.toString(),  // Trả về cả ID của người dùng
          username: recipe.user.username,   // Trả về tên người dùng
        },
        views: recipe.views,
        likes: recipe.likes,
        //videoLink: recipe.videoLink,
        createdAt: recipe.createdAt,
        //updatedAt: recipe.updatedAt,
      };
    });

    return NextResponse.json(recipesWithUrls);
  } catch (error: any) {
    console.log(error);  // Log lỗi nếu có
    return NextResponse.json({ success: false, message: error.message });
  }
};
