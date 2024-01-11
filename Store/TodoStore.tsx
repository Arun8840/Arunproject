import useGetTodoData from "@/data/TodoData"
import { create } from "zustand"

const { TodoItems } = useGetTodoData()
export const TodoStore = create((set, get: any) => ({
  TodocreatedData: TodoItems,
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
