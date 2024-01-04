"use client"
import { EcommerceStore } from "@/Store/EcommerceStore"
import {
  BacktoPage,
  CartIcon,
  RatingIcon,
  RocketIcon,
} from "@/Utility/icons/icons"
import { smartMobilesTypes } from "@/model/Ecommerce"
import getEcommerceService from "@/service/EcommerceService"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import React from "react"
import useSWR from "swr"

function Detail() {
  const productid = useSearchParams()
  const CartProducts: any[] = EcommerceStore((state: any) => state.CartItems)
  const AddCartitems = EcommerceStore((state: any) => state.AddCart)
  const router = useRouter()
  let id = productid.get("id")
  const { loadProduct } = getEcommerceService()
  const loadsmartmobileProducts = async () => {
    let data
    try {
      data = await loadProduct(id)
    } catch (error) {
      console.error(error)
    }
    return data
  }

  const {
    data: ProductDetail,
    error,
    isLoading,
  } = useSWR("load-product-detail", loadsmartmobileProducts)

  // todo add card
  const handleAddcartitems = () => {
    AddCartitems(ProductDetail)
  }

  return (
    <div className="bg-[#f3f5f7] w-full h-screen overflow-y-auto p-5 rounded-lg shadow-lg flex flex-col gap-2">
      {!isLoading && (
        <div className="py-2 px-3 w-[70%] mx-auto flex justify-between bg-[#101010] text-white sticky top-0 shadow-lg rounded-lg">
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
      )}
      <div className="w-[70%] h-full bg-white mx-auto p-5">
        {/* //todo product image */}
        <div className="flex-1 p-1">
          <div className="flex items-center gap-x-3">
            <h1 className="font-semibold tracking-wide text-xl">
              {ProductDetail?.title}
            </h1>
            <div className="flex text-xs gap-2 items-center bg-yellow-100 rounded-full py-1 px-3 text-yellow-700">
              <RatingIcon width={20} className="fill-yellow-700 " />
              {ProductDetail?.rating}
            </div>
            <div className="flex text-xs gap-2 items-center bg-red-100 rounded-full py-1 px-3 font-bold text-red-700">
              <RocketIcon width={20} />
              {ProductDetail?.discountPercentage}%
            </div>
            <div className="flex gap-2 items-center bg-green-100 rounded-full py-1 px-3 text-xs font-bold text-green-700">
              <small>In-stock</small>
              {ProductDetail?.stock}
            </div>
          </div>
          <h1 className="py-5 font-semibold">Details:</h1>
          <p className="indent-7 font-medium text-gray-600 leading-7 tracking-wider">
            {ProductDetail?.description} Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Ipsam rem aspernatur ex, asperiores facere nemo
            quas obcaecati atque accusamus nam sapiente id corporis facilis ea
            quia sint iste eveniet optio. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Itaque odio dignissimos ullam vero tempora dolorum
            cum voluptate ad, sit aperiam alias voluptates vitae dolores
            aspernatur, placeat quam, ipsa omnis. Rerum?
          </p>
        </div>
        <h1 className="font-semibold tracking-wide">Product image:</h1>
        <div className=" grid gap-1 grid-cols-4 p-2">
          {ProductDetail?.images?.map((images: string) => {
            return (
              <div className="w-full max-h-[200px]">
                <img
                  src={images}
                  alt="product image"
                  className="w-full h-full object-contain"
                />
              </div>
            )
          })}
        </div>
        {/* //todo buttons */}
        <div className="flex justify-end gap-x-2 p-2">
          <button
            onClick={() => router.back()}
            className="rounded-full px-5 py-2 bg-zinc-200"
          >
            Back
          </button>
          <button className="rounded-full px-5 py-2 bg-lime-400 font-semibold">
            Buy
          </button>
          <button
            onClick={handleAddcartitems}
            className="rounded-full px-5 py-2 bg-[#101010] text-white"
          >
            Add cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Detail
