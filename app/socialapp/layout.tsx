"use client"
import AppHeader from "@/Components/SocialApp/AppHeader"
import React from "react"

function ChatBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#09090b] w-full min-h-screen  flex flex-col gap-1 p-2 scale-[1]">
      <AppHeader />
      {children}
    </div>
  )
}

export default ChatBoardLayout