"use client"
import { DarkIcon } from "@/Utility/icons/icons"
import useGetFonts from "@/font/fonts"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import React from "react"

function AppHeader({ loggedUserData }: any) {
  const { ContentFont } = useGetFonts()
  const tab = useSearchParams()
  const router: any = useRouter()
  let isActiveTab = tab.get("tab")
  let tabItems: string[] = ["Messages", "Dashboard", "Status", "Settings"]

  const handleChangeTab = (tabValue: string) => {
    router.push(`/socialapp/?id=${tab.get("id")}&tab=${tabValue}`)
  }
  return (
    <nav
      className={`text-white bg-[#27272a]/50 p-1 col-span-12 flex justify-between items-center gap-2 ${ContentFont.className} rounded-lg`}
    >
      <ul className="flex  items-center gap-1 tracking-wide text-sm capitalize p-1">
        {tabItems.map((items) => {
          let setactive = isActiveTab === items
          return (
            <li
              style={
                setactive
                  ? { backgroundColor: loggedUserData?.theme?.primary }
                  : {}
              }
              key={items}
              onClick={() => handleChangeTab(items)}
              className={`p-2 rounded-lg cursor-pointer`}
            >
              {items}
            </li>
          )
        })}
      </ul>

      <div className="flex justify-end items-center gap-x-2">
        {/* <button className="bg-[#27272a] rounded-lg px-2 py-1 text-sm tracking-wide">
          Logout
        </button> */}
        <button className=" p-1">
          <DarkIcon width={20} className="text-white" />
        </button>

        <button
          title={loggedUserData?.email}
          style={{ backgroundColor: loggedUserData?.theme?.primary }}
          className="rounded overflow-hidden w-10 h-10 text-sm tracking-wide uppercase"
        >
          {/* {data?.User?.name[0]} */}
          <Image
            src={`https://robohash.org/${loggedUserData?.profileImage}`}
            alt="profile image"
            className="w-full h-full object-contain"
            width={500}
            height={500}
          />
        </button>
      </div>
    </nav>
  )
}

export default AppHeader
