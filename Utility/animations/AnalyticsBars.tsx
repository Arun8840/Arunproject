import gsap, { Power4 } from "gsap"
import React, { useEffect, useRef } from "react"

function AnalyticsBars({ values }: any) {
  const barsRef: any = useRef([])
  useEffect(() => {
    const animation = gsap.to(barsRef.current, {
      width: `${values}`,
      duration: 1.5,
      ease: "bounce.out",
      transformOrigin: "left",
      stagger: 0.5,
      scrollTrigger: {
        trigger: barsRef.current,
        start: "top bottom",
        end: "center bottom",
      },
    })
    return () => {
      animation.kill()
    }
  }, [])
  return (
    <div
      ref={barsRef}
      className="border-[1px] border-dashed border-[#131727]"
    ></div>
  )
}

export default AnalyticsBars
