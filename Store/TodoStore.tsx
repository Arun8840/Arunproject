import useGetTodoData from "@/data/TodoData"
import { TodoTypes } from "@/model/TodoSchema"
import todoAppServices from "@/service/TodoService"
import { create } from "zustand"

const { TodoItems } = useGetTodoData()
export const TodoStore = create((set, get: any) => ({
  TodocreatedData: TodoItems,


  // todo load all todo tasks
  load_all_tasks:async (response:TodoTypes)=>{
if (response) {
  set((state:any)=>({
    ...state,
    TodocreatedData:response
  }))
}
  },
  AddCompletedTask: (newTask: any) => {
    set((state: any) => ({
      ...state,
      TodocreatedData: state.TodocreatedData.map((values: any) => {
        if (values?.id === newTask?.id) {
          return { ...values, complete: true }
        }
        return values
      }),
    }))
  },
  AddTask: (newTask: any) => {
    set((state: any) => ({
      ...state,
      TodocreatedData: [...state.TodocreatedData, newTask],
    }))
  },
  RemoveTask: (DelteTaskItems: any) =>
    set((state: any) => ({
      ...state,
      TodocreatedData: state.TodocreatedData.filter(
        (items: any) => items?.id !== DelteTaskItems?.id
      ),
    })),
}))
