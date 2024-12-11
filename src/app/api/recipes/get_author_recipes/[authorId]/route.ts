import { NextRequest, NextResponse } from 'next/server';
import connect from '../../../../../../utils/db'; // Hàm connect giống như trong mã bạn đã cung cấp
import Recipe from '../../../../../../models/recipe'; // Model Recipe
export const GET = async (request: NextRequest, { params }: { params: { authorId: string } }) => {
    try {
      await connect(); // Kết nối cơ sở dữ liệu
  
      const { authorId } = params;
  
      if (!authorId) {
        return NextResponse.json({ success: false, message: 'Author ID is required' }, { status: 400 });
      }
  
      // Lấy các công thức nấu ăn có user (authorId) tương ứng và populate thông tin user
      const recipes = await Recipe.find({ user: authorId }).populate('user', 'username');
  
    //   // Log toàn bộ data trả về để kiểm tra
    //   console.log('Fetched recipes:', recipes);
  
      // Chuyển đổi media Buffer sang chuỗi Base64 cho các công thức nấu ăn
      const recipesWithBase64 = recipes.map(recipe => {
        // const mediaBase64 = recipe.media
        //   ? `data:${recipe.contentType};base64,${recipe.media.toString('base64')}`
        //   : null;
  
        return {
          id: recipe._id.toString(),
          name: recipe.name,
          cookTime: recipe.cookTime,
          hashtags: recipe.hashtags,
          //media: mediaBase64,
          media: recipe.media,
          user: recipe.user,
          views: recipe.views,
          likes: recipe.likes,
        };
      });
  
      return NextResponse.json({ success: true, data: recipesWithBase64 });
    } catch (error: any) {
      console.error('Error fetching author recipes:', error);
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
  };
  