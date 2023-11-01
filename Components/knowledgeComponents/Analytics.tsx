import AnalyticsBars from "@/Utility/animations/AnalyticsBars";
import { AnalyticsData } from "@/data/AnalyticsData";
import React, { useEffect, useRef } from "react";

function Analytics({ Tabcomponent }: any) {

  return (
    <div className="w-full h-full flex flex-col justify-end">
      <ul className="h-full flex justify-evenly items-end text-xs select-none">
        {AnalyticsData &&
          AnalyticsData.map((values, index: number) => {
            return (
              <AnalyticsBars
                values={values}
                index={index}
                Tabcomponent={Tabcomponent}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default Analytics;
