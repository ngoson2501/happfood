// import { NextRequest, NextResponse } from "next/server";
// import User from "../../../../../models/user"; // Đường dẫn tới mô hình User

// export async function POST(req: NextRequest) {
//   try {
//     const { userId } = await req.json();

//     if (!userId) {
//       return NextResponse.json({ message: "User ID is required" }, { status: 400 });
//     }

//     // Tìm người dùng bằng ID
//     const user = await User.findById(userId).select("-password -refreshToken");

//     if (!user) {
//       return NextResponse.json({ message: "User not found" }, { status: 404 });
//     }

//     // Xử lý và định dạng dữ liệu
//     const formattedUser = {
//       id: user._id, // Thay đổi tên trường
//       username: user.username,
//       email: user.email,
//       //avatar: user.avatar,
//       avatar: typeof user.avatar === "string"
//         ? user.avatar // Giữ nguyên đường dẫn từ database
//         : user.avatar
//         ? `data:${user.avatar.contentType};base64,${user.avatar.data.toString("base64")}`
//         : null,
//       //avatar: user.avatar ? `data:${user.avatar.contentType};base64,${user.avatar.data.toString('base64')}` : null,
//     //   avatarUrl: user.avatar.startsWith("/")
//     //     ? `https://yourdomain.com${user.avatar}` // Bổ sung URL đầy đủ
//     //     : user.avatar,
//     //   role: user.role,
//     //   createdAt: new Date(user.createdAt).toLocaleDateString("vi-VN"), // Chuyển ngày sang định dạng dễ đọc
//     //   updatedAt: new Date(user.updatedAt).toLocaleDateString("vi-VN"),
//     };

//     // Trả về dữ liệu đã xử lý
//     return NextResponse.json(formattedUser, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching user:", error);
//     return NextResponse.json({ message: "Internal server error" }, { status: 500 });
//   }
// }









// import { NextRequest, NextResponse } from "next/server";
// import User from "../../../../../models/user"; // Đường dẫn tới mô hình User

// export async function POST(req: NextRequest) {
//   try {
//     const { userId } = await req.json();

//     if (!userId) {
//       return NextResponse.json({ message: "User ID is required" }, { status: 400 });
//     }

//     // Tìm người dùng bằng ID
//     const user = await User.findById(userId).select("-password -refreshToken");

//     if (!user) {
//       return NextResponse.json({ message: "User not found" }, { status: 404 });
//     }

//     // Xử lý và định dạng dữ liệu
//     let avatar = null;

//     if (typeof user.avatar === "string") {
//       avatar = user.avatar; // Đường dẫn mặc định
//     } else if (user.avatar && user.avatar.contentType && user.avatar.data) {
//       avatar = `data:${user.avatar.contentType};base64,${user.avatar.data.toString("base64")}`;
//     }

//     const formattedUser = {
//       id: user._id,
//       username: user.username,
//       email: user.email,
//       avatar, // Avatar đã được xử lý
//     };

//     // Trả về dữ liệu đã xử lý
//     return NextResponse.json(formattedUser, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching user:", error);
//     return NextResponse.json({ message: "Internal server error" }, { status: 500 });
//   }
// }
















// import { NextRequest, NextResponse } from "next/server";
// import User from "../../../../../models/user"; // Đường dẫn tới mô hình User

// export async function POST(req: NextRequest) {
//   try {
//     const { userId } = await req.json();

//     if (!userId) {
//       return NextResponse.json({ message: "User ID is required" }, { status: 400 });
//     }

//     // Tìm người dùng bằng ID
//     const user = await User.findById(userId).select("-password -refreshToken");

//     if (!user) {
//       return NextResponse.json({ message: "User not found" }, { status: 404 });
//     }

//     // Xử lý và định dạng dữ liệu avatar
//     let avatar = null;

//     if (user.avatar?.data && user.avatar?.contentType) {
//       avatar = `data:${user.avatar.contentType};base64,${user.avatar.data.toString("base64")}`;
//     }

//     const formattedUser = {
//       id: user._id,
//       username: user.username,
//       email: user.email,
//       role: user.role, // Bao gồm trường role
//       avatar, // Avatar đã được xử lý
//       createdAt: user.createdAt.toISOString(), // Trả về ISO string
//       updatedAt: user.updatedAt.toISOString(),
//     };

//     // Trả về dữ liệu đã xử lý
//     return NextResponse.json(formattedUser, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching user:", error);
//     return NextResponse.json({ message: "Internal server error" }, { status: 500 });
//   }
// }












import { NextRequest, NextResponse } from "next/server";
import User from "../../../../../models/user"; // Đường dẫn tới mô hình User

export async function POST(req: NextRequest) {
  try {
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json({ message: "User ID is required" }, { status: 400 });
    }

    // Tìm người dùng bằng ID
    const user = await User.findById(userId).select("-password -refreshToken");

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Xử lý và định dạng dữ liệu avatar
    let avatar = null;

    if (user.avatar?.data && user.avatar?.contentType) {
      avatar = `data:${user.avatar.contentType};base64,${user.avatar.data.toString("base64")}`;
    } else if (typeof user.avatar === "string" && user.avatar.startsWith("/defaultAvatars")) {
      avatar = user.avatar; // Sử dụng avatar mặc định nếu là chuỗi
    } else {
      avatar = "/defaultAvatars/elephant.png"; // Avatar mặc định
    }

    const formattedUser = {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role, // Bao gồm trường role
      avatar, // Avatar đã được xử lý
      createdAt: user.createdAt.toISOString(), // Trả về ISO string
      updatedAt: user.updatedAt.toISOString(),
    };

    // Trả về dữ liệu đã xử lý
    return NextResponse.json(formattedUser, { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
