import connectMongoDB from "@/lib/mongodb"
import Users from "@/model/SocialSchema"
import { NextResponse } from "next/server"
export async function GET() {
  await connectMongoDB()
  const headers = new Headers()
  headers.set("Access-Control-Allow-Origin", "*") // Allow requests from any origin
  headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS") // Allowed methods
  headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization")
  let allUser = await Users.find()
  return NextResponse.json(
    {
      message: "Users loaded Successfully !!",
      status: true,
      data: allUser,
    },
    { status: 201 }
  )
}
