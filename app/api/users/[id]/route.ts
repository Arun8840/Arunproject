import connectMongoDB from "@/lib/mongodb"
import Users from "@/model/SocialSchema"
import { NextResponse } from "next/server"

// todo get particular user
export async function GET(request: any, { params }: any) {
  const { id } = await request.json()
  await connectMongoDB()

  let user = await Users.findById(id)
  return NextResponse.json(
    {
      message: "User loadded Successfully !!",
      status: true,
      data: user,
    },
    { status: 201 }
  )
}
