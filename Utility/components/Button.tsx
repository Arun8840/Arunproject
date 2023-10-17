import React from "react";
interface ButtonpropTypes {
  className: string;
  varient: "Primary" | "Secondary" | "Success" | "Warning";
  label: string;
  handleAction?: () => void;
}
function Button(props: ButtonpropTypes) {
  // todo props items
  const { className, varient, label, handleAction } = props;
  let defaultStyle = `text-sm font-semibold px-5 py-2 rounded-lg ${
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
  return (
    <button
      onClick={handleAction && handleAction}
      className={ButtonProps.className}
    >
      {label ? label : "Button"}
    </button>
  );
}

export default Button;
