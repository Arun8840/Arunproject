"use client"
import dynamic from "next/dynamic"
import { useParams } from "next/navigation"
import React from "react"

function Page() {
  const params = useParams()
  const renderdPage = params?.portfolio_pages

  const Dynamic_Component = dynamic(
    () => import(`../../../Components/${renderdPage}`),
    {
      loading: () => (
        <div className="w-full h-full grid place-items-center">
          <h1>Loading...</h1>
        </div>
      ),
    }
  )
  return (
    <>
      <Dynamic_Component />
    </>
  )
}

export default Page
