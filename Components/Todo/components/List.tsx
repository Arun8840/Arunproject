import { TodoStore } from "@/Store/TodoStore"
import {
  CalendarIcon,
  PriorityIcon,
  TimeIcon,
  Trash,
} from "@/Utility/icons/icons"
import React, { memo, useState } from "react"
import { useDrag } from "react-dnd"
interface propsTypes {
  items: {
    id: number | string
    title: string
    content: string
    date: string
    complete: boolean
    time: string
    priority: boolean
  }
  key: number
  isCompleted: boolean
}
function List({ items, key, isCompleted }: propsTypes) {
  const AddNewasks = TodoStore((state: any) => state.AddCompletedTask)
  const deleteTask = TodoStore((state: any) => state.RemoveTask)
  // ! Drag Section
  const [{ isDragging }, drag] = useDrag({
    type: "todo",
    item: items,
    collect: (monitor) => {
      const result = {
        isDragging: monitor.isDragging(),
      }
      return result
    },
  })

  const handleMakeComplete = () => {
    AddNewasks(items)
  }

  const handleDeleteTask = () => {
    deleteTask(items)
  }
  return (
    <li
      ref={isCompleted ? null : drag}
      key={key}
      className={`bg-white shadow-lg ${
        isDragging && "opacity-0"
      } rounded flex divide-x divide-dashed divide-[#5b33d9]/50`}
    >
      <div
        className={`${
          items?.priority
            ? "bg-[#5b33d9]/20 text-[#5b33d9]"
            : "bg-white text-gray-500"
        }   min-w-[100px] rounded-l flex flex-col justify-between items-center`}
      >
        <div className="flex-1 grid place-items-center">
          {items?.priority && (
            <PriorityIcon width={20} className="-rotate-45" />
          )}
          <span className="flex items-center gap-2 text-sm">
            <TimeIcon width={15} className="inline" />
            05:34
          </span>
        </div>
      </div>
      <div className="p-2 rounded-r-lg flex-1 flex flex-col justify-between">
        <div className="w-full">
          <div className="flex justify-between items-center">
            <h1 className="tracking-wide font-semibold text-gray-600">
              {items?.title}
            </h1>
            <div className="flex items-center gap-x-3">
              <button title="Delete Task ?" onClick={handleDeleteTask}>
                <Trash width={20} />
              </button>
              {!items?.complete && (
                <input
                title="Complete Task"
                  onChange={handleMakeComplete}
                  checked={items?.complete ? true : false}
                  type="radio"
                  className={`w-5 h-5 accent-[green]`}
                />
              )}
            </div>
          </div>
          <p className="text-gray-500 tracking-wide text-sm line-clamp-2 w-1/2">
            {items?.content}
          </p>
        </div>
        <div className="flex gap-x-5 justify-end text-gray-600 ">
          <span className="flex items-center gap-2 text-sm">
            2024/1/3
            {/* <CalendarIcon width={20} className="inline text-[#5b33d9]" /> */}
          </span>
        </div>
      </div>
    </li>
  )
}

export default memo(List)
