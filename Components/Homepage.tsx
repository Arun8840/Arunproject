"use client"
import React from "react"
import LandingPage from "./HomeComponents/LandingPage"
import AboutMe from "./HomeComponents/AboutMe"
import Skills from "./knowledgeComponents/Skills"
import Projects from "./knowledgeComponents/Projects"
import OptionButtons from "./HomeComponents/OptionButtons"

function Homepage() {
  return (
    <div className={`w-full relative z-0 divide-y`}>
      <OptionButtons />
      <LandingPage />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  )
}

export default Homepage
