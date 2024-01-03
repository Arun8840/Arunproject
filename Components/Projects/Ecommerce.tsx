"use client"
import React from "react"
import Navbar from "../Ecommerce/Navbar"
import CategoryHeader from "../Ecommerce/CategoryHeader"
import OfferSection from "../Ecommerce/OfferSection"

function Ecommerce() {
  return (
    <main className="p-2 flex flex-col gap-1 h-screen">
      <Navbar />
      <CategoryHeader />
      <OfferSection />
    </main>
  )
}

export default Ecommerce
