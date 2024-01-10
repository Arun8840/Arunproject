import { CalendarIcon, TimeIcon, Trash } from "@/Utility/icons/icons"
import React from "react"
import { useDrag } from "react-dnd"
interface propsTypes {
  items: {
    title: string
    content: string
    date: string
    complete: boolean
    time: string
    priority: boolean
  }
  index: number
  isCompleted: boolean
}
function List({ items, index, isCompleted }: propsTypes) {
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
  return (
    <li
      ref={isCompleted ? null : drag}
      key={index}
      className={`bg-white ${
        isDragging && "opacity-0"
      } rounded flex divide-x divide-dashed`}
    >
      <div
        className={`${
          items?.priority
            ? "bg-[#5b33d9]/20 text-[#5b33d9]"
            : "bg-white text-gray-500"
        } min-h-[100px]  min-w-[100px] rounded-l-lg flex flex-col justify-between items-center`}
      >
        <div className="flex-1 grid place-items-center">
          <input
            checked={items?.priority}
            type="radio"
            className={`w-6 h-6 ${items?.priority && "accent-[#5b33d9]"}`}
          />
        </div>
        <span className="flex items-center gap-2 text-sm">
          <TimeIcon width={15} className="inline" />
          05:34
        </span>
      </div>
      <div className="p-2 rounded-r-lg flex-1 flex flex-col justify-between">
        <div className="w-full">
          <div className="flex justify-between items-center">
            <h1 className="tracking-wide capitalize font-semibold text-gray-600">
              {index + 1}.{items?.title}
            </h1>
            <button>
              <Trash width={20} />
            </button>
          </div>
          <p className="indent-4 text-gray-500 tracking-wide text-sm line-clamp-2">
            {items?.content}
          </p>
        </div>
        <div className="flex gap-x-5 justify-end text-gray-600 ">
          <span className="flex items-center gap-2 text-sm">
            2024/1/3
            <CalendarIcon width={20} className="inline text-[#5b33d9]" />
          </span>
        </div>
      </div>
    </li>
  )
}

export default List
