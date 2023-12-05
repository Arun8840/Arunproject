import { LeftArrow, RightArrow } from "@/Utility/icons/icons"
import gsap from "gsap"
import React, { useEffect, useRef, useState } from "react"

type Offertypes = {
  id: number
  category: string
  percentage: string
  image?: string
}
function OfferSection() {
  const [initial, setinitial] = useState(1)
  let carouselContainer: any = useRef(null)
  const productOffers: Offertypes[] = [
    {
      id: 2,
      category: "Discounted Bundles",
      percentage: "10-30%",
      image:
        "https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 1,
      category: "Buy One, Get One (BOGO) Offers",
      percentage: "up to 50%",
      image:
        "https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=1600",
    },

    {
      id: 3,
      category: "Flash Sales",
      percentage: "up to 70%",
      image:
        "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      category: "Clearance Sales",
      percentage: "up to 80%",
      image:
        "https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 5,
      category: "Seasonal Promotions",
      percentage: "varies",
      image:
        "https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 6,
      category: "Loyalty Program Rewards",
      percentage: "points-based",
      image:
        "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 7,
      category: "Limited Time Offers",
      percentage: "15-50%",
      image:
        "https://images.pexels.com/photos/634538/pexels-photo-634538.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 8,
      category: "Free Samples or Gifts",
      percentage: "n/a",
      image:
        "https://images.pexels.com/photos/191360/pexels-photo-191360.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 9,
      category: "Referral Discounts",
      percentage: "10-20%",
      image:
        "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ]

  const next = () => {
    const carouselItems = carouselContainer.current.children
    gsap.to(carouselItems, {
      duration: 0.6, // Duration of the animation
      opacity: 0, // Fade out
      onComplete: () => {
        setinitial((prev) => prev + 1)

        if (initial > 9) {
          setinitial(0)
        }
      },
    })
  }

  const Prev = () => {
    const carouselItems = carouselContainer.current.children
    gsap.to(carouselItems, {
      duration: 0.6, // Duration of the animation
      opacity: 0, // Fade out
      onComplete: () => {
        setinitial((prev) => prev - 1)
        if (initial <= -1) {
          setinitial(0)
        }
      },
    })
  }
  return (
    <div className="w-full p-1 relative container mx-auto">
      <ul ref={carouselContainer} className="w-full h-[500px] overflow-hidden">
        {productOffers.map((items, index: number) => {
          return (
            index === initial && (
              <li
                style={{
                  background: `url(${items?.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="p-2 border rounded-lg h-full flex flex-col justify-center items-center bg-center bg-cover translate-x-0"
              >
                <div className="flex flex-col justify-center  rounded-lg p-5 text-[white] backdrop-blur-sm">
                  <h1 className="font-bold  text-center text-[4rem] tracking-widest">
                    {items?.category}
                  </h1>
                  <h2 className="font-bold text-center  text-[3rem] tracking-widest">
                    {items?.percentage}
                  </h2>
                </div>
              </li>
            )
          )
        })}
      </ul>

      <div className="w-full px-4 flex justify-between absolute top-[50%] left-0">
        <button onClick={Prev} className="p-2 bg-white/80 rounded-lg">
          <LeftArrow width={20} className="text-gray-600" />
        </button>
        <button onClick={next} className="p-2 bg-white/80 rounded-lg">
          <RightArrow width={20} className="text-gray-600" />
        </button>
      </div>
    </div>
  )
}

export default OfferSection
