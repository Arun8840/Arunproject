import React, { useState } from "react";

function Switch() {
  const [isActive, setactive] = useState(false);
  const handleActive = () => {
    setactive(!isActive);
  };
  return (
    <div
      onClick={handleActive}
      className={`border border-[#27272a] w-[50px] h-[25px] rounded-full flex items-center cursor-pointer ${
        isActive
          ? "opacity-[1] bg-white transition-colors duration-200"
          : "opacity-80"
      } relative`}
    >
      {/* pointer */}
      {isActive ? (
        <div className="w-[20px] h-[20px] rounded-full bg-slate-800 absolute left-[26px] top-[2px] transition-all duration-200"></div>
      ) : (
        <div className="w-[20px] h-[20px] rounded-full bg-white absolute left-[2px] top-[1px] transition-all duration-200 opacity-20"></div>
      )}
    </div>
  );
}

export default Switch;
