import mongoose, { Schema } from "mongoose"

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isPinned: {
      type: Boolean,
      default: false,
    },
    isMutted: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: String,
    description: String,
    theme: {
      themeName: {
        type: String,
        default: "default",
      },
      primary: {
        type: String,
        default: "#ffffff",
      },
      secondary: {
        type: String,
        default: "#000000",
      },
    },
  },
  {
    timestamps: true,
  }
)
const Users = mongoose.models?.Users || mongoose.model("Users", userSchema)
export default Users
