import Detail from "@/Components/Ecommerce/Detail";
import dynamic from "next/dynamic"
import React from "react"

function page({ params }: { params: { categoryPages: string; details: any,slugs:any } }) {
  return (
    <>
     <Detail/>
    </>
  )
}

export default page
