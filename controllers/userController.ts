// import {  NextResponse } from 'next/server';
// import { JwtPayload } from 'jsonwebtoken';
// import User from '../models/user';
// import connect from '../utils/db';
// import { verifyAccessToken } from '../utils/jwt';




// export const getUser = async (req: Request) => {
//   try {
//     const body = await req.json();
//     const { accessToken } = body; // Lấy accessToken từ request body

//     // Xác thực accessToken
//     const payload = await verifyAccessToken(accessToken) as JwtPayload;

//     if (!payload || !payload.userId) {
      
//       return new NextResponse('Invalid access token', { status: 401 });
//     }

//     // Kết nối cơ sở dữ liệu
//     await connect();

//     // Tìm kiếm người dùng
//     const user = await User.findById(payload.userId);

//     if (!user) {
//       return new NextResponse('User not found', { status: 404 });
//     }


   
    
//     // Trả về thông tin người dùng
//     const userData = {
//       id: user._id,
//       email: user.email,
//       username: user.username,
//       role: user.role,
//       avatar: user.avatar ? `data:${user.avatar.contentType};base64,${user.avatar.data.toString('base64')}` : null,
//       //avatar,
//     // ? `data:${user.avatar.contentType};base64,${user.avatar.data.toString('base64')}`
//     // : null,
      
//       refreshToken: user.refreshToken

//     };

    

  

//     return new NextResponse(JSON.stringify(userData), { status: 200 });
//   } catch (error: any) {
//     return new NextResponse(`Error fetching user data: ${error.message}`, { status: 500 });
//   }
// };





import { NextResponse } from 'next/server';
import { JwtPayload } from 'jsonwebtoken';
import User from '../models/user';
import connect from '../utils/db';
import { verifyAccessToken } from '../utils/jwt';

export const getUser = async (req: Request) => {
  try {
    const body = await req.json();
    const { accessToken } = body; // Lấy accessToken từ request body

    // Xác thực accessToken
    const payload = await verifyAccessToken(accessToken) as JwtPayload;

    if (!payload || !payload.userId) {
      return new NextResponse('Invalid access token', { status: 401 });
    }

    // Kết nối cơ sở dữ liệu
    await connect();

    // Tìm kiếm người dùng
    const user = await User.findById(payload.userId);

    if (!user) {
      return new NextResponse('User not found', { status: 404 });
    }

    // Xử lý avatar
    let avatar = null;

    if (user.avatar?.data && user.avatar?.contentType) {
      // Nếu avatar là một file binary
      avatar = `data:${user.avatar.contentType};base64,${user.avatar.data.toString('base64')}`;
    } else {
      // Nếu avatar là chuỗi mặc định từ database
      avatar = user.avatar;
    }

    // Trả về thông tin người dùng
    const userData = {
      id: user._id,
      email: user.email,
      username: user.username,
      role: user.role,
      avatar, // Avatar đã được xử lý
      refreshToken: user.refreshToken,
    };

    // Console giá trị userData trước khi gửi cho client
    //console.log('User data being sent to client:', userData);

    return new NextResponse(JSON.stringify(userData), { status: 200 });
  } catch (error: any) {
    return new NextResponse(`Error fetching user data: ${error.message}`, { status: 500 });
  }
};
