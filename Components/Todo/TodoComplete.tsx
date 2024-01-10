import { TodoStore } from "@/Store/TodoStore"
import DropFunction from "@/Utility/Drag&Drop/Drop"
import React from "react"
import List from "./components/List"
import { Check } from "@/Utility/icons/icons"
interface todoTypes {
  title: string
  content: string
  date: string
  complete: boolean
  time: string
  priority: boolean
}
function TodoComplete() {
  // todo drop function
  const { isover, drop } = DropFunction({ action: "add" })
  const CompletedTasks: todoTypes[] = TodoStore(
    (state: any) => state.CompletedTodoTask
  )
  return (
    <div className="col-span-5 rounded flex flex-col gap-1">
      <div className="tracking-wider font-bold bg-white text-[#37dbb7] p-3 rounded flex items-center gap-2">
        <button className="text-white bg-[#37dbb7] rounded-full w-[20px] h-[20px] grid place-items-center">
          <Check width={18} className="inline" />
        </button>
        <h1> Tasks Completed</h1>
      </div>
      <div
        ref={drop}
        className={`${
          CompletedTasks?.length === 0 && "border border-dashed"
        } min-h-[500px] max-h-[90vh] overflow-y-auto pr-2`}
      >
        {CompletedTasks?.length > 0 ? (
          <ul className="flex flex-col gap-1">
            {CompletedTasks?.length > 0 &&
              CompletedTasks?.map((items, index: number) => {
                return <List items={items} index={index} isCompleted={true} />
              })}
          </ul>
        ) : (
          <div className="bg-white w-full h-full grid place-items-center">
            <h1 className="tracking-wider text-center">
              Drag and drop <br /> completed task here !!
            </h1>
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoComplete
