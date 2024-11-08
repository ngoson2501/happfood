import { NextRequest, NextResponse } from 'next/server';
import { refreshAccessToken } from '../../../../../controllers/authController';

export async function POST(req: Request) {
  return refreshAccessToken(req);
}
