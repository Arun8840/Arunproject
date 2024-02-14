"use client"
import { AddIcon, MuteIcon } from "@/Utility/icons/icons"
import useGetFonts from "@/font/fonts"
import Image from "next/image"
import React from "react"
import ChatBoard from "../ChatBoard"
import ChatUserDetails from "../ChatUserDetails"
import { SocialappStore } from "@/Store/SocialappStore"
import useSWR from "swr"
import Drawer from "@/Utility/Uicomponents/Drawer/Drawer"
import gsap, { Power3 } from "gsap"
import getSocialAppServices from "@/service/SocialAppService"
import { useSearchParams } from "next/navigation"
import { useSession } from "next-auth/react"

interface UsersTypes {
  _id: string
  name: string
  email: string
  profileImage: string
  description: string
  theme: string
  createdAt: string
  updatedAt: string
  __v: number
  isMutted: boolean
  isPinned: boolean
}
function Messages() {
  const { ContentFont } = useGetFonts()
  const { data }: any = useSession()
  const { loadUserFriends } = getSocialAppServices()
  const LoadFriend = SocialappStore((state: any) => state.loadParticularUser)
  const userDetails = SocialappStore((state: any) => state.UserDetails)
  const router = useSearchParams()
  const userID: string | any = router.get("id")
  // todo loading all users
  const fetcher = async () => {
    let res: UsersTypes[] = await loadUserFriends(userID)
    return res
  }
  const {
    data: friends,
    error,
    isLoading,
  } = useSWR("/api/user-friends", fetcher, {
    revalidateOnFocus: false,
  })

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

  // todo handle select user
  const handleSelectFriend = async (friendId: string) => {
    await LoadFriend(friendId)
  }
  return (
    <>
      <Drawer handleCloseDrawer={handleCloseDrawer}>
        <div
          className={`flex flex-col justify-between rounded col-span-2 w-full h-full overflow-y-auto p-1 ${ContentFont.className} bg-white relative`}
        >
          <div className="w-full">
            <input
              type="text"
              placeholder="search..."
              className="rounded border outline-none p-2  w-full text-white"
            />
            {!isLoading && (
              <ul className="grid gap-1 auto-rows-max  py-2 max-h-[85vh] overflow-y-auto">
                {friends &&
                  friends?.map((items, index: number) => {
                    return (
                      <li
                        style={
                          items?.name === userDetails?.name
                            ? {
                                backgroundColor: data?.user?.theme?.primary,
                                color: "white",
                                borderRadius: "5px",
                              }
                            : {}
                        }
                        onClick={() => handleSelectFriend(items?._id)}
                        key={items?.name}
                        className={` px-1 py-2 flex gap-2 cursor-pointer hover:bg-[#009ff7] transition-colors duration-150 `}
                      >
                        <div
                          className={`w-[45px] h-[45px] grid place-items-center ${
                            items?.name === userDetails?.name &&
                            "bg-white rounded-full"
                          }`}
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
                            <h1 className="text-xs lg:text-sm tracking-wide">
                              {items?.name}
                            </h1>
                            {items?.isMutted && (
                              <button className="text-white text-xs lg:text-sm tracking-wide">
                                <MuteIcon width={15} />
                              </button>
                            )}
                          </div>
                        </div>
                      </li>
                    )
                  })}
              </ul>
            )}
          </div>

          {/* //todo new user add button */}
          <button
            onClick={handleOpenDrawer}
            style={{ backgroundColor: data?.user?.theme?.primary }}
            className="transition-colors duration-150 rounded p-2 text-sm flex justify-center items-center text-white tracking-wide w-full"
          >
            Add friend
            <AddIcon width={20} className="text-white" />
          </button>
        </div>
      </Drawer>

      <ChatBoard />
      <ChatUserDetails />
    </>
  )
}

export default Messages
