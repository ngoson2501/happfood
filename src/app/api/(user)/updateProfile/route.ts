// import { NextRequest, NextResponse } from "next/server";
// import connect from "../../../../../utils/db";
// import User from "../../../../../models/user";

// export const PATCH = async (request: NextRequest) => {
//   try {
//     await connect();

//     const data = await request.formData();
//     const email = data.get("email")?.toString();
//     const username = data.get("username")?.toString();
//     const avatar = data.get("avatar");

//     if (!email) {
//       return NextResponse.json({ success: false, message: "Email is required" }, { status: 400 });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
//     }

//     // Nếu có avatar và avatar là file
//     if (avatar && avatar instanceof File) {
//       const avatarBuffer = Buffer.from(await avatar.arrayBuffer());  // Chuyển đổi thành Buffer
//       user.avatar = {
//         data: avatarBuffer,
//         contentType: avatar.type,  // Lưu loại file (ví dụ: image/png)
//       };
//     }

//     user.username = username || user.username;  // Cập nhật username nếu có
//     await user.save();

//     return NextResponse.json({ success: true, message: "Profile updated successfully", data: user });
//   } catch (error: any) {
//     console.error("Error updating profile:", error);
//     return NextResponse.json({ success: false, message: error.message }, { status: 500 });
//   }
// };




























// import { NextRequest, NextResponse } from "next/server";
// import connect from "../../../../../utils/db";
// import User from "../../../../../models/user";

// export const PATCH = async (request: NextRequest) => {
//   try {
//     await connect();

//     const data = await request.formData();
//     const email = data.get("email")?.toString();
//     const username = data.get("username")?.toString();
//     const avatar = data.get("avatar");

//     // Kiểm tra nếu email không có
//     if (!email) {
//       return NextResponse.json({ success: false, message: "Email is required" }, { status: 400 });
//     }

//     // Tìm người dùng dựa trên email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
//     }

//     // Cập nhật avatar nếu có file
//     if (avatar && avatar instanceof File) {
//       const avatarBuffer = Buffer.from(await avatar.arrayBuffer());  // Chuyển đổi thành Buffer
//       user.avatar = {
//         data: avatarBuffer,
//         contentType: avatar.type,  // Lưu loại file (ví dụ: image/png)
//       };
//     }

//     // Cập nhật username và email
//     if (username) {
//       user.username = username;  // Cập nhật username nếu có
//     }
//     if (email !== user.email) {
//       user.email = email; // Cập nhật email nếu khác
//     }

//     await user.save(); // Lưu thay đổi vào cơ sở dữ liệu

//     return NextResponse.json({ success: true, message: "Profile updated successfully", data: user });
//   } catch (error: any) {
//     console.error("Error updating profile:", error);
//     return NextResponse.json({ success: false, message: error.message }, { status: 500 });
//   }
// };























// import { NextRequest, NextResponse } from "next/server";
// import connect from "../../../../../utils/db";
// import User from "../../../../../models/user";
// import { v2 as cloudinary } from "cloudinary";

// // Cấu hình Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Hàm tiện ích để tải file lên Cloudinary
// const uploadToCloudinary = async (fileBuffer: Buffer, folder: string): Promise<string> => {
//   try {
//     const fileData = `data:image/jpeg;base64,${fileBuffer.toString("base64")}`;
//     const result = await cloudinary.uploader.upload(fileData, { folder });
//     return result.secure_url;
//   } catch (error) {
//     console.error("Error uploading to Cloudinary:", error);
//     throw new Error("Failed to upload file");
//   }
// };

// // Hàm tiện ích để xóa file khỏi Cloudinary
// const deleteFromCloudinary = async (imageUrl: string): Promise<void> => {
//   try {
//     const regex = /\/v\d+\/(.+)\.\w+$/;
//     const match = imageUrl.match(regex);
//     if (!match || !match[1]) {
//       throw new Error("Invalid image URL");
//     }
//     const publicId = match[1];
//     await cloudinary.uploader.destroy(publicId);
//   } catch (error) {
//     console.error("Error deleting from Cloudinary:", error);
//     throw new Error("Failed to delete file");
//   }
// };

// export const PATCH = async (request: NextRequest) => {
//   try {
//     await connect();

