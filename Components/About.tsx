"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Outfit } from "next/font/google"
import Link from "next/link"
import React, { useRef } from "react"
import bannerImage from "../public/aboutMe_banner.png"
import Image from "next/image"
const HeaderFont = Outfit({
  weight: "600",
  style: "normal",
  subsets: ["latin"],
  display: "block",
})
const conentFont = Outfit({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
  display: "block",
})

gsap.registerPlugin(useGSAP)
function About() {
  let banner: any = bannerImage?.src
  let headerStyle = `text-white text-4xl p-2 tracking-wider font-semibold ${HeaderFont?.className}`

  let contentStyle = `text-white leading-6 tracking-wide text-stone-200 ${conentFont?.className}`
  let listContainer: any = useRef(null)
  let tl = gsap.timeline()
  useGSAP(() => {
    tl.fromTo(
      listContainer?.current?.children,
      {
        y: 3,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.2,
        stagger: 0.2,
        duration: 1,
        ease: "sine.out",
      }
    )
  })
  return (
    <section className="min-h-screen bg-black p-10 lg:overflow-hidden grid place-items-center">
      <div className="lg:w-3/5 p-2 mx-auto">
        <ul ref={listContainer} className="p-3 flex flex-col gap-2 ">
          <li>
            <h1 className={headerStyle}>About me</h1>
            <Image
              className="p-2"
              src={banner}
              alt="bannerImage"
              width={200}
              height={200}
            />
          </li>
          <li className="">
            <div className="p-3">
              <p className={contentStyle}>
                Hello!
                <span className="bg-green-500 p-1 rounded -skew-y-3 text-xl font-medium inline-block">
                  I&rsquo;m Arun
                </span>
                , a frontend developer with{" "}
                <span className="text-pink-500 font-medium">3 years</span> of
                professional experience at
                <Link
                  href={"http://www.zettastack.com/"}
                  className="text-indigo-400 p-1 hover:border-b border-indigo-400"
                >
                  Zetta Stack Systems Pvt
                </Link>
                . Ltd. I&rsquo;m passionate about creating responsive,
                interactive, and user-friendly web applications. During my time
                at Zetta Stack Systems, I honed my skills in modern frontend
                technologies like React, Next.js, Tailwind CSS, and Figma.
              </p>

              <p className={contentStyle}>
                Throughout my journey, I&rsquo;ve mastered key frontend tools
                like React, Next.js, Tailwind CSS, and Figma to build intuitive
                interfaces. I&rsquo;m also proficient in Spline for 3D design
                and GSAP for creating smooth animations, ensuring that every
                project I work on is engaging and visually captivating.
              </p>
            </div>
          </li>

          <li className="">
            <h1 className={headerStyle}>Skills & Expertise</h1>
            <div className="p-3">
              <ul className="text-stone-200 flex flex-col gap-3">
                <li>
                  <strong>Languages:</strong>{" "}
                  <span className="text-orange-400">HTML</span>,{" "}
                  <span className="text-sky-400">CSS</span>,{" "}
                  <span className="text-yellow-400">JavaScript (ES6+)</span>,
                  TypeScript
                </li>
                <li>
                  <strong>Frameworks & Libraries:</strong>{" "}
                  <span className="text-sky-400">React</span>, Next.js,
                  <span className="text-green-400 font-medium"> GSAP</span>
                  (GreenSock Animation Platform)
                </li>
                <li>
                  <strong>Design & Tools:</strong> Figma, Spline (3D design),
                  Tailwind CSS
                </li>
                <li>
                  <strong>API Integration:</strong> RESTful APIs
                </li>
                <li>
                  <strong>Responsive Design:</strong> Mobile-first approach,
                  Flexbox, CSS Grid
                </li>
                <li>
                  <strong>Version Control:</strong> Git, GitHub
                </li>
              </ul>
            </div>
          </li>

          <li className="">
            <h1 className={headerStyle}>My Approach</h1>
            <div className="p-3">
              <p className={contentStyle}>
                I believe in crafting clean, maintainable code that blends
                functionality with beautiful design. With a strong focus on
                collaboration, I enjoy working with designers and developers
                alike to create seamless user experiences. My expertise in using
                design systems, animation tools, and frameworks like Next.js
                enables me to deliver performance-optimized, dynamic web
                applications.
              </p>
            </div>
          </li>
          <li className="">
            <h1 className={headerStyle}>When I&rsquo;m Not Coding</h1>
            <div className="p-3">
              <p className={contentStyle}>
                Outside of coding, I enjoy exploring new web development trends
                and experimenting with innovative tools and techniques.
                I&rsquo;m also passionate about art, which fuels my creativity
                and inspires my design work. In my free time, you&rsquo;ll often
                find me playing volleyball or working on personal art projects
                to stay balanced and inspired.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
