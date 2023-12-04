"use client"
import React, { useEffect, useRef } from "react"
import { Poppins } from "next/font/google"
import LandingPage from "./HomeComponents/LandingPage"
import AboutMe from "./HomeComponents/AboutMe"
import Skills from "./knowledgeComponents/Skills"
import gsap, { Power1 } from "gsap"
import Projects from "./knowledgeComponents/Projects"
import { RocketIcon } from "@/Utility/icons/icons"

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  display: "block",
})

function Homepage() {
  let scrollContainer = useRef(null)
  let rocket

  return (
    <div className={`w-full  ${poppins.className} relative z-0`}>
      {/* icon */}
      {/* <button className="absolute top-0 left-0 z-10">
        <RocketIcon width={50} />
      </button> */}

      <LandingPage />
      <AboutMe />
      <Skills />
      <Projects />

    </div>
  )
}

export default Homepage
