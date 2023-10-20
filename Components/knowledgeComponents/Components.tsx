import { ComponentsData } from "@/data/ComponentsData";
import dynamic from "next/dynamic";
import React from "react";

function Components() {
  return (
    <div className="h-full grid grid-cols-12 grid-rows-12 gap-1">
      {ComponentsData &&
        ComponentsData.map((values) => {
          const Components = dynamic(
            () => import(`../../Utility/components/${values.component}`)
          );
          return (
            <div
              style={{
                gridColumn: values.styles.gridColumn,
                gridRow: values.styles.gridRow,
              }}
              className={`p-1 rounded cursor-pointer hover:bg-[#27272a]/20 grid place-items-center`}
            >
              <Components />
            </div>
          );
        })}
    </div>
  );
}

export default Components;
