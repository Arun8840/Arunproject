import mongoose from "mongoose";
import http from "http";
import express from "express";
import cors from "cors";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
// Allow requests from all origins
app.use(cors());
const io = new Server(server, {
  cors: {
    origin: "http://localhost:2000",
  },
});
const connectMongoDB = async () => {
  try {
    let MongoURI: any =
      "mongodb+srv://arunprakash:Today01!@socialapp.jruieby.mongodb.net/";
    // Connect to MongoDB
    await mongoose.connect(MongoURI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectMongoDB;
