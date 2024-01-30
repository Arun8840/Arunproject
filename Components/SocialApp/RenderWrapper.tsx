import React, { memo } from "react"

function RenderWrapper({ children }: any) {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-1 px-2">{children}</div>
  )
}

export default memo(RenderWrapper)
