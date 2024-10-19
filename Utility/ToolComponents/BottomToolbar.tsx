"use client"
import { change_darkmode } from "@/Store/features/pageSlice"
import useGetMenus from "@/data/Menus"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useRef, useState } from "react"
import { useDispatch } from "react-redux"

gsap.registerPlugin(useGSAP)

function BottomToolbar() {
  const { NavMenus } = useGetMenus()
  const [isDark, setDark] = useState(false)
  const [trigger, setTrigger] = useState(false)
  const currentPath: any = usePathname()
  const navContainer: any = useRef(null)
  const navlist: any = useRef(null)
  const dispatch = useDispatch()
  const handleChange_Darkmode = () => {
    setDark(!isDark)
    dispatch(change_darkmode(!isDark))
  }

  let tl = gsap.timeline({ paused: true })

  return (
    <div className="fixed top-2 flex justify-center gap-2 w-full z-50">
      <div
        id="container_ref"
        className="bg-black/20 backdrop-blur-sm group rounded-3xl p-1 overflow-hidden shadow-lg"
      >
        <div className="flex justify-center gap-2 items-center">
          {NavMenus?.map((links) => {
            const isActive = links?.path === currentPath
            return links?.name !== "Dark mode" ? (
              <Link
                key={links?.name}
                href={links?.path ?? ""}
                title={links?.name}
                className={`p-2 text-white  relative ${
                  isActive && "  bg-lime-400 rounded-full "
                }`}
                type="button"
              >
                {links?.icon}
              </Link>
            ) : (
              <button
                onClick={handleChange_Darkmode}
                title={links?.name}
                className={`p-2 rounded-full text-white`}
                type="button"
              >
                {links?.icon}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BottomToolbar
