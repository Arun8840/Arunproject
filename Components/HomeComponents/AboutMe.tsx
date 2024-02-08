import useGetFonts from "@/font/fonts"
import _ScrollTrigger from "gsap/ScrollTrigger"
import React from "react"
import bannerImage from "../images/5e5344373373094088f94ebe_how-to.gif"
import Image from "next/image"
function AboutMe() {
  const { HeaderFont, ContentFont } = useGetFonts()
  const aboutImage: any = bannerImage.src
  return (
    <div
      className={`w-full lg:min-h-screen lg:py-[5rem] items-center bg-[#101010] overflow-hidden relative z-0 group`}
    >
      <div className="container mx-auto z-[2] text-[#f3f5f7] mix-blend-difference">
        <div className="container grid lg:grid-cols-2 place-items-center">
          <div className="w-full  p-2">
            <h1
              className={`lg:text-[4rem] ${HeaderFont.className} transition-colors duration-300`}
            >
              About me:
            </h1>
            <h1
              className={`text-[4rem] tracking-wide ${ContentFont.className}`}
            >
              Im Arun,
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
          {/* //todo about image */}
          <div className="w-full h-full max-h-[700px]">
            <img
              src={aboutImage}
              alt="about image"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
