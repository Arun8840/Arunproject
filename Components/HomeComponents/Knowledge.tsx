import useGetFonts from "@/font/fonts"
import React from "react"
import banner3 from "../../Components/images/5e5344373373094088f94ebe_how-to.gif"
import useGetSkills from "@/data/SkillsData"
import Image from "next/image"

function Knoledge() {
  let Banner_Image3: any = banner3.src
  // todo getfonts
  const { HeaderFont, ContentFont } = useGetFonts()

  // get tools and skills data
  const { SkillItems } = useGetSkills()
  return (
    <>
      <div className="w-full min-h-screen container mx-auto grid place-items-center px-5">
        <section className=" transition-colors duration-300  grid lg:grid-cols-12  auto-rows-max gap-5">
          <>
            {/* //todo header */}
            <div className="   bg-[#f8fe9d] w-full h-full backdrop-blur-sm   p-3 col-span-12 lg:col-span-5 flex items-center justify-center flex-wrap gap-5  rounded-3xl">
              <div className="hidden lg:block w-1/5">
                <Image
                  width={200}
                  height={200}
                  src={Banner_Image3}
                  alt="profile"
                  className="object-contain"
                />
              </div>
              <div className="flex-1 divide-y divide-stone-700 divide-opacity-35">
                <p
                  className={`${ContentFont?.className} capitalize tracking-wider py-2 text-sm leading-7 `}
                >
                  frondend developer, <br /> currently working at zettastack
                  systems PVT. I design and code beautifully simple things, and
                  I love what I do.
                </p>
              </div>
            </div>

            {/* //todo about */}
            <div className="   text-white  dark:text-white bg-[#5c54f9]  p-3 col-span-12 lg:col-span-7    rounded-3xl">
              <div className="divide-y divide-stone-700 divide-opacity-35">
                {" "}
                <h1
                  className={` text-[2rem] ${HeaderFont?.className} capitalize tracking-wider p-1`}
                >
                  what i&apos;m about?
                </h1>
                <p
                  className={` ${ContentFont?.className} capitalize tracking-wider px-1 py-3 text-sm leading-7`}
                >
                  My journey in web development began ZettaStack, which has
                  sharpened my skills and passion for creating exceptional web
                  applications.
                </p>
              </div>
            </div>

            {/* //todo experience */}
            <div className="    bg-[#f8fe9d]  p-3 col-span-12 lg:col-span-6 auto-rows-max gap-3 rounded-3xl flex items-center">
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

            {/* //todo sample content */}
            <div className="   bg-[#FF8400] p-3 col-span-12 lg:col-span-6 text-white   rounded-3xl">
              <h1
                className={`text-[1.5rem] ${HeaderFont?.className} capitalize tracking-wider p-1`}
              >
                what i do best
              </h1>
              <p
                className={` ${ContentFont?.className} capitalize tracking-wider px-1 py-2 text-sm leading-7`}
              >
                I am an enthusiastic Frontend Developer with a strong penchant
                for creating elegant and responsive user interfaces.{" "}
              </p>
            </div>

            {/* //todo skilss */}
            <div className="col-span-12 grid   grid-cols-4 place-items-center rounded-3xl flex-1 p-3">
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
          </>
        </section>
      </div>
    </>
  )
}

export default Knoledge
