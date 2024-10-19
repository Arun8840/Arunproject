"use client"
import { change_darkmode } from "@/Store/features/pageSlice"
import useGetMenus from "@/data/Menus"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { useDispatch } from "react-redux"

function BottomToolbar() {
  const { NavMenus } = useGetMenus()
  const [isDark, setDark] = useState(false)
  const currentPath: any = usePathname()

  const dispatch = useDispatch()
  const handleChange_Darkmode = () => {
    setDark(!isDark)
    dispatch(change_darkmode(!isDark))
  }

  return (
    <div className="fixed bottom-5 flex justify-center gap-2 w-full z-50">
      <div
        id="container_ref"
        className="bg-black/20 backdrop-blur-sm group rounded-3xl p-1 overflow-hidden shadow-lg"
      >
        <div className="flex justify-center gap-2 items-center">
          {NavMenus?.map((links) => {
            const isActive = links?.path === currentPath

            // Ensure there's a unique key for each item in the list
            return links?.name !== "Dark mode" ? (
              <Link
                key={`${links?.name}-${links?.path}`} // Use a combination of name and path for unique keys
                href={links?.path ?? ""}
                title={links?.name}
                className={`p-2 text-white relative ${
                  isActive && "bg-lime-400 rounded-full"
                }`}
              >
                {links?.icon}
              </Link>
            ) : (
              <button
                key={`${links?.name}-darkmode`} // Ensure a unique key for the Dark mode button
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
