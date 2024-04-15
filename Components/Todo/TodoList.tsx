import { TodoStore } from "@/Store/TodoStore"
import React, { useCallback, useEffect } from "react"
import List from "./components/List"
import useSWR from "swr"
import todoAppServices from "@/service/TodoService"
import { MenuIcon } from "@/Utility/icons/icons"
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
 const {loadAll_Todo}=todoAppServices()
  const {isLoading}=useSWR("load-all-todo-tasks",loadAll_Todo,{revalidateOnFocus:false})
  const ListItems = TodoLists.filter((items) => items?.complete !== true)
  return (
    <div className="col-span-6 bg-white/50 backdrop-blur-sm max-h-[99vh] overflow-y-auto p-1 rounded-lg flex flex-col gap-1">
      <div className="flex items-center gap-2 bg-[#D20062] rounded p-3">
      <button className="bg-white rounded-full text-[#D20062]"><MenuIcon width={20} /></button>
        <h1 className="tracking-wider font-bold text-white sticky top-0 z-10">
        Tasks
      </h1>
      </div>
      <ul className="flex flex-col gap-1">
        {isLoading ?"Loading...":ListItems?.map((items, index: number) => {
          return <List items={items} key={index} isCompleted={false} />
        })}
      </ul>
    </div>
  )
}

export default TodoList
