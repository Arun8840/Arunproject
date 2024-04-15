import mongoose, { Schema } from "mongoose"

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    isPriority:{
        type:Boolean,
        default:false
    },
    isCompleted:{
      type:Boolean,
      default:false
    }
    
  },
  {
    timestamps: true,
  }
)
const Todo = mongoose.models?.Todo || mongoose.model("Todo", todoSchema)
export default Todo


// todo model
export interface TodoTypes{
  title:string,
  description:string,
  isPriority:boolean
}