import AppHeader from "@/Components/SocialApp/AppHeader";
import { cookies } from "next/headers";
import React from "react";

function ChatBoardLayout({ children }: { children: React.ReactNode }) {
  const encryptedSessionData: any = cookies().get("session")?.value;
  let loggedUserData: any = JSON?.parse(encryptedSessionData);

  return (
    <div className="bg-[#09090b] w-full min-h-screen  flex gap-1 p-1">
      <AppHeader loggedUserData={loggedUserData} />
      {children}
    </div>
  );
}

export default ChatBoardLayout;
