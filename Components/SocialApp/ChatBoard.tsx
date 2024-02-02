import { SocialappStore } from "@/Store/SocialappStore"
import Input from "@/Utility/components/Input"
import { AttachIcon, SendIcon, Trash } from "@/Utility/icons/icons"
import useGetFonts from "@/font/fonts"
import getSocialAppServices from "@/service/SocialAppService"
import React, { useEffect, useRef } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { io } from "socket.io-client"

import useSWR, { mutate } from "swr"
interface formTypes {
  message: string
}
function ChatBoard() {
  const { ContentFont } = useGetFonts()
  const socket: any = useRef()
  const { loadAllMessages } = getSocialAppServices()
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<formTypes>()
  const { sendMessage } = getSocialAppServices()
  const CurrentUser = SocialappStore((state: any) => state.LoggedUser)
  const SelectedUser = SocialappStore((state: any) => state.UserDetails)
  const onSubmit: SubmitHandler<formTypes> = async (data) => {
    if (data) {
      let messageData = {
        ...data,
        from: CurrentUser?.User?._id,
        to: SelectedUser?.User?._id,
      }
      // socket.current.emit("send-msg", {
      //   from: CurrentUser?.User?._id,
      //   to: SelectedUser?.User?._id,
      //   message: data?.message,
      // })

      let response = await sendMessage(messageData)
      response && mutate(`/api/load-messages/${SelectedUser?.User?._id}`)
    }
  }

  // todo loading all users
  const fetcher = async () => {
    let MessagesData = {
      from: CurrentUser?.User?._id,
      to: SelectedUser?.User?._id,
    }
    let res: any = await loadAllMessages(MessagesData)
    return res
  }
  const {
    data: Messages,
    error,
    isLoading,
  } = useSWR(
    SelectedUser?.User?._id
      ? `/api/load-messages/${SelectedUser?.User?._id}`
      : null,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  )

  // useEffect(() => {
  //   if (CurrentUser) {
  //     socket.current = io(host)
  //     socket.current.emit("add-user", CurrentUser?.User?._id)
  //   }
  //   if (socket.current) {
  //     socket.current.on("msg-recive", (msg: any) => {
  //       console.log(msg)
  //     })
  //   }
  // }, [])

  return (
    <div
      className={` rounded-lg col-span-8 min-h-[92vh] max-h-[92vh] overflow-y-auto ${ContentFont.className} relative flex flex-col gap-2`}
    >
      {/* //todo input box */}
      <div className="p-2 w-full flex-1 rounded-lg flex flex-col gap-2 justify-end">
        {/* //todo recived message */}

        {Messages?.projectMessages?.map((values: any, index: number) => {
          let isSendedMessage = values?.fromSelf
          return (
            <div
              key={index + 1}
              className={`flex ${
                isSendedMessage ? "justify-end" : "justify-start"
              } tracking-wider text-sm`}
            >
              <div
                className={`flex flex-col ${
                  isSendedMessage ? "items-end" : "items-start"
                } gap-2 w-1/2`}
              >
                <h1
                  className={`text-white ${
                    isSendedMessage ? "bg-pink-600" : "bg-indigo-600"
                  }  w-fit p-2 rounded-s-xl rounded-tr-lg`}
                >
                  {values?.message}
                </h1>
              </div>
            </div>
          )
        })}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full rounded-lg flex items-center gap-1"
      >
        <Input
          name="message"
          type="text"
          placeholder="Text your message ...."
          register={register}
          className="rounded-lg bg-[#27272a]/50 outline-none p-2  w-full text-white flex-1"
          required={true}
        />
        <button className="bg-[#27272a] text-white rounded-lg p-3">
          <AttachIcon width={15} />
        </button>
        <button className="bg-pink-600 text-white rounded-lg p-3">
          <SendIcon width={15} />
        </button>
      </form>
    </div>
  )
}

export default ChatBoard
