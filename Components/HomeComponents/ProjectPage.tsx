import SparklesText from "@/Utility/animations/SparklesText"
import { RightArrow } from "@/Utility/icons/icons"
import { ProjectDatas } from "@/data/ProjectData"
import useGetFonts from "@/font/fonts"
import Link from "next/link"
import React from "react"

function ProjectPage() {
  const { HeaderFont, ContentFont } = useGetFonts()
  return (
    <section className="bg-white dark:bg-black min-h-screen p-10">
      {/* //todo projects */}
      <div className="container mx-auto">
        <h1
          className={`dark:text-white text-center lg:text-start text-[2rem] lg:text-[5rem] ${HeaderFont?.className} capitalize tracking-wider py-4 `}
        >
          Projects
        </h1>
        <div>
          <ul className="grid lg:grid-cols-2 gap-5">
            {ProjectDatas &&
              ProjectDatas?.length > 0 &&
              ProjectDatas?.map((proItems, index: number) => {
                return (
                  <li
                    key={index}
                    className="p-3 border dark:border-none rounded-lg bg-white  dark:bg-[#f8fe9d] hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="flex-1">
                      <h1
                        className={` ${ContentFont?.className} capitalize tracking-widertext-3xl lg:text-[2rem]`}
                      >
                        {proItems?.title}
                      </h1>
                    </div>
                    <p
                      className={`${ContentFont?.className} capitalize tracking-wider line-clamp-3 text-sm px-2  leading-7 text-gray-600 dark:text-black`}
                    >
                      {proItems?.description}
                    </p>
                    <div className="flex justify-end pt-3">
                      {proItems?.path && (
                        <Link href={proItems?.path}>
                          <button className="text-sm tracking-wider font-semibold flex items-center gap-2">
                            Explore
                            <RightArrow width={15} />
                          </button>{" "}
                        </Link>
                      )}
                    </div>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ProjectPage
