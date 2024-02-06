import mongoose from "mongoose"

const connectMongoDB = async () => {
  try {
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
