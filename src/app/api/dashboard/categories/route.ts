




// import { NextRequest, NextResponse } from 'next/server';
// import Category from '../../../../../models/category';
// import connect from '../../../../../utils/db';

// export const POST = async (request: NextRequest) => {
//   try {
//     await connect();  // Kết nối với cơ sở dữ liệu

//     const data = await request.formData();  // Lấy form data
//     const file = data.get('coverImage');  // Lấy file từ form data (chú ý: trường phải trùng tên với client)
//     // const topic = data.get('topic')?.toString();

//     // Console log dữ liệu form trước khi xử lý
//     console.log("Form Data:");
//     console.log(data);  // In ra toàn bộ dữ liệu form
    
//     if (!file || !(file instanceof File)) {
//       return NextResponse.json({ success: false, message: 'No file uploaded or invalid file type.' });
//     }

//     const bufferData = await file.arrayBuffer();  // Chuyển đổi file thành arrayBuffer
//     const buffer = Buffer.from(bufferData);  // Chuyển arrayBuffer thành Buffer

//     // Console log thông tin file
//     // console.log("File Info:");
//     // console.log("File Name:", file.name);  // In ra tên file
//     // console.log("File Type:", file.type);  // In ra loại file

//     // Tạo đối tượng newCategory
//     const newCategory = await new Category({
//       title: data.get('title')?.toString(),  // Lấy title từ formData
//       data: buffer,  // Dữ liệu ảnh dưới dạng Buffer
//       contentType: file.type,  // Kiểu dữ liệu của ảnh
//       topic: data.get('topic')?.toString()
//     });

//     // Console log đối tượng newCategory trước khi lưu
//     console.log("Category to Save:", newCategory);

//     await newCategory.save();  // Lưu vào cơ sở dữ liệu

//     return NextResponse.json({ success: true, message: 'Category created successfully' });
//   } catch (error: any) {
//     console.log(error);  // Log lỗi nếu có
//     return NextResponse.json({ success: false, message: error.message });
//   }
// };









import { NextRequest, NextResponse } from 'next/server';
import connect from '../../../../../utils/db';
import Category from '../../../../../models/category';
import { v2 as cloudinary } from 'cloudinary';

// Cấu hình Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Hàm tiện ích tạo Data URI
const getFileDataUri = (fileBuffer: Buffer, mimeType: string): string => {
  return `data:${mimeType};base64,${fileBuffer.toString('base64')}`;
};

// Hàm tiện ích tải file lên Cloudinary
const uploadToCloudinary = async (fileBuffer: Buffer, mimeType: string, folder: string): Promise<string> => {
  try {
    const fileData = getFileDataUri(fileBuffer, mimeType); // Tạo Data URI từ file buffer
    const result = await cloudinary.uploader.upload(fileData, { folder }); // Tải lên Cloudinary
    return result.secure_url; // Trả về URL file trên Cloudinary
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw new Error('Failed to upload file');
  }
};

// API xử lý POST request
export const POST = async (request: NextRequest) => {
  try {
    // Kết nối với cơ sở dữ liệu
    await connect();

    // Lấy dữ liệu từ form
    const data = await request.formData();
    const file = data.get('coverImage'); // Lấy file từ formData
    const title = data.get('title')?.toString();
    const topic = data.get('topic')?.toString();

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ success: false, message: 'No file uploaded or invalid file type.' });
    }

    // Chuyển file thành Buffer và lấy MIME type
    const mimeType = file.type; // MIME type của file (vd: image/jpeg, image/png)
    const bufferData = Buffer.from(await file.arrayBuffer()); // Chuyển file thành Buffer

    // Tải file lên Cloudinary
    const fileUrl = await uploadToCloudinary(bufferData, mimeType, 'categories');

    // Tạo và lưu đối tượng Category
    const newCategory = new Category({
      title,
      topic,
      data: fileUrl,            // URL từ Cloudinary (theo schema)
      contentType: mimeType,    // MIME type của file
    });

    await newCategory.save(); // Lưu vào cơ sở dữ liệu

    // Trả về kết quả thành công
    return NextResponse.json({
      success: true,
      message: 'Category created successfully',
      category: newCategory,
    });
  } catch (error: any) {
    console.error('Error creating category:', error);

    // Phân loại lỗi và trả về phản hồi chi tiết
    if (error.name === 'ValidationError') {
      return NextResponse.json({
        success: false,
        message: 'Validation failed. Please check your input.',
        errors: error.errors,
      });
    }

    return NextResponse.json({
      success: false,
      message: error.message || 'An unexpected error occurred.',
    });
  }
};






export const GET = async (request: NextRequest) => {
  try {
    await connect();  // Kết nối với cơ sở dữ liệu

    const categories = await Category.find({});  // Lấy tất cả categories

    // Chuyển đổi dữ liệu buffer thành chuỗi Base64
    const categoriesWithBase64 = categories.map(category => ({
      _id: category._id,
      title: category.title,
      //data: `data:${category.contentType};base64,${category.data.toString('base64')}`,
      data: category.data,
      contentType: category.contentType,
      topic: category.topic,
      createdAt: category.createdAt,
    }));

    return NextResponse.json(categoriesWithBase64);
  } catch (error: any) {
    console.log(error);  // Log lỗi nếu có
    return NextResponse.json({ success: false, message: error.message });
  }
};





