import React from "react"
import { LikeIcon, RatingIcon } from "../icons/icons"
import { EcommerceStore } from "@/Store/EcommerceStore"

function Productlist({ items, placement }: any) {
  const ratingValue: number[] = [1, 2, 3, 4, 5]

  const AddCartitems = EcommerceStore((state: any) => state.AddCart)
  const Addlike = EcommerceStore((state: any) => state.AddProductLike)
  const Addrating = EcommerceStore((state: any) => state.AddProductRating)
  // todo add card
  const handleAddcartitems = () => {
    AddCartitems(items)
  }

  const removeFromCart = EcommerceStore((state: any) => state.removeFromCart)
  //   !handle remove cart
  const handleRemoveCart = () => {
    removeFromCart(items)
  }

  // todo handle set like
  const handleLike = () => {
    Addlike(items)
  }

  const handleRating = (ratingValue: number) => {
    Addrating(items, ratingValue)
  }
  return (
    <div className="col-span-4 row-span-2 border rounded min-h-[300px] p-1 flex gap-2">
      {/* //todo image */}
      <div className="w-[250px] bg-zinc-50 h-full rounded"></div>
      {/* //todo header */}
      <div className="p-1 flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-[#30475E] flex justify-between items-center">
            {items?.name}{" "}
            <button onClick={handleLike}>
              <LikeIcon
                width={20}
                className={`${
                  items?.liked
                    ? "fill-red-400 text-red-400"
                    : "fill-white text-zinc-300"
                }`}
              />
            </button>
          </h1>
          <p className="font-semibold text-[#F05454] text-sm py-3">
            {items?.offer}
          </p>
          <h1 className="text-[#30475E] text-sm">Details :</h1>
          <p className="text-sm text-slate-500 tracking-wider indent-8 line-clamp-4">
            {items?.details} Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Tempore debitis ipsam consectetur aliquam vel voluptate
            exercitationem neque. Veritatis ratione nobis illo est.
          </p>

          {/* //todo rating */}
          <ul className="flex items-center gap-3 py-3">
            {" "}
            {ratingValue.map((vals, index: number) => {
              return (
                <li>
                  <button onClick={() => handleRating(vals)}>
                    <RatingIcon
                      width={20}
                      className={`${
                        index < items?.ratings
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-zinc-200 fill-white"
                      }`}
                    />
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        {placement !== "product" && (
          <div className="p-2 flex justify-start items-center gap-3">
            <button className="border py-1 px-2 rounded">-</button>
            <span>{items?.qty}</span>
            <button className="border py-1 px-2 rounded">+</button>
          </div>
        )}

        {/* //todo pricing and action */}
        <div className="flex items-center justify-between">
          <h1 className="text-[#F05454] font-semibold">${items?.price}</h1>
          {placement === "product" ? (
            <button
              onClick={handleAddcartitems}
              className="text-white text-sm rounded-full px-2 py-2 bg-[#30475E]"
            >
              Add cart
            </button>
          ) : (
            <button
              onClick={handleRemoveCart}
              className="text-white text-sm rounded-full px-2 py-2 bg-[#F05454]"
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Productlist
