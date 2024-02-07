"use client";
import { SocialappStore } from "@/Store/SocialappStore";
import { DarkIcon, LogoutIcon } from "@/Utility/icons/icons";
import useGetFonts from "@/font/fonts";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { memo, useCallback, useEffect } from "react";
import {
  MessageIcon,
  SettingsIcon,
  DashboardIcon,
  StatusIcon,
} from "@/Utility/icons/icons";
function AppHeader({ loggedUserData }: any) {
  const { ContentFont } = useGetFonts();
  const tab = useSearchParams();
  const router: any = useRouter();
  let isActiveTab = tab.get("tab");
  let tabItems: { name: string; icon: any }[] = [
    {
      name: "Messages",
      icon: MessageIcon,
    },
    {
      name: "Settings",
      icon: SettingsIcon,
    },
    {
      name: "Dashboard",
      icon: DashboardIcon,
    },
    {
      name: "Status",
      icon: StatusIcon,
    },
  ];
  const loadingLoggedUser = SocialappStore(
    (state: any) => state.loadloggedUser
  );

  const handleChangeTab = (tabValue: string) => {
    router.push(`/socialapp/?id=${tab.get("id")}&tab=${tabValue}`);
  };
  const setLoggedUser = useCallback(async () => {
    await loadingLoggedUser(loggedUserData?._id);
  }, [loadingLoggedUser, loggedUserData]);

  useEffect(() => {
    setLoggedUser();
  }, [setLoggedUser]);

  return (
    <nav
      className={`text-white bg-[#27272a]/50 p-1 flex flex-col justify-between rounded ${ContentFont.className}`}
    >
      <ul className="flex flex-col justify-center items-center gap-3 tracking-wide text-sm p-1">
        {tabItems.map((Items, index) => {
          let setactive = isActiveTab === Items.name;
          return (
            <li
              title={Items?.name}
              style={
                setactive
                  ? {
                      backgroundColor: loggedUserData?.theme?.primary,
                      color: "black",
                    }
                  : {}
              }
              key={index + 1}
              onClick={() => handleChangeTab(Items?.name)}
              className={`p-2 rounded cursor-pointer grid place-items-center`}
            >
              <Items.icon width={20} className="text-pink-600" />
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col justify-center items-center gap-2">
        {" "}
        {/* logout button */}
        <button title="Logout" className="rounded text-pink-600 p-2">
          <LogoutIcon width={20} />
        </button>
        {/* profile button */}
        <button
          title={loggedUserData?.email}
          style={{ backgroundColor: loggedUserData?.theme?.primary }}
          className="rounded overflow-hidden w-10 h-10 text-sm tracking-wide uppercase"
        >
          <Image
            src={`https://robohash.org/${loggedUserData?.profileImage}`}
            alt="profile image"
            className="w-full h-full object-contain"
            width={500}
            height={500}
          />
        </button>
      </div>
    </nav>
  );
}

export default memo(AppHeader);
