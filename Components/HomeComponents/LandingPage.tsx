import useGetFonts from "@/font/fonts"
import React, { useEffect, useRef, useState } from "react"
import profilePic from "../../Components/images/profile.jpeg"
import banner3 from "../../Components/images/5e5344373373094088f94ebe_how-to.gif"

import { DarkIcon, LightIcon, RightArrow } from "@/Utility/icons/icons"
import useGetSkills from "@/data/SkillsData"
import { ProjectDatas } from "@/data/ProjectData"
import Link from "next/link"
import Image from "next/image"
import gsap, { Expo, Power2 } from "gsap"
import TextPlugin from "gsap/TextPlugin"
function LandingPage() {
  const splashScreen = useRef(null)
  const gridScreen = useRef(null)
  // circles
  const circle1 = useRef(null)
  const circle2 = useRef(null)
  const circle3 = useRef(null)
  const circle4 = useRef(null)
  const text = useRef(null)
  let profileBanner: any = profilePic.src
  let Banner_Image3: any = banner3.src
  // todo getfonts
  const { HeaderFont, ContentFont } = useGetFonts()
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    !darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark")
  }
  // get tools and skills data
  const { SkillItems } = useGetSkills()
  // todo gsap plugins
  gsap.registerPlugin(TextPlugin)
  useEffect(() => {
    let timeLine = gsap.timeline({ paused: false })
    document.documentElement.classList.add("dark")

    timeLine.to(
      [circle1?.current, circle2?.current, circle3?.current, circle4?.current],
      {
        scale: 2,
        ease: Expo.easeOut,
        duration: 1,
        stagger: 0.2,
      }
    )
    timeLine.to(circle4?.current, {
      duration: 1,
      text: "Let's Explore",
      fontWeight: "bold",
      color: "white",
      ease: "none",
    })
    timeLine.to(
      [circle4?.current, circle3?.current, circle2?.current, circle1?.current],
      {
        delay: 0.8,
        scale: 0,
        ease: Expo.easeIn,
        duration: 0.5,
        stagger: 0.2,
        onComplete: () => {
          gsap.to(splashScreen?.current, {
            backgroundColor: "#101010",
            opacity: 0,
            display: "none",
            duration: 0.5,
            onComplete: () => {
              gsap.to(gridScreen?.current, {
                opacity: 1,
                display: "block",
                duration: 0.8,
              })
            },
          })
        },
      }
    )

    return () => {
      timeLine.kill()
    }
  }, [])
  return (
    <>
      {/* //todo initial splash screen */}
      <div
        ref={splashScreen}
        className="w-full min-h-screen bg-[#4842fe] relative grid place-items-center overflow-hidden"
      >
        {/* //todo circle 1 */}
        <div
          ref={circle1}
          className="size-[700px] scale-0 bg-[#10a958] rounded-full absolute"
        ></div>
        <div
          ref={circle2}
          className="size-[500px] scale-0 bg-[#ffc700] rounded-full absolute"
        ></div>
        <div
          ref={circle3}
          className="size-[400px] scale-0 bg-[#f24d1d] rounded-full absolute"
        ></div>
        <div
          ref={circle4}
          className="size-[300px] scale-0 bg-[#101010] rounded-full absolute grid place-items-center"
        >
          <h1
            ref={circle4}
            className={`text-white text-center font-semibold tracking-wider grid place-items-center ${HeaderFont?.className}`}
          >
            Hello !!
          </h1>
        </div>
      </div>
      <div ref={gridScreen} className="w-full h-full bg-black hidden opacity-0">
        <section className="bg-[#fff] dark:bg-[#101010] transition-colors duration-300  min-h-screen  grid lg:grid-cols-12 auto-rows-max gap-5  p-3">
          <>
            {/* //todo header */}
            <div className="bg-white border dark:border-none dark:bg-[#f8fe9d] w-full h-full backdrop-blur-sm   p-3 lg:col-span-6 flex items-center justify-center flex-wrap gap-5  rounded-3xl">
              <div className="hidden lg:block w-1/5 h-full">
                <Image
                  width={200}
                  height={200}
                  src={Banner_Image3}
                  alt="profile"
                  className="object-contain"
                />
              </div>
              <div className="flex-1 divide-y divide-stone-700 divide-opacity-35">
                {" "}
                <h1
                  className={`text-[2rem] ${HeaderFont?.className} capitalize tracking-wider`}
                >
                  Hi i&apos;m arun_
                </h1>
                <p
                  className={`${ContentFont?.className} capitalize tracking-wider py-2 text-sm leading-7 text-gray-600 dark:text-black`}
                >
                  frondend developer, <br /> currently working at zettastack
                  systems PVT. I design and code beautifully simple things, and
                  I love what I do.
                </p>
              </div>
            </div>

            {/* //todo about */}
            <div className="bg-white border dark:border-none text-black  dark:text-white dark:bg-[#4842fe]  p-3 lg:col-span-4    rounded-3xl">
              <div className="divide-y divide-stone-700 divide-opacity-35">
                {" "}
                <h1
                  className={` text-[2rem] ${HeaderFont?.className} capitalize tracking-wider p-1`}
                >
                  what i&apos;m about?
                </h1>
                <p
                  className={` ${ContentFont?.className} capitalize tracking-wider px-1 py-3 text-sm leading-7 text-gray-600 dark:text-white`}
                >
                  {" "}
                  My journey in web development began ZettaStack, which has
                  sharpened my skills and passion for creating exceptional web
                  applications.
                </p>
              </div>
            </div>

            {/* //todo settings icons */}
            <div className="bg-white border dark:border-none dark:bg-[#d1fe06] text-[#d1fe06] w-fit mx-auto lg:w-full h-full  p-2 lg:col-span-2  grid place-items-center gap-1 rounded-3xl">
              {!darkMode ? (
                <button
                  onClick={toggleDarkMode}
                  className="p-5 grid place-items-center cursor-pointer bg-[#232323] rounded-full"
                >
                  <DarkIcon width={20} />
                </button>
              ) : (
                <button
                  onClick={toggleDarkMode}
                  className="p-5 grid place-items-center cursor-pointer bg-[#FF8400] text-white rounded-full"
                >
                  <LightIcon width={20} />
                </button>
              )}
            </div>

            {/* //todo projects */}
            <div className="bg-white  border dark:border-none dark:bg-[#DCFFB7] text-[black]  lg:col-span-5 rounded-3xl p-3">
              <h1
                className={`text-[2rem] ${HeaderFont?.className} capitalize tracking-wider p-2 `}
              >
                projects
              </h1>
              <div>
                <ul className="divide-y divide-gray-300 divide-opacity-50">
                  {ProjectDatas &&
                    ProjectDatas?.length > 0 &&
                    ProjectDatas?.map((proItems, index: number) => {
                      return (
                        <li key={index} className="p-2 ">
                          <div className="flex-1">
                            <h1
                              className={` ${HeaderFont?.className} capitalize tracking-wider `}
                            >
                              {proItems?.title}
                            </h1>
                          </div>
                          <p
                            className={`${ContentFont?.className} capitalize tracking-wider line-clamp-2 text-sm px-2  leading-7 text-gray-600 dark:text-black`}
                          >
                            {proItems?.description}
                          </p>
                          <div className="flex justify-end pt-3">
                            <Link href={proItems?.path}>
                              <button className="text-sm tracking-wider font-semibold flex items-center gap-2">
                                Explore
                                <RightArrow width={15} />
                              </button>{" "}
                            </Link>
                          </div>
                        </li>
                      )
                    })}
                </ul>
              </div>
            </div>

            {/* experience */}
            <div className="bg-[white] grid place-items-center  lg:col-span-3  rounded-3xl overflow-hidden">
              <Image
                width={400}
                height={400}
                src={profileBanner}
                alt="profile"
                className="w-full h-full  object-cover"
              />
            </div>

            <div className="lg:col-span-4  flex flex-col justify-between gap-3">
              <div className="bg-white  border dark:border-none dark:bg-[#f8fe9d]  p-3 col-span-4 grid lg:grid-cols-3 auto-rows-max gap-3 rounded-3xl">
                <div className={`text-center  flex flex-col justify-between `}>
                  <h1 className="text-[3rem]  font-semibold font-mono">2+</h1>
                  <p
                    className={` ${ContentFont?.className} capitalize tracking-wider px-1 py-2`}
                  >
                    years of experience
                  </p>
                </div>
                <div className="text-center  flex flex-col justify-between">
                  <h1 className="text-[3rem]   font-semibold font-mono">2</h1>
                  <p
                    className={` ${ContentFont?.className} capitalize tracking-wider px-1 py-2`}
                  >
                    projects completed
                  </p>
                </div>
                <div className="text-center  flex flex-col justify-between">
                  <h1 className="text-[3rem]   font-semibold font-mono">0</h1>
                  <p
                    className={` ${ContentFont?.className} capitalize tracking-wider px-1 py-2`}
                  >
                    publication
                  </p>
                </div>
              </div>
              <div className="grid border dark:border-none grid-cols-4 place-items-center bg-[white] rounded-3xl flex-1 p-3">
                {" "}
                {SkillItems?.length > 0 &&
                  SkillItems?.map((items, index: number) => {
                    return (
                      <div
                        key={index}
                        className=" rounded-3xl  p-3 size-20 grid place-items-center"
                      >
                        {items?.icon}
                      </div>
                    )
                  })}
              </div>
            </div>

            {/* //todo sample content */}
            <div className="bg-white border dark:border-none dark:bg-[#FF8400] p-3 lg:col-span-6 dark:text-white   rounded-3xl">
              <h1
                className={`text-[1.5rem] ${HeaderFont?.className} capitalize tracking-wider p-1`}
              >
                what i do best
              </h1>
              <p
                className={` ${ContentFont?.className} capitalize tracking-wider px-1 py-2 text-sm leading-7 text-gray-600 dark:text-white`}
              >
                I am an enthusiastic Frontend Developer with a strong penchant
                for creating elegant and responsive user interfaces.{" "}
              </p>
            </div>

            {/* contact */}
            <div className="bg-white border dark:border-none  dark:bg-[#D67BFF]  p-3 lg:col-span-6 flex flex-col justify-between rounded-3xl">
              <h1
                className={`text-[1.5rem] ${HeaderFont?.className} capitalize tracking-wider p-1`}
              >
                Contact
              </h1>
              <p
                className={` ${ContentFont?.className} capitalize tracking-wider px-1 py-2 text-sm leading-7 text-gray-600 dark:text-black`}
              >
                Ready to enhance your website&apos;s user experience? Contact me
                today to discuss your front-end development needs.
              </p>

              <div
                className={`flex flex-col lg:flex-row items-center gap-3 ${ContentFont?.className} pt-4`}
              >
                <input
                  type="text"
                  className="bg-white outline-none border dark:border-none rounded-2xl bg-transparent p-3 flex-1 w-full lg:w-fit placeholder:text-black"
                  placeholder="Your Email address"
                />
                <button className="bg-[#101010] dark:bg-[#10a958] text-white rounded-2xl  transition-colors duration-200 p-3 w-full lg:w-fit">
                  Get in touch !
                </button>
              </div>
            </div>
          </>
        </section>
      </div>
    </>
  )
}

export default LandingPage
