import { CalendarIcon } from "@/Utility/icons/icons"
import React from "react"

function TodoCreate() {
  return (
    <div className="col-span-2 p-1 flex flex-col gap-1 bg-white rounded">
      <div className="tracking-wider text-[#5b33d9] bg-[#f6f8fa] font-semibold p-2 rounded flex items-center justify-between">
        <h1>Today</h1>
        <CalendarIcon width={20} />
      </div>
      <input
        type="text"
        className="border w-full p-2 rounded outline-none"
        placeholder="Title"
      />
      <textarea
        className="border w-full p-2 rounded outline-none"
        placeholder="Description"
      />
      <button className="tracking-wider text-center bg-[#101010] text-[#f6f8fa] font-medium p-2 rounded">
        Create
      </button>
    </div>
  )
}

export default TodoCreate
