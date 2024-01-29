import React from "react"
interface ButtonpropTypes {
  className?: string
  label: string
  handleAction?: () => void
  type:any
}
function Button(props: ButtonpropTypes) {
  // todo props items
  const { className, label,type, handleAction } = props

  return (
    <button type={type} onClick={handleAction && handleAction} className={className}>
      {label ? label : "Button"}
    </button>
  )
}

export default Button
