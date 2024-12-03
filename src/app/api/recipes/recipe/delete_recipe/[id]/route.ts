import { NextResponse } from "next/server";
import connect from "../../../../../../../utils/db"; 
import Recipe from "../../../../../../../models/recipe";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connect(); // Kết nối đến cơ sở dữ liệu
    const { id } = params;

    const deletedRecipe = await Recipe.findByIdAndDelete(id);

    if (!deletedRecipe) {
      return NextResponse.json(
        { error: "Recipe not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Recipe deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting recipe:", error);
    return NextResponse.json(
      { error: "An error occurred while deleting the recipe." },
      { status: 500 }
    );
  }
}
