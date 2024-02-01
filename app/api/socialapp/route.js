import Users from "@/model/SocialSchema"
import connectMongoDB from "../../../lib/mongodb"
import { NextResponse } from "next/server"

// todo create
export async function POST(request) {
  const { name, email, profileImage, theme, description } = await request.json()
  await connectMongoDB()

  await Users.create({
    name,
    email,
    profileImage,
    description,
    theme,
  })
  return NextResponse.json(
    {
      message: "User created Successfully !!",
      status: true,
      data: { name, email, profileImage, theme, description },
    },
    { status: 201 }
  )
}

// todo delete
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id")
  await connectMongoDB()
  await Users.findByIdAndDelete(id)
  return NextResponse.json(
    { message: `User as deleted successfully !!` },
    { status: 200 }
  )
}
// todo load
export async function GET() {
  await connectMongoDB()

  const allUsers = await Users.find()
  return NextResponse.json({ allUsers })
}
