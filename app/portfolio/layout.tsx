import React from "react"

function layout({ children }: { children: React.ReactNode }) {
  return <section className="w-full min-h-screen">{children}</section>
}

export default layout
