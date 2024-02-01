import { SocialappStore } from "@/Store/SocialappStore"
import { DarkIcon } from "@/Utility/icons/icons"
import useGetFonts from "@/font/fonts"
import { UsersTypes } from "@/model/SocialAppTypes"
import getSocialAppServices from "@/service/SocialAppService"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import React, { useEffect } from "react"
import useSWR from "swr"

function AppHeader() {
  const { ContentFont } = useGetFonts()
  const { loadUser } = getSocialAppServices()
  const loggedUser = SocialappStore((state: any) => state.loadloggedUser)
  const tab = useSearchParams()
  const router: any = useRouter()
  let isActiveTab = tab.get("tab")
  let UserID: any = tab.get("id")
  let tabItems: string[] = ["Messages", "Dashboard", "Status", "Settings"]

  const handleChangeTab = (tabValue: string) => {
    router.push(`/socialapp/?id=${tab.get("id")}&tab=${tabValue}`)
  }

  // todo loading all users
  const fetcher = async () => {
    let res: any = await loadUser(UserID)
    return res
  }
  const { data, error, isLoading } = useSWR("/api/particularUser", fetcher, {
    revalidateOnFocus: false,
  })

  useEffect(() => {
    loggedUser(UserID)
  }, [])
  return (
    <nav
      className={`text-white bg-[#27272a]/50 p-1 col-span-12 flex justify-between items-center gap-2 ${ContentFont.className} rounded-lg`}
    >
      <ul className="flex  items-center gap-1 tracking-wide text-sm capitalize p-1">
        {tabItems.map((items) => {
          let setactive = isActiveTab === items
          return (
            <li
              key={items}
              onClick={() => handleChangeTab(items)}
              className={`px-2 py-1 rounded-lg cursor-pointer ${
                setactive && "bg-pink-600"
              }`}
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
          title={data?.User?.email}
          className="rounded overflow-hidden border-gray-600 border-opacity-50 w-10 h-10 text-sm tracking-wide uppercase bg-white"
        >
          {/* {data?.User?.name[0]} */}
          <Image
            src={`https://robohash.org/1`}
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
