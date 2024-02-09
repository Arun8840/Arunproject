import React, { memo } from "react"
import { LoaderIcon } from "../icons/icons"
interface ButtonpropTypes {
  className?: string
  label: string
  onClick?: () => void
  type: any
}
function Button(props: ButtonpropTypes) {
  // todo props items
  const { className, label, type, onClick } = props

  return (
    <button type={type} onClick={onClick && onClick} className={className}>
      {label ? label : "Button"}
    </button>
  )
}

export default memo(Button)
