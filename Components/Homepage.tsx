"use client"
import React from "react"
import LandingPage from "./HomeComponents/LandingPage"
import Knoledge from "./HomeComponents/Knowledge"
import ProjectPage from "./HomeComponents/ProjectPage"
import ContactPage from "./HomeComponents/ContactPage"

function Homepage() {
  return (
    <div className={`w-full dark:bg-black relative z-0 `}>
      <LandingPage />
      <Knoledge />
      <ProjectPage />
      <ContactPage />
    </div>
  )
}

export default Homepage
