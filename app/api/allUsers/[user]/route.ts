import connectMongoDB from "@/lib/mongodb"
import Users from "@/model/SocialSchema"
import { NextResponse } from "next/server"

// todo load particular user
export async function GET(req: any) {
  const id = req.nextUrl.searchParams.get("id")
  await connectMongoDB()
  let user = await Users.findById(id)

  return NextResponse.json(
    {
      message: "User loaded Successfully !!",
      status: true,
      data: user,
    },
    { status: 201 }
  )
}

// !delete user
export async function DELETE(req: any) {
  const id = req.nextUrl.searchParams.get("id")
  await connectMongoDB()
  let user = await Users.findByIdAndDelete(id)

  return NextResponse.json(
    {
      message: "User deleted Successfully !!",
      status: true,
      data: user,
    },
    { status: 201 }
  )
}

// todo update
export async function PUT(req: any) {
  try {
    const { id, isMutted } = await req.json()
    await connectMongoDB()
    let user = await Users.findByIdAndUpdate(id, { isMutted })
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
        message: `User ${isMutted ? "Mutted" : "Un-Mutted"} Successfully !!`,
        status: true,
        data: data,
      },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 })
  }
}
