import React from "react"
import TodoCreate from "./TodoCreate"
import TodoList from "./TodoList"
import TodoComplete from "./TodoComplete"
import useGetFonts from "@/font/fonts"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { AddIcon, BacktoPage } from "@/Utility/icons/icons"
import { useRouter } from "next/navigation"
import gsap, { Power3 } from "gsap"
import CreateDrawer from "@/Utility/Uicomponents/Drawer/CreateDrawer"

function TodoHomePage() {
  const { TodoFonts } = useGetFonts()
  const router = useRouter()

  const handleOpenDrawer = () => {
    let tl = gsap.timeline({ paused: false })

    tl.to("#test", {
      opacity: 1,
      display: "flex",
      duration: 0.2,
      ease: Power3.easeInOut,
    })

    // tl.to("#drawerForm", {
    //   opacity: 1,
    //   y: 0,
    //   duration: 0.2,
    //   ease: Power3.easeInOut,
    // })
  }
  const handleCloseDrawer = () => {
    let tl = gsap.timeline({ paused: false })
    // tl.to("#drawerForm", {
    //   opacity: 0,
    //   y: "100%",
    //   duration: 0.2,
    //   ease: Power3.easeInOut,
    // })
    tl.to("#test", {
      opacity: 0,
      display: "none",
      duration: 0.2,
      ease: Power3.easeInOut,
    })
  }
  return (
    <DndProvider backend={HTML5Backend}>
     <CreateDrawer handleClose={handleCloseDrawer}>
     <div className="flex gap-1 p-1 w-full h-full bg-gradient-to-br from-[#D20062] via-[#C4E4FF] to-[#D6589F]">
        <div className="bg-white/50 backdrop-blur-sm rounded-lg w-[50px]">
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
          className={`w-full h-full grid grid-cols-12 gap-2 ${TodoFonts.className} divide-x`}
        >
          {/* <TodoCreate /> */}
          <TodoList />
          <TodoComplete />
        </div>

        {/* create new task button */}
        <button onClick={handleOpenDrawer} title="Create task" className="bg-[#232323] text-white rounded-full p-3 fixed right-10 bottom-10"><AddIcon width={20}/></button>
      </div>
     </CreateDrawer>
    </DndProvider>
  )
}

export default TodoHomePage
