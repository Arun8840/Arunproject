import { clothingProducts } from "@/data/ClothingData"
import getEcommerceService from "@/service/EcommerceService"
import { create } from "zustand"

interface CartTypes {
  id: number
  liked: boolean
  ratings: number
  name: string
  price: number
  offer: string
  image: string
  description: string
  details: string[]
}

export const EcommerceStore = create((set, get: any) => ({
  ClothingProducts: clothingProducts,
  CartItems: [],
  AddCart: (newItem: any) => {
    set((state: any) => ({
      ...state,
      CartItems: [...state.CartItems, newItem],
    }))
  },
  removeFromCart: (items: CartTypes) =>
    set((state: any) => ({
      CartItems: state.CartItems.filter((item: any) => item.id !== items.id),
    })),
  AddProductLike: (items: CartTypes) => {
    set((state: any) => ({
      ClothingProducts: state.ClothingProducts.map((item: any) =>
        item.name === items.name ? { ...item, liked: !item.liked } : item
      ),
    }))
  },

  AddProductRating: (items: CartTypes, ratingValue: number) => {
    set((state: any) => ({
      ClothingProducts: state.ClothingProducts.map((item: any) =>
        item.name === items.name ? { ...item, ratings: ratingValue } : item
      ),
    }))
  },
}))
