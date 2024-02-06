import connectMongoDB from "@/lib/mongodb";
import Users from "@/model/SocialSchema";
import { NextResponse } from "next/server";
export async function GET() {
  await connectMongoDB();
  let allUser = await Users.find();
  return NextResponse.json(
    {
      message: "Users loaded Successfully !!",
      status: true,
      data: allUser,
    },
    { status: 201 }
  );
}
