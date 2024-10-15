"use client"
import useGetSkills from "@/data/SkillsData"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Inter, Manrope } from "next/font/google"
import React from "react"

const Spline_Font_bold = Inter({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
  display: "block",
})
const Spline_Font_normal = Manrope({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  display: "block",
})
gsap.registerPlugin(useGSAP)
function About() {
  const { SkillItems } = useGetSkills()

  useGSAP(() => {
    gsap.fromTo(
      "#About_container > *",
      {
        opacity: 0,
        scale: 0.9,
        y: 30,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.2,
        yoyo: true,
        ease: "power1.inOut",
        duration: 1,
      }
    )
  })
  return (
    <section className="p-2 min-h-screen bg-[url('../public/blue_background.jpg')] bg-fixed bg-cover ">
      <div
        id="About_container"
        className="p-5 grid lg:grid-cols-12 container mx-auto  gap-5"
      >
        {/* //todo image section */}
        <div className=" col-span-12 lg:col-span-4 w-full rounded-[3rem] bg-gradient-to-br from-[#2e0bf4]  to-[#48ada4]  shadow-lg p-3 grid place-items-center text-white">
          <h1
            className={`text-[2.5rem] p-2 capitalize  ${Spline_Font_bold?.className}`}
          >
            ABOUT
          </h1>
        </div>

        {/* content section */}
        <div className="col-span-12 lg:col-span-8 rounded-[3rem] bg-[#473bd8] text-white  shadow-lg p-10">
          <h1
            className={`text-[2.5rem] p-2 capitalize  ${Spline_Font_bold?.className}`}
          >
            I design digital interfaces
          </h1>
          <p
            className={` p-2 ${Spline_Font_normal?.className} tracking-wide leading-7`}
          >
            I am an enthusiastic Frontend Developer with a strong penchant for
            creating elegant and responsive user interfaces. My journey in web
            development began ZettaStack, which has sharpened my skills and
            passion for creating exceptional web applications.
          </p>
        </div>

        {/* //todo image section */}
        <div className="col-span-12 lg:col-span-8 rounded-[3rem] bg-[#ffffff]  shadow-lg p-10">
          <h1
            className={`text-[2.5rem] text-[#2C2C2C] p-2 ${Spline_Font_bold?.className} `}
          >
            Experience
          </h1>
          <p
            className={` p-2 ${Spline_Font_normal?.className} tracking-wide leading-7`}
          >
            During my three years at Zettastack System Pvt Ltd in Tidel
            Coimbatore, I honed my skills as a frontend developer, collaborating
            with cross-functional teams to deliver responsive web solutions. I
            focused on designing intuitive user interfaces and leveraging modern
            technologies such as HTML5, CSS3,Tailwind CSS,JavaScript frameworks.
            By optimizing performance and continuously learning, I contributed
            to the success of various projects while staying updated with
            industry trends.
          </p>
        </div>

        {/* content section */}
        <div className="col-span-12 lg:col-span-4 w-full rounded-[3rem] bg-[#ffefd6]  shadow-lg grid place-items-center">
          <ul className="flex  items-center flex-wrap gap-4  p-10">
            {SkillItems?.length > 0 &&
              SkillItems?.map((skillItems, index: number) => {
                return (
                  <li key={index} className="size-14">
                    {skillItems?.icon}
                  </li>
                )
              })}
          </ul>
        </div>

        {/* //todo help section */}
        <div className="col-span-12 lg:col-span-6 rounded-[3rem] bg-[#07c057] text-[#fefefe]  shadow-lg p-10">
          <h1
            className={`text-[2.5rem]  p-2 font-semibold ${Spline_Font_bold?.className} `}
          >
            How can I help you?
          </h1>
          <ul className={`p-2  ${Spline_Font_normal?.className}`}>
            <li className="p-2 list-disc list-inside">Improve your website</li>
            <li className="p-2 list-disc list-inside">Create a web app</li>
            <li className="p-2 list-disc list-inside">Create a new website</li>
            <li className="p-2 list-disc list-inside">Design/Refactor UI</li>
          </ul>
        </div>

        {/* //todo tool uses */}
        <div className="col-span-12 lg:col-span-6 rounded-[3rem] bg-[#e4ae0f]  shadow-lg p-10">
          <div>
            <h1
              className={`text-[2.5rem] p-2 capitalize  ${Spline_Font_bold?.className}`}
            >
              I also like to code
            </h1>
            <p
              className={` p-2 ${Spline_Font_normal?.className} tracking-wide leading-7`}
            >
              A few years back, I came across Creative Coding, and was obsessed
              with it. Since then, I ve done a lot of creative coding work,
              learnt about shaders, and also taught myself frontend development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
