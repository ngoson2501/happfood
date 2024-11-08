// app/middleware.ts
import { NextResponse, NextRequest } from 'next/server';
import { verifyAccessToken } from '../../utils/jwt';

export async function middleware(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return NextResponse.json({ message: 'Unauthorized access' }, { status: 401 });
  }

  try {
    verifyAccessToken(token);
    return NextResponse.next(); // Tiếp tục cho phép yêu cầu
  } catch (error) {
    return NextResponse.json({ message: 'Invalid or expired token' }, { status: 403 });
  }
}

export const config = {
  matcher: ['/api/recipes/:path*'], // Bảo vệ tất cả API trong /api/recipes
};
