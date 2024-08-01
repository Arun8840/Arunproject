import SparklesText from "@/Utility/animations/SparklesText"
import useGetFonts from "@/font/fonts"
import React from "react"

function ContactPage() {
  const { HeaderFont, ContentFont } = useGetFonts()
  return (
    <div className="p-10 lg:min-h-screen grid place-items-center">
      {/* contact */}
      <div className="landingPage  dark:bg-[#D67BFF]  p-5  flex flex-col justify-between rounded-3xl container mx-auto lg:min-h-[500px]">
        <p
          className={` ${HeaderFont?.className} capitalize tracking-wider px-1 py-2  lg:text-[4rem] `}
        >
          Wanna create <br /> something awesome <br /> together?
        </p>

        <div
          className={`flex flex-col justify-end lg:flex-row items-center gap-3 ${ContentFont?.className} pt-4`}
        >
          <button className="lg:text-3xl  capitalize bg-[#101010] text-white rounded-full  transition-colors duration-200 p-3 w-full lg:w-fit">
            <SparklesText text="Get in touch !" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
