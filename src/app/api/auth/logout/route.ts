import { logoutUser } from '../../../../../controllers/authController';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest)=>{
  
  return logoutUser(req)
}