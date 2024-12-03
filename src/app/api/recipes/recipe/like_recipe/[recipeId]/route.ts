import Recipe from "../../../../../../../models/recipe";
import User from "../../../../../../../models/user";
import connect from "../../../../../../../utils/db";
import { NextResponse } from "next/server";
import { Types } from "mongoose";

export const POST = async (request: Request, context: { params: any }) => {
    const recipeId = context.params.recipeId;
    
    try {
      const body = await request.json();
      const { user } = body;
  
      console.log("User ID: ", user);
  
      // Kiểm tra tính hợp lệ của userId và recipeId
      if (!user || !Types.ObjectId.isValid(user)) {
        return new NextResponse(
          JSON.stringify({ message: "Invalid or missing userId" }),
          { status: 400 }
        );
      }
  
      if (!recipeId || !Types.ObjectId.isValid(recipeId)) {
        return new NextResponse(
          JSON.stringify({ message: "Invalid or missing recipeId" }),
          { status: 400 }
        );
      }
  
      // Kết nối cơ sở dữ liệu
      await connect();
  
      // Kiểm tra sự tồn tại của user
      const existingUser = await User.findById(user);
      if (!existingUser) {
        return new NextResponse(
          JSON.stringify({ message: "User not found" }),
          { status: 404 }
        );
      }
  
      // Kiểm tra sự tồn tại của recipe
      const recipe = await Recipe.findById(recipeId);
      if (!recipe) {
        return new NextResponse(
          JSON.stringify({ message: "Recipe not found" }),
          { status: 404 }
        );
      }
  
      // Kiểm tra xem user đã thích recipe chưa
      if (recipe.likes.includes(user)) {
        return new NextResponse(
          JSON.stringify({ message: "User has already liked this recipe" }),
          { status: 200 }
        );
      }
  
      // Thêm user vào danh sách likes nếu chưa có
      recipe.likes.push(user);
      await recipe.save();
  
      return new NextResponse(
        JSON.stringify({ message: "Like added successfully", recipe }),
        { status: 200 }
      );
    } catch (error: any) {
      console.error("Error during like action:", error);
      return new NextResponse(
        JSON.stringify({ message: "Error adding like: " + error.message }),
        { status: 500 }
      );
    }
  };
  





  export const DELETE = async (request: Request, context: { params: any }) => {
    const recipeId = context.params.recipeId;
  
    try {
      const body = await request.json();
      const { user } = body;
  
      console.log("User ID: ", user);
  
      if (!user || !Types.ObjectId.isValid(user)) {
        return new NextResponse(
          JSON.stringify({ message: "Invalid or missing userId" }),
          { status: 400 }
        );
      }
  
      if (!recipeId || !Types.ObjectId.isValid(recipeId)) {
        return new NextResponse(
          JSON.stringify({ message: "Invalid or missing recipeId" }),
          { status: 400 }
        );
      }
  
      // Kết nối cơ sở dữ liệu
      await connect();
  
      // Kiểm tra sự tồn tại của user
      const existingUser = await User.findById(user);
      if (!existingUser) {
        return new NextResponse(
          JSON.stringify({ message: "User not found" }),
          { status: 404 }
        );
      }
  
      // Kiểm tra sự tồn tại của recipe
      const recipe = await Recipe.findById(recipeId);
      if (!recipe) {
        return new NextResponse(
          JSON.stringify({ message: "Recipe not found" }),
          { status: 404 }
        );
      }
  
      // Kiểm tra xem user đã thích recipe chưa
      if (!recipe.likes.includes(user)) {
        return new NextResponse(
          JSON.stringify({ message: "User has not liked this recipe" }),
          { status: 200 }
        );
      }
  
      // Xóa user khỏi danh sách likes
      recipe.likes = recipe.likes.filter((like: Types.ObjectId) => like.toString() !== user); // Explicitly type 'like' as Types.ObjectId
      await recipe.save();
  
      return new NextResponse(
        JSON.stringify({ message: "Like removed successfully", recipe }),
        { status: 200 }
      );
    } catch (error: any) {
      console.error("Error during unlike action:", error);
      return new NextResponse(
        JSON.stringify({ message: "Error removing like: " + error.message }),
        { status: 500 }
      );
    }
  };
  

