import { getUser } from "../../../../controllers/userController";
import { NextRequest, NextResponse } from 'next/server';


export const POST = async (req: Request)=>{
   
   return getUser(req)
}