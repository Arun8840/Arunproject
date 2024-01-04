import Link from "next/link"
import React from "react"
import { BacktoPage, CartIcon } from "../icons/icons"
import { useRouter } from "next/navigation"

function ProductWrapper({ children, CartProducts, isLoading }: any) {
  const router = useRouter()
  return (
    !isLoading && (
      <div>
        <div className="py-2 px-3 container mx-auto flex justify-between bg-[#101010] text-white sticky top-2 rounded-lg">
          <div className="w-full flex items-center gap-x-2">
            <button
              onClick={() => router.back()}
              className="bg-[#f3f3f3] text-gray-900 rounded p-2"
            >
              <BacktoPage width={20} />
            </button>
            <input
              type="text"
              className="h-full px-2 w-1/3 rounded bg-[#f3f3f3]"
              placeholder="search..."
            />
          </div>

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
          className={`w-full py-5 container mx-auto grid  grid-cols-1 lg:grid-cols-12 gap-2 `}
        >
          {children}
        </div>
      </div>
    )
  )
}

export default ProductWrapper
