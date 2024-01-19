import { TodoStore } from "@/Store/TodoStore"
import React from "react"
import List from "./components/List"
interface todoTypes {
  id: string | number
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
  const ListItems = TodoLists.filter((items) => items?.complete !== true)
  return (
    <div className="col-span-5 max-h-[97vh] overflow-y-auto px-1 rounded flex flex-col gap-1">
      <h1 className="tracking-wider font-bold text-white bg-[#f70] p-3 rounded sticky top-0 z-10">
        Tasks
      </h1>
      <ul className="flex flex-col gap-2">
        {ListItems?.map((items, index: number) => {
          return <List items={items} key={index} isCompleted={false} />
        })}
      </ul>
    </div>
  )
}

export default TodoList
