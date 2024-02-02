"use client"
import RenderWrapper from "@/Components/SocialApp/RenderWrapper"
import dynamic from "next/dynamic"
import { cookies } from "next/headers"
import { useSearchParams } from "next/navigation"

export default function Home() {
  const router = useSearchParams()
  let Component = router.get("tab")

  let RenderComponent = dynamic(
    () => import(`../../Components/SocialApp/Component/${Component}`)
  )
  return (
    <>
      <RenderWrapper>
        <RenderComponent />
      </RenderWrapper>
    </>
  )
}
