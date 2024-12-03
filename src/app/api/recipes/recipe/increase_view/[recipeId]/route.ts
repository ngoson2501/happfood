import { NextRequest, NextResponse } from "next/server";
import Recipe from "../../../../../../../models/recipe"; 
import connect from "../../../../../../../utils/db";

export async function POST(request: NextRequest, { params }: { params: { recipeId: string } }) {
  const { recipeId } = params;

  try {
    // Kết nối tới cơ sở dữ liệu
    await connect();

    // Tìm và tăng trường views của công thức
    const recipe = await Recipe.findByIdAndUpdate(
      recipeId,
      { $inc: { views: 1 } },
      { new: true }
    );

    if (!recipe) {
      return NextResponse.json({ error: "Recipe not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, recipe });
  } catch (error) {
    console.error("Error increasing views:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
