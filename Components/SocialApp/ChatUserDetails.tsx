import { SocialappStore } from "@/Store/SocialappStore"
import Accordion from "@/Utility/Uicomponents/Accordion/Accordion"
import Colorpallets from "@/Utility/Uicomponents/Colorpallets"
import Input from "@/Utility/components/Input"
import {
  BlockIcon,
  Close,
  EditIcon,
  MediaIcon,
  MuteIcon,
  PriorityIcon,
  RatingIcon,
  SaveIcon,
  ThemeIcon,
  Trash,
  UnMuteIcon,
} from "@/Utility/icons/icons"
import useGetFonts from "@/font/fonts"
import Image from "next/image"
import React, { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { mutate } from "swr"

interface accordionTypes {
  name: string
  icon: any
  children: any[]
  openDefault: boolean
}
interface FormTypes {
  name: string
  email: string
  password: string
  theme: any
  profileImage: number
}
function ChatUserDetails() {
  const UpdateUser = SocialappStore((state: any) => state?.updateFriend)
  const userDatas: any = SocialappStore((state: any) => state.UserDetails)
  const [isEdit, setEdit] = useState({
    status: false,
    theme: {},
  })
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>({
    defaultValues: {
      name: userDatas?.name,
      email: userDatas?.email,
    },
  })
  const IsMutted: any = SocialappStore((state: any) => state.isMuteFriend)
  const DeleteFriend: any = SocialappStore((state: any) => state.deleteFriend)
  const { ContentFont } = useGetFonts()

  let AccordionItems: accordionTypes[] = [
    {
      name: "Media",
      icon: MediaIcon,
      children: [],
      openDefault: false,
    },
    {
      name: "Star Messages",
      icon: RatingIcon,
      children: [],
      openDefault: false,
    },
    {
      name: "Chat Themes",
      icon: ThemeIcon,
      children: [
        {
          name: "Dune",
          themeName: "Frank Herbert",
          primary: "#F9A825",
          secondary: "#FFD54F",
          sidebar: "#FF8F00",
          mainBackground: "#212121",
        },
        {
          name: "Snow Crash",
          themeName: "Neal Stephenson",
          primary: "#1A237E",
          secondary: "#283593",
          sidebar: "#0D47A1",
          mainBackground: "#E8EAF6",
        },
      ],
      openDefault: true,
    },
  ]

  const handleDeleteUser = async () => {
    let response = await DeleteFriend(userDatas?._id)
    response && mutate("/api/user-friends")
  }

  // todo handle mute user
  const handleMuteFriend = async () => {
    let friendData = {
      id: userDatas?._id,
      isMutted: true,
    }
    let response = await IsMutted(friendData)
    response && mutate("/api/user-friends")
  }

  // todo handle Unmute user
  const handleUnMuteFriend = async () => {
    let friendData = {
      id: userDatas?._id,
      isMutted: false,
    }
    let response = await IsMutted(friendData)
    response && mutate("/api/user-friends")
  }

  // todo handle change friends theme
  const handleChangeEdit = () => {
    setEdit((prev) => ({ ...prev, status: true }))
  }

  // todo theme change handler
  const hadnleChangeTheme = (items: any) => {
    setEdit((prev) => ({
      ...prev,
      theme: {
        ...prev?.theme,
        themeName: items?.themeName,
        primary: items?.primary,
        secondary: items?.secondary,
      },
    }))
  }
  const handleSave: SubmitHandler<FormTypes> = async (data) => {
    if (data) {
      let saveData = {
        ...data,
        id: userDatas?._id,
        theme: isEdit?.theme,
        isPinned: userDatas?.isPinned,
        isMutted: userDatas?.isMutted,
        profileImage: userDatas?.profileImage,
      }
      setEdit((prev) => ({ ...prev, status: false }))
      let response = await UpdateUser(saveData)
      response && mutate("/api/user-friends")
    }
  }

  const handleSaveClick = () => {
    handleSubmit(handleSave)()
  }

  return (
    userDatas && (
      <div
        className={`bg-white rounded col-span-2 overflow-y-auto ${ContentFont.className} p-1 flex flex-col gap-2`}
      >
        <div className="flex justify-between items-center px-1 ">
          <h1 className=" capitalize tracking-wide text-center flex-1">
            Details
          </h1>
          {isEdit?.status ? (
            <div className="flex items-center gap-2">
              <button
                onClick={handleSaveClick}
                title="Edit User"
                className="bg-green-700 rounded py-1 px-2 flex items-center gap-2"
              >
                <SaveIcon width={20} />{" "}
                <small className="text-white">save</small>
              </button>
              <button
                onClick={() => setEdit((prev) => ({ ...prev, status: false }))}
                title="Edit User"
                className="bg-stone-700 rounded py-1 px-2 flex items-center gap-2"
              >
                <Close width={20} />{" "}
                <small className="text-white">Cancel</small>
              </button>
            </div>
          ) : (
            <button
              onClick={handleChangeEdit}
              title="Edit User"
              className="bg-[#009ff7] text-white rounded p-1"
            >
              <EditIcon width={20} />
            </button>
          )}
        </div>

        {/*//todo profile logo */}
        <div className="w-[200px]  mx-auto rounded grid place-items-center relative overflow-hidden">
          <Image
            src={`https://robohash.org/${userDatas?.profileImage}`}
            alt="profile image"
            className="w-full h-full object-contain"
            width={500}
            height={500}
          />

          {/* pin icon */}
          {userDatas?.isPinned ? (
            <button className="bg-white rounded-full p-1 absolute top-0 right-4">
              <PriorityIcon width={20} className="text-pink-600 rotate-45" />
            </button>
          ) : null}
        </div>

        <div>
          {/* //todod user name header */}
          {isEdit?.status ? (
            <form onSubmit={handleSubmit(handleSave)}>
              <label htmlFor="name" className="py-3 block">
                Name :
                <small className="capitalize tracking-wide text-red-500 px-2">
                  {errors?.name?.message}
                </small>
              </label>
              <Input
                register={register}
                required={true}
                name="name"
                className={`border ${
                  errors?.name?.message ? "border-red-500" : "border-[#27272a]"
                } rounded-lg p-2 outline-none bg-inherit w-full `}
                type="text"
              />

              <label htmlFor="email" className="py-3 block ">
                Email :
                <small className="capitalize tracking-wide text-red-500 px-2">
                  {errors?.email?.message}
                </small>
              </label>
              <Input
                register={register}
                required={true}
                name="email"
                className={`border ${
                  errors?.email?.message ? "border-red-500" : "border-[#27272a]"
                } rounded-lg p-2 outline-none bg-inherit w-full `}
                type="text"
              />
            </form>
          ) : (
            <>
              <h1 className="px-2 tracking-wider font-bold capitalize">
                {userDatas?.name ?? "Default Name"}
              </h1>
              <span className="px-2 text-xs tracking-wider">
                {userDatas?.email}
              </span>
              <span className="px-2 text-xs tracking-wider">
                {userDatas?.description}
              </span>
            </>
          )}
        </div>
        {/* //todo action buttons */}
        <div className="grid grid-cols-2 auto-rows-max gap-2">
          {userDatas?.isMutted ? (
            <button
              type="button"
              onClick={handleUnMuteFriend}
              className={`w-full rounded bg-pink-600 text-sm flex items-center justify-center p-2 gap-2 text-white  tracking-wider transition-colors duration-200`}
            >
              <h1>UnMute</h1>
              <UnMuteIcon width={20} />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleMuteFriend}
              className="w-full rounded bg-[#ff4b4b13] hover:bg-red-600 text-red-600 hover:text-white text-sm flex items-center justify-center p-2 gap-2  tracking-wider transition-colors duration-200 "
            >
              <h1>Mute</h1>
              <MuteIcon width={20} />
            </button>
          )}
      
          {/* //todo delete button */}
          <button
            type="button"
            onClick={handleDeleteUser}
            className="w-full rounded bg-red-600 text-white text-sm flex items-center justify-center p-2 gap-2  tracking-wider transition-colors duration-200 "
          >
            <h1>Remove</h1>
            <Trash width={20} />
          </button>
        </div>

        {/* //todo media */}
        <div className="grid gap-1">
          {AccordionItems.map((values, index) => {
            return (
              <Accordion
                key={index + 1}
                header={values.name}
                openByDefault={values.openDefault}
                icon={{
                  value: true,
                  image: values.icon,
                }}
              >
                {values?.children &&
                  values?.name === "Chat Themes" &&
                  values?.children?.length > 0 && (
                    <div className="grid grid-cols-4 gap-1 pt-5">
                      {values.children.map((values2) => {
                        return (
                          <Colorpallets
                            handleUpdateTheme={hadnleChangeTheme}
                            key={values2.name}
                            size={50}
                            currentThemeName={userDatas?.theme?.themeName}
                            items={values2}
                          />
                        )
                      })}
                    </div>
                  )}
              </Accordion>
            )
          })}
        </div>
      </div>
    )
  )
}

export default ChatUserDetails
