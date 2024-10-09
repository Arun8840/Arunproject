"use client"
import gsap from "gsap"
import { Poppins, Spicy_Rice } from "next/font/google"
import React from "react"
import { useGSAP } from "@gsap/react"
import TextPlugin from "gsap/TextPlugin"
const Spicy_Font = Spicy_Rice({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  display: "block",
})
const Poppins_Font = Poppins({
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
      .fromTo(
        "#Toolbar_container",
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          delay: 0.5,
          duration: 0.7,
        }
      )
  })

  return (
    <div
      id="main_container"
      className={`w-full min-h-screen bg-center bg-cover grid place-items-center relative`}
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

      {/* //todo bottom tool bar */}
      <div
        id="Toolbar_container"
        className="bg-black/20 p-2 rounded-lg shadow-lg fixed bottom-10 flex items-center gap-2"
      >
        <button className="rounded p-2 bg-white/90 " title="Home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
          </svg>
        </button>
        <button className="rounded p-2 text-white" title="About">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <path
              fill-rule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button className="rounded p-2 text-white" title="Projects">
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
        </button>
        <button className="rounded p-2 text-white" title="Projects">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button className="rounded p-2 text-white" title="Projects">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Homepage
