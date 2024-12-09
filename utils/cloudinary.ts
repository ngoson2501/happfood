import { v2 as cloudinary } from 'cloudinary';

// Cấu hình Cloudinary với biến môi trường
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Xuất đối tượng đã cấu hình để tái sử dụng
export default cloudinary;
