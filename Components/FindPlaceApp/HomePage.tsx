"use client"
import dynamic from "next/dynamic"
import { useSearchParams } from "next/navigation"
import React, { memo } from "react"

function HomePage() {
  const query = useSearchParams()
  const Component = query.get("tab")

  const Render_Component = memo(
    dynamic(() => import(`./Components/${Component}`))
  )
  return (
    <div className="w-full h-full max-h-full overflow-y-auto rounded-xl">
      <Render_Component />
    </div>
  )
}

export default HomePage
