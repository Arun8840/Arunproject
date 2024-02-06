import connectMongoDB from "@/lib/mongodb"
import Users from "@/model/SocialSchema"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
export async function POST(request: any) {
  const { name, email, profileImage, theme, password, description } =
    await request.json()
  let encryptedPassword = await bcrypt.hash(password, 10)
  await connectMongoDB()
  let userData = {
    name: name,
    email,
    profileImage: profileImage,
    theme: theme,
    password: encryptedPassword,
    description,
  }
  await Users.create(userData)
  return NextResponse.json(
    {
      message: "User register Successfully !!",
      status: true,
      data: userData,
    },
    { status: 201 }
  )
}
