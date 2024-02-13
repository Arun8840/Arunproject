"use client"
import { SocialappStore } from "@/Store/SocialappStore"
import { LogoutIcon } from "@/Utility/icons/icons"
import useGetFonts from "@/font/fonts"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import React, { memo, useCallback, useEffect } from "react"
import {
  MessageIcon,
  SettingsIcon,
  DashboardIcon,
  StatusIcon,
} from "@/Utility/icons/icons"
import ModelWrapper from "@/Utility/Uicomponents/ConfirmationModel/ModelWrapper"
import gsap, { Power3 } from "gsap"
function AppHeader() {
  const { data }: any = useSession()
  const { ContentFont } = useGetFonts()
  const tab = useSearchParams()
  const router: any = useRouter()
  let isActiveTab = tab.get("tab")
  let tabItems: { name: string; icon: any }[] = [
    {
      name: "Messages",
      icon: MessageIcon,
    },
    {
      name: "Dashboard",
      icon: DashboardIcon,
    },
    {
      name: "Status",
      icon: StatusIcon,
    },
    {
      name: "Settings",
      icon: SettingsIcon,
    },
  ]
  const loadingLoggedUser = SocialappStore((state: any) => state.loadloggedUser)
  const LoggedUser = SocialappStore((state: any) => state.LoggedUser)

  const handleChangeTab = (tabValue: string) => {
    router.push(`/socialapp/?id=${tab.get("id")}&tab=${tabValue}`)
  }
  const setLoggedUser = useCallback(async () => {
    data?.user?.id && (await loadingLoggedUser(data?.user?.id))
  }, [data, loadingLoggedUser])

  // !log-out
  const handleOpenModel = () => {
    gsap.to("#modelContainer", {
      opacity: 1,
      display: "grid",
      duration: 0.5,
      ease: Power3.easeInOut,
    })
  }
  const handleLogOut = async () => {
    await signOut()
  }

  useEffect(() => {
    setLoggedUser()
  }, [loadingLoggedUser, setLoggedUser])

  return (
    <>
      <ModelWrapper
        onConfirm={handleLogOut}
        text={{ message: "Logout", label: "Logout" }}
        varient="danger"
      />
      <nav
        className={`text-white bg-[#27272a]/50 p-1 flex flex-col justify-between rounded ${ContentFont.className}`}
      >
        <ul className="flex flex-col justify-center items-center gap-3 tracking-wide text-sm p-1">
          {tabItems.map((Items, index) => {
            let setactive = isActiveTab === Items.name
            return (
              <li
                title={Items?.name}
                style={
                  setactive
                    ? {
                        backgroundColor: LoggedUser.theme?.primary,
                        color: LoggedUser.theme?.secondary,
                      }
                    : {
                        color: "lightgray",
                      }
                }
                key={index + 1}
                onClick={() => handleChangeTab(Items?.name)}
                className={`p-2 rounded cursor-pointer grid place-items-center`}
              >
                <Items.icon width={20} />
              </li>
            )
          })}
        </ul>

        <div className="flex flex-col justify-center items-center gap-2">
          {/* logout button */}
          <button
            type="button"
            onClick={handleOpenModel}
            title="Logout"
            className="rounded text-red-600 p-2 hover:bg-red-600 hover:text-white transition-colors duration-150"
          >
            <LogoutIcon width={20} />
          </button>
          {/* profile button */}
          <button
            title={LoggedUser.email}
            style={{ backgroundColor: LoggedUser.theme?.primary }}
            className="rounded overflow-hidden w-10 h-10 text-sm tracking-wide uppercase"
          >
            <Image
              src={`https://robohash.org/${LoggedUser.profileImage}`}
              alt="profile image"
              className="w-full h-full object-contain"
              width={500}
              height={500}
            />
          </button>
        </div>
      </nav>
    </>
  )
}

export default memo(AppHeader)
