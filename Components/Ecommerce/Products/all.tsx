"use client"
import { EcommerceStore } from "@/Store/EcommerceStore"
import ProductWrapper from "@/Utility/Products/ProductWrapper"
import Productlist from "@/Utility/Products/Productlist"
import { CartIcon } from "@/Utility/icons/icons"
import { smartMobilesTypes } from "@/model/Ecommerce"
import getEcommerceService from "@/service/EcommerceService"
import React, { useState } from "react"
import useSWR from "swr"
function all() {
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
    <ProductWrapper isLoading={isLoading} CartProducts={CartProducts}>
      {!isLoading &&
        AllProducts &&
        AllProducts?.products?.map((items) => {
          return <Productlist items={items} placement="product" />
        })}
    </ProductWrapper>
  )
}

export default all
