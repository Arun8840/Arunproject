import connectMongoDB from "@/lib/mongodb"
import Users from "@/model/SocialSchema"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
export async function POST(req: any) {
  const { email, password } = await req.json()
  await connectMongoDB()
  const user = await Users.findOne({ email })
  //   res data
  let userData = {
    name: user?.name,
    id: user?._id,
    email: user?.email,
    description: user?.description,
    createdAt: user?.createdAt,
    updatedAt: user?.updatedAt,
    theme: user?.theme,
    profileImage: user?.profileImage,
  }
  const encryptPassword: boolean | any = await bcrypt.compare(
    password,
    user?.password
  )
  if (user && encryptPassword) {
    return NextResponse.json(
      {
        message: `User ${email} logged Successfully !!`,
        status: true,
        user: userData,
      },
      { status: 200 }
    )
  } else {
    return NextResponse.json(
      {
        message: "Invalid credentials. Authentication failed.",
        status: false,
      },
      { status: 201 }
    )
  }
}
