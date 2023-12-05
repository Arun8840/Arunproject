import Productlist from "@/Utility/Products/Productlist"
import { CartIcon, LikeIcon, RatingIcon } from "@/Utility/icons/icons"
import { clothingProducts } from "@/data/ClothingData"
import { Poppins } from "next/font/google"
import React from "react"

const HeaderFont = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "block",
})

function Clothings() {
 
  return (
    <>
      <div className="p-2 container mx-auto flex justify-between bg-white/50 backdrop-blur-sm sticky top-2 rounded-lg">
        <input
          type="text"
          className="border p-2 w-1/3 rounded"
          placeholder="search..."
        />

        <button className="flex items-center gap-2">
          <CartIcon width={20} />
          cart
        </button>
      </div>
      <div
        className={`w-full py-5 container mx-auto grid  grid-cols-1 lg:grid-cols-12 gap-2 ${HeaderFont.className}`}
      >
        {clothingProducts &&
          clothingProducts.map((items) => {
            return <Productlist items={items} />
          })}
      </div>
    </>
  )
}

export default Clothings
