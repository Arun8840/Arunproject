import useGetFonts from "@/font/fonts"
import Spline from "@splinetool/react-spline"
import gsap, { Power0, Power3 } from "gsap"
import _ScrollTrigger from "gsap/ScrollTrigger"
import React, { useEffect, useRef } from "react"
import bannerImage from "../images/aboutbanner.png"
import { Content } from "next/font/google"
function AboutMe() {
  let aboutBanner: any = bannerImage.src
  const { HeaderFont, ContentFont } = useGetFonts()
  let mainContainer = useRef(null)
  let Circle = useRef(null)
  let messagecontainer = useRef(null)
  let messageContent = useRef(null)
  gsap.registerPlugin(_ScrollTrigger)
  let tl = gsap.timeline({})
  useEffect(() => {
    let animation1 = gsap.to(Circle.current, {
      scale: 100,
      delay: 1,
      duration: 1,
      ease: Power3.easeInOut,
      scrollTrigger: {
        trigger: mainContainer.current,
        start: "top bottom",
        end: "bottom bottom",
      },
      onComplete: () => {
        tl.to(messagecontainer.current, {
          opacity: 1,
          scale: 1,
          transformOrigin: "left",
          duration: 1,
          ease: "bounce.out",
        })
      },
    })

    return () => {
      animation1.kill()
    }
  }, [tl])
  return (
    <div
      ref={mainContainer}
      className={`w-full py-[5rem] items-center bg-[#f3f5f7] overflow-hidden relative z-0 group`}
    >
      {/* //todo background object */}
      <div
        ref={Circle}
        className="w-[50px] h-[50px] bg-[#101010] absolute left-1/2 top-1/2 -z-[1] rounded-full scale-0"
      ></div>
      <div className="container mx-auto z-[2] text-[#f3f5f7] mix-blend-difference">
        <h1
          className={` text-[4rem] ${HeaderFont.className} group-hover:text-lime-400  transition-colors duration-300`}
        >
          About me <span className="group-hover:text-yellow-500">:)</span>
        </h1>
        <div className="container grid grid-cols-2 place-items-center  gap-10">
          <div className="w-full h-full relative">
            <img
              src={aboutBanner}
              alt="banner logo"
              className="w-full h-full"
            />
            <div
              ref={messagecontainer}
              className="absolute top-[10%] right-[11rem] bg-lime-300 w-fit p-2 rounded-t-lg rounded-r-lg opacity-0 scale-0"
            >
              <h1 className={`text-[#131727] ${ContentFont.className}`}>
                Hi! Nice to see you ....
              </h1>
            </div>
          </div>
          <div className="w-full">
            <h1 className={`text-[4rem] tracking-wide ${HeaderFont.className}`}>
              I'm Arun.
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
