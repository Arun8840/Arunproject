import mongoose from "mongoose"
import express from "express"
import cors from "cors"

const app = express()
const httpServer = require("http").createServer(app) // Create an HTTP server
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
})

app.use(cors())

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("MongoDB connected")

    httpServer.listen(5001, () => {
      console.log("Server started on port 5001")
    })

    global.onlineUsers = new Map()

    io.on("connection", (socket) => {
      global.chatSocket = socket

      socket.on("add-user", (userId) => {
        global.onlineUsers.set(userId, socket.id)
      })

      socket.on("send-msg", (data) => {
        const sendUserSocket = global.onlineUsers.get(data.message)
        if (sendUserSocket) {
          io.to(sendUserSocket).emit("msg-receive", data.message)
        }
      })
    })
  } catch (error) {
    console.error("MongoDB connection error:", error)
  }
}

export default connectMongoDB
