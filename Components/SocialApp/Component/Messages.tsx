"use client";
import { AddIcon } from "@/Utility/icons/icons";
import useGetFonts from "@/font/fonts";
import Image from "next/image";
import React from "react";
import ChatBoard from "../ChatBoard";
import ChatUserDetails from "../ChatUserDetails";
import { SocialappStore } from "@/Store/SocialappStore";
import useSWR from "swr";
import Drawer from "@/Utility/Uicomponents/Drawer/Drawer";
import gsap, { Power3 } from "gsap";
import getSocialAppServices from "@/service/SocialAppService";
import { useSearchParams } from "next/navigation";

interface UsersTypes {
  _id: string;
  name: string;
  email: string;
  profileImage: string;
  description: string;
  theme: string;
  createdAt: string;
  updatedAt: string;
  __v: 0;
}
function Messages() {
  const { ContentFont } = useGetFonts();
  const { loadUserFriends } = getSocialAppServices();
  const router = useSearchParams();
  const userID: string | any = router.get("id");
  // todo loading all users
  const fetcher = async () => {
    let res: UsersTypes[] = await loadUserFriends(userID);
    return res;
  };
  const { data, error, isLoading } = useSWR("/api/user-friends", fetcher, {
    revalidateOnFocus: false,
  });

  const handleOpenDrawer = () => {
    let tl = gsap.timeline({ paused: false });

    tl.to("#drawerContainer", {
      opacity: 1,
      display: "flex",
      duration: 0.2,
      ease: Power3.easeInOut,
    });

    tl.to("#drawerForm", {
      opacity: 1,
      y: 0,
      duration: 0.2,
      ease: Power3.easeInOut,
    });
  };
  const handleCloseDrawer = () => {
    let tl = gsap.timeline({ paused: false });
    tl.to("#drawerForm", {
      opacity: 0,
      y: "100%",
      duration: 0.2,
      ease: Power3.easeInOut,
    });
    tl.to("#drawerContainer", {
      opacity: 0,
      display: "none",
      duration: 0.2,
      ease: Power3.easeInOut,
    });
  };

  return (
    <>
      <Drawer handleCloseDrawer={handleCloseDrawer}>
        <div
          className={`flex flex-col justify-between rounded col-span-2 w-full h-full overflow-y-auto p-1 ${ContentFont.className} bg-[#27272a]/50 relative`}
        >
          <div className="w-full">
            <input
              type="text"
              placeholder="search..."
              className="rounded bg-[#27272a] outline-none p-2  w-full text-white"
            />
            {!isLoading && (
              <ul className="grid auto-rows-max gap-1 py-2 divide-y divide-gray-600 divide-opacity-15 max-h-[85vh] overflow-y-auto">
                {data &&
                  data?.map((items, index: number) => {
                    return (
                      <li
                        // onClick={() => handleSelecteUser(items, index + 1)}
                        key={items?.name}
                        className=" p-1 flex gap-2 cursor-pointer"
                      >
                        <div
                          className={`w-[45px] h-[45px] rounded grid place-items-center bg-[#27272a]`}
                        >
                          {items?.profileImage ? (
                            <Image
                              src={`https://robohash.org/${items?.profileImage}`}
                              alt="profile image"
                              className="w-full h-full object-contain"
                              width={500}
                              height={500}
                            />
                          ) : (
                            <h1 className="font-bold uppercase">
                              {items?.name[0]}
                            </h1>
                          )}
                        </div>
                        <div className="flex justify-between flex-col flex-1">
                          <div className="flex w-full justify-between">
                            <h1 className="text-white text-xs lg:text-sm tracking-wide">
                              {items?.name}
                            </h1>
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            )}
          </div>

          {/* //todo new user add button */}
          <button
            onClick={handleOpenDrawer}
            className="bg-[#27272a] hover:bg-pink-600 transition-colors duration-150 rounded p-2 text-sm flex justify-center items-center text-white tracking-wide w-full"
          >
            Add friend
            <AddIcon width={20} className="text-white" />
          </button>
        </div>
      </Drawer>

      <ChatBoard />
      <ChatUserDetails />
    </>
  );
}

export default Messages;
