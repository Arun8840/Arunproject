import gsap from "gsap"
import { Spicy_Rice, Spline_Sans_Mono } from "next/font/google"
import React from "react"
import { useGSAP } from "@gsap/react"
import TextPlugin from "gsap/TextPlugin"
const Spicy_Font = Spicy_Rice({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  display: "block",
})
const Poppins_Font = Spline_Sans_Mono({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  display: "block",
})

// todo gsap plugins
gsap.registerPlugin(TextPlugin, useGSAP)
function Homepage() {
  const tl = gsap.timeline()
  useGSAP(() => {
    tl.fromTo(
      "#main_container",
      {
        background: "black",
      },
      {
        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,1) 3%, rgba(235,158,98,1) 34.6%, rgba(177,10,10,1) 63.7%, rgba(0,0,0,1) 102%)",
        duration: 3,
        // ease: "expo.inOut",
      }
    )
      .fromTo(
        ["#header_text", "#content_text"],
        {
          opacity: 0,
          y: 10,
        },
        {
          y: 0,
          stagger: 0.4,
          opacity: 1,
          duration: 1,
        }
      )
      .fromTo(
        "#chip_text",
        {
          opacity: 0,
          y: 10,
        },
        {
          y: 0,
          stagger: 0.4,
          opacity: 1,
          duration: 0.8,
          ease: "bounce.out",
        }
      )
  })

  return (
    <div
      id="main_container"
      className={`w-full min-h-screen grid place-items-center relative`}
    >
      <div className="w-1/2">
        <div className="relative">
          <h1
            id="header_text"
            className={`text-white text-center tracking-wide text-5xl lg:text-8xl  ${Spicy_Font?.className}`}
          >
            Arun <br /> Prakash
          </h1>
          <div className="hidden sm:flex">
            <small
              id="chip_text"
              className={`text-white bg-indigo-500 rounded-full w-fit mx-auto p-2 text-center tracking-wide  ${Poppins_Font?.className} lg:absolute top-[8px] right-[12rem] flex items-center gap-2`}
            >
              Designer
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 0 0-3.471 2.987 10.04 10.04 0 0 1 4.815 4.815 18.748 18.748 0 0 0 2.987-3.472l3.386-5.079A1.902 1.902 0 0 0 20.599 1.5Zm-8.3 14.025a18.76 18.76 0 0 0 1.896-1.207 8.026 8.026 0 0 0-4.513-4.513A18.75 18.75 0 0 0 8.475 11.7l-.278.5a5.26 5.26 0 0 1 3.601 3.602l.502-.278ZM6.75 13.5A3.75 3.75 0 0 0 3 17.25a1.5 1.5 0 0 1-1.601 1.497.75.75 0 0 0-.7 1.123 5.25 5.25 0 0 0 9.8-2.62 3.75 3.75 0 0 0-3.75-3.75Z"
                  clip-rule="evenodd"
                />
              </svg>
            </small>
            <small
              id="chip_text"
              className={`text-lime-200 bg-[#185519] rounded-full w-fit mx-auto p-2 text-center tracking-wide  ${Poppins_Font?.className} lg:absolute top-[60px] left-[10.5rem]`}
            >
              <span className="px-1">{"</>"}</span>
              Developer
            </small>
            <small
              id="chip_text"
              className={`bg-[#D2FF72] rounded-full w-fit mx-auto p-2 text-center tracking-wide  ${Poppins_Font?.className} lg:absolute bottom-0 right-[4.5rem] flex items-center gap-2`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                  clip-rule="evenodd"
                />
              </svg>
              Creative Coder
            </small>
          </div>
        </div>

        <p
          id="content_text"
          className={`text-center text-white tracking-wide ${Poppins_Font?.className} p-4 lg:p-10`}
        >
          Building seamless, responsive, and interactive web experiences with
          modern front-end technologies.
        </p>
      </div>
    </div>
  )
}

export default Homepage
