import useGetAnimations from "@/Utility/animations/Ripple"
import useGetMenus from "@/data/Menus"
import React, { useState } from "react"
import ProfileImage from "../images/profile.jpeg"
import { DarkIcon, LightIcon } from "@/Utility/icons/icons"
function NavHeader() {
  const logo: any = ProfileImage?.src
  // todo items
  const { NavMenus } = useGetMenus()
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    !darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark")
  }
  return (
    <div
      className={`p-1 flex items-center justify-between text-sm fixed top-1 bg-white/40 dark:bg-transparent backdrop-blur-sm w-11/12 rounded-full z-50`}
    >
      {/* logo */}
      <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
        <img src={logo} alt="logo" className="w-full h-full object-cover" />
      </div>

      {/* list items */}
      <ul className="px-5 flex items-center gap-4  dark:text-white">
        {NavMenus &&
          NavMenus.map((items, index) => {
            return (
              <li key={index} className="cursor-pointer">
                {items.name}
              </li>
            )
          })}
        <li>
          {!darkMode ? (
            <button
              onClick={toggleDarkMode}
              className="p-1 grid place-items-center cursor-pointer bg-[#232323] text-white rounded-full"
            >
              <DarkIcon width={20} />
            </button>
          ) : (
            <button
              onClick={toggleDarkMode}
              className="p-1 grid place-items-center cursor-pointer bg-[#FF8400] text-white rounded-full"
            >
              <LightIcon width={20} />
            </button>
          )}
        </li>
      </ul>
    </div>
  )
}

export default NavHeader
