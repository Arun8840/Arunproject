import useGetFonts from "@/font/fonts"
import React, { useEffect, useState } from "react"
import NavHeader from "./NavHeader"
import SparklesText from "@/Utility/animations/SparklesText"
function LandingPage() {
  // todo getfonts
  const { HeaderFont } = useGetFonts()
  const [darkMode, setDarkMode] = useState(true)

  return (
    <>
      <div className="min-h-screen  grid place-items-center">
        <NavHeader />
        <div className="text-[2rem] lg:text-[5rem]  dark:text-white">
          <h1 className={` ${HeaderFont?.className}`}>Hi I'm Arun</h1>
          <h1 className={` font-bold ${HeaderFont?.className}`}>
            Creative & <br /> Frontend Developer
          </h1>
        </div>
      </div>
    </>
  )
}

export default LandingPage
