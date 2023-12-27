import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { SplitText } from "gsap/all"
import { Merriweather } from "next/font/google"
import { useEffect, useRef } from "react"
const HeaderFont = Merriweather({
  weight: "700",
  subsets: ["latin"],
  display: "block",
})
function LandingPage() {
  let leftline = useRef(null)
  let rightline = useRef(null)
  let outerCircle = useRef(null)
  let innerCircle = useRef(null)
  let header = useRef(null)

  let tl = gsap.timeline({})

  useEffect(() => {
    gsap.registerPlugin(SplitText)
    const leftlineAnimation = gsap.to(leftline.current, {
      backgroundColor: "#131727",
      transformOrigin: "right",
      flex: 1,
      duration: 2,
    })
    const rightlineAnimation = gsap.to(rightline.current, {
      backgroundColor: "#131727",
      transformOrigin: "left",
      flex: 1,
      duration: 2,
    })
    tl.to(outerCircle.current, { scale: 1, duration: 0.5, ease: "bounce.out" })
    tl.to(innerCircle.current, { scale: 1, duration: 0.7, ease: "bounce.out" })
    tl.to(header.current, {
      opacity: 1,
      duration: 0.7,
    })
    return () => {
      leftlineAnimation.kill()
      rightlineAnimation.kill()
    }
  }, [])

  return (
    <div
      className={`w-full h-[100vh] flex flex-col justify-center gap-16  bg-[#f3f5f7]`}
    >
      <div className="container mx-auto">
        <div className={`${HeaderFont.className} flex justify-center gap-1`}>
          <h1
            ref={header}
            className={`text-[3rem] py-5 lg:text-[6rem] leading-tight text-center tracking-wider  origin-top  capitalize opacity-0 text-[#131727]`}
          >
            Frontend Developer
          </h1>
        </div>
        <p className="text-center font-semibold text-lg tracking-wider text-slate-700 py-5">
          I design and code beautifully simple things, and I love what I do.
        </p>
      </div>
      <div className="flex justify-center items-center container gap-1 mx-auto">
        <div ref={leftline} className="h-[1px] "></div>
        <div
          ref={outerCircle}
          className="w-[80px] h-[80px] scale-0 bg-[#131727] rounded-full grid place-items-center"
        >
          <div
            ref={innerCircle}
            className="bg-white rounded-full scale-0 p-2 w-[30px] h-[30px]"
          ></div>
        </div>
        <div ref={rightline} className="h-[1px] "></div>
      </div>
    </div>
  )
}

export default LandingPage
