import React, { useState } from "react";
interface SliderpropTypes {
  className: string;
  varient: "Primary" | "Secondary" | "Success" | "Warning";
  label: string;
  // handleAction?: () => void;
}
function Slider(props: SliderpropTypes) {
  // todo props items
  const { className, varient = "Primary", label } = props;
  const [isPositionChange, setPosition] = useState("0");
  let defaultStyle = `text-sm font-semibold rounded-lg outline-none w-full ${
    varient?.includes("Primary")
      ? "accent-blue-600 text-white"
      : varient?.includes("Secondary")
      ? "accent-slate-600 text-white"
      : varient?.includes("Success")
      ? "accent-green-600 text-white"
      : varient?.includes("Warning")
      ? "accent-yellow-600 text-white"
      : "accent-white text-slate-800"
  }`;

  let defaultPointerStyle = `text-sm font-semibold hidden group-hover:block px-2 py-1 rounded-lg ${
    varient?.includes("Primary")
      ? "bg-blue-600 text-white"
      : varient?.includes("Secondary")
      ? "bg-slate-600 text-white"
      : varient?.includes("Success")
      ? "bg-green-600 text-white"
      : varient?.includes("Warning")
      ? "bg-yellow-600 text-white"
      : "bg-white text-slate-800"
  }`;

  let ButtonProps = {
    className: className ? className : defaultStyle,
  };

  const handleChangerange = (e: any) => {
    setPosition(e.target.value);
  };
  return (
    <div className="w-full relative group">
      {/* todo tooltip */}
      <input
        onChange={handleChangerange}
        type="range"
        min={0}
        max={100}
        step={1}
        className={ButtonProps.className}
      />
      <span
        style={{ left: isPositionChange + "%" }}
        className={`absolute bottom-10 ${defaultPointerStyle} `}
      >
        {isPositionChange}%
      </span>
    </div>
  );
}

export default Slider;
