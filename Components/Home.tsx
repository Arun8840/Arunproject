"use client"
import gsap from "gsap"
import { Spicy_Rice, Spline_Sans_Mono } from "next/font/google"
import React from "react"
import { useGSAP } from "@gsap/react"
import TextPlugin from "gsap/TextPlugin"
import useSWR from "swr"
import { fetchAndSet_Pagecontent } from "@/Store/features/pageSlice"
import { useAppDispatch } from "@/Store/hooks"
import { useParams } from "next/navigation"
import { MdStars } from "react-icons/md"
import { IoSparklesSharp } from "react-icons/io5"
import { FaCode } from "react-icons/fa"
import useGetSkills from "@/data/SkillsData"

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
  const dispatch = useAppDispatch()
  const params = useParams()
  const { SkillItems } = useGetSkills()
  const current_page = params?.portfolio_pages
  const fetcher = async () => {
    try {
      const res = await dispatch(fetchAndSet_Pagecontent())
      return res
    } catch (error: any) {
      throw new Error(error)
    }
  }

  const { data, isLoading, error } = useSWR(
    "api/portfolio/load-home-page",
    fetcher,
    {
      revalidateOnFocus: false, // Disable revalidation on focus
    }
  )

  let filterdPage = data?.payload?.find((pageItems: any) =>
    current_page?.includes(pageItems?.pageName)
  )

  useGSAP(
    () => {
      if (!isLoading) {
        tl.fromTo(
          "#main_container",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
          }
        )
          .to("#circle", {
            scale: 1,
            opacity: 1,
            duration: 0.4,
          })
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
            "#chip",
            {
              rotate: "-50deg",
              scale: 0,
            },
            {
              rotate: 0,
              transformOrigin: "left bottom",
              scale: 1,
              ease: "bounce.out",
              duration: 1.2,
            }
          )

          .fromTo(
            "#skill_container >*",
            {
              opacity: 0,
            },
            {
              opacity: 1,
              stagger: 0.2,
              duration: 0.2,
            }
          )
      }
    },
    { dependencies: [isLoading] }
  )

  let values = filterdPage?.contents[0]
  let element = {
    title: values?.header?.split(" ").join("<br/>"),
    para: values?.subContent,
  }

  return (
    <div
      id="main_container"
      className={`w-full min-h-screen grid place-items-center relative bg-[url('../public/blue_background.jpg')] bg-center bg-cover opacity-0`}
    >
      <div className="w-[90%] lg:w-1/2">
        <div className="relative">
          <h1
            id="header_text"
            className={`text-white text-center tracking-wide text-5xl lg:text-8xl  ${Spicy_Font?.className}`}
            dangerouslySetInnerHTML={{ __html: element?.title }}
          />
          <small
            className="hidden lg:flex items-center bg-black/30 backdrop-blur-sm  rounded-full text-white p-2 text-center absolute top-0 right-[12rem] gap-1 rotate-[-50deg]"
            id="chip"
          >
            <IoSparklesSharp color="#FFDC7F" size={18} /> Developer
          </small>
        </div>

        <p
          id="content_text"
          className={`text-center text-white tracking-wide ${Poppins_Font?.className} p-4 lg:w-[80%] mx-auto`}
        >
          {element?.para}
        </p>

        <ul
          id="skill_container"
          className="flex flex-wrap gap-2 items-center justify-center p-5"
        >
          {SkillItems?.map((items, index) => {
            return (
              <li key={`${items?.name}${index}`} className="size-6">
                {items?.icon}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Homepage
