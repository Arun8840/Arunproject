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
    // tl.to(outerCircle.current, { scale: 1, duration: 0.5, ease: "bounce.out" })
    tl.to(innerCircle.current, { scale: 1, duration: 0.7, ease: "bounce.out" })
    tl.to([leftline.current, rightline.current], {
      backgroundColor: "#9EDE73",
      opacity: 0,
      display: "none",
      duration: 1,
    })
    tl.to(innerCircle.current, { scale: 0, duration: 0.7, ease: Power4.easeIn })
    // tl.to(outerCircle.current, {
    //   background: "linear-gradient(80deg,#49108B,#E26EE5)",
    //   duration: 0.2,
    //   ease: Power4.easeIn,
    // })
    tl.to(innerCircle.current, {
      backgroundColor: "#E48900",
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
    tl.to("#menuButton", {
      scale: 1,
      duration: 0.6,
      ease: "bounce.out",
    })
  }, [])

  return (
    <div
      className={`w-full min-h-screen  flex flex-col justify-center gap-16  bg-[white] overflow-hidden `}
    >
      <div ref={mainframe} className="container mx-auto opacity-0 hidden">
        <div className={`${HeaderFont.className} flex justify-center gap-1`}>
          <h1
            ref={header}
            className={`text-[3rem] py-5 lg:text-[6rem] leading-tight text-center tracking-wider  origin-top  capitalize opacity-0 text-[#E48900] translate-y-5`}
          >
            Frontend Developer
          </h1>
        </div>
        <p
          ref={subheader}
          className="text-center font-semibold text-lg tracking-wider text-stone-800 py-5 translate-y-5 opacity-0"
        >
          I design and code beautifully simple things, and I love what I do.
        </p>
      </div>
      <div className="flex justify-center items-center container gap-1 mx-auto">
        <div ref={leftline} className="h-[1px] bg-[#E48900]"></div>
        <div
          ref={innerCircle}
          className="bg-[#E48900] rounded-full scale-0 p-2 w-[30px] h-[30px]"
        ></div>
        <div ref={rightline} className="h-[1px] bg-[#E48900]"></div>
      </div>
    </div>
  )
}

export default LandingPage
