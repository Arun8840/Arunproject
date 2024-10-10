import BottomToolbar from "@/Utility/ToolComponents/BottomToolbar"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React from "react"

gsap.registerPlugin(useGSAP)
function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full min-h-screen bg-black">
      {children}
      <BottomToolbar />
    </section>
  )
}

export default layout
