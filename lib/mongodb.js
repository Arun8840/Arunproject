import mongoose from "mongoose"
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true, // Add this line to avoid deprecation warning
    })
    console.log("mongodb connected")
  } catch (error) {
    console.log(error)
  }
}

export default connectMongoDB
