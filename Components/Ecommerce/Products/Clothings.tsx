"use client"
import { EcommerceStore } from "@/Store/EcommerceStore"
import Productlist from "@/Utility/Products/Productlist"
import { CartIcon } from "@/Utility/icons/icons"
import { Poppins } from "next/font/google"
import Link from "next/link"
import React from "react"

const HeaderFont = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "block",
})

function Clothings() {
  const CartProducts: any[] = EcommerceStore((state: any) => state.CartItems)
  const ClothingProducts: any[] = EcommerceStore(
    (state: any) => state.ClothingProducts
  )
  return (
    <>
      <div className="p-2 container mx-auto flex justify-between bg-white/50 backdrop-blur-sm sticky top-2 rounded-lg">
        <input
          type="text"
          className="border p-2 w-1/3 rounded"
          placeholder="search..."
        />

        <Link
          href={"/projects/Ecommerce/CartPage"}
          className={`flex items-center gap-2 relative`}
        >
          <CartIcon width={20} />
          cart
          <span
            className={`absolute content-["0"] left-2 top-0 text-sm bg-red-500 text-white w-[20px] text-center rounded-full`}
          >
            {CartProducts?.length ? CartProducts?.length : 0}
          </span>
        </Link>
      </div>
      <div
        className={`w-full py-5 container mx-auto grid  grid-cols-1 lg:grid-cols-12 gap-2 ${HeaderFont.className}`}
      >
        {ClothingProducts &&
          ClothingProducts.map((items,index) => {
            return <Productlist  key={index} items={items} placement="product" />
          })}
      </div>
    </>
  )
}

export default Clothings
