


// import mongoose, { Schema, Document, models, model, Types } from 'mongoose';

// // Tạo interface cho mỗi loại dữ liệu
// interface IHashtag {
//   value: string;
//   label: string;
// }

// interface IIngredient {
//   name: string;
//   quantity: string;
//   unit: string;
// }

// interface IDirection {
//   title: string;
//   description: string;
//   //images: Buffer[]; // Mảng Buffer chứa dữ liệu hình ảnh
// }

// interface IRation {
//   value: number;  // Giá trị khẩu phần
//   unit: string;   // Đơn vị khẩu phần (ví dụ: "người")
// }

// interface IRecipe extends Document {
//   name: string;
//   cookTime: string;
//   ration: IRation;  // Khẩu phần cho bao nhiêu người (gồm giá trị và đơn vị)
//   hashtags: IHashtag[];
//   description: string;
//   ingredients: IIngredient[];
//   directions: IDirection[];
//   media: Buffer; // Dữ liệu nhị phân của tệp media (hình ảnh/video)
//   user: Types.ObjectId; // Tham chiếu đến _id của người dùng
//   views: number;  // Trường đếm số lượt xem
//   likes: Types.ObjectId[];  // Mảng lưu ID người dùng đã thả tim
// }

// // Định nghĩa schema cho mỗi loại dữ liệu
// const HashtagSchema: Schema = new Schema<IHashtag>({
//   value: { type: String, required: true },
//   label: { type: String, required: true },
// });

// const IngredientSchema: Schema = new Schema<IIngredient>({
//   name: { type: String, required: true },
//   quantity: { type: String, required: true },
//   unit: { type: String, required: true },
// });

// const DirectionSchema: Schema = new Schema<IDirection>({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   //images: [{ type: Buffer }], // Mảng chứa dữ liệu nhị phân của hình ảnh
// });


// const RationSchema: Schema = new Schema<IRation>({
//   value: { type: Number, required: true },  // Khẩu phần (số lượng)
//   unit: { type: String, required: true },   // Đơn vị (người, phần,...)
// });

// // Định nghĩa schema cho công thức
// const RecipeSchema: Schema = new Schema<IRecipe>({
//   name: { type: String, required: true },
//   cookTime: { type: String, required: true },
//   ration: { type: RationSchema, required: true },  // Sử dụng RationSchema cho khẩu phần
//   hashtags: { type: [HashtagSchema], default: [] },
//   description: { type: String, required: true },
//   ingredients: { type: [IngredientSchema], required: true },
//   directions: { type: [DirectionSchema], required: true },
//   media: { type: Buffer, required: false }, // Dữ liệu nhị phân của hình ảnh/video
//   user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Tham chiếu đến User
//   views: { type: Number, default: 0 },  // Trường đếm số lượt xem
//   likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],  // Mảng lưu ID người dùng đã thả tim
// });

// // Kiểm tra và sử dụng model 'Recipe' nếu đã tồn tại, nếu chưa thì tạo mới
// const Recipe = models.Recipe || model<IRecipe>('Recipe', RecipeSchema);

// export default Recipe;

















import mongoose, { Schema, Document, models, model, Types } from 'mongoose';

// Tạo interface cho mỗi loại dữ liệu
interface IHashtag {
  value: string;
  label: string;
}

interface IIngredient {
  name: string | null;
  quantity: string | null;
  unit: string | null;
}

interface IDirection {
  title?: string;
  description?: string;
  image: Buffer | null;
}

interface IRation {
  value: number;  // Giá trị khẩu phần
  unit: string;   // Đơn vị khẩu phần (ví dụ: "người")
}

interface IRecipe extends Document {
  name: string;
  cookTime: string;
  ration: IRation;  // Khẩu phần cho bao nhiêu người (gồm giá trị và đơn vị)
  hashtags: IHashtag[];
  description: string;
  ingredients: IIngredient[];
  directions: IDirection[];
  media: Buffer; // Dữ liệu nhị phân của tệp media (hình ảnh/video)
  user: Types.ObjectId; // Tham chiếu đến _id của người dùng
  views: number;  // Trường đếm số lượt xem
  likes: Types.ObjectId[];  // Mảng lưu ID người dùng đã thả tim
  videoLink?: string; // Trường gắn link video
}

// Định nghĩa schema cho mỗi loại dữ liệu
const HashtagSchema: Schema = new Schema<IHashtag>({
  value: { type: String, required: true },
  label: { type: String, required: true },
});

const IngredientSchema: Schema = new Schema<IIngredient>({
  name: { type: String, required: false },
  quantity: { type: String, required: false },
  unit: { type: String, required: false },
});

const DirectionSchema: Schema = new Schema<IDirection>({
  title: { type: String, required: false },
  description: { type: String, required: false },
  image: { type: Buffer, required: false }, // Mảng chứa dữ liệu nhị phân của hình ảnh
});


const RationSchema: Schema = new Schema<IRation>({
  value: { type: Number, required: true },  // Khẩu phần (số lượng)
  unit: { type: String, required: true },   // Đơn vị (người, phần,...)
});

// Định nghĩa schema cho công thức
const RecipeSchema: Schema = new Schema<IRecipe>(
  {
  name: { type: String, required: true },
  cookTime: { type: String, required: true },
  ration: { type: RationSchema, required: true },  // Sử dụng RationSchema cho khẩu phần
  hashtags: { type: [HashtagSchema], default: [] },
  description: { type: String, required: true },
  ingredients: { type: [IngredientSchema], required: true },
  directions: { type: [DirectionSchema], required: true },
  media: { type: Buffer, required: false }, // Dữ liệu nhị phân của hình ảnh/video
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Tham chiếu đến User
  views: { type: Number, default: 0 },  // Trường đếm số lượt xem
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],  // Mảng lưu ID người dùng đã thả tim
  videoLink: { type: String, required: false, default: null }, // Trường gắn link video
},
{
  timestamps: true,
}
);

// Kiểm tra và sử dụng model 'Recipe' nếu đã tồn tại, nếu chưa thì tạo mới
const Recipe = models.Recipe || model<IRecipe>('Recipe', RecipeSchema);

export default Recipe;
















