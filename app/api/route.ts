import { NextRequest, NextResponse } from "next/server";
import { User, connectDB } from "../core";


connectDB();


 export const POST = async (req:NextRequest) => {
  const { phoneNumber } = await req.json();
  try {
      const newUser = new User({ phoneNumber: phoneNumber});
      await newUser.save();
     return NextResponse.json({});
    } catch (error) {

    }
  };
