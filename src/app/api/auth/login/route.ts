// // app/api/auth/login/route.ts
// import { loginUser } from '../../../../../controllers/authController';
// import { NextRequest, NextResponse } from 'next/server';

// export const POST = async (req: NextRequest)=>{
//   const body = await req.json();
//   return loginUser({ body } as any, NextResponse as any);
// }



// app/api/auth/login/route.ts
import { loginUser } from '../../../../../controllers/authController';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest)=>{
  
  return loginUser(req);
}