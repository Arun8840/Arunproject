import getEcommerceService from "@/service/EcommerceService"
import { Poppins } from "next/font/google"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"
import useSWR from "swr"

const HeaderFont = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "block",
})

interface propsTypes {
  items: string[]
  isLoading: boolean
}
function CategoryHeader({ items, isLoading }: propsTypes) {
  const router = useRouter()
  const handleDirectProduct = (category: string) => {
    router.push(`/projects/Ecommerce/${category}`)
  }
  return (
  <>
    <li className="text-xs flex-1 cursor-pointer capitalize tracking-wide bg-zinc-100 rounded">
          <Link
            href={`/projects/Ecommerce/all`}
            className="w-full h-full block rounded  p-2"
          >
            All
          </Link>
        </li>
        {!isLoading &&
          items?.map((items: string,index) => {
            return (
              <li
              key={index}
                onClick={() => handleDirectProduct(items)}
                className="text-xs flex-1 cursor-pointer capitalize tracking-wide rounded"
              >
                <Link
                  href={`/projects/Ecommerce/${items}`}
                  className="w-full h-full block rounded  p-2"
                >
                  {items}
                </Link>
              </li>
            )
          })}
  </>
  )
}

export default CategoryHeader
