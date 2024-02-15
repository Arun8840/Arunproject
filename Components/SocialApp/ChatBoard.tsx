import { SocialappStore } from "@/Store/SocialappStore"
import useGetFriendThemes from "@/Utility/Style"
import Input from "@/Utility/components/Input"
import {
  AttachIcon,
  EmojiPicker,
  LoaderIcon,
  SendIcon,
  Trash,
} from "@/Utility/icons/icons"
import useGetFonts from "@/font/fonts"
import getSocialAppServices from "@/service/SocialAppService"
import { useSession } from "next-auth/react"
import Image from "next/image"
import React, { useCallback, useEffect, useRef } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { io } from "socket.io-client"

import useSWR from "swr"
interface formTypes {
  message: string
}
function ChatBoard() {
  const socket = io("http://localhost:8000")
  const { ContentFont } = useGetFonts()
  const session: any = useSession()
  const { theme } = useGetFriendThemes()
  const IsUserDetails = SocialappStore((state: any) => state.UserDetails)
  const SelectedUser = SocialappStore((state: any) => state.UserDetails)
  const { loadAllMessages } = getSocialAppServices()
  const { sendMessage } = getSocialAppServices()

  // todo form state
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formTypes>()
  // const CurrentUser = SocialappStore((state: any) => state.LoggedUser)

  // todo send message action
  const onSubmit: SubmitHandler<formTypes> = async (data) => {
    if (data) {
      let messageData = {
        ...data,
        from: session?.data?.user?.id,
        to: SelectedUser?._id,
        profileImage: session?.data?.user?.image,
      }
      socket.on("connect", () => {
        console.log(socket.id)
      })
      // socket.emit("private message", {
      //   from: session?.data?.user?.id,
      //   to: SelectedUser?._id,
      //   message: data?.message,
      // })
      socket.emit(
        "private message",
        SelectedUser.email,
        data?.message,
        session?.data?.user?.id
      )
      let response = await sendMessage(messageData)
      response && reset()
    }
  }

  // todo loading all users
  const fetcher = useCallback(async () => {
    let MessagesData = {
      from: session?.data?.user?.id,
      to: SelectedUser?._id,
    }
    let res: any = await loadAllMessages(MessagesData)
    return res
  }, [SelectedUser?._id])

  const {
    data: Messages,
    error,
    isLoading,
  } = useSWR(
    SelectedUser?._id ? ["/load-user-messages", SelectedUser?._id] : null,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  )

  useEffect(() => {
    // Close the socket connection when the component unmounts
    return () => {
      socket.disconnect()
    }
  }, [])
  return (
    <div
      className={`rounded bg-white p-1 ${
        IsUserDetails ? "col-span-8" : "col-span-10"
      } overflow-y-auto ${
        ContentFont.className
      } relative flex flex-col justify-between gap-1`}
    >
      <div className="h-full max-h-[92vh] overflow-y-auto">
        {/* //todo input box */}
        {isLoading ? (
          <div className="min-h-[90vh] h-full grid place-items-center">
            <LoaderIcon />
          </div>
        ) : Messages?.projectMessages?.length > 0 ? (
          <div className="p-2 w-full flex-1 rounded-lg flex flex-col gap-2 justify-start">
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
                    <div className="flex items-start gap-2">
                      <h1
                        style={
                          isSendedMessage
                            ? {
                                backgroundColor:
                                  session?.data?.user?.theme?.primary,
                              }
                            : { backgroundColor: theme?.primary }
                        }
                        className={`text-white w-fit p-2 rounded-s-xl rounded-tr-lg flex-1 shadow-lg ${
                          !isSendedMessage && "order-1"
                        }`}
                      >
                        {values?.message}
                      </h1>
                      {/* //todo profile image */}
                      <div
                        style={
                          isSendedMessage
                            ? {
                                backgroundColor:
                                  session?.data?.user?.theme?.primary,
                              }
                            : { backgroundColor: theme?.primary }
                        }
                        className="w-[40px] h-[40px] bg-white rounded-xl overflow-hidden shadow-lg"
                      >
                        <Image
                          src={`https://robohash.org/${
                            isSendedMessage
                              ? session?.data?.user?.image
                              : SelectedUser?.profileImage
                          }`}
                          alt="profile image"
                          className="w-full h-full object-contain"
                          width={500}
                          height={500}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="w-full min-h-[90vh] grid place-items-center">
            No messages found !!
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex gap-1 items-center"
      >
        <button
          type="button"
          className="bg-yellow-400 text-yellow-700 rounded-full p-3"
        >
          <EmojiPicker width={18} />
        </button>
        <Input
          name="message"
          type="text"
          placeholder="Text your message ...."
          register={register}
          className="bg-white outline-none p-2 rounded-full w-full  flex-1 h-full border border-stone-600/50"
          required={true}
        />
        <button className="bg-[#009ff7] text-white rounded-full p-3 ">
          <AttachIcon width={18} />
        </button>
        <button className="bg-[#007965] transition-colors duration-200 text-white rounded-full h-full px-4 flex justify-center items-center gap-x-2">
          <SendIcon width={15} /> <small>send</small>
        </button>
      </form>
    </div>
  )
}

export default ChatBoard
