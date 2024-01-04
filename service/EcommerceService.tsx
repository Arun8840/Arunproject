import axios from "axios"

const getEcommerceService = () => {
  const loadAllCategorys = async () => {
    let response = await axios.get("https://dummyjson.com/products/categories")
    if (response) {
      return response?.data
    }
  }

  const loadAllCategoryProducts = async () => {
    let response = await axios.get("https://dummyjson.com/products")
    if (response) {
      return response?.data
    }
  }

  const loadProduct = async (productID: any) => {
    let response = await axios.get(
      `https://dummyjson.com/products/${productID}`
    )
    if (response) {
      return response?.data
    }
  }
  const loadSmartMobiles = async () => {
    let response = await axios.get(
      "https://dummyjson.com/products/category/smartphones"
    )
    if (response) {
      return response?.data
    }
  }
  const loadLaptops = async () => {
    let response = await axios.get(
      "https://dummyjson.com/products/category/laptops"
    )
    if (response) {
      return response?.data
    }
  }
  const loadFragrance = async () => {
    let response = await axios.get(
      "https://dummyjson.com/products/category/fragrances"
    )
    if (response) {
      return response?.data
    }
  }
  const loadSkinCare = async () => {
    let response = await axios.get(
      "https://dummyjson.com/products/category/skincare"
    )
    if (response) {
      return response?.data
    }
  }
  const loadGroceries = async () => {
    let response = await axios.get(
      "https://dummyjson.com/products/category/groceries"
    )
    if (response) {
      return response?.data
    }
  }
  return {
    loadAllCategoryProducts,
    loadAllCategorys,
    loadSmartMobiles,
    loadProduct,
    loadLaptops,
    loadFragrance,
    loadSkinCare,
    loadGroceries,
  }
}

export default getEcommerceService
