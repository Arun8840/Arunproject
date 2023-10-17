import React from "react";
interface TooltippropTypes {
  className: string;
  varient: "Primary" | "Secondary" | "Success" | "Warning";
  label: string;
  children?: any;
}
function Tooltip(props: TooltippropTypes) {
  // todo props items
  const { className, varient, label, children } = props;

  let defaultStyle = {
    varient: `${
      varient?.includes("Primary")
        ? "bg-blue-600/50 backdrop-blur-sm text-white"
        : varient?.includes("Secondary")
        ? "bg-slate-600/50 backdrop-blur-sm text-white"
        : varient?.includes("Success")
        ? "bg-green-600/50 backdrop-blur-sm text-white"
        : varient?.includes("Warning")
        ? "bg-yellow-600/50 backdrop-blur-sm text-white"
        : "bg-white/20 backdrop-blur-sm text-white"
    }`,
    className: className ? className : "",
  };
  return (
    <div className="group relative text-sm bg-white text-slate-800 rounded-lg p-2 hover:bg-white/90">
      {/* //todo tooltip container */}
      <span
        className={`${defaultStyle.varient} text-sm p-1  rounded-lg  absolute  bottom-10 w-full text-center hidden group-hover:block shadow-lg`}
      >
        {label ? label : "Tooltip"}
      </span>
      {children ? children : "Hover Me"}
    </div>
  );
}

export default Tooltip;
