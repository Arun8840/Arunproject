import { ComponentsData } from "@/data/ComponentsData";
import React from "react";

function Components() {
  return (
    <div className="h-full grid grid-cols-5 grid-rows-6 gap-1">
      {ComponentsData &&
        ComponentsData.map((values) => {
          return (
            <div
              className={`p-1 border border-[#27272a]/30 rounded cursor-pointer hover:bg-[#27272a]/20 grid place-items-center   ${values.styles}`}
            >
              <button className="bg-[#27272a] rounded-lg px-5 py-1 shadow-lg text-sm">
                {values.title}
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default Components;
