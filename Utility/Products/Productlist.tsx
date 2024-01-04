import React from "react"
import { LikeIcon, RatingIcon } from "../icons/icons"
import { EcommerceStore } from "@/Store/EcommerceStore"
import { mobileTypes } from "@/model/Ecommerce"
import Link from "next/link"

interface PropsTypes {
  items: mobileTypes
  placement: string
}
function Productlist({ items, placement }: PropsTypes) {
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
      <div className="w-[250px] h-full rounded">
        <img
          src={items?.images[0]}
          alt={items?.thumbnail}
          className="w-full h-full object-contain"
        />
      </div>
      {/* //todo header */}
      <div className="p-1 flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-[#30475E] flex justify-between items-center">
            {items?.title}{" "}
            {/* <button onClick={handleLike}>
              <LikeIcon width={20} />
            </button> */}
          </h1>
          {/* //todo rating */}
          <ul className="flex items-center gap-3">
            {" "}
            {ratingValue.map((vals, index: number) => {
              return (
                <li>
                  <button onClick={() => handleRating(vals)}>
                    <RatingIcon
                      width={15}
                      className={`${
                        index < items?.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-zinc-200 fill-white"
                      }`}
                    />
                  </button>
                </li>
              )
            })}
          </ul>
          <p className="font-semibold text-[#F05454] text-sm py-3">
            offer- {items?.discountPercentage}%
          </p>
          <h1 className="text-[#30475E] text-sm">Details :</h1>
          <p className="text-sm text-slate-500 tracking-wider indent-8 line-clamp-4">
            {items?.description}
            <Link
              href={`/projects/Ecommerce/${items?.category}/${items.title}/?id=${items?.id}`}
            >
              <span className="text-blue-600 tracking-wide cursor-pointer">
                ...view
              </span>
            </Link>
          </p>

          <h1 className="text-[#F05454] font-semibold  py-2">
            Price-${items?.price}
          </h1>
        </div>

        {placement !== "product" && (
          <div className="p-2 flex justify-start items-center gap-3">
            <button className="border py-1 px-2 rounded">-</button>
            {/* <span>{items?.qty}</span> */}
            <button className="border py-1 px-2 rounded">+</button>
          </div>
        )}

        {/* //todo pricing and action */}
        <div className="grid lg:grid-cols-2 place-items-center gap-2">
          {placement === "product" ? (
            <>
              <button
                onClick={handleAddcartitems}
                className="font-semibold text-xs w-full rounded-full px-2 py-2 bg-lime-400"
              >
                Buy
              </button>
              <button
                onClick={handleAddcartitems}
                className="text-white text-xs w-full rounded-full px-2 py-2 bg-[#101010]"
              >
                Add cart
              </button>
            </>
          ) : (
            <button
              onClick={handleRemoveCart}
              className="text-white text-xs rounded-full px-2 py-2 bg-[#F05454]"
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
