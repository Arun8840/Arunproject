import connectMongoDB from "@/lib/mongodb"
import Todo from "@/model/TodoSchema"
import { NextResponse } from "next/server"
export async function GET() {
  await connectMongoDB()
  let allTasks = await Todo.find()
  return NextResponse.json(
    {
      message: "Task's loaded Successfully !!",
      status: true,
      data: allTasks,
    },
    { status: 201 }
  )
}
