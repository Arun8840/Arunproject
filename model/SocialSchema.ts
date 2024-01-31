import mongoose, { Schema } from "mongoose"

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
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
const Users = mongoose.models.Users || mongoose.model("Users", userSchema)
export default Users
