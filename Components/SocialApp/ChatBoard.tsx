import { SocialappStore } from "@/Store/SocialappStore";
import Input from "@/Utility/components/Input";
import {
  AttachIcon,
  EmojiPicker,
  SendIcon,
  Trash,
} from "@/Utility/icons/icons";
import useGetFonts from "@/font/fonts";
import getSocialAppServices from "@/service/SocialAppService";
import { cookies } from "next/headers";
import React, { useEffect, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { io } from "socket.io-client";

import useSWR, { mutate } from "swr";
interface formTypes {
  message: string;
}
function ChatBoard() {
  const { ContentFont } = useGetFonts();
  const LoggedUser = SocialappStore((state: any) => state.LoggedUser);
  const socket: any = useRef();
  const { loadAllMessages } = getSocialAppServices();
  const { sendMessage } = getSocialAppServices();

  // todo form state
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formTypes>();
  // const CurrentUser = SocialappStore((state: any) => state.LoggedUser)
  const SelectedUser = SocialappStore((state: any) => state.UserDetails);
  // todo send message action
  const onSubmit: SubmitHandler<formTypes> = async (data) => {
    if (data) {
      let messageData = {
        ...data,
        from: LoggedUser?.User?._id,
        to: SelectedUser?.User?._id,
      };
      socket.current.emit("send-msg", {
        from: LoggedUser?.User?._id,
        to: SelectedUser?.User?._id,
        message: data?.message,
      });

      let response = await sendMessage(messageData);
      response && reset();
    }
  };

  // todo loading all users
  const fetcher = async () => {
    let MessagesData = {
      from: LoggedUser?.User?._id,
      to: SelectedUser?.User?._id,
    };
    let res: any = await loadAllMessages(MessagesData);
    return res;
  };
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
  );

  useEffect(() => {
    if (LoggedUser?.User?._id) {
      socket.current = io("http://localhost:5001");
      socket.current.emit("add-user", LoggedUser?.User?._id);
    }
    if (socket.current) {
      socket.current.on("msg-recive", (msg: any) => {});
    }
  }, [LoggedUser?.User?._id]);

  return (
    <div
      className={`rounded col-span-8 overflow-y-auto ${ContentFont.className} relative flex flex-col gap-2`}
    >
      {/* //todo input box */}
      <div className="p-2 w-full flex-1 rounded-lg flex flex-col gap-2 justify-end">
        {/* //todo recived message */}

        {Messages?.projectMessages?.map((values: any, index: number) => {
          let isSendedMessage = values?.fromSelf;
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
          );
        })}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex gap-1 items-center"
      >
        <button className="bg-[#27272a]/50 text-yellow-500 rounded p-3">
          <EmojiPicker width={18} />
        </button>
        <Input
          name="message"
          type="text"
          placeholder="Text your message ...."
          register={register}
          className="bg-[#27272a]/50 outline-none p-2 rounded w-full text-white flex-1 h-full"
          required={true}
        />
        <button className="bg-[#27272a]/50 text-white rounded p-3">
          <AttachIcon width={18} />
        </button>
        <button className="bg-[green] hover:zbg-pink-600 transition-colors duration-200 text-white rounded p-3">
          <SendIcon width={18} />
        </button>
      </form>
    </div>
  );
}

export default ChatBoard;
