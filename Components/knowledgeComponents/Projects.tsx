import { ProjectDatas } from "@/data/ProjectData"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Lobster, Poppins } from "next/font/google"
import React, { useEffect, useRef } from "react"
const HeaderFont = Lobster({
  weight: "400",
  subsets: ["latin"],
  display: "block",
})
function Projects() {
  let background = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    const backgroundAnimation = gsap.to(background.current, {
      duration: 1,
      background: "#FFF5C2",
      scrollTrigger: {
        trigger: "#MainContainer",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    })

    return () => {
      backgroundAnimation.kill()
    }
  }, [])
  return (
    <div
      id="MainContainer"
      ref={background}
      className={`w-full  bg-white flex flex-col p-2  `}
    >
      <h1
        className={`text-center text-[5rem] block bg-gradient-to-br from-[#FF6C22] to-[#2B3499] bg-clip-text text-transparent font-extrabold ${HeaderFont.className}`}
      >
        Projects
      </h1>

      <div className="container  p-[3rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="w-full min-h-[500px] bg-yellow-50 rounded-2xl"></div>

        <div className="">
          <h1 className="text-3xl font-semibold tracking-wider py-2">
            E-Commerce App
          </h1>
          <p className="text-gray-600 leading-7 tracking-wider text-sm">
            To create a comprehensive e-commerce platform specializing in
            technology products, providing a seamless shopping experience for
            users. Utilize React.js for building a dynamic and interactive user
            interface. Employ Redux for state management and ensure responsive
            design with CSS (or CSS-in-JS libraries) and media queries.Provide a
            user-friendly interface that encourages engagement and increases
            conversion rates.
          </p>
          <div className="py-5">
            <button className="rounded-full px-5 py-2 bg-slate-800 text-white">
              Open
            </button>
          </div>
        </div>

        {/* //todo todo-app */}
        <div className="">
          <h1 className="text-3xl font-semibold tracking-wider py-2">
            Todo-App
          </h1>
          <p className="text-gray-600 leading-7 tracking-wider text-justify text-sm">
            To create a modern Todo-App allowing users to manage tasks
            effortlessly by implementing intuitive drag and drop interactions.
            Implement React DnD to facilitate the rearrangement of tasks by
            dragging and dropping them between different categories (e.g.,
            To-Do, In Progress, Done). Organize tasks into different categories
            or lists for better task organization and prioritization. Create a
            responsive user interface that adapts seamlessly to various devices
            and screen sizes.
          </p>
          <div className="py-5">
            <button className="rounded-full px-5 py-2 bg-slate-800 text-white">
              Open
            </button>
          </div>
        </div>
        <div className="w-full min-h-[500px] bg-yellow-50 rounded-2xl"></div>

        {/* //todo weather app */}
        <div className="w-full min-h-[500px] bg-yellow-50 rounded-2xl"></div>

        <div className="">
          <h1 className="text-3xl font-semibold tracking-wider py-2">
            Weather App
          </h1>
          <p className="text-gray-600 leading-7 tracking-wider text-sm">
            Develop a weather application that provides users with accurate
            weather information for their specified location. Show the current
            weather conditions including temperature, humidity, wind speed,
            etc.Display a 7-day weather forecast for the selected location.Allow
            users to search for weather information by city name or ZIP code.
            Use HTML, CSS, and JavaScript to build the user interface. Utilize
            Fetch API or Axios for fetching weather data from a weather API
            (like OpenWeatherMap, WeatherAPI, etc.). Utilize a weather API to
            retrieve weather information based on the geographic coordinates
            obtained from the user's search.
          </p>
          <div className="py-5">
            <button className="rounded-full px-5 py-2 bg-slate-800 text-white">
              Open
            </button>
          </div>
        </div>

        {/* //todo Clone-app */}
        <div className="">
          <h1 className="text-3xl font-semibold tracking-wider py-2">
            Cloning-Social-App
          </h1>
          <p className="text-gray-600 leading-7 tracking-wider text-justify text-sm">
            To create a social media platform resembling popular social
            networking sites, providing users with functionalities for sharing
            posts, interacting with others, and fostering a sense of community.
            Enable users to create, edit, delete, and share posts (text, images,
            videos) with their followers or the public. Display a personalized
            feed showcasing posts from followed users or relevant content based
            on interests. Utilize a JavaScript framework like React.js for
            building the user interface. Use state management libraries like
            Redux or Context API for managing application state.
          </p>
          <div className="py-5">
            <button className="rounded-full px-5 py-2 bg-slate-800 text-white">
              Open
            </button>
          </div>
        </div>
        <div className="w-full min-h-[500px] bg-yellow-50 rounded-2xl"></div>
      </div>
    </div>
  )
}

export default Projects
