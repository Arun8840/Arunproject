"use client"
import RenderWrapper from "@/Components/SocialApp/RenderWrapper"
import Notification from "@/Utility/Uicomponents/Notifications/Notification"
import dynamic from "next/dynamic"
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
        <Notification />
        <RenderComponent />
      </RenderWrapper>
    </>
  )
}
