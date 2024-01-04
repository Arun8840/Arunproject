import { DownArrow } from "@/Utility/icons/icons"
import useGetFonts from "@/font/fonts"
import gsap, { Power4 } from "gsap"
import { useEffect, useRef } from "react"

function LandingPage() {
  const { HeaderFont } = useGetFonts()
  let mainframe = useRef(null)
  let leftline = useRef(null)
  let rightline = useRef(null)
  let outerCircle = useRef(null)
  let innerCircle = useRef(null)
  let header = useRef(null)
  let subheader = useRef(null)

  useEffect(() => {
    let tl = gsap.timeline({})
    tl.to([leftline.current, rightline.current], {
      backgroundColor: "#101010",
      flex: 1,
      duration: 1,
    })
    tl.to(outerCircle.current, { scale: 1, duration: 0.5, ease: "bounce.out" })
    tl.to(innerCircle.current, { scale: 1, duration: 0.7, ease: "bounce.out" })
    tl.to([leftline.current, rightline.current], {
      opacity: 0,
      display: "none",
      duration: 1,
    })
    tl.to(innerCircle.current, { scale: 0, duration: 0.7, ease: Power4.easeIn })
    tl.to(outerCircle.current, {
      backgroundColor: "#101010",
      duration: 0.2,
      ease: Power4.easeIn,
    })
    tl.to(outerCircle.current, {
      scale: 100,
      opacity: 0,
      border: "none",
      display: "none",
      duration: 1,
      ease: Power4.easeIn,
    })
    tl.to(mainframe.current, { opacity: 1, display: "block" })
    tl.to(header.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: Power4.easeInOut,
    })
    tl.to(subheader.current, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: Power4.easeInOut,
    })
  }, [])

  return (
    <div
      className={`w-full lg:h-[100vh] sm:py-[5rem] flex flex-col justify-center gap-16  bg-[#f3f5f7] overflow-hidden`}
    >
      <div ref={mainframe} className="container mx-auto opacity-0 hidden">
        <div className={`${HeaderFont.className} flex justify-center gap-1`}>
          <h1
            ref={header}
            className={`text-[3rem] py-5 lg:text-[6rem] leading-tight text-center tracking-wider  origin-top  capitalize opacity-0 text-[#101010] translate-y-5`}
          >
            Frontend Developer
          </h1>
        </div>
        <p
          ref={subheader}
          className="text-center font-semibold text-lg tracking-wider text-slate-700 py-5 translate-y-5 opacity-0"
        >
          I design and code beautifully simple things, and I love what I do.
        </p>
        {/* <button className="bg-[#101010]"><DownArrow width={15} /></button> */}
      </div>
      <div className="flex justify-center items-center container gap-1 mx-auto">
        <div ref={leftline} className="h-[1px] "></div>
        <div
          ref={outerCircle}
          className="w-[80px] h-[80px] scale-0 border border-[#101010] rounded-full grid place-items-center"
        >
          <div
            ref={innerCircle}
            className="bg-[#101010] rounded-full scale-0 p-2 w-[30px] h-[30px]"
          ></div>
        </div>
        <div ref={rightline} className="h-[1px] "></div>
      </div>
    </div>
  )
}

export default LandingPage
