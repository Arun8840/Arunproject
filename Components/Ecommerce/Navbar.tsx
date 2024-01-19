import { EcommerceStore } from "@/Store/EcommerceStore"
import { CartIcon, RightArrow } from "@/Utility/icons/icons"
import getEcommerceService from "@/service/EcommerceService"
import { Poppins } from "next/font/google"
import Link from "next/link"
import React, { useState } from "react"
import useSWR from "swr"
import CategoryHeader from "./CategoryHeader"
const HeaderFont = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "block",
})
function Navbar() {
  const CartProducts: any[] = EcommerceStore((state: any) => state.CartItems)
  const { loadAllCategorys } = getEcommerceService()
  const [openCategory, setOpen] = useState(false)
  const loadCategorys = async () => {
    let data
    try {
      data = await loadAllCategorys()
    } catch (error) {
      console.error(error)
    }
    return data
  }

  const {
    data: categories,
    error,
    isLoading,
  } = useSWR("load-all-categoryes", loadCategorys)
  const firstTenItems = categories?.slice(0, 14)

  const handleOpenCategory = () => {
    setOpen(!openCategory)
  }
  return (
    <nav
      id="NavHeader"
      className={` border flex items-center justify-between p-2 ${HeaderFont.className} bg-white shadow-lg rounded-lg sticky top-2 z-10`}
    >
      <h1 className="font-bold text-lg  px-4 bg-gradient-to-r from-[#FF6C22] to-[#FF9209] text-transparent bg-clip-text">
        logo
      </h1>

      <div className="w-full hidden lg:flex justify-center">
        <input
          type="text"
          className="border border-zinc-200 w-1/2 p-2 rounded outline-none text-sm"
          placeholder="Search..."
        />
      </div>
      <ul className="flex items-center gap-2 text-sm tracking-wider">
        <li
          onClick={handleOpenCategory}
          className=" rounded-full px-3 py-2 cursor-pointer hidden lg:flex items-center gap-x-3 relative select-none"
        >
          Category{" "}
          <RightArrow
            width={15}
            className={`${openCategory ? "rotate-90" : "rotate-0"}`}
          />
          {openCategory && (
            <ul className="bg-white rounded p-1 absolute -left-0 top-10 max-h-96 overflow-y-auto w-[300px]">
              <CategoryHeader items={categories} isLoading={isLoading} />
            </ul>
          )}
        </li>
        <li className=" rounded-full px-3 py-2 cursor-pointer flex items-center gap-2 relative">
          <Link
            href={"/projects/Ecommerce/CartPage"}
            className={`flex items-center gap-2 `}
          >
            <CartIcon width={20} />
            cart
            <span
              className={`absolute content-["0"] left-5 -top-0 text-sm bg-red-500 text-white w-[20px] text-center rounded-full`}
            >
              {CartProducts?.length ? CartProducts?.length : 0}
            </span>
          </Link>
        </li>
        <li className="rounded-full px-3 py-2 cursor-pointer bg-[#222831] text-white">
          Login
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
