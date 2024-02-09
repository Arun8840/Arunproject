import { ProjectDatas } from "@/data/ProjectData"
import useGetFonts from "@/font/fonts"
import { useRouter } from "next/navigation"
import React, { useEffect, useRef } from "react"
import Image from "./Image"
import gsap, { Power0, Power2 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
function Projects() {
  const router = useRouter()
  const { HeaderFont, ContentFont } = useGetFonts()
  const handleRedirect = (path: string) => {
    path && router.push(path)
  }
  let lists: any = useRef(null)
  let timeLine = useRef(null)
  let scrollContainer = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let scrollAnimation = gsap.to(lists.current.querySelectorAll("li"), {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: Power2.easeInOut,
      stagger: 0.4,
      scrollTrigger: {
        trigger: scrollContainer.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    })
    let lineAnimation = gsap.to(timeLine.current, {
      duration: 2,
      scaleY: 1,
      ease: Power2.easeInOut,
      scrollTrigger: {
        trigger: scrollContainer.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    })
    return () => {
      scrollAnimation.kill()
      lineAnimation.kill()
    }
  }, [])
  return (
    <div
      ref={scrollContainer}
      className={`w-full p-2 lg:p-[4rem] bg-[#101010] flex flex-col overflow-hidden`}
    >
      <div className="container mx-auto">
        <h1
          className={`text-3xl lg:text-[4rem] text-white font-extrabold ${HeaderFont.className} pb-10 p-2`}
        >
          Projects
        </h1>

        <ul ref={lists} className="grid lg:grid-cols-2 gap-5">
          {ProjectDatas.map((values, index: number) => {
            return (
              <li
                key={index}
                className={`flex flex-col lg:flex-row gap-2 rounded backdrop-blur-sm bg-[#f3f3f3] relative opacity-0 translate-x-16`}
              >
                <div className="w-1/3 mx-auto lg:mx-0 rounded-l grid place-items-center p-2">
                  <Image alt={values?.title} Url={values?.image} />
                </div>
                <div className="flex-1 flex flex-col gap-4 justify-between p-2">
                  <div>
                    <h1 className="font-semibold tracking-wide text-lg pb-3">
                      {values.title}
                    </h1>
                    <p
                      className={`text-gray-500 text-sm tracking-wide leading-6 ${ContentFont.className} line-clamp-4 lg:line-clamp-none`}
                    >
                      {values.description}
                    </p>
                  </div>
                  <div className="flex justify-end p-1">
                    <button
                      onClick={() => handleRedirect(values?.path)}
                      className="w-full lg:w-fit px-3 py-1 rounded text-white bg-[#131727] group-hover:bg-[#940B92]"
                    >
                      Open
                    </button>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Projects
