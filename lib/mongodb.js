import mongoose from "mongoose"
const express = require("express")
const cors = require("cors")
const app = express()
const axios = require("axios")
app.use(cors({ origin: "https://arunproject.vercel.app/projects/Cloningapp" }))
// Set default headers for all requests
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("mongodb connected")
  } catch (error) {
    console.log(error)
  }
}

export default connectMongoDB
