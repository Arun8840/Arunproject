import { ComponentsData } from "@/data/ComponentsData";
import React from "react";

function Components() {
  return (
    <div className="h-full grid grid-cols-12 grid-rows-12 gap-1">
      {ComponentsData &&
        ComponentsData.map((values) => {
          return (
            <div
              style={{
                gridColumn: values.styles.gridColumn,
                gridRow: values.styles.gridRow,
              }}
              className={`p-1 border border-[#27272a]/30 rounded cursor-pointer hover:bg-[#27272a]/20 grid place-items-center`}
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
