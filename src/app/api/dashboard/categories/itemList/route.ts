
import { NextRequest, NextResponse } from 'next/server';
import Category from '../../../../../../models/category';
import connect from '../../../../../../utils/db';
export const GET = async (request: NextRequest) => {
    try {
      await connect();  // Kết nối với cơ sở dữ liệu
  
      const categories = await Category.find({});  // Lấy tất cả categories
  
      // Chuyển đổi dữ liệu buffer thành chuỗi Base64
      const categoriesWithBase64 = categories.map(category => ({
        _id: category._id,
        title: category.title,
        //data: `data:${category.contentType};base64,${category.data.toString('base64')}`,
        //contentType: category.contentType,
        topic: category.topic,
        //createdAt: category.createdAt,
      }));
  
      return NextResponse.json(categoriesWithBase64);
    } catch (error: any) {
      console.log(error);  // Log lỗi nếu có
      return NextResponse.json({ success: false, message: error.message });
    }
  };
  
  
  