
// /api/auth/login/route.ts
import { loginUser } from '../../../../../controllers/authController';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest)=>{
  
  return loginUser(req);
}





// // /api/auth/login/route.ts
// import { loginUser } from '../../../../../controllers/authController';
// import { loginWithGoogle } from '../../../../../controllers/authController'; // Import hàm loginWithGoogle
// import { NextRequest, NextResponse } from 'next/server';

// export const POST = async (req: NextRequest) => {
//   try {
//     const body = await req.json();

//     // Kiểm tra xem có thông tin đăng nhập qua Google không
//     if (body.googleId && body.email) {
//       // Gọi hàm loginWithGoogle nếu có googleId và email
//       return loginWithGoogle(req);
//     } else {
//       // Gọi hàm loginUser nếu chỉ có email hoặc username và password
//       return loginUser(req);
//     }
//   } catch (error: any) {
//     console.error('Error during login:', error);
//     return NextResponse.json({ message: 'Error during login', error: error.message }, { status: 500 });
//   }
// };

