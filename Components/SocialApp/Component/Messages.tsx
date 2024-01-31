import { AddIcon, PriorityIcon } from "@/Utility/icons/icons"
import useGetFonts from "@/font/fonts"
import Image from "next/image"
import React from "react"
import ChatBoard from "../ChatBoard"
import ChatUserDetails from "../ChatUserDetails"
import { SocialappStore } from "@/Store/SocialappStore"
import { UsersTypes } from "@/model/SocialAppTypes"

function Messages() {
  const { ContentFont } = useGetFonts()
  // !store data
  const userDatas: UsersTypes[] = SocialappStore(
    (state: any) => state.UserDatas
  )

  // todo action
  const selected = SocialappStore((state: any) => state.SelectUser)

  const handleSelecteUser = (user: UsersTypes) => {
    selected(user)
  }
  return (
    <>
      <div
        className={` rounded-lg col-span-2 min-h-[92vh] max-h-[92vh] overflow-y-auto p-1 ${ContentFont.className} bg-[#27272a]/50 relative`}
      >
        <div className="flex gap-2">
          {/* //todo new user add button */}
          <button className="bg-pink-600 rounded-lg p-2">
            <AddIcon width={20} className="text-white" />
          </button>
          <input
            type="text"
            placeholder="search..."
            className="rounded bg-[#27272a] outline-none px-2 py-1  w-full text-white"
          />
        </div>
        <ul className="grid gap-1 py-2 divide-y divide-gray-600 divide-opacity-15 ">
          {userDatas.map((items) => {
            return (
              <li
                onClick={() => handleSelecteUser(items)}
                key={items?.name}
                className=" p-1 flex gap-2 cursor-pointer"
              >
                <div
                  style={{
                    backgroundColor: items?.theme?.primary
                      ? items?.theme?.primary
                      : "#db2777",
                    color: "white",
                  }}
                  className={`w-[45px] h-[45px] bg-[#101010] rounded-full grid place-items-center`}
                >
                  {items?.image ? (
                    <Image
                      src={""}
                      alt="profile image"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <h1 className="font-bold uppercase">{items?.name[0]}</h1>
                  )}
                </div>
                <div className="flex justify-between flex-col flex-1">
                  <div className="flex w-full justify-between">
                    <h1 className="text-white text-xs lg:text-sm tracking-wide">
                      {items?.name}
                    </h1>
                    <small className="text-slate-500">{items?.activeOn}</small>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    {items?.isPinned && (
                      <PriorityIcon
                        width={18}
                        className="text-pink-600 rotate-45"
                      />
                    )}
                    <small className="text-white rounded-full bg-red-500 text-sm w-[20px] h-[20px] grid place-items-center">
                      3
                    </small>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      <ChatBoard />
      <ChatUserDetails />
    </>
  )
}

export default Messages
