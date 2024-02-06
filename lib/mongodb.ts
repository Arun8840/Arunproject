import mongoose from "mongoose"

const connectMongoDB = async () => {
  try {
    let MongoURI: any = process.env.MONGO_URI
    // Connect to MongoDB
    await mongoose.connect(MongoURI)
    console.log("MongoDB connected")
  } catch (error) {
    console.error("MongoDB connection error:", error)
  }
}

export default connectMongoDB
