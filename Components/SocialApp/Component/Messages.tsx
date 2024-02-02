"use client"
import { AddIcon, PriorityIcon } from "@/Utility/icons/icons"
import useGetFonts from "@/font/fonts"
import Image from "next/image"
import React from "react"
import ChatBoard from "../ChatBoard"
import ChatUserDetails from "../ChatUserDetails"
import { SocialappStore } from "@/Store/SocialappStore"
import getSocialAppServices from "@/service/SocialAppService"
import useSWR from "swr"
import Drawer from "@/Utility/Uicomponents/Drawer/Drawer"
import gsap, { Power3 } from "gsap"
import { useSearchParams } from "next/navigation"

interface UsersTypes {
  _id: string
  name: string
  email: string
  profileImage: string
  description: string
  theme: string
  createdAt: string
  updatedAt: string
  __v: 0
}
function Messages() {
  const { ContentFont } = useGetFonts()

  // todo action
  const selected = SocialappStore((state: any) => state.loadParticularUser)
  const loadAllUserData = SocialappStore((state: any) => state.loadAllUsers)

  // todo loading all users
  const fetcher = async () => {
    let res: UsersTypes[] = await loadAllUserData()
    return res
  }
  const { data, error, isLoading } = useSWR("/api/user", fetcher, {
    revalidateOnFocus: false,
  })

  const handleSelecteUser = (user: UsersTypes, profileImageID: number) => {
    selected(user?._id, profileImageID)
  }

  const handleOpenDrawer = () => {
    let tl = gsap.timeline({ paused: false })

    tl.to("#drawerContainer", {
      opacity: 1,
      display: "flex",
      duration: 0.2,
      ease: Power3.easeInOut,
    })

    tl.to("#drawerForm", {
      opacity: 1,
      y: 0,
      duration: 0.2,
      ease: Power3.easeInOut,
    })
  }
  const handleCloseDrawer = () => {
    let tl = gsap.timeline({ paused: false })
    tl.to("#drawerForm", {
      opacity: 0,
      y: "100%",
      duration: 0.2,
      ease: Power3.easeInOut,
    })
    tl.to("#drawerContainer", {
      opacity: 0,
      display: "none",
      duration: 0.2,
      ease: Power3.easeInOut,
    })
  }
  return (
    <Drawer handleCloseDrawer={handleCloseDrawer}>
      <div
        className={` rounded-lg col-span-2 min-h-[92vh] max-h-[92vh] overflow-y-auto p-1 ${ContentFont.className} bg-[#27272a]/50 relative`}
      >
        <div className="flex gap-1">
          <input
            type="text"
            placeholder="search..."
            className="rounded-lg bg-[#27272a] outline-none px-2 py-1  w-full text-white"
          />
          {/* //todo new user add button */}
          <button
            onClick={handleOpenDrawer}
            className="bg-[#27272a] hover:bg-pink-600 transition-colors duration-150 rounded-lg p-2"
          >
            <AddIcon width={20} className="text-white" />
          </button>
        </div>
        {!isLoading && (
          <ul className="grid gap-1 py-2 divide-y divide-gray-600 divide-opacity-15 ">
            {data &&
              data?.map((items, index: number) => {
                return (
                  <li
                    onClick={() => handleSelecteUser(items, index + 1)}
                    key={items?.name}
                    className=" p-1 flex gap-2 cursor-pointer bg-[#27272a] rounded-lg"
                  >
                    <div
                      className={`w-[45px] h-[45px] bg-yellow-50 rounded grid place-items-center`}
                    >
                      {items?.profileImage ? (
                        <Image
                          src={`https://robohash.org/${items?.profileImage}`}
                          alt="profile image"
                          className="w-full h-full object-contain"
                          width={500}
                          height={500}
                        />
                      ) : (
                        <h1 className="font-bold uppercase">
                          {items?.name[0]}
                        </h1>
                      )}
                    </div>
                    <div className="flex justify-between flex-col flex-1">
                      <div className="flex w-full justify-between">
                        <h1 className="text-white text-xs lg:text-sm tracking-wide">
                          {items?.name}
                        </h1>
                        {/* <small className="text-slate-500">{items?.activeOn}</small> */}
                      </div>
                      <div className="flex items-center justify-end gap-2">
                        {/* {items?.isPinned && (
                      <PriorityIcon
                        width={18}
                        className="text-pink-600 rotate-45"
                      />
                    )} */}
                        <small className="text-white rounded bg-red-500 text-sm w-[20px] h-[20px] grid place-items-center">
                          3
                        </small>
                      </div>
                    </div>
                  </li>
                )
              })}
          </ul>
        )}
      </div>

      <ChatBoard />
      <ChatUserDetails />
    </Drawer>
  )
}

export default Messages
