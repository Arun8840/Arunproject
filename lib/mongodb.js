import mongoose from "mongoose"
import express from "express"
import cors from "cors"
// import { Server } from "socket.io"
// import http from "http"

const app = express()
// const server = http.createServer(app)
// const io = new Server(server)

app.use(cors())

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB connected")

    // // Setup socket.io
    // io.on("connection", (socket) => {
    //   console.log("User connected")

    //   // Add your socket.io event handling logic here

    //   socket.on("disconnect", () => {
    //     console.log("User disconnected")
    //   })
    // })

    // server.listen(5000, () => {
    //   console.log("Socket.io listening on port 5000")
    // })
  } catch (error) {
    console.error("MongoDB connection error:", error)
  }
}

export default connectMongoDB
