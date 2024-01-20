import AnalyticsBars from "@/Utility/animations/AnalyticsBars"
import { AnalyticsData } from "@/data/AnalyticsData"
import useGetFonts from "@/font/fonts"
import React, { useEffect, useRef } from "react"

function Skills() {
  const { HeaderFont, ContentFont } = useGetFonts()
  return (
    <div className={`w-full bg-[#f3f5f7] lg:py-[3rem]`}>
      <div className="container mx-auto">
        <h1
          className={`lg:text-[4rem] text-lg py-5 px-2 text-[#131727] font-extrabold ${HeaderFont.className}`}
        >
          Frameworks and Tools
        </h1>
        <ul className={`grid sm:grid-cols-4 lg:grid-cols-10 mx-auto  gap-2 ${ContentFont.className} p-3 `}>
          {AnalyticsData.map((values,index) => {
            return (
              <li key={index} className="flex justify-center items-center space-y-4 p-2 w-full h-full border bg-white rounded-lg">
                <div className="">
                  <div className="w-[50px] mx-auto">{values.icon}</div>
                  <h1 className="font-semibold text-center tracking-wide p-2 text-[#131727]">
                    {values.title}
                  </h1>
                </div>
                {/* <AnalyticsBars values={values?.value} />
                <h2 className="p-1">{values.value}</h2> */}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Skills
