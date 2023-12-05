import { useRouter } from "next/navigation"
import React from "react"

type categoryTypes = {
  id: number
  category: string
  image: string
}
function CategoryOffers() {
  const router: any = useRouter()
  const ecommerceCategories: categoryTypes[] = [
    {
      id: 2,
      category: "Clothings",
      image:
        "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      category: "Kitchen",
      image:
        "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      category: "Beauty",
      image:
        "https://images.pexels.com/photos/1377034/pexels-photo-1377034.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 8,
      category: "Sports",
      image:
        "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 10,
      category: "Grocery",
      image:
        "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 11,
      category: "Tools",
      image:
        "https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      category: "Toys & Games",
      image:
        "https://images.pexels.com/photos/163696/toy-car-toy-box-mini-163696.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      category: "Health",
      image:
        "https://images.pexels.com/photos/806427/pexels-photo-806427.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      category: "Automotive",
      image:
        "https://images.pexels.com/photos/65623/vehicle-chrome-technology-automobile-65623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 8,
      category: "Jewelry",
      image:
        "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ]

  const handleDirectProduct = (category: string) => {
    router.push(`/projects/Ecommerce/${category}`)
  }

  return (
    <>
      <div className=" p-1 grid grid-cols-6 gap-1 container mx-auto">
        {ecommerceCategories.map((items) => {
          return (
            <div className="w-full rounded-lg bg-white col-span-1 flex flex-col p-1">
              <h1 className="font-bold p-2 text-sm text-[#30475E]">
                {items?.category}
              </h1>
              <div className="bg-zinc-50 rounded-lg w-full h-full">
                <img
                  src={items?.image}
                  alt="banner"
                  className="w-full h-full rounded-lg"
                />
              </div>
              <div className="p-1 flex justify-end">
                <button
                  onClick={() => handleDirectProduct(items.category)}
                  className="rounded px-4 py-2 text-sm font-semibold text-[#F05454]"
                >
                  See all
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default CategoryOffers
