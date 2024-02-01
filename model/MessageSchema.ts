import mongoose, { Schema } from "mongoose"

const messageSchema = new Schema(
  {
    message: {
      type: String,
      require: true,
    },
    users: Array,
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
  },
  {
    timestamps: true,
  }
)
const MessageSchema =
  mongoose.models?.MessageSchema ||
  mongoose.model("MessageSchema", messageSchema)
export default MessageSchema
