import React, { useState } from "react"

interface PropsTypes {
  handleAction?: (status:boolean) => void
  varient: string
}
function Switch(props: PropsTypes) {
  const { handleAction, varient = "blue" } = props
  const [isActive, setactive] = useState(false)
  const handleActive = () => {
    setactive(!isActive)
    handleAction && handleAction(!isActive)
  }
  return (
    <div
      onClick={handleActive}
      style={
        isActive
          ? { backgroundColor: varient }
          : { backgroundColor: "#555843" }
      }
      className={`w-[45px] h-[25px] rounded-full flex items-center cursor-pointer relative`}
    >
      {/* pointer */}
      {isActive ? (
        <div className="w-[18px] h-[18px] rounded-full bg-white absolute left-[23px] top-[4px] transition-all duration-200"></div>
      ) : (
        <div className="w-[18px] h-[18px] rounded-full bg-white absolute left-[3px] top-[4px] transition-all duration-200"></div>
      )}
    </div>
  )
}

export default Switch
