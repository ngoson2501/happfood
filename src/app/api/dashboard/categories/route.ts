




import { NextRequest, NextResponse } from 'next/server';
import Category from '../../../../../models/category';
import connect from '../../../../../utils/db';

export const POST = async (request: NextRequest) => {
  try {
    await connect();  // Kết nối với cơ sở dữ liệu

    const data = await request.formData();  // Lấy form data
    const file = data.get('coverImage');  // Lấy file từ form data (chú ý: trường phải trùng tên với client)
    // const topic = data.get('topic')?.toString();

    // Console log dữ liệu form trước khi xử lý
    console.log("Form Data:");
    console.log(data);  // In ra toàn bộ dữ liệu form
    
    if (!file || !(file instanceof File)) {
      return NextResponse.json({ success: false, message: 'No file uploaded or invalid file type.' });
    }

    const bufferData = await file.arrayBuffer();  // Chuyển đổi file thành arrayBuffer
    const buffer = Buffer.from(bufferData);  // Chuyển arrayBuffer thành Buffer

    // Console log thông tin file
    console.log("File Info:");
    console.log("File Name:", file.name);  // In ra tên file
    console.log("File Type:", file.type);  // In ra loại file

    // Tạo đối tượng newCategory
    const newCategory = await new Category({
      title: data.get('title')?.toString(),  // Lấy title từ formData
      data: buffer,  // Dữ liệu ảnh dưới dạng Buffer
      contentType: file.type,  // Kiểu dữ liệu của ảnh
      topic: data.get('topic')?.toString()
    });

    // Console log đối tượng newCategory trước khi lưu
    console.log("Category to Save:", newCategory);

    await newCategory.save();  // Lưu vào cơ sở dữ liệu

    return NextResponse.json({ success: true, message: 'Category created successfully' });
  } catch (error: any) {
    console.log(error);  // Log lỗi nếu có
    return NextResponse.json({ success: false, message: error.message });
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
      data: `data:${category.contentType};base64,${category.data.toString('base64')}`,
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





