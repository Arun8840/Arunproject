"use client"
import React, { useEffect, useRef } from "react"
import { Poppins } from "next/font/google"
import LandingPage from "./HomeComponents/LandingPage"
import AboutMe from "./HomeComponents/AboutMe"
import Skills from "./knowledgeComponents/Skills"
import gsap, { Power1 } from "gsap"
import Projects from "./knowledgeComponents/Projects"
import { RocketIcon } from "@/Utility/icons/icons"

function Homepage() {
  return (
    <div className={`w-full relative z-0 divide-y`}>
      <LandingPage />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  )
}

export default Homepage
