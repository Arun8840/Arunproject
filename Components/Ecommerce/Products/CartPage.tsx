"use client"
import { EcommerceStore } from "@/Store/EcommerceStore"
import Productlist from "@/Utility/Products/Productlist"
import { Poppins } from "next/font/google"
import { useRouter } from "next/navigation"
import React from "react"

interface CartTypes {
  id: number
  liked: boolean
  ratings: number
  name: string
  price: number
  offer: string
  image: string
  description: string
  details: string[]
}

const HeaderFont = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "block",
})
function CartPage() {
  const router = useRouter()
  const CartProducts: CartTypes[] = EcommerceStore(
    (state: any) => state.CartItems
  )
  const totalProductPrice = CartProducts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  )

  return (
    <>
      <div className="p-2 container mx-auto flex justify-between bg-white/50 backdrop-blur-sm sticky top-2 rounded-lg">
        <input
          type="text"
          className="border p-2 w-1/3 rounded outline-none"
          placeholder="search..."
        />

        <span className="font-semibold">
          Total=<span className="text-[#F05454]">{totalProductPrice}</span>/$
        </span>
      </div>
      <div
        className={`w-full py-5 container mx-auto grid  grid-cols-1 lg:grid-cols-12 gap-2 ${HeaderFont.className}`}
      >
        {CartProducts && CartProducts.length > 0 ? (
          CartProducts.map((items) => {
            return <Productlist items={items} placement="cartPage" />
          })
        ) : (
          <div className="font-bold text-lg tracking-wider font-italic col-span-12 text-center p-4">
            <h1>No Products Added !!</h1>
            <button
              onClick={() => router.back()}
              className="border px-3 py-2 rounded-full font-medium"
            >
              Back
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartPage
