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




import { NextRequest, NextResponse } from "next/server";
import connect from "../../../../../utils/db";
import User from "../../../../../models/user";

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

    // Cập nhật avatar nếu có file
    if (avatar && avatar instanceof File) {
      const avatarBuffer = Buffer.from(await avatar.arrayBuffer());  // Chuyển đổi thành Buffer
      user.avatar = {
        data: avatarBuffer,
        contentType: avatar.type,  // Lưu loại file (ví dụ: image/png)
      };
    }

    // Cập nhật username và email
    if (username) {
      user.username = username;  // Cập nhật username nếu có
    }
    if (email !== user.email) {
      user.email = email; // Cập nhật email nếu khác
    }

    await user.save(); // Lưu thay đổi vào cơ sở dữ liệu

    return NextResponse.json({ success: true, message: "Profile updated successfully", data: user });
  } catch (error: any) {
    console.error("Error updating profile:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
};
