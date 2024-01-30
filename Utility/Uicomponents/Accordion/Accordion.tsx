import { MediaIcon, RightArrow } from "@/Utility/icons/icons"
import dynamic from "next/dynamic"
import React, { memo, useState } from "react"

interface PropsTypes {
  children: any
  header: string
  items?: any
  icon: any
  openByDefault: boolean
}
function Accordion({ children, header, icon, openByDefault }: PropsTypes) {
  const [isOpen, setOpen] = useState(openByDefault)

  const handleOpenAccordion = () => {
    setOpen(!isOpen)
  }
  return (
    <div className="bg-[#101010]  p-2 rounded">
      {/* //todo accordion header */}
      <div
        onClick={handleOpenAccordion}
        className="text-white flex justify-between items-center cursor-pointer select-none"
      >
        <h1 className="text-sm flex items-center gap-2">
          {icon.value && <icon.image width={15} className="text-white" />}
          {header}
        </h1>
        <button>
          <RightArrow
            width={15}
            className={`text-white ${
              isOpen ? "rotate-90" : "rotate-0"
            } transition-transform duration-200`}
          />
        </button>
      </div>
      {isOpen && children}
    </div>
  )
}

export default memo(Accordion)
