"use client"
import { EcommerceStore } from "@/Store/EcommerceStore"
import ProductWrapper from "@/Utility/Products/ProductWrapper"
import Productlist from "@/Utility/Products/Productlist"
import { CartIcon } from "@/Utility/icons/icons"
import { smartMobilesTypes } from "@/model/Ecommerce"
import getEcommerceService from "@/service/EcommerceService"
import Link from "next/link"
import React from "react"
import useSWR from "swr"

function Laptops() {
  const { loadLaptops } = getEcommerceService()

  const CartProducts: any[] = EcommerceStore((state: any) => state.CartItems)

  const loadLaptopProducts = async (): Promise<smartMobilesTypes> => {
    let data
    try {
      data = await loadLaptops()
    } catch (error) {
      console.error(error)
    }
    return data
  }

  const {
    data: mobiles,
    error,
    isLoading,
  } = useSWR("load-all-laptops", loadLaptopProducts)

  return (
    <>
      <ProductWrapper CartProducts={CartProducts} isLoading={isLoading}>
        {!isLoading &&
          mobiles &&
          mobiles?.products?.map((items, index) => {
            return <Productlist key={index} items={items} placement="product" />
          })}
      </ProductWrapper>
    </>
  )
}

export default Laptops