//     const data = await request.formData();
//     const email = data.get("email")?.toString();
//     const username = data.get("username")?.toString();
//     const avatar = data.get("avatar");

//     // Kiểm tra nếu email không có
//     if (!email) {
//       return NextResponse.json({ success: false, message: "Email is required" }, { status: 400 });
//     }

//     // Tìm người dùng dựa trên email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
//     }

//     // Xử lý avatar
//     if (avatar && avatar instanceof File) {
//       const buffer = Buffer.from(await avatar.arrayBuffer());

//       if (user.avatar) {
//         // Xóa avatar cũ trên Cloudinary nếu có
//         await deleteFromCloudinary(user.avatar);
//       }

//       // Tải avatar mới lên Cloudinary
//       const uploadedAvatarUrl = await uploadToCloudinary(buffer, "avatars");
//       user.avatar = uploadedAvatarUrl; // Lưu URL của avatar
//     }

//     // Cập nhật username nếu có
//     if (username) {
//       user.username = username;
//     }

//     await user.save(); // Lưu thay đổi vào cơ sở dữ liệu

//     return NextResponse.json({
//       success: true,
//       message: "Profile updated successfully",
//       data: user,
//     });
//   } catch (error: any) {
//     console.error("Error updating profile:", error);
//     return NextResponse.json({ success: false, message: error.message }, { status: 500 });
//   }
// };





















import { NextRequest, NextResponse } from "next/server";
import connect from "../../../../../utils/db";
import User from "../../../../../models/user";
import { v2 as cloudinary } from "cloudinary";

// Cấu hình Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Hàm tiện ích để tải file lên Cloudinary
const uploadToCloudinary = async (fileBuffer: Buffer, folder: string): Promise<string> => {
  try {
    const fileData = `data:image/jpeg;base64,${fileBuffer.toString("base64")}`;
    const result = await cloudinary.uploader.upload(fileData, { folder });
    return result.secure_url;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw new Error("Failed to upload file");
  }
};

// Hàm tiện ích để xóa file khỏi Cloudinary
const deleteFromCloudinary = async (imageUrl: string): Promise<void> => {
  try {
    const regex = /\/v\d+\/(.+)\.\w+$/;
    const match = imageUrl.match(regex);
    if (!match || !match[1]) {
      throw new Error("Invalid image URL");
    }
    const publicId = match[1];
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error("Error deleting from Cloudinary:", error);
    throw new Error("Failed to delete file");
  }
};



export const PATCH = async (request: NextRequest) => {
  try {
    await connect();

    const data = await request.formData();
    const email = data.get("email")?.toString();
    const username = data.get("username")?.toString();
    const avatar = data.get("avatar");

    // Kiểm tra nếu email không có
    if (!email) {
      return NextResponse.json({ success: false, message: "Email is required" }, { status: 400 });
    }

    // Tìm người dùng dựa trên email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }

    // Danh sách các avatar mặc định
    const defaultAvatars = [
      "/defaultAvatars/cat.png",
      "/defaultAvatars/cow.png",
      "/defaultAvatars/frog.png",
      "/defaultAvatars/elephant.png",
    ];

    // Xử lý avatar
    if (avatar && avatar instanceof File) {
      const buffer = Buffer.from(await avatar.arrayBuffer());

      // Kiểm tra nếu avatar hiện tại không phải là avatar mặc định
      if (user.avatar && !defaultAvatars.includes(user.avatar)) {
        try {
          // Xóa avatar cũ trên Cloudinary nếu không phải là avatar mặc định
          await deleteFromCloudinary(user.avatar);
        } catch (error: any) {
          console.warn(
            `Could not delete old avatar from Cloudinary: ${error.message}`
          );
        }
      }

      // Tải avatar mới lên Cloudinary
      const uploadedAvatarUrl = await uploadToCloudinary(buffer, "avatars");
      user.avatar = uploadedAvatarUrl; // Lưu URL của avatar mới
    }

    // Cập nhật username nếu có
    if (username) {
      user.username = username;
    }

    await user.save(); // Lưu thay đổi vào cơ sở dữ liệu

    return NextResponse.json({
      success: true,
      message: "Profile updated successfully",
      data: user,
    });
  } catch (error: any) {
    console.error("Error updating profile:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
};
