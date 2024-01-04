"use client"
import { EcommerceStore } from "@/Store/EcommerceStore"
import ProductWrapper from "@/Utility/Products/ProductWrapper"
import Productlist from "@/Utility/Products/Productlist"
import { smartMobilesTypes } from "@/model/Ecommerce"
import getEcommerceService from "@/service/EcommerceService"
import React from "react"
import useSWR from "swr"
function Skincare() {
  const { loadSkinCare } = getEcommerceService()
  const CartProducts: any[] = EcommerceStore((state: any) => state.CartItems)
  const loadskincareProducts = async (): Promise<smartMobilesTypes> => {
    let data
    try {
      data = await loadSkinCare()
    } catch (error) {
      console.error(error)
    }
    return data
  }

  const {
    data: skincare,
    error,
    isLoading,
  } = useSWR("load-all-skincare", loadskincareProducts)
  return (
    <ProductWrapper isLoading={isLoading} CartProducts={CartProducts}>
      {!isLoading &&
        skincare &&
        skincare?.products.map((items,index) => {
          return <Productlist key={index} items={items} placement="product" />
        })}
    </ProductWrapper>
  )
}

export default Skincare
