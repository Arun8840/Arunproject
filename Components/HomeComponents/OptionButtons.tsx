import { Close, MenuIcon } from "@/Utility/icons/icons"
import useGetFonts from "@/font/fonts"
import gsap from "gsap"
import React, { useRef, useState } from "react"
type itemsTypes = {
  name: string
  path: string
}

interface listTypes {
  title: string
  items: itemsTypes[]
}
function OptionButtons() {
  const { HeaderFont } = useGetFonts()
  let headerList: listTypes[] = [
    { title: "HOME", items: [] },
    { title: "ABOUT", items: [] },
    { title: "SKILLS", items: [] },
    {
      title: "PROJECTS",
      items: [
        {
          name: "ECOMMERCE",
          path: "/projects/Ecommerce",
        },
        {
          name: "TODO",
          path: "/projects/Todo",
        },
        {
          name: "WEATHER APP",
          path: "/projects/WeatherApp",
        },
        {
          name: "CLONE SOCILA APP",
          path: "/projects/CloneApp",
        },
      ],
    },
  ]
  let MenuContainer = useRef(null)
  let Menus: any = useRef(null)
  const [isOpen, setOpen] = useState(false)
  const handleClickOpenMenu = () => {
    let tl = gsap.timeline({ paused: false, yoyo: true })
    setOpen(!isOpen)
    if (!isOpen) {
      tl.to(MenuContainer.current, {
        width: "50%",
        height: "100%",
        opacity: 1,
        display: "block",
        position: "fixed",
        top: 0,
        right: 0,
        backgroundColor: "#BED754",
        transformOrigin: "left",
        zIndex: 10,
        duration: 0.6,
      })
      tl.to(Menus?.current?.children, {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        yoyo: true,
        duration: 0.2,
      })
    } else {
      tl.to(Menus?.current?.children, {
        x: 60,
        opacity: 0,
        stagger: 0.1,
        yoyo: true,
        duration: 0.2,
      })
      tl.to(MenuContainer.current, {
        width: "0px",
        height: "100%",
        opacity: 0,
        display: "none",
        position: "fixed",
        top: 0,
        right: 0,
        backgroundColor: "#BED754",
        transformOrigin: "left",
        duration: 0.6,
      })
    }
  }
  return (
    <>
      {isOpen ? (
        <button
          onClick={handleClickOpenMenu}
          className="p-2 fixed top-5 right-5 z-50 w-[50px] h-[50px] bg-black rounded-full text-[#f3f5f7] grid place-items-center border border-gray-600 border-opacity-30 "
        >
          {/* <ul className="p-3 bg-white border container mx-auto flex justify-evenly rounded-full">
         {headerList?.map((values) => {
           return <li>{values?.title}</li>
         })}
       </ul> */}
          <Close width={20} />
        </button>
      ) : (
        <button
          id="menuButton"
          onClick={handleClickOpenMenu}
          className="p-2 fixed top-5 right-5 z-20 w-[50px] h-[50px] bg-black rounded-full text-[#f3f5f7] grid place-items-center border border-gray-600 border-opacity-30 scale-0"
        >
          <MenuIcon width={20} />
        </button>
      )}

      <div
        ref={MenuContainer}
        className="w-[0px] h-full opacity-0 hidden  bg-lime-700 fixed top-0 right-0 z-10"
      >
        <ul ref={Menus} className={`h-full p-5 w-1/2 ${HeaderFont.className}`}>
          {headerList?.map((values) => {
            return (
              <li className="text-[4rem] cursor-pointer translate-x-20 opacity-0 italic tracking-wider">
                {values?.title}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default OptionButtons
