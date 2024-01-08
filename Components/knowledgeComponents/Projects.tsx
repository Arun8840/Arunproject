import { ProjectDatas } from "@/data/ProjectData"
import useGetFonts from "@/font/fonts"
import { useRouter } from "next/navigation"
import React, { useEffect, useRef } from "react"
import Image from "./Image"
import gsap, { Power0, Power2 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
function Projects() {
  const router = useRouter()
  const { HeaderFont, ContentFont } = useGetFonts()
  const handleRedirect = (path: string) => {
    path && router.push(path)
  }
  let lists: any = useRef(null)
  let timeLine = useRef(null)
  let scrollContainer = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let scrollAnimation = gsap.to(lists.current.querySelectorAll("li"), {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: Power2.easeInOut,
      stagger: 0.4,
      scrollTrigger: {
        trigger: scrollContainer.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    })
    let lineAnimation = gsap.to(timeLine.current, {
      duration: 2,
      scaleY: 1,
      ease: Power2.easeInOut,
      scrollTrigger: {
        trigger: scrollContainer.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    })
    return () => {
      scrollAnimation.kill()
      lineAnimation.kill()
    }
  }, [])
  return (
    <div
      ref={scrollContainer}
      className={`w-full lg:p-[4rem] bg-[#101010] flex flex-col overflow-hidden`}
    >
      <div className="container mx-auto">
        <h1
          className={`lg:text-[4rem] text-white font-extrabold ${HeaderFont.className} pb-10 p-2`}
        >
          Projects
        </h1>
        <div className="flex gap-x-10 justify-center">
          {/* //todo line */}
          <div
            ref={timeLine}
            className="w-[1px] bg-gray-400 hidden lg:block origin-top scale-y-0"
          ></div>
          <ul ref={lists} className="grid gap-5 w-[80%]">
            {ProjectDatas.map((values, index: number) => {
              return (
                <li
                  key={index}
                  className={`flex gap-2 rounded backdrop-blur-sm bg-[#f3f3f3] relative opacity-0 translate-x-16`}
                >
                  {/* //todo list */}
                  <span className="absolute font-semibold w-[40px] h-[40px] bg-white -left-[60px] top-1/3 rounded-full place-items-center hidden lg:grid">
                    {index + 1}
                  </span>
                  <div className="w-1/3 rounded-l hidden lg:grid place-items-center">
                    <Image alt={values?.title} Url={values?.image} />
                  </div>
                  <div className="flex-1 p-2">
                    <h1 className="font-semibold tracking-wide text-lg pb-3">
                      {values.title}
                    </h1>
                    <p
                      className={`text-gray-500 text-sm tracking-wide leading-6 ${ContentFont.className} line-clamp-4 lg:line-clamp-none`}
                    >
                      {values.description}
                    </p>
                    <div className="flex justify-end p-1">
                      <button
                        onClick={() => handleRedirect(values?.path)}
                        className="px-3 py-1 rounded text-white bg-[#131727] group-hover:bg-[#940B92]"
                      >
                        Open
                      </button>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projects
{
  /*
  
 

                  
  <div className="container  p-[3rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="w-full min-h-[500px] bg-yellow-50 rounded-2xl"></div>

        <div className="">
          <h1 className="text-3xl font-semibold tracking-wider py-2">
            E-Commerce App
          </h1>
          <p className="text-gray-600 leading-7 tracking-wider text-sm">
            
          </p>
          <div className="py-5">
            <button className="rounded-full px-5 py-2 bg-slate-800 text-white">
              Open
            </button>
          </div>
        </div>

      //   {/* //todo todo-app */
}
//   <div className="">
//     <h1 className="text-3xl font-semibold tracking-wider py-2">
//       Todo-App
//     </h1>
//     <p className="text-gray-600 leading-7 tracking-wider text-justify text-sm">
//
//     </p>
//     <div className="py-5">
//       <button className="rounded-full px-5 py-2 bg-slate-800 text-white">
//         Open
//       </button>
//     </div>
//   </div>
//   <div className="w-full min-h-[500px] bg-yellow-50 rounded-2xl"></div>

//   {/* //todo weather app */}
//   <div className="w-full min-h-[500px] bg-yellow-50 rounded-2xl"></div>

//   <div className="">
//     <h1 className="text-3xl font-semibold tracking-wider py-2">
//       Weather App
//     </h1>
//     <p className="text-gray-600 leading-7 tracking-wider text-sm">

//     </p>
//     <div className="py-5">
//       <button className="rounded-full px-5 py-2 bg-slate-800 text-white">
//         Open
//       </button>
//     </div>
//   </div>

//   {/* //todo Clone-app */}
//   <div className="">
//     <h1 className="text-3xl font-semibold tracking-wider py-2">
//       Cloning-Social-App
//     </h1>
//     <p className="text-gray-600 leading-7 tracking-wider text-justify text-sm">
//       To create a social media platform resembling popular social
//       networking sites, providing users with functionalities for sharing
//       posts, interacting with others, and fostering a sense of community.
//       Enable users to create, edit, delete, and share posts (text, images,
//       videos) with their followers or the public. Display a personalized
//       feed showcasing posts from followed users or relevant content based
//       on interests. Utilize a JavaScript framework like React.js for
//       building the user interface. Use state management libraries like
//       Redux or Context API for managing application state.
//     </p>
//     <div className="py-5">
//       <button className="rounded-full px-5 py-2 bg-slate-800 text-white">
//         Open
//       </button>
//     </div>
//   </div>
//   <div className="w-full min-h-[500px] bg-yellow-50 rounded-2xl"></div>
// </div> */}
