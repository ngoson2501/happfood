import { NextRequest, NextResponse } from 'next/server';
import connect from '../../../../../utils/db';
import Recipe from '../../../../../models/recipe';

export const GET = async (request: NextRequest) => {
  try {
    await connect();  // Kết nối với cơ sở dữ liệu

    // Lấy tất cả các công thức nấu ăn và populate trường username từ bảng User
    const recipes = await Recipe.find({}).populate('user', 'username');

    

    // Chuyển đổi media Buffer sang chuỗi Base64 cho các công thức nấu ăn
    const recipesWithBase64 = recipes.map(recipe => {

      //console.log("check id recipe:", recipe._id.toString())

      const mediaBase64 = recipe.media
        ? `data:${recipe.contentType};base64,${recipe.media.toString('base64')}`
        : null;  // Trường hợp nếu có media thì chuyển đổi sang Base64, nếu không thì null

      return {
        id: recipe._id.toString(),  // Chuyển ObjectId thành chuỗi
        name: recipe.name,
        cookTime: recipe.cookTime,
        //ration: recipe.ration,
        //description: recipe.description,
        hashtags: recipe.hashtags,
        //ingredients: recipe.ingredients,
        //directions: recipe.directions,
        media: mediaBase64,  // Chuyển đổi media sang base64 nếu có
        user: recipe.user,  // Thông tin user đã được populate (bao gồm username)
        views: recipe.views,
        likes: recipe.likes,
        //createdAt: recipe.createdAt,
        //updatedAt: recipe.updatedAt,
      };
    });

    return NextResponse.json(recipesWithBase64);
  } catch (error: any) {
    console.log(error);  // Log lỗi nếu có
    return NextResponse.json({ success: false, message: error.message });
  }
};
