import React from "react"
import { FaBolt, FaHome, FaUser } from "react-icons/fa"
import { MdDarkMode } from "react-icons/md"

interface NavTypes {
  name: string
  path: string | null
  icon: React.ReactNode
}

function useGetMenus() {
  let NavMenus: NavTypes[] = [
    {
      name: "Home",
      path: "/portfolio/Home",
      icon: <FaHome size={18} />,
    },
    {
      name: "About",
      path: "/portfolio/About",
      icon: <FaUser size={18} />,
    },
    {
      name: "Projects",
      path: "/portfolio/Projects",
      icon: <FaBolt size={18} />,
    },
    {
      name: "Dark mode",
      path: null,
      icon: <MdDarkMode size={18} />,
    },
  ]

  return { NavMenus }
}

export default useGetMenus
