
import dynamic from "next/dynamic"
import React from "react"

function page({ params }: { params: { categoryPages: string } }) {
  let ProductComponents = dynamic(
    () =>
      import(
        `../../../../Components/Ecommerce/Products/${params?.categoryPages}`
      )
  )
  return (
    <>
      <ProductComponents />
    </>
  )
}

export default page
