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
        <div className="dark:text-white">
          <h1 className={`text-[5rem] font-bold ${HeaderFont?.className}`}>
            <SparklesText text="Hi I'm Arun" />
          </h1>
          <h1 className={`text-[5rem] font-bold ${HeaderFont?.className}`}>
            Creative & <br /> Frontend Developer
          </h1>
        </div>
      </div>
    </>
  )
}

export default LandingPage
