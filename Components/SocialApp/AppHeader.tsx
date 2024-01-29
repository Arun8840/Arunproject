import { DarkIcon } from "@/Utility/icons/icons"
import React from "react"

function AppHeader() {
  
  return (
    <nav className="text-white p-2 col-span-12 flex gap-2">
      <ul className="flex items-center gap-1 tracking-wide text-sm capitalize p-1">
        <li className="p-1 rounded-full bg-pink-600">messages</li>
        <li className="p-1 rounded-full ">dashboard</li>
        <li className="p-1 rounded-full ">status</li>
      </ul>
      <input
        type="text"
        placeholder="search..."
        className="border border-gray-600 border-opacity-50 rounded-full bg-inherit outline-none p-2 w-full"
      />
      <div className="flex justify-end items-center gap-x-2">
        <button className="border rounded-full border-gray-600 border-opacity-50 p-2 text-sm tracking-wide">
          Logout
        </button>
        <button className="border rounded-full border-gray-600 border-opacity-50 p-2">
          <DarkIcon width={20} className="text-white" />
        </button>

        <button className="border rounded-full border-gray-600 border-opacity-50 w-10 h-10 text-sm tracking-wide">
          a
        </button>
      </div>
    </nav>
  )
}

export default AppHeader
