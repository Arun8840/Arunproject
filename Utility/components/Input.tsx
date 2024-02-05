import React from "react"
import { Eyeclose, Eyeopen } from "../icons/icons"

interface InputTypes {
  name?: string
  type?: string
  required?: any
  value?: any
  placeholder?: string
  register?: any
  className?: string
  pattern?: string | any
  handleShowPass?: () => void
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
    handleShowPass,
  } = props

  return (
    <div className="w-full h-full relative">
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
      {name === "password" && (
        <>
          {type === "password" ? (
            <button
              type="button"
              onClick={() => handleShowPass && handleShowPass()}
              className="absolute top-3 right-3"
            >
              <Eyeclose width={15} className="text-pink-600" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => handleShowPass && handleShowPass()}
              className="absolute top-3 right-3"
            >
              <Eyeopen width={15} className="text-pink-600" />
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default Input
