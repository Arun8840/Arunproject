"use client"
import React from "react"
import LandingPage from "./HomeComponents/LandingPage"
import OptionButtons from "./HomeComponents/OptionButtons"

function Homepage() {

  return (
    <div className={`w-full relative z-0 `}>
      <OptionButtons />
      <LandingPage />
     
    </div>
  )
}

export default Homepage
