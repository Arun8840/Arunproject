"use client"
import { EcommerceStore } from "@/Store/EcommerceStore"
import ProductWrapper from "@/Utility/Products/ProductWrapper"
import Productlist from "@/Utility/Products/Productlist"
import { CartIcon } from "@/Utility/icons/icons"
import { smartMobilesTypes } from "@/model/Ecommerce"
import getEcommerceService from "@/service/EcommerceService"
import Link from "next/link"
import React, { useState } from "react"
import useSWR from "swr"
function smartphones() {
  const { loadSmartMobiles } = getEcommerceService()
  const CartProducts: any[] = EcommerceStore((state: any) => state.CartItems)
  const loadsmartmobileProducts = async (): Promise<smartMobilesTypes> => {
    let data
    try {
      data = await loadSmartMobiles()
    } catch (error) {
      console.error(error)
    }
    return data
  }

  const {
    data: mobiles,
    error,
    isLoading,
  } = useSWR("load-all-mobiles", loadsmartmobileProducts)

  return (
    <ProductWrapper isLoading={isLoading} CartProducts={CartProducts}>
      {!isLoading &&
        mobiles &&
        mobiles?.products?.map((items) => {
          return <Productlist items={items} placement="product" />
        })}
    </ProductWrapper>
  )
}

export default smartphones
