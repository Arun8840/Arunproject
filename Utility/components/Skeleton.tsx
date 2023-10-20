import React from "react";

function Skeleton() {
  return (
    <div className="w-full h-full rounded-lg flex gap-2 items-center px-2 border border-[#27272a]">
      <div className="min-w-[80px] min-h-[80px] rounded-full bg-gradient-to-r from-[#e0e0e0]/30 to-white/20 animate-pulse"></div>

      <div className="min-w-[80px] min-h-[80px]  flex-1">
        <ul className="flex flex-col gap-2">
          <li className="p-2  rounded-full bg-gradient-to-r from-[#e0e0e0]/30 to-white/30 animate-pulse"></li>
          <li className="p-2  rounded-full bg-gradient-to-r from-[#e0e0e0]/30 to-white/30 animate-pulse"></li>
        </ul>
      </div>
    </div>
  );
}

export default Skeleton;
