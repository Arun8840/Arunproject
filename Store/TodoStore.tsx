import useGetTodoData from "@/data/TodoData"
import { create } from "zustand"

const { TodoItems } = useGetTodoData()
export const TodoStore = create((set, get: any) => ({
  TodocreatedData: TodoItems,
  CompletedTodoTask: [],
  AddTask: (newTask:any) =>
  set((state:any) => ({
    ...state,
    CompletedTodoTask: [...state.CompletedTodoTask, newTask],
  })),
}))
