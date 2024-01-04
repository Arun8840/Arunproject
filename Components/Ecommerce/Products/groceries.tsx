"use client"
import { EcommerceStore } from "@/Store/EcommerceStore"
import ProductWrapper from "@/Utility/Products/ProductWrapper"
import Productlist from "@/Utility/Products/Productlist"
import { smartMobilesTypes } from "@/model/Ecommerce"
import getEcommerceService from "@/service/EcommerceService"
import React from "react"
import useSWR from "swr"
function Groceries() {
  const { loadGroceries } = getEcommerceService()
  const CartProducts: any[] = EcommerceStore((state: any) => state.CartItems)
  const loadsmartmobileProducts = async (): Promise<smartMobilesTypes> => {
    let data
    try {
      data = await loadGroceries()
    } catch (error) {
      console.error(error)
    }
    return data
  }

  const {
    data: groceries,
    error,
    isLoading,
  } = useSWR("load-all-groceries", loadsmartmobileProducts)
  return (
    <ProductWrapper isLoading={isLoading} CartProducts={CartProducts}>
      {!isLoading &&
        groceries &&
        groceries?.products?.map((items,index) => {
          return <Productlist  key={index} items={items} placement="product" />
        })}
    </ProductWrapper>
  )
}

export default Groceries
