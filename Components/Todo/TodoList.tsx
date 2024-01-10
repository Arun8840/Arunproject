import { TodoStore } from "@/Store/TodoStore"
import React from "react"
import List from "./components/List"
interface todoTypes {
  title: string
  content: string
  date: string
  complete: boolean
  time: string
  priority: boolean
}
function TodoList() {
  const TodoLists: todoTypes[] = TodoStore(
    (state: any) => state.TodocreatedData
  )

  return (
    <div className="col-span-5 max-h-[97vh] overflow-y-auto pr-2 rounded flex flex-col gap-1">
      <h1 className="tracking-wider font-bold bg-white text-[#f70] p-3 rounded sticky top-0 z-10">
        Tasks
      </h1>
      <ul className="flex flex-col gap-1">
        {TodoLists?.map((items, index: number) => {
          return <List items={items} index={index} isCompleted={false} />
        })}
      </ul>
    </div>
  )
}

export default TodoList
