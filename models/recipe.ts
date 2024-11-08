import { Schema, model, models } from "mongoose";

const RecipeSchema = new Schema(
  {
    name: { type: String, required: true },
    cookTime: { type: String, required: true },  // thời gian nấu theo định dạng "00:50"
    description: { type: String, required: true },
    directions: [
      {
        title: { type: String },
        description: { type: String },
        image: { type: String },  // đường dẫn ảnh cho từng bước nếu có
      }
    ],
    hashtags: [
      {
        value: { type: String, required: true },
        label: { type: String, required: true }
      }
    ],
    ingredients: [
      {
        name: { type: String, required: true },
        quantity: { type: String, required: true },
        unit: { type: String, required: true }
      }
    ],
    media: {
      type: [String],  // có thể là danh sách đường dẫn ảnh hoặc video
      default: null
    }
  },
  {
    timestamps: true
  }
);

const Recipe = models.Recipe || model("Recipe", RecipeSchema);

export default Recipe;
