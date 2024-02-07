import mongoose from "mongoose"

import express from "express"
import cors from "cors"

const app = express()

// Allow requests from all origins
app.use(cors())
const connectMongoDB = async () => {
  try {
    let MongoURI: any =
      "mongodb+srv://arunprakash:Today01!@socialapp.jruieby.mongodb.net/"
    // Connect to MongoDB
    await mongoose.connect(
      "mongodb+srv://arunprakash:Today01!@socialapp.jruieby.mongodb.net/"
    )
    console.log("MongoDB connected")
  } catch (error) {
    console.error("MongoDB connection error:", error)
  }
}

export default connectMongoDB
