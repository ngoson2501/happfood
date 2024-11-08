// app/middleware/auth.ts
import { NextResponse, NextRequest } from 'next/server';
import { verifyAccessToken } from '../../../utils/jwt';

export async function middleware(req: NextRequest) {
  const token = req.headers.get('authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    verifyAccessToken(token);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.json({ message: 'Invalid or expired token' }, { status: 401 });
  }
}
