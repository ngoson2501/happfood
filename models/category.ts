// import { Schema, model, models } from 'mongoose';

// const CategorySchema = new Schema(
//   {
//     title: { type: String, required: true },
//     // user: { type: Schema.Types.ObjectId, ref: 'User' },
//     data: {type: Buffer, required: true},
//     contentType: {type: String, required: true},
//     // coverImage: { type: String, required: true }, // Đảm bảo coverImage là bắt buộc
//   },
//   {
//     timestamps: true,
//   }
// );

// const Category = models.Category || model('Category', CategorySchema);
// export default Category;




import { Schema, model, models } from 'mongoose';

const CategorySchema = new Schema(
  {
    title: { type: String, required: true },
    data: { type: Buffer, required: true },
    contentType: { type: String, required: true },
    topic: { type: String, required: true }, // Thêm trường topic vào schema
  },
  {
    timestamps: true,
  }
);

const Category = models.Category || model('Category', CategorySchema);
export default Category;

