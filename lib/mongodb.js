import mongoose from "mongoose"
const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors({ origin: "https://arunproject.vercel.app/" }))
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("mongodb connected")
  } catch (error) {
    console.log(error)
  }
}

export default connectMongoDB
