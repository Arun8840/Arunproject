"use client"
import React from "react"
import Navbar from "../Ecommerce/Navbar"
import CategoryHeader from "../Ecommerce/CategoryHeader"
import OfferSection from "../Ecommerce/OfferSection"
import CategoryOffers from "../Ecommerce/CategoryOffers"

function Ecommerce() {
  return (
    <main className="p-2 flex flex-col gap-1">
      <Navbar />
      {/* <CategoryHeader /> */}
      <OfferSection />
      <CategoryOffers />
    </main>
  )
}

export default Ecommerce
