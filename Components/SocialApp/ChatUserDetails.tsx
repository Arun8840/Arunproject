import { SocialappStore } from "@/Store/SocialappStore"
import Accordion from "@/Utility/Uicomponents/Accordion/Accordion"
import Colorpallets from "@/Utility/Uicomponents/Colorpallets"
import {
  BlockIcon,
  MediaIcon,
  MuteIcon,
  PriorityIcon,
  RatingIcon,
  ThemeIcon,
  Trash,
  UnMuteIcon,
} from "@/Utility/icons/icons"
import useGetFonts from "@/font/fonts"
import Image from "next/image"
import React from "react"
import { mutate } from "swr"

interface accordionTypes {
  name: string
  icon: any
  children: any[]
  openDefault: boolean
}
function ChatUserDetails() {
  const userDatas: any = SocialappStore((state: any) => state.UserDetails)
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
          sidebarFontColor: "#101010",
          footer: "#FF6F00",
          mainBackground: "#212121",
          sugHeader: "#FFAB00",
          header: "#FF6F00",
          cardColor: "#424242",
          cardheader: "#FF6F00",
          accent: "#FF3D00",
          success: "#00C853",
          error: "#D50000",
          warning: "#FFAB00",
          cardFontColor: "#FFFFFF",
          footerFontColor: "#000000",
        },
        {
          name: "Foundation",
          themeName: "Isaac Asimov",
          primary: "#815B5B",
          secondary: "#9E7676",
          sidebar: "#9E7676",
          sidebarFontColor: "#FFFFFF",
          footer: "#6C3428",
          mainBackground: "#FFF8EA",
          sugHeader: "#536DFE",
          header: "#6C3428",
          cardColor: "#FFFFFF",
          cardheader: "#3F51B5",
          accent: "#224B0C",
          success: "#00E676",
          error: "#FF1744",
          warning: "#FFD600",
          cardFontColor: "#594545",
          footerFontColor: "#FFFFFF",
        },
        {
          name: "Neuromancer",
          themeName: "William Gibson",
          primary: "#4f46e5",
          secondary: "#52616B",
          sidebar: "#FFFFFF",
          sidebarFontColor: "#FFFFFF",
          footer: "#4f46e5",
          mainBackground: "#F6F6F6",
          sugHeader: "#D6E6F2",
          header: "#4f46e5",
          cardColor: "#FFFFFF",
          cardheader: "#769FCD",
          accent: "#4f46e5",
          success: "#609966",
          error: "#E23E57",
          warning: "#FFDE7D",
          cardFontColor: "#1E2022",
          footerFontColor: "#FFFFFF",
        },
        {
          name: "1984",
          themeName: "George Orwell",
          primary: "#B71C1C",
          secondary: "#D32F2F",
          sidebar: "#8B0000",
          sidebarFontColor: "#FFFFFF",
          footer: "#C62828",
          mainBackground: "#FAFAFA",
          sugHeader: "#FF5252",
          header: "#D32F2F",
          cardColor: "#FFFFFF",
          cardheader: "#D32F2F",
          accent: "#FF1744",
          success: "#00C853",
          error: "#D50000",
          warning: "#FFAB00",
          cardFontColor: "#000000",
          footerFontColor: "#FFFFFF",
        },
        {
          name: "Brave New World",
          themeName: "Aldous Huxley",
          primary: "#004D40",
          secondary: "#00796B",
          sidebar: "#00251A",
          sidebarFontColor: "#FFFFFF",
          footer: "#00695C",
          mainBackground: "#FAFAFA",
          sugHeader: "#1DE9B6",
          header: "#00796B",
          cardColor: "#FFFFFF",
          cardheader: "#00796B",
          accent: "#00BFA5",
          success: "#00E676",
          error: "#FF1744",
          warning: "#FFD600",
          cardFontColor: "#000000",
          footerFontColor: "#FFFFFF",
        },
        {
          name: "The Hitchhiker's Guide to the Galaxy",
          themeName: "Douglas Adams",
          primary: "#FF5722",
          secondary: "#FF8A65",
          sidebar: "#E64A19",
          sidebarFontColor: "#FFFFFF",
          footer: "#FF5722",
          mainBackground: "#FAFAFA",
          sugHeader: "#FFAB00",
          header: "#FF8A65",
          cardColor: "#FFFFFF",
          cardheader: "#FF8A65",
          accent: "#FF3D00",
          success: "#00C853",
          error: "#D50000",
          warning: "#FFAB00",
          cardFontColor: "#000000",
          footerFontColor: "#000000",
        },
        {
          name: "Snow Crash",
          themeName: "Neal Stephenson",
          primary: "#1A237E",
          secondary: "#283593",
          sidebar: "#0D47A1",
          sidebarFontColor: "#FFFFFF",
          footer: "#1A237E",
          mainBackground: "#E8EAF6",
          sugHeader: "#536DFE",
          header: "#283593",
          cardColor: "#FFFFFF",
          cardheader: "#283593",
          accent: "#651FFF",
          success: "#00E676",
          error: "#FF1744",
          warning: "#FFD600",
          cardFontColor: "#000000",
          footerFontColor: "#FFFFFF",
        },
        {
          name: "Ender's Game",
          themeName: "Orson Scott Card",
          primary: "#006064",
          secondary: "#0097A7",
          sidebar: "#004D40",
          sidebarFontColor: "#FFFFFF",
          footer: "#00695C",
          mainBackground: "#E0F2F1",
          sugHeader: "#1DE9B6",
          header: "#0097A7",
          cardColor: "#FFFFFF",
          cardheader: "#0097A7",
          accent: "#00BFA5",
          success: "#00E676",
          error: "#FF1744",
          warning: "#FFD600",
          cardFontColor: "#000000",
          footerFontColor: "#FFFFFF",
        },
        {
          name: "The War of the Worlds",
          themeName: "H.G. Wells",
          primary: "#B71C1C",
          secondary: "#D32F2F",
          sidebar: "#8B0000",
          sidebarFontColor: "#FFFFFF",
          footer: "#C62828",
          mainBackground: "#FAFAFA",
          sugHeader: "#FF5252",
          header: "#D32F2F",
          cardColor: "#FFFFFF",
          cardheader: "#D32F2F",
          accent: "#FF1744",
          success: "#00C853",
          error: "#D50000",
          warning: "#FFAB00",
          cardFontColor: "#000000",
          footerFontColor: "#FFFFFF",
        },
      ],
      openDefault: false,
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

  return (
    userDatas && (
      <div
        className={`bg-[#27272a]/50 rounded col-span-2 overflow-y-auto ${ContentFont.className} p-1 flex flex-col gap-2`}
      >
        <h1 className="text-white capitalize tracking-wide text-center">
          Details
        </h1>

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

        {/* //todod user name header */}
        <h1 className="text-white text-center tracking-wider font-bold capitalize">
          {userDatas?.name ?? "Default Name"}
        </h1>
        <span className="text-white text-center text-xs tracking-wider">
          {userDatas?.email}
        </span>
        <span className="text-white text-center text-xs tracking-wider">
          {userDatas?.description}
        </span>

        {/* //todo action buttons */}
        <div className="grid grid-cols-2 gap-2">
          {userDatas?.isMutted ? (
            <button
              onClick={handleUnMuteFriend}
              className={`w-full rounded bg-pink-600 text-sm flex items-center justify-center p-2 gap-2 text-white  tracking-wider transition-colors duration-200`}
            >
              <h1>UnMute</h1>
              <UnMuteIcon width={20} />
            </button>
          ) : (
            <button
              onClick={handleMuteFriend}
              className={`w-full rounded bg-[#ff4b4b13] text-sm flex items-center justify-center p-2 gap-2 text-white  tracking-wider transition-colors duration-200`}
            >
              <h1>Mute</h1>
              <MuteIcon width={20} />
            </button>
          )}
          <button className="w-full rounded bg-[#ff4b4b13] hover:bg-red-600 text-red-600 hover:text-white text-sm flex items-center justify-center p-2 gap-2  tracking-wider transition-colors duration-200 ">
            <h1>Block</h1>
            <BlockIcon width={20} />
          </button>

          {/* //todo delete button */}
          <button
            onClick={handleDeleteUser}
            className="w-full col-span-2 rounded bg-[#ff4b4b13] hover:bg-red-600 text-red-600 hover:text-white text-sm flex items-center justify-center p-2 gap-2  tracking-wider transition-colors duration-200 "
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
                            key={values2.name}
                            size={50}
                            currentThemeName={userDatas?.User?.theme}
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
