// import { NextResponse } from "next/server";
// import User from "../../../../../models/user";
// import connect from "../../../../../utils/db";
// import { hashPassword } from "../../../../../services/authService";

// const generateRandomPassword = () => {
//   const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//   let password = "";
//   for (let i = 0; i < 8; i++) {
//     const randomIndex = Math.floor(Math.random() * charset.length);
//     password += charset[randomIndex];
//   }
//   return password;
// };

// export async function POST(req: Request) {
//   try {
//     const { emailOrUsername } = await req.json();

//     if (!emailOrUsername) {
//       return NextResponse.json(
//         { message: "Email or username is required" },
//         { status: 400 }
//       );
//     }

//     await connect();

//     // Tìm người dùng theo email hoặc username
//     const user = await User.findOne({
//       $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
//     });

//     if (!user) {
//       return NextResponse.json(
//         { message: "User not found" },
//         { status: 404 }
//       );
//     }

//     // Tạo mật khẩu mới
//     const newPassword = generateRandomPassword();

//     // Hash mật khẩu mới
//     const hashedPassword = await hashPassword(newPassword);

//     // Cập nhật mật khẩu mới vào cơ sở dữ liệu
//     user.password = hashedPassword;
//     await user.save();

//     // Trả về thông báo thành công
//     return NextResponse.json(
//       { 
//         message: `Password reset successfully. Your new password is: ${newPassword}` 
//       },
//       { status: 200 }
//     );
//   } catch (error: any) {
//     console.error("Error in forgot password:", error);
//     return NextResponse.json(
//       { message: "Error resetting password", error: error.message },
//       { status: 500 }
//     );
//   }
// }









import { NextResponse } from "next/server";
import User from "../../../../../models/user";
import connect from "../../../../../utils/db";
import { hashPassword } from "../../../../../services/authService";

const generateRandomPassword = () => {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

export async function POST(req: Request) {
  try {
    const { emailOrUsername } = await req.json();

    if (!emailOrUsername) {
      return NextResponse.json(
        { message: "Email or username is required" },
        { status: 400 }
      );
    }

    await connect();

    // Tìm người dùng theo email hoặc username
    const user = await User.findOne({
      $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
    });

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    // Tạo mật khẩu mới
    const newPassword = generateRandomPassword();

    // Hash mật khẩu mới
    const hashedPassword = await hashPassword(newPassword);

    // Cập nhật mật khẩu mới vào cơ sở dữ liệu
    user.password = hashedPassword;
    await user.save();

    // Trả về thông báo thành công
    return NextResponse.json(
      { 
        message: "Password reset successfully", // Chỉ thông báo thành công
        newPassword: newPassword // Trả về mật khẩu mới cho client
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error in forgot password:", error);
    return NextResponse.json(
      { message: "Error resetting password", error: error.message },
      { status: 500 }
    );
  }
}
