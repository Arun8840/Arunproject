import { ProjectDatas } from "@/data/ProjectData"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Lobster, Merriweather, Poppins } from "next/font/google"
import { useRouter } from "next/navigation"
import React, { useEffect, useRef } from "react"
const HeaderFont = Merriweather({
  weight: "400",
  subsets: ["latin"],
  display: "block",
})
function Projects() {
  const router = useRouter()
  const handleRedirect = (path: string) => {
    path && router.push(path)
  }
  return (
    <div
      id="MainContainer"
      className={`w-full bg-[#f2f2f2] flex flex-col p-2  `}
    >
      <div className="container mx-auto">
        <h1
          className={`text-[4rem] text-[#131727] font-extrabold ${HeaderFont.className}`}
        >
          Projects
        </h1>
        <div className="w-full h-full mx-auto grid lg:grid-cols-2 gap-1">
          {ProjectDatas.map((values) => {
            return (
              <div className="border w-full min-h-[300px] rounded bg-white p-5 grid place-items-center relative overflow-hidden group hover:shadow-lg">
                {/* //todo hover object */}
                <div className="absolute  bg-black w-[50px] h-[50px] rounded-full scale-0 group-hover:scale-[20] transition-scale duration-300"></div>
                <div className="w-full h-full flex justify-between flex-col z-[1] rounded">
                  <div>
                    <h1 className="font-semibold tracking-wide text-lg text-[#131727] group-hover:text-white pb-3 border-b">
                      {values.title}
                    </h1>
                    <p className="line-clamp-6 text-gray-400 tracking-wide text-sm py-1 leading-6">
                      {values.description}
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={() => handleRedirect(values?.path)}
                      className="px-5 py-2 rounded text-white bg-[#131727] group-hover:bg-[#940B92]"
                    >
                      Open
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects
{
  /* <div className="container  p-[3rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
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
