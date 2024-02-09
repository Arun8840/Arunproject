import gsap, { Power3 } from "gsap"
import React from "react"

interface PropsTypes {
  text?: {
    message: string
    label: string
  }
  varient?: string
  onConfirm?: () => void
}
function ModelWrapper({
  text,
  varient = "default",
  onConfirm,
}: PropsTypes) {
  const handleCancel = () => {
    gsap.to("#modelContainer", {
      opacity: 0,
      display: "none",
      duration: 0.5,
      ease: Power3.easeInOut,
    })
  }
  return (
    <section
      id="modelContainer"
      className="hidden opacity-0 place-items-center fixed top-0 left-0 right-0 bottom-0 bg-[#27272a]/50 backdrop-blur-sm z-50"
    >
      <div
        className={`rounded min-w-[400px] min-h-[150px] shadow-lg flex flex-col justify-center items-center ${
          varient === "default" && "bg-[#27272a] border border-stone-600"
        } ${
          varient === "danger" &&
          "bg-red-700/20 backdrop-blur-sm text-red-500 border border-red-700"
        }`}
      >
        <div>
          <h1 className="py-5">Are you sure want to {text?.message} ?</h1>
          <div className="flex justify-center gap-2">
            <button
              onClick={handleCancel}
              className={`${
                varient === "default" && "bg-[#27272a] border border-stone-600"
              } ${
                varient === "danger" && "text-red-500 border border-red-700"
              } rounded px-4 py-2 text-sm tracking-wide`}
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className={`rounded px-4 py-2 text-sm tracking-wide ${
                varient === "default" && "bg-gree-700 text-white"
              } ${varient === "danger" && "bg-red-700 text-white"}`}
            >
              {text?.label}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModelWrapper
