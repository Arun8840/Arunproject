import connectMongoDB from "@/lib/mongodb"
import Users from "@/model/SocialSchema"
import { NextResponse } from "next/server"

// todo update
export async function PUT(req: any) {
  try {
    const { id, isMutted, isPinned, name, email, theme, profileImage } =
      await req.json()
    await connectMongoDB()
    let user = await Users.findByIdAndUpdate(id, {
      isMutted,
      isPinned,
      name,
      email,
      theme,
      profileImage,
    })
    let data = {
      name: user?.name,
      email: user?.email,
      theme: user?.theme,
      description: user?.description,
      isPinned: user?.isPinned,
      isMutted: isMutted,
      profileImage: user?.profileImage,
      _id: user?._id,
    }
    return NextResponse.json(
      {
        message: `User Updated Successfully !!`,
        status: true,
        data: data,
      },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 })
  }
}
