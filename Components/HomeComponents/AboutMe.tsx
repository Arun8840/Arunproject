import useGetFonts from "@/font/fonts"
import gsap, { Power0, Power3 } from "gsap"
import _ScrollTrigger from "gsap/ScrollTrigger"
import React, { useEffect, useRef } from "react"
import bannerImage from "../images/profile.png"
import Image from "next/image"
function AboutMe() {
  const { HeaderFont, ContentFont } = useGetFonts()

  return (
    <div
      className={`w-full  py-[5rem] items-center bg-[#101010] overflow-hidden relative z-0 group`}
    >
  
      <div className="container mx-auto z-[2] text-[#f3f5f7] mix-blend-difference">
        <h1
          className={`lg:text-[4rem] p-2 ${HeaderFont.className} group-hover:text-lime-400  transition-colors duration-300`}
        >
          About me <span className="group-hover:text-yellow-500">:)</span>
        </h1>
        <div className="container min-h-[80vh] flex justify-center  items-center gap-10">
          <div className="w-full lg:w-1/2 p-2">
            <h1 className={`text-[4rem] tracking-wide ${HeaderFont.className}`}>
              Im Arun.
            </h1>
            <p
              className={`capitalize tracking-wider leading-[2rem] ${ContentFont.className}`}
            >
              I am an enthusiastic Frontend Developer with a strong penchant for
              creating elegant and responsive user interfaces. My journey in web
              development began ZettaStack, which has sharpened my skills and
              passion for creating exceptional web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
