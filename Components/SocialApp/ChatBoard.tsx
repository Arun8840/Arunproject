import { AttachIcon, SendIcon } from "@/Utility/icons/icons"
import useGetFonts from "@/font/fonts"
import React from "react"

function ChatBoard() {
  const { ContentFont } = useGetFonts()
  return (
    <div
      className={` rounded-lg col-span-8 min-h-[92vh] max-h-[92vh] overflow-y-auto ${ContentFont.className} p-2 relative flex flex-col gap-2`}
    >
      {/* //todo input box */}
      <div className="p-2 w-full flex-1"></div>
      <div className="w-full rounded-lg flex items-center gap-1 p-1">
        <input
          type="text"
          placeholder="text message..."
          className="rounded-full bg-[#27272a]/50 outline-none p-2  w-full text-white flex-1"
        />
        <button className="bg-[#27272a] text-white rounded-full p-3">
         <AttachIcon width={15} />
        </button>
        <button className="bg-pink-600 text-white rounded-full p-3">
        <SendIcon width={15} />
        </button>
      </div>
    </div>
  )
}

export default ChatBoard
