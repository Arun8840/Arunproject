"use client"
import { HomeIcon, LikeIcon, LocationIcon } from "@/Utility/icons/icons"
import gsap, { Expo } from "gsap"
import Link from "next/link"
import React, { useEffect, useRef } from "react"

interface MenuTypes {
  title: string
  path: string
  icon: any
}

function Layout({ children }: { children: React.ReactNode }) {
  // Renamed to start with an uppercase letter
  let SplashScreen = useRef(null)
  let MainScreen = useRef(null)
  let SplashIcon = useRef(null)

  useEffect(() => {
    const timeLine = gsap.timeline({ paused: false })
    timeLine.to(SplashIcon?.current, {
      scale: 1,
      duration: 1,
      ease: Expo.easeOut,
    })
    timeLine.to(SplashIcon?.current, {
      scale: 0,
      duration: 0.8,
      ease: Expo.easeIn,
      onComplete: () => {
        gsap.to(SplashScreen.current, {
          opacity: 0,
          display: "none",
          duration: 0.5,
          onComplete: () => {
            gsap.to(MainScreen.current, {
              opacity: 1,
              display: "flex",
              duration: 0.5,
            })
          },
        })
      },
    })
  }, [])

  // todo side menu
  const menu: MenuTypes[] = [
    {
      title: "Home",
      path: "Home",
      icon: HomeIcon,
    },
    {
      title: "Liked",
      path: "Liked",
      icon: LikeIcon,
    },
  ]

  return (
    <div className="w-full min-h-screen max-h-screen bg-white dark:bg-[#1a1a1a] grid">
      {/* //todo splash screen */}
      <div
        ref={SplashScreen}
        className="w-full h-full bg-white grid place-items-center"
      >
        <button
          ref={SplashIcon}
          className="text-yellow-400 bg-[#10a958] rounded-full p-2 scale-0"
        >
          <LocationIcon width={80} />
        </button>
      </div>

      <div ref={MainScreen} className=" hidden opacity-0 gap-2">
        <aside className="p-2">
          <ul className="grid gap-2">
            <li>
              <button className="border rounded-lg p-2">
                <HomeIcon width={20} />
              </button>
            </li>
            <li>
              <button className="border rounded-lg p-2">
                <LikeIcon width={20} />
              </button>
            </li>
          </ul>
        </aside>
        {/* //todo main */}
        {/* <main className="flex-1  max-h-screen overflow-y-auto">{children}</main> */}
      </div>
    </div>
  )
}

export default Layout // Exported with uppercase first letter
