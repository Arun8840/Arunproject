import React from "react"
import { LikeIcon, RatingIcon } from "../icons/icons"

function Productlist({ items }: any) {
  const ratingValue: number[] = [1, 2, 3, 4, 5]
  return (
    <div className="col-span-4 row-span-2 border rounded min-h-[300px] p-1 flex gap-2">
      {/* //todo image */}
      <div className="w-[250px] bg-zinc-50 h-full rounded"></div>
      {/* //todo header */}
      <div className="p-1 flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-[#30475E] flex justify-between items-center">
            {items?.name}{" "}
            <button>
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
                  {" "}
                  <button>
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

        {/* //todo pricing and action */}
        <div className="flex items-center justify-between">
          <h1 className="text-[#F05454] font-semibold">${items?.price}</h1>
          <button className="text-white text-sm rounded-full px-2 py-2 bg-[#30475E]">
            Add cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Productlist
