import connectMongoDB from "@/lib/mongodb";
import Users from "@/model/SocialSchema";
import { NextResponse } from "next/server";


export async function GET(req: any) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  let user = await Users.findById(id);

  return NextResponse.json(
    {
      message: "User loaded Successfully !!",
      status: true,
      data: user,
    },
    { status: 201 }
  );
}


export async function DELETE(req: any) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  let user = await Users.findByIdAndDelete(id);

  return NextResponse.json(
    {
      message: "User deleted Successfully !!",
      status: true,
      data: user,
    },
    { status: 201 }
  );
}
