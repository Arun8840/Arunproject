import connectMongoDB from "@/lib/mongodb";
import Users from "@/model/SocialSchema";
import { NextResponse } from "next/server";

export async function GET(req: any) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  let allUser = await Users.find();
  let filterFriends = allUser.filter((items) => items?.id !== id);
  return NextResponse.json(
    {
      message: "Friends loaded Successfully !!",
      status: true,
      data: filterFriends,
    },
    { status: 201 }
  );
}
