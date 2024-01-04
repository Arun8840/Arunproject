"use client"
import { EcommerceStore } from "@/Store/EcommerceStore"
import ProductWrapper from "@/Utility/Products/ProductWrapper"
import Productlist from "@/Utility/Products/Productlist"
import { smartMobilesTypes } from "@/model/Ecommerce"
import getEcommerceService from "@/service/EcommerceService"
import React from "react"
import useSWR from "swr"

function fragrances() {
  const { loadFragrance } = getEcommerceService()
  const CartProducts: any[] = EcommerceStore((state: any) => state.CartItems)
  const loadfrangranceProducts = async (): Promise<smartMobilesTypes> => {
    let data
    try {
      data = await loadFragrance()
    } catch (error) {
      console.error(error)
    }
    return data
  }

  const {
    data: fragrances,
    error,
    isLoading,
  } = useSWR("load-all-fragrances", loadfrangranceProducts)
  return (
    <ProductWrapper isLoading={isLoading} CartProducts={CartProducts}>
      {!isLoading &&
        fragrances &&
        fragrances?.products?.map((items,index) => {
          return <Productlist  key={index} items={items} placement="product" />
        })}
    </ProductWrapper>
  )
}

export default fragrances
