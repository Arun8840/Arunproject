import { Poppins } from "next/font/google"
import React from "react"

const HeaderFont = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "block",
})

type categoryTypes = {
  id: number
  category: string
}
function CategoryHeader() {
  const ecommerceCategories: categoryTypes[] = [
    { id: 1, category: "Electronics" },
    { id: 2, category: "Clothing" },
    { id: 3, category: "Kitchen" },
    { id: 4, category: "Beauty" },
    { id: 5, category: "Books" },
    { id: 6, category: "Toys & Games" },
    { id: 7, category: "Health" },
    { id: 8, category: "Sports" },
    { id: 9, category: "Automotive" },
    { id: 10, category: "Grocery" },
    { id: 11, category: "Pet Supplies" },
    { id: 12, category: "Jewelry" },
    { id: 14, category: "Tools" },
    { id: 15, category: "Baby Products" },
    { id: 16, category: "Musical" },
    { id: 19, category: "Electrical" },
  ]
  return (
    <nav
      id="CategoryHeader"
      className={` flex items-center justify-between p-2 ${HeaderFont.className} bg-white-80 backdrop-blur-sm rounded-full`}
    >
      <ul className="w-full flex justify-evenly items-center gap-2 text-center text-sm tracking-wider">
        {ecommerceCategories.map((items) => {
          return (
            <li className="text-xs flex-1 cursor-pointer">{items?.category}</li>
          )
        })}
      </ul>
    </nav>
  )
}

export default CategoryHeader
