import useGetAnimations from "@/Utility/animations/Ripple";
import { Search } from "@/Utility/icons/icons";
import useGetMenus from "@/data/Menus";
import { Poppins } from "next/font/google";
import React, { useState } from "react";

function NavHeader() {
  // todo items
  const { NavMenus } = useGetMenus();
  const { handleRipple, ripple } = useGetAnimations();

  return (
    <div
      className={`border-b border-b-[#27272a] p-1 flex items-center justify-between text-sm px-4`}
    >
      {/* logo */}
      <div className="w-[50px] h-[50px] bg-black border border-[#27272a] rounded-full"></div>

      {/* list items */}
      {/* <ul className="p-1 flex gap-4 ">
        {NavMenus &&
          NavMenus.map((items) => {
            return <li className="cursor-pointer">{items.name}</li>;
          })}
      </ul> */}
      <div className="w-1/3 flex items-center gap-1">
        <input
          type="text"
          className="w-full bg-inherit border border-[#27272a] p-2 rounded-lg outline-none tracking-wider"
          placeholder="Search..."
        />
        <button className="border border-[#27272a] rounded-lg p-[9px]">
          <Search width={15} />
        </button>
      </div>

      {/* login actions */}
      <button
        onClick={handleRipple}
        className={` border border-[#333333] rounded-lg px-5 py-2 overflow-hidden relative ${
          ripple ? "pointer-events-none" : ""
        }`}
      >
        Login
      </button>
    </div>
  );
}

export default NavHeader;
