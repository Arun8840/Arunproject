import connectMongoDB from "@/lib/mongodb"
import { NextResponse } from "next/server"
import Todo from "@/model/TodoSchema"


export async function POST(request: any) {
  const { title,description,isPriority } =await request.json()
  await connectMongoDB()
  let taskData = {
   title,isPriority,
    description,
  }
// todo finding already is created
const isAlreadyCreated=(await Todo.find()).some((exist)=>exist?.title === title)
 if (isAlreadyCreated) {
  return NextResponse.json(
    {
      message: "This task is already created !!",
      status: true,
      data: taskData,
    },
    { status: 201 }
  )
 }
 else{
  await Todo.create(taskData)
  return NextResponse.json(
    {
      message: "Task created Successfully !!",
      status: true,
      data: taskData,
    },
    { status: 201 }
  )
 }
}


