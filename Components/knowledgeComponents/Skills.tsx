import { AnalyticsData } from "@/data/AnalyticsData"
import { Lobster, Poppins } from "next/font/google"
import React, { useEffect, useRef } from "react"
import Analytics from "./Analytics"
const HeaderFont = Lobster({
  weight: "400",
  subsets: ["latin"],
  display: "block",
})
function Skills() {
  return (
    <div
      className={`w-full lg:h-[100vh] bg-[#f2f2f2] py-[3rem] relative flex flex-col gap-3 justify-between items-center `}
    >
      <div className="container mx-auto p-2 rounded-3xl flex flex-col">
        <h1
          className={`text-[5rem] text-center p-2 bg-gradient-to-br from-[#FF6C22] to-[#2B3499] bg-clip-text text-transparent font-extrabold ${HeaderFont.className}`}
        >
          Let's Introduce Something
        </h1>
        <ul className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-2 p-2">
          {AnalyticsData.map((items, index) => {
            return (
              <li
                style={items.style}
                className=" bg-white border backdrop-blur-sm rounded-lg p-1"
              >
                <div className="w-12 rounded-lg bg-white">
                  <div className="w-full h-full p-1">{items.icon}</div>
                </div>
                <div className="flex-1 flex justify-between flex-col pb-2 ">
                  <div className="flex justify-between text-sm px-2 py-1">
                    <h1 className="font-semibold">{items.title}</h1>
                    <div className="p-1  font-bold">
                      {items.value}
                    </div>
                  </div>
                  <Analytics items={items} index={index} />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Skills
