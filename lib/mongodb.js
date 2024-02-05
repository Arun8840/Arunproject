import mongoose from "mongoose"
import express from "express"
import cors from "cors"
import http from "http"
import { Server } from "socket.io"

const app = express()
const httpServer = http.createServer(app) // Create an HTTP server
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
})

app.use(cors())

const connectMongoDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(
      "mongodb+srv://arunprakash:Today01!@socialapp.jruieby.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    console.log("MongoDB connected")

    // Setup socket.io
    io.on("connection", (socket) => {
      console.log("User connected")

      // Add your socket.io event handling logic here
      global.onlineUsers = new Map()

      socket.on("add-user", (userId) => {
        global.onlineUsers.set(userId, socket.id)
      })

      socket.on("send-msg", (data) => {
        const sendUserSocket = global.onlineUsers.get(data.message)
        if (sendUserSocket) {
          io.to(sendUserSocket).emit("msg-receive", data.message)
        }
      })

      socket.on("disconnect", () => {
        console.log("User disconnected")
      })
    })

    // Start HTTP server
    httpServer.listen(5001, () => {
      console.log("Server started on port 5001")
    })
  } catch (error) {
    console.error("MongoDB connection error:", error)
  }
}

export default connectMongoDB
