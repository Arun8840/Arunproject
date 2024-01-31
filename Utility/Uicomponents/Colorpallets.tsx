import React from "react"
import { Check } from "../icons/icons"

interface propsTypes {
  items?: any
  handleUpdateTheme?: (items: any) => void
  currentThemeName?: string
  placement?: string
  size?: number
}
function Colorpallets(props: propsTypes) {
  let { items, handleUpdateTheme, currentThemeName, size } = props

  return (
    <div
      onClick={() => handleUpdateTheme && handleUpdateTheme(items)}
      className={`rounded-lg  grid place-items-center 
        p-1  hover:bg-[#eeeeee]
       cursor-pointer relative  ${
         items?.name === currentThemeName &&
         "bg-green-500/30 border border-green-500 border-opacity-50"
       }`}
    >
      <div
        style={{
          backgroundColor: items?.mainBackground,
          width: `${size}px`,
          height: `${size}px`,
        }}
        className="rounded-full overflow-hidden relative"
      >
        {/* //todo secondary */}
        <div
          style={{
            backgroundColor: items?.secondary,
          }}
          className="absolute w-1/2 h-full top-0 left-0 bottom-0"
        ></div>
        {/* //todo primary */}
        <div
          style={{
            backgroundColor: items?.primary,
          }}
          className="absolute w-full h-1/2 top-0 left-0 right-0"
        >
          &nbsp;
        </div>
      </div>
      {items?.name === currentThemeName && (
        <button className="bg-green-600 text-white rounded-full absolute -top-2 -right-1 p-1">
          <Check width={15} />
        </button>
      )}
    </div>
  )
}

export default Colorpallets
