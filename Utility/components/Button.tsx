import React from "react"
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

export default Button
