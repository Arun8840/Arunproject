import React from "react";

interface ProgressTypes {
  className: string;
  varient: "Primary" | "Secondary" | "Success" | "Warning";
  data: string | number;
}
function Progress(props: ProgressTypes) {
  // todo props items
  const { className, varient="Warning", data } = props;
  let progressProp = {
    className: className
      ? className
      : "text-sm border rounded-lg p-2 border-[#27272a] hover:bg-white/5",
    data: data ? data : "50%",
  };
  return (
    <div className="border border-[#27272a] w-full h-4 rounded-full relative group">
      <div
        style={{ width: progressProp?.data }}
        className={`h-full rounded-full ${
          varient?.includes("Primary")
            ? "bg-blue-600"
            : varient?.includes("Secondary")
            ? "bg-slate-600"
            : varient?.includes("Success")
            ? "bg-green-600"
            : varient?.includes("Warning")
            ? "bg-yellow-400"
            : "bg-white"
        } hover:bg-white/80`}
      ></div>

      {/* indicator */}
      {progressProp?.data && (
        <span
          style={{ left: progressProp?.data }}
          className="hidden group-hover:block absolute bottom-5 text-sm rounded-lg p-2 bg-white/20 backdrop-blur-sm"
        >
          {progressProp?.data}
        </span>
      )}
    </div>
  );
}

export default Progress;
