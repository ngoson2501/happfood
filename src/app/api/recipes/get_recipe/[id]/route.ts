

import { NextRequest, NextResponse } from 'next/server';
import connect from "../../../../../../utils/db";
import Recipe from "../../../../../../models/recipe";

// Định nghĩa kiểu cho các trường
type Hashtag = {
  value: string;
  label: string;
};

type Ingredient = {
  name?: string;
  quantity?: string;
  unit?: string;
};

type Direction = {
  title: string;
  description: string;
  image?: Buffer;
};

// Hàm xử lý GET request
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params; // Lấy id từ params

  await connect(); // Kết nối với cơ sở dữ liệu

  if (!id) {
    return NextResponse.json({ message: "Recipe ID is required" }, { status: 400 });
  }

  try {
    // Lấy công thức nấu ăn với ID từ database
    const recipe = await Recipe.findById(id);

    if (!recipe) {
      return NextResponse.json({ message: "Recipe not found" }, { status: 404 });
    }

    // Xử lý dữ liệu trước khi gửi cho client
    const recipeWithProcessedData = {
      id: recipe._id.toString(),  // Chuyển ObjectId thành chuỗi
      name: recipe.name,
      cookTime: recipe.cookTime,
      ration: recipe.ration ? {
        value: recipe.ration.value, // Giá trị khẩu phần
        unit: recipe.ration.unit,   // Đơn vị khẩu phần
      } : null,
      hashtags: recipe.hashtags.map((hashtag: Hashtag) => ({
        value: hashtag.value,
        label: hashtag.label,
      })),
      description: recipe.description,
      ingredients: recipe.ingredients.map((ingredient: Ingredient) => ({
        name: ingredient.name || '',      // Nếu không có tên thì gán chuỗi rỗng
        quantity: ingredient.quantity || '', // Nếu không có quantity thì gán chuỗi rỗng
        unit: ingredient.unit || '',        // Đơn vị mặc định là chuỗi rỗng nếu không có
      })),
      directions: recipe.directions.map((direction: Direction) => ({
        title: direction.title,
        description: direction.description,
        image: direction.image
          ? `data:${recipe.contentType || 'image/jpeg'};base64,${direction.image.toString('base64')}`  // Chuyển hình ảnh sang Base64 nếu có
          : null,
      })),
      media: recipe.media
        ? `data:${recipe.contentType || 'application/octet-stream'};base64,${recipe.media.toString('base64')}` // Chuyển đổi media sang Base64 nếu có
        : null,
      user: recipe.user ? recipe.user.toString() : null, // Chuyển ObjectId của user sang chuỗi
      views: recipe.views,
      likes: recipe.likes.map((like: string) => like.toString()),  // Chuyển tất cả ObjectId trong likes thành chuỗi
      videoLink: recipe.videoLink,
      createdAt: recipe.createdAt,
      updatedAt: recipe.updatedAt
    };

    return NextResponse.json(recipeWithProcessedData, { status: 200 });
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return NextResponse.json({ message: "Server error", error }, { status: 500 });
  }
}
