import { TodoStore } from "@/Store/TodoStore"
import { TodoTypes } from "@/model/TodoSchema"
import axios from "axios"

const todoAppServices = () => {
  const load_list= TodoStore(
    (state: any) => state.load_all_tasks
  )


  // todo load all todo data
  const loadAll_Todo = async () => {
    let response = await axios.get("http://localhost:3000/api/todo")
    if (response) {
      load_list(response?.data?.data)
      // return response?.data?.data
    }
  }

//   * create new task
const create_Todo = async (taskData:TodoTypes) => {
    let response = await axios.post("http://localhost:3000/api/todo/createTask",taskData)
    if (response) {
      return response?.data?.data
    }
  }

  const delete_Todo = async (deleteData:string) => {
    let response = await axios.post("http://localhost:3000/api/todo/task",deleteData)
    if (response) {
      return response?.data?.data
    }
  }
  return {
    loadAll_Todo,
  create_Todo,
  delete_Todo
  }
}

export default todoAppServices
