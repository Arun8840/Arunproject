import React from "react"
import TodoCreate from "./TodoCreate"
import TodoList from "./TodoList"
import TodoComplete from "./TodoComplete"
import useGetFonts from "@/font/fonts"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

function TodoHomePage() {
  const { TodoFonts } = useGetFonts()
  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className={`w-full h-full bg-[#f7f8fa] grid grid-cols-12 gap-2 p-2 ${TodoFonts.className} divide-x`}
      >
        <TodoCreate />
        <TodoList />
        <TodoComplete />
      </div>
    </DndProvider>
  )
}

export default TodoHomePage
