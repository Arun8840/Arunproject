"use client"
import useGetMenus from "@/data/Menus"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useRef, useState } from "react"

gsap.registerPlugin(useGSAP)
function BottomToolbar() {
  const { NavMenus } = useGetMenus()
  const [isDark, setDark] = useState(false)
  const currentPath: any = usePathname()

  const handleChange_Darkmode = () => {
    setDark(!isDark)
  }

  useGSAP(() => {
    gsap.fromTo(
      "#container_ref",
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        delay: 2,
        opacity: 1,
        duration: 0.7,
      }
    )
  })
  return (
    <div
      id="container_ref"
      className="bg-black/20 p-2 rounded-lg shadow-lg fixed bottom-10 flex items-center gap-2 left-[45%]"
    >
      {NavMenus?.length > 0 &&
        NavMenus?.map((items, index) => {
          const isActive = items?.path === currentPath
          return items?.path && items?.name !== "Dark mode" ? (
            <Link key={index} href={items?.path ?? ""}>
              <button
                className={`rounded p-2 ${
                  isActive ? "bg-white" : "text-white"
                }`}
                title={items?.name}
              >
                {items?.icon}
              </button>
            </Link>
          ) : (
            <button
              key={index}
              onClick={handleChange_Darkmode}
              className={`rounded p-2  text-white`}
              title={items?.name}
            >
              {isDark ? (
                items?.icon
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          )
        })}
    </div>
  )
}

export default BottomToolbar
