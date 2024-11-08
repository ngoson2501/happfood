// import { NextResponse } from 'next/server';
// import Category from '../models/category';
// import { Types } from 'mongoose'; // Thêm import Types từ mongoose
// import { IncomingForm, Fields, Files } from 'formidable';
// import fs from 'fs';
// import path from 'path';
// import { Readable } from 'stream'; // Đảm bảo import Readable từ 'stream'

// // Sử dụng formidable để xử lý formData (bao gồm file)
// export const postCategory = async (req: Request) => {
//   const form: any = new IncomingForm(); // Sử dụng any để bỏ qua kiểm tra kiểu cho form

//   // Thiết lập thư mục upload cho file (coverImage)
//   form.uploadDir = path.join(process.cwd(), 'public/uploads');
//   form.keepExtensions = true;

//   // Kiểm tra nếu req.body có dữ liệu (vì req.body có thể là null)
//   if (!req.body) {
//     return NextResponse.json({ message: 'No file data found' }, { status: 400 });
//   }

//   // Chuyển đổi req.body (ReadableStream) thành một Readable (Node.js stream)
//   const stream = Readable.from(await streamToBuffer(req.body));

//   return new Promise<NextResponse>((resolve, reject) => {
//     form.parse(stream, async (err: Error | null, fields: Fields, files: Files) => {
//       if (err) {
//         console.error('Error parsing form data:', err);
//         return reject(NextResponse.json({ message: 'Failed to parse form data' }, { status: 400 }));
//       }

//       // Lấy dữ liệu từ form
//       const { title } = fields;
//       const coverImageFile = files.coverImage[0]; // Giả sử coverImage là file duy nhất được tải lên

//       if (!title || !coverImageFile) {
//         return reject(NextResponse.json({ message: 'Title and cover image are required' }, { status: 400 }));
//       }

//       try {
//         // Đổi tên file cover image nếu cần thiết và di chuyển file
//         const coverImagePath = `/uploads/${coverImageFile.newFilename}`;
        
//         // Tạo Category mới trong DB
//         const newCategory = new Category({
//           title: title as string,
//           coverImage: coverImagePath, // Đường dẫn của ảnh đã được lưu
//           user: new Types.ObjectId(), // Sử dụng Types.ObjectId từ mongoose
//         });

//         await newCategory.save();

//         return resolve(NextResponse.json({ message: 'Category created successfully' }, { status: 201 }));
//       } catch (error) {
//         console.error('Error saving category:', error);
//         return reject(NextResponse.json({ message: 'Error saving category' }, { status: 500 }));
//       }
//     });
//   });
// };

// // Hàm chuyển đổi ReadableStream<Uint8Array> thành buffer
// const streamToBuffer = (stream: ReadableStream<Uint8Array>): Promise<Buffer> => {
//   return new Promise((resolve, reject) => {
//     const chunks: Uint8Array[] = [];
//     const reader = stream.getReader();

//     const push = ({ done, value }: any) => { // Sử dụng kiểu 'any' ở đây để bỏ qua lỗi kiểu
//       if (done) {
//         resolve(Buffer.concat(chunks));
//         return;
//       }
//       chunks.push(value);
//       reader.read().then(push).catch(reject);
//     };

//     reader.read().then(push).catch(reject);
//   });
// };






// import { NextApiRequest, NextApiResponse } from 'next';
// import formidable from 'formidable';
// import path from 'path';

// // Cấu hình Next.js để tắt bodyParser, giúp formidable xử lý form-data
// export const config = {
//     api: {
//         bodyParser: false, // Tắt bodyParser mặc định của Next.js
//     },
// };

// // Định nghĩa kiểu cho các đối tượng sử dụng trong formidable
// interface FormidableFiles {
//     coverImage: formidable.File | formidable.File[];
// }

// export const postCategory = (req: NextApiRequest, res: NextApiResponse) => {
//     // Tạo đối tượng formidable với các tùy chọn cần thiết
//     const form = new formidable.IncomingForm();
    
//     // Cấu hình đối tượng formidable
//     form.multiples = false; // Không cho phép tải nhiều file
//     form.uploadDir = path.join(process.cwd(), '/public/uploads'); // Định nghĩa thư mục lưu trữ file tải lên
//     form.keepExtensions = true; // Giữ lại phần mở rộng của file tải lên

//     // Xử lý form data
//     form.parse(req, async (err, fields, files) => {
//         if (err) {
//             console.error('Error parsing form:', err);
//             return res.status(500).json({ message: 'Failed to parse form data' });
//         }

//         try {
//             // Đảm bảo kiểu đúng cho fields và files
//             const { title } = fields as Record<string, string>;
//             const coverImage = files.coverImage as formidable.File | undefined;

//             if (!title || !coverImage) {
//                 return res.status(400).json({ message: 'Title and cover image are required' });
//             }

//             // Tạo URL hoặc tên file cho ảnh tải lên
//             const coverImagePath = `/uploads/${coverImage.newFilename}`;

//             // Thực hiện lưu thông tin vào cơ sở dữ liệu MongoDB (hoặc nơi lưu trữ khác)
//             // Ví dụ, bạn có thể gọi một mô hình Mongoose để lưu danh mục vào cơ sở dữ liệu

//             res.status(200).json({ message: 'Category added successfully' });
//         } catch (error) {
//             console.error('Error saving category:', error);
//             res.status(500).json({ message: 'Error saving category' });
//         }
//     });
// };

// // Lấy danh sách các danh mục
// export const getCategories = async (req: NextApiRequest, res: NextApiResponse) => {
//     try {
//         // Fetch các danh mục từ cơ sở dữ liệu (MongoDB)
//         // Ví dụ: const categories = await Category.find();

//         // Trả về danh sách danh mục (ở đây bạn sẽ lấy từ DB, ví dụ như danh sách giả lập)
//         const categories = [
//             { title: 'Category 1', coverImage: '/uploads/category1.jpg', created: '2024-11-01' },
//             { title: 'Category 2', coverImage: '/uploads/category2.jpg', created: '2024-11-02' },
//         ];

//         res.status(200).json(categories);
//     } catch (error) {
//         console.error('Error fetching categories:', error);
//         res.status(500).json({ message: 'Error fetching categories' });
//     }
// };
