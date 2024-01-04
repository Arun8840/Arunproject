import dynamic from "next/dynamic"
import React from "react"

function page({ params }: { params: { categoryPages: string } }) {
  const Component =
    params?.categoryPages.charAt(0).toUpperCase() +
    params?.categoryPages.slice(1)
  let ProductComponents = dynamic(
    () => import(`../../../../Components/Ecommerce/Products/${Component}`)
  )

  return (
    <>
      <ProductComponents />
    </>
  )
}

export default page
