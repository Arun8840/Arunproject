import MessageSchema from "@/model/MessageSchema"
import connectMongoDB from "../../../lib/mongodb"
import { NextResponse } from "next/server"

// todo create
export async function POST(request) {
  const { from, to, message } = await request.json()
  await connectMongoDB()
  await MessageSchema.create({
    message: message,
    users: [from, to],
    sender: from,
  })
  return NextResponse.json(
    {
      message: "message send Successfully !!",
      status: true,
      data: { message, sender: from },
    },
    { status: 201 }
  )
}


