// // app/api/auth/register/route.ts
// import { registerUser } from '../../../../../controllers/authController';
// import { NextRequest, NextResponse } from 'next/server';

// export async function POST(req: NextRequest) {
//   const body = await req.json();
//   return registerUser({ body } as any, NextResponse as any);
// }



// /api/auth/register/route.ts
import { registerUser } from '../../../../../controllers/authController';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // Truyền trực tiếp request vào controller mà không cần ép kiểu body
  return registerUser(req);
}
