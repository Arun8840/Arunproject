import { SocialappStore } from "@/Store/SocialappStore"
import gsap, { Power4 } from "gsap"
import React, { memo, useEffect, useRef } from "react"

function Notification() {
  let containerRef = useRef(null)
  const message = SocialappStore((state: any) => state.notificationMessage)
  const clearmessage = SocialappStore((state: any) => state.clearNotification)
  useEffect(() => {
    let animate = gsap.timeline({})
    animate.to(containerRef.current, {
      display: "grid",
      opacity: 1,
      ease: Power4.easeInOut,
      yoyo: true,
      duration: 0.8,
    })
    animate.to(containerRef.current, {
      display: "none",
      opacity: 0,
      ease: Power4.easeInOut,
      yoyo: true,
      delay: 1,
      duration: 0.8,
    })

    let timer: any
    if (message) {
      timer = setTimeout(() => {
        clearmessage()
      }, 3000)
    }

    return () => clearTimeout(timer)
  }, [message])

  // todo success message
  const Success = ["Successfully "]
  const Error = ["Failed"]
  return (
    message && (
      <div
        ref={containerRef}
        className={`fixed tracking-wide capitalize opacity-0 top-5 right-1/2 translate-x-1/2 border rounded  min-w-[300px] p-2  shadow-lg place-items-center ${
          Success.some((keywords) => message.match(keywords)) &&
          "bg-green-700/20 backdrop-blur-sm text-green-500 border border-green-700"
        } ${
          Error.some((keywords) => message.match(keywords)) &&
          "bg-red-700/20 backdrop-blur-sm text-red-500 border border-red-700"
        } `}
      >
        <h1 className="text-sm">{message}</h1>
      </div>
    )
  )
}

export default Notification
