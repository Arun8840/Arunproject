import { AnalyticsData } from "@/data/AnalyticsData"
import { Lobster, Merriweather, Poppins } from "next/font/google"
import React, { useEffect, useRef } from "react"
import Analytics from "./Analytics"
const FontStyle = Merriweather({
  weight: "400",
  subsets: ["latin"],
  display: "block",
})
function Skills() {
  return (
    <div className={`w-full bg-[#f2f2f2] p-[3rem]`}>
      <div className="container mx-auto">
        <h1
          className={`text-[4rem] py-5 text-[#131727] font-extrabold ${FontStyle.className}`}
        >
          Skill's
        </h1>
        <div className="divide-y flex flex-col gap-y-1">
          {AnalyticsData.map((values) => {
            return (
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-[50px]">{values.icon}</div>
                  <h1 className="font-semibold tracking-wide px-2 text-[#131727]">
                    {values.title}
                  </h1>
                </div>
                <h2>{values.value}</h2>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills
