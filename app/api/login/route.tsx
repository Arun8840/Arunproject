import connectMongoDB from "@/lib/mongodb"
import Users from "@/model/SocialSchema"
import { NextResponse } from "next/server"

// todo create
export async function POST(request: any) {
  const { email, password } = await request.json()
  await connectMongoDB()
  const user = await Users.findOne({ email, password })

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
  if (user) {
    return NextResponse.json(
      {
        message: `User ${email} logged Successfully !!`,
        status: true,
        userData,
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
