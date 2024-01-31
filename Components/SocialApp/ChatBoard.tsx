import { AttachIcon, SendIcon, Trash } from "@/Utility/icons/icons"
import useGetFonts from "@/font/fonts"
import React from "react"

function ChatBoard() {
  const { ContentFont } = useGetFonts()
  return (
    <div
      className={` rounded-lg col-span-8 min-h-[92vh] max-h-[92vh] overflow-y-auto ${ContentFont.className} relative flex flex-col gap-2`}
    >
      {/* //todo input box */}
      <div className="p-2 w-full flex-1 rounded-lg flex flex-col gap-2 justify-end">
        {/* //todo recived message */}
        <div className="flex justify-start tracking-wider text-sm">
          <div className="flex flex-col items-start gap-2 w-1/2">
            <h1 className="text-white bg-indigo-600 w-fit p-2 rounded-e-xl rounded-tl-lg">
              hello world !!
            </h1>
            <h1 className="text-white bg-indigo-600 w-fit p-2 rounded-e-xl rounded-tl-lg group relative">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem eveniet numquam ex, ab, veniam iure maxime recusandae
              repellat eaque consequatur, eum aliquam reiciendis molestias sunt
              facilis. Sit laboriosam itaque nulla?
              {/* //todo edit delete buttons */}
              <button className="bg-red-600 rounded-full absolute -top-3 -right-2 size-7 grid place-items-center scale-0 group-hover:scale-[1] group-hover:delay-500 transition-all duration-200">
                <Trash width={15} className="text-white" />
              </button>
            </h1>
          </div>
        </div>
        {/* //todo sended message */}
        <div className="flex justify-end tracking-wider text-sm">
          <div className="flex flex-col items-end gap-2 w-1/2">
            <h1 className="text-white bg-pink-600 w-fit p-2 rounded-s-xl rounded-tr-lg">
              hello world !!
            </h1>
            <h1 className="text-white bg-pink-600 w-fit p-2 rounded-s-xl rounded-tr-lg">
              hi
            </h1>
            <h1 className="text-white bg-pink-600 w-fit p-2 rounded-s-xl rounded-tr-lg">
              hello world !!
            </h1>
            <h1 className="text-white bg-pink-600 w-fit p-2 rounded-s-xl rounded-tr-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              voluptatibus rerum sequi eveniet. Laborum, aperiam provident iusto
              dolores commodi adipisci labore! Repudiandae veniam sequi tenetur
              quaerat porro, facilis quasi eum.
            </h1>
            <h1 className="text-white bg-pink-600 w-fit p-2 rounded-s-xl rounded-tr-lg">
              Lorem ipsum dolor sit amet, Repudiandae veniam sequi tenetur
              quaerat porro, facilis quasi eum.
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full rounded-lg flex items-center gap-1">
        <input
          type="text"
          placeholder="Text message..."
          className="rounded-lg bg-[#27272a]/50 outline-none p-2  w-full text-white flex-1"
        />
        <button className="bg-[#27272a] text-white rounded-lg p-3">
          <AttachIcon width={15} />
        </button>
        <button className="bg-pink-600 text-white rounded-lg p-3">
          <SendIcon width={15} />
        </button>
      </div>
    </div>
  )
}

export default ChatBoard
