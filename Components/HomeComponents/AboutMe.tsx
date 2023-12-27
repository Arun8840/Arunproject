import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { Merriweather, Poppins } from "next/font/google"
import React, { useEffect, useRef } from "react"
const FontStyle = Merriweather({
  weight: "400",
  subsets: ["latin"],
  display: "block",
})
function AboutMe() {
  return (
    <div
      className={`w-full items-center bg-[#f3f5f7] ${FontStyle.className}`}
    >
      <div className="container mx-auto">
        <h1 className=" text-[#131727] text-[4rem]">About Me</h1>
        <div className="container flex justify-center items-center flex-wrap lg:flex-nowrap py-[5rem] gap-10">
          <div className="w-[400px] h-[400px] bg-zinc-100 border rounded">
            {/* <img src={bannerImage} alt="bannerimage" className="object-contain" /> */}
          </div>
          <div className="w-1/2">
            <h1 className="text-[4rem] text-[#131727] ">I'm Arun.</h1>
            <p className="capitalize tracking-wider leading-[2rem]">
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
