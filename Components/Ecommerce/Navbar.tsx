import { CartIcon } from "@/Utility/icons/icons"
import { Poppins } from "next/font/google"
import React from "react"
const HeaderFont = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "block",
})
function Navbar() {
  return (
    <nav
      id="NavHeader"
      className={` border flex items-center justify-between p-2 ${HeaderFont.className} bg-white-80 backdrop-blur-lg rounded-lg sticky top-2 z-10`}
    >
      <h1 className="font-bold text-lg  px-4 bg-gradient-to-r from-[#FF6C22] to-[#FF9209] text-transparent bg-clip-text">
        logo
      </h1>

      <div className="w-full flex justify-center">
        <input
          type="text"
          className="border border-zinc-100 w-1/2 p-2 rounded-full outline-none text-sm"
          placeholder="Search..."
        />
      </div>
      <ul className="flex items-center gap-2 text-sm tracking-wider">
        <li className=" rounded-full px-3 py-2 cursor-pointer flex items-center gap-2">
          <CartIcon width={20} className="text-[#F05454]" />
          Cart
        </li>
        <li className=" rounded-full px-3 py-2 cursor-pointer">Profile</li>
        <li className="rounded-full px-3 py-2 cursor-pointer bg-[#222831] text-white">
          Login
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
