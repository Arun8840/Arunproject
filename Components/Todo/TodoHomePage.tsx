import React from "react"
import TodoCreate from "./TodoCreate"
import TodoList from "./TodoList"
import TodoComplete from "./TodoComplete"
import useGetFonts from "@/font/fonts"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { BacktoPage } from "@/Utility/icons/icons"
import { useRouter } from "next/navigation"

function TodoHomePage() {
  const { TodoFonts } = useGetFonts()
  const router = useRouter()
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex gap-1 p-2 w-full h-full bg-[#f7f8fa]">
        <div className="bg-white w-[50px]">
          <ul className="p-1">
            <li className="rounded-lg bg-[#5b33d9] text-white">
              <button
                onClick={() => router.back()}
                className=" w-full flex justify-center py-3 rounded"
              >
                <BacktoPage width={15} />
              </button>
            </li>
          </ul>
        </div>
        <div
          className={`w-full h-full bg-[#f7f8fa] grid grid-cols-12 gap-2 ${TodoFonts.className} divide-x`}
        >
          <TodoCreate />
          <TodoList />
          <TodoComplete />
        </div>
      </div>
    </DndProvider>
  )
}

export default TodoHomePage
