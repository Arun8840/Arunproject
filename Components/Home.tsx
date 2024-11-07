import React from "react"
import { Nunito_Sans, Poppins } from "next/font/google"
import Spline from "@splinetool/react-spline"
import Link from "next/link"
import { MoveUpRight } from "lucide-react"
const nunitoSans = Poppins({
  subsets: ["latin"],
  weight: "700",
})

const nunitoSans_normal = Poppins({
  subsets: ["latin"],
  weight: "400",
})

function Home() {
  return (
    <section className="grid min-h-screen place-items-center relative">
      <Spline
        className="absolute inset-0"
        scene="https://prod.spline.design/vZRyx9smXjR603nG/scene.splinecode"
      />
      {/* <div className="text-center relative z-10">
        <h1
          className={`${nunitoSans_normal.className} text-3xl font-bold mb-4 text-white capitalize`}
        >
          hey&apos; iam Arun 👋
        </h1>
        <h1
          className={`${nunitoSans.className} text-[70px] font-bold mb-4 bg-white bg-clip-text text-transparent uppercase mix-blend-overlay`}
        >
          Frontend Developer
        </h1>
        <p
          className={`${nunitoSans_normal.className} mb-4 text-white capitalize`}
        >
          Passionate about crafting seamless user experiences with modern web
          technologies. <br /> Specializing in React, Next.js, and responsive
          design&apos; I transform ideas into elegant&apos; performant
          applications.
          <br /> Lets build something amazing together.
        </p>

        <Link
          href="/portfolio/About"
          className={`${nunitoSans_normal.className} bg-lime-300 rounded-full p-2 transition-colors flex items-center gap-1 size-fit mx-auto group`}
        >
          <span className="px-2"> About us</span>
          <span className="bg-white rounded-full p-2 group-hover:rotate-45 transition-transform">
            <MoveUpRight color="#000" size={18} />
          </span>
        </Link>
      </div> */}
    </section>
  )
}

export default Home
