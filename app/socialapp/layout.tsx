import AppHeader from "@/Components/SocialApp/AppHeader"
import { cookies } from "next/headers"
import React from "react"

function ChatBoardLayout({ children }: { children: React.ReactNode }) {
  const encryptedSessionData: any = cookies().get("session")?.value
  let loggedUserData = JSON.parse(encryptedSessionData)
  
  return (
    <div className="bg-[#09090b] w-full min-h-screen  flex flex-col gap-1 p-2 scale-[1]">
      <AppHeader loggedUserData={loggedUserData} />
      {children}
    </div>
  )
}

export default ChatBoardLayout
