import React from "react"

interface InputTypes {
  name?: string
  type?: string
  required?: any
  value?: any
  placeholder?: string
  register?: any
  className?: string
  pattern?: string | any
}
function Input(props: InputTypes) {
  // todo props items
  const {
    name,
    type,
    required,
    value,
    placeholder,
    className,
    register,
    pattern,
  } = props

  return (
    <div className="w-full h-full">
      <input
        className={className}
        type={type}
        value={value}
        placeholder={placeholder}
        {...register(name, {
          required: {
            value: required,
            message: `${name} required !`,
          },
          pattern: {
            value: pattern,
            message: `invalid ${name} !`,
          },
        })}
      />
    </div>
  )
}

export default Input
