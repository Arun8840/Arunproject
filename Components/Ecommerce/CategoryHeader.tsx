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

type categoryTypes = {
  id: number
  category: string
}
function CategoryHeader() {
  const { loadAllCategorys } = getEcommerceService()
  const router = useRouter()
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

  const handleDirectProduct = (category: string) => {
    router.push(`/projects/Ecommerce/${category}`)
  }

  return (
    <nav
      id="CategoryHeader"
      className={` flex items-center justify-between p-2 ${HeaderFont.className} bg-white-80 backdrop-blur-sm rounded-full`}
    >
      <ul
        className={`w-full  lg:grid grid-cols-12 gap-1 text-start lg:text-center text-sm tracking-wider overflow-x-auto ${
          isLoading &&
          "p-5 bg-gradient-to-br from-zinc-100 to-zinc-200 animate-pulse rounded"
        }`}
      >
        <li className="text-xs flex-1 cursor-pointer capitalize tracking-wide bg-zinc-100 rounded">
          <Link href={`/projects/Ecommerce/all`} className="w-full h-full block rounded  p-2">
            All
          </Link>
        </li>
        {!isLoading &&
          firstTenItems?.map((items: string) => {
            return (
              <li
                onClick={() => handleDirectProduct(items)}
                className="text-xs flex-1 cursor-pointer capitalize tracking-wide bg-zinc-100 rounded"
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
      </ul>
    </nav>
  )
}

export default CategoryHeader
