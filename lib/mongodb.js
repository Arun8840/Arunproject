import mongoose from "mongoose"
import MessageSchema from "@/model/MessageSchema"
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("mongodb connected")
  } catch (error) {
    console.log(error)
  }
}

export default connectMongoDB
