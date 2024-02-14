import MessageSchema from "@/model/MessageSchema"
import connectMongoDB from "../../../../lib/mongodb"
import { NextResponse } from "next/server"
// todo load
export async function POST(request: any) {
  const { from, to } = await request.json()
  await connectMongoDB()
  const messages = await MessageSchema.find({
    users: {
      $all: [from, to],
    },
  }).sort({ updatedAt: 1 })

  const projectMessages = messages.map((msg) => {
    return {
      senderId: from,
      receiverId: to,
      fromSelf: msg.sender.toString() === from,
      message: msg.message,
    }
  })

  return NextResponse.json({ projectMessages })
}
