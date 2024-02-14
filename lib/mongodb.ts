import mongoose from "mongoose"
import http from "http"
import express from "express"
import cors from "cors"
import { Server } from "socket.io"
import Users from "@/model/SocialSchema"

const app = express()
const server = http.createServer(app)
// Allow requests from all origins
app.use(cors())
const connectMongoDB = async () => {
  try {
    let MongoURI: any =
      "mongodb+srv://arunprakash:Today01!@socialapp.jruieby.mongodb.net/"
    // Connect to MongoDB
    await mongoose.connect(MongoURI)
    console.log("MongoDB connected")

    const io = new Server(server, {
      cors: {
        origin: "http://localhost:3000",
      },
    })

    io.on("connection", (socket) => {
      socket.on("joined", () => {
        io.sockets.emit("new-user", "new user joined")
      })

      socket.on("private message", async (to, message, mySelf) => {
        const user = await Users.find({ id: to })
        const sender = await Users.findById(mySelf)
        io.sockets.emit("refresh", "new Message")

        if (user) {
          user[0].messages.push({
            reciver: user[0].email,
            message,
            sender: sender?.email,
            time: new Date(),
          })
          sender?.messages.push({
            reciver: user[0].email,
            message,
            sender: sender?.email,
            time: new Date(),
          })
          await user[0].save()
          await sender?.save()
        }
      })
    })
  } catch (error) {
    console.error("MongoDB connection error:", error)
  }
}

export default connectMongoDB
