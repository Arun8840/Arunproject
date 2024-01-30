import { SocialappStore } from "@/Store/SocialappStore"
import {
  BlockIcon,
  MuteIcon,
  PriorityIcon,
  RightArrow,
} from "@/Utility/icons/icons"
import useGetFonts from "@/font/fonts"
import { UsersTypes } from "@/model/SocialAppTypes"
import React from "react"

function ChatUserDetails() {
  const userDatas: UsersTypes = SocialappStore(
    (state: any) => state.UserDetails
  )
  const { ContentFont } = useGetFonts()
  return (
    <div
      className={`bg-[#27272a]/50 rounded-lg col-span-2 min-h-[92vh] max-h-[92vh] overflow-y-auto ${ContentFont.className} p-1 flex flex-col gap-2`}
    >
      <h1 className="text-white capitalize tracking-wide text-center">
        Details
      </h1>

      {/*//todo profile logo */}
      <div className="bg-pink-600 w-[150px] h-[150px] mx-auto rounded-full grid place-items-center relative">
        <h1 className="text-white text-3xl">
          {userDatas && userDatas?.name && userDatas?.name[0]}
        </h1>

        {/* pin icon */}
        {userDatas?.isPinned ? (
          <button className="bg-white rounded-full p-1 absolute top-0 right-4">
            <PriorityIcon width={20} className="text-pink-600 rotate-45" />
          </button>
        ) : null}
      </div>

      {/* //todod user name header */}
      <h1 className="text-white text-center tracking-wider font-bold">
        {userDatas?.name ?? "Default Name"}
      </h1>

      {/* //todo action buttons */}
      <div className="flex gap-2">
        <button className="flex-1 w-fit rounded bg-[#27272a]/50 text-sm flex items-center justify-center p-2 gap-2 text-white  tracking-wider transition-colors duration-200 hover:text-pink-600">
          <h1>Mute</h1>
          <MuteIcon width={20} />
        </button>
        <button className="flex-1 w-fit rounded bg-[#27272a]/50 text-sm flex items-center justify-center p-2 gap-2 text-white  tracking-wider transition-colors duration-200 hover:text-pink-600">
          <h1>Block</h1>
          <BlockIcon width={20} />
        </button>
      </div>

      {/* //todo media */}
      <div className="grid gap-1">
        <div className="text-white flex justify-between items-center bg-[#101010] p-2 rounded">
          <h1 className="text-sm">Media</h1>
          <RightArrow width={15} className="text-white" />
        </div>

        <div className="text-white flex justify-between items-center bg-[#101010] p-2 rounded">
          <h1 className="text-sm">Star Messages</h1>
          <RightArrow width={15} className="text-white" />
        </div>

        <div className="text-white flex justify-between items-center bg-[#101010] p-2 rounded">
          <h1 className="text-sm">Chat Themes</h1>
          <RightArrow width={15} className="text-white" />
        </div>
      </div>
    </div>
  )
}

export default ChatUserDetails
