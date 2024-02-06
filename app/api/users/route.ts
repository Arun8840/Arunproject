import connectMongoDB from "@/lib/mongodb"
import Users from "@/model/SocialSchema"
import { NextResponse } from "next/server"

// todo get all user
export async function GET(request: any, { params }: any) {
  const { id } = await request.json()
  await connectMongoDB()

  let user = await Users.find()
  return NextResponse.json(
    {
      message: "User loadded Successfully !!",
      status: true,
      data: user,
    },
    { status: 201 }
  )
}
