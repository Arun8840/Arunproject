"use client"
import React from "react"
import LandingPage from "./HomeComponents/LandingPage"
import AboutMe from "./HomeComponents/AboutMe"
import OptionButtons from "./HomeComponents/OptionButtons"

function Homepage() {

  return (
    <div className={`w-full relative z-0 `}>
      <OptionButtons />
      <LandingPage />
      {/* <AboutMe /> */}
      {/* <Skills /> */}
      {/* <Projects /> */}
    </div>
  )
}

export default Homepage
