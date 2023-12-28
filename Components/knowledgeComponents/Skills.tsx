import AnalyticsBars from "@/Utility/animations/AnalyticsBars"
import { AnalyticsData } from "@/data/AnalyticsData"
import useGetFonts from "@/font/fonts"
import React, { useEffect, useRef } from "react"

function Skills() {
  const { HeaderFont, ContentFont } = useGetFonts()
  return (
    <div className={`w-full bg-[#f3f5f7] py-[3rem]`}>
      <div className="container mx-auto">
        <h1
          className={`text-[4rem] py-5 text-[#131727] font-extrabold ${HeaderFont.className}`}
        >
          Frameworks and Tools
        </h1>
        <div className={`flex flex-col gap-y-5 ${ContentFont.className}`}>
          {AnalyticsData.map((values) => {
            return (
              <div className="flex items-center">
                <div className="flex gap-2 items-center">
                  <div className="w-[50px]">{values.icon}</div>
                  <h1 className="font-semibold tracking-wide px-2 text-[#131727]">
                    {values.title}
                  </h1>
                </div>
                <AnalyticsBars values={values?.value} />
                <h2 className="p-1">{values.value}</h2>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills
