import useGetAnimations from "@/Utility/animations/Ripple";
import useGetMenus from "@/data/Menus";
import { Poppins } from "next/font/google";
import React from "react";
const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  display: "block",
});
function NavHeader() {
  // todo items
  const { NavMenus } = useGetMenus();
  const { handleClickripple } = useGetAnimations();

  return (
    <div
      className={`border-b border-b-[#333333] p-1 flex items-center justify-between text-sm px-4  ${poppins.className} `}
    >
      {/* logo */}
      <div className="w-[50px] h-[50px] bg-black  rounded-full"></div>

      {/* list items */}
      <ul className="p-1 flex gap-4 ">
        {NavMenus &&
          NavMenus.map((items) => {
            return <li className="cursor-pointer">{items.name}</li>;
          })}
      </ul>

      {/* login actions */}
      <button
        id="btn"
        onClick={handleClickripple}
        className="border border-[#333333] rounded-lg px-5 py-2 overflow-hidden relative"
      >
        Login
      </button>
    </div>
  );
}

export default NavHeader;
