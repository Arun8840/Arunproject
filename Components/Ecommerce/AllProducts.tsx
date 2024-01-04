"use client"
import { EcommerceStore } from "@/Store/EcommerceStore"
import ProductWrapper from "@/Utility/Products/ProductWrapper"
import Productlist from "@/Utility/Products/Productlist"
import { CartIcon } from "@/Utility/icons/icons"
import { smartMobilesTypes } from "@/model/Ecommerce"
import getEcommerceService from "@/service/EcommerceService"
import React, { useState } from "react"
import useSWR from "swr"
function AllProducts() {
  const { loadAllCategoryProducts } = getEcommerceService()
  const CartProducts: any[] = EcommerceStore((state: any) => state.CartItems)
  const loadsmartmobileProducts = async (): Promise<smartMobilesTypes> => {
    let data
    try {
      data = await loadAllCategoryProducts()
    } catch (error) {
      console.error(error)
    }
    return data
  }

  const {
    data: AllProducts,
    error,
    isLoading,
  } = useSWR("load-all-mobiles", loadsmartmobileProducts)

  return (
    <div className="bg-[#f3f5f7] p-5">
      <div className="grid grid-cols-12 container mx-auto gap-2  ">
        {!isLoading &&
          AllProducts &&
          AllProducts?.products?.map((items,index) => {
            return <Productlist key={index} items={items} placement="product" />
          })}
      </div>
    </div>
  )
}

export default AllProducts
