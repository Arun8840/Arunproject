"use client"
import AppHeader from "@/Components/SocialApp/AppHeader"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import React from "react"

function ChatBoardLayout({ children }: { children: React.ReactNode }) {
  const { status }: any = useSession()
  const navigate = useRouter()
  if (status === "unauthenticated") {
    navigate.back()
  }
  return (
    <div className="bg-[#ebebeb] w-full min-h-screen  flex gap-1 p-1">
      <AppHeader />
      {children}
    </div>
  )
}

export default ChatBoardLayout
