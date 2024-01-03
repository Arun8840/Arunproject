import { ProjectDatas } from "@/data/ProjectData"
import useGetFonts from "@/font/fonts"
import { useRouter } from "next/navigation"
import React from "react"
import image from "../images/magicpattern-mesh-gradient-1704291343624.png"
function Projects() {
  const router = useRouter()
  const { HeaderFont, ContentFont } = useGetFonts()
  const handleRedirect = (path: string) => {
    path && router.push(path)
  }
  return (
    <div className={`w-full pt-[4rem] bg-[#f3f5f7] flex flex-col p-2  `}>
      <div className="container mx-auto">
        <h1
          className={`text-[4rem] text-[#131727] font-extrabold ${HeaderFont.className} pb-10`}
        >
          Projects
        </h1>
        <div className="container mx-auto grid gap-1 ">
          {ProjectDatas.map((values, index: number) => {
            return (
              <div
                style={{
                  background: `linear-gradient(86deg,${values.color})`,
                  color: values?.fontColor,
                }}
                className={`grid gap-1 px-[5rem] sticky top-10 p-5 rounded-t-lg backdrop-blur-sm`}
              >
                <div className="flex-1">
                  <h1 className="font-semibold tracking-wide text-3xl pb-3">
                    <span>{index + 1}</span> .{values.title}
                  </h1>
                  <p
                    className={`line-clamp-6 tracking-wide  py-1 leading-6 ${ContentFont.className}`}
                  >
                    {values.description}
                  </p>
                  <div className="flex justify-end p-5">
                    <button
                      onClick={() => handleRedirect(values?.path)}
                      className="px-5 py-2 rounded text-white bg-[#131727] group-hover:bg-[#940B92]"
                    >
                      Open
                    </button>
                  </div>
                </div>
                <div className="w-full min-h-[80vh] bg-white rounded-3xl shadow"></div>
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
