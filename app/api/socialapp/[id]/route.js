import Users from "@/model/SocialSchema"
import connectMongoDB from "@/lib/mongodb"
import { NextResponse } from "next/server"

export async function PUT(request, { params }) {
  const { id } = params
  const { name, email, profileImage, theme, description } = await request.json()
  await connectMongoDB()
  await Users.findByIdAndUpdate(id, {
    name,
    email,
    profileImage,
    theme,
    description,
  })
  return NextResponse.json(
    {
      message: "User update successfully !!",
      data: { name, email, profileImage, theme, description },
    },
    { status: 200 }
  )
}

export async function GET(request, { params }) {
  const { id } = params
  await connectMongoDB()
  const User = await Users.findById(id)
  return NextResponse.json(
    {
      message: "User Loadded successfully !!",
      data: { User },
    },
    { status: 200 }
  )
}
