import React from "react";
interface ButtonpropTypes {
  className: string;
  varient: "Primary" | "Secondary" | "Success" | "Warning";
  size: "md" | "lg" | "xl";
  label: string;
  handleAction?: () => void;
}
function Radio(props: ButtonpropTypes) {
  // todo props items
  const { className, varient = "Primary", size = "lg", handleAction } = props;
  let defaultStyle = `text-sm font-semibold px-5 py-2 rounded-lg ${
    varient?.includes("Primary")
      ? "accent-blue-600"
      : varient?.includes("Secondary")
      ? "accent-slate-600"
      : varient?.includes("Success")
      ? "accent-green-600"
      : varient?.includes("Warning")
      ? "accent-yellow-600"
      : "accent-white text-slate-800"
  }`;

  let ButtonProps = {
    className: className ? className : defaultStyle,
    defaultSize: `${
      size?.includes("md")
        ? "w-[15px] h-[15px]"
        : size?.includes("lg")
        ? "w-[20px] h-[20px]"
        : size?.includes("xl")
        ? "w-[30px] h-[30px]"
        : null
    }`,
  };
  return (
    <>
      <input
        type="radio"
        checked={true}
        className={`${ButtonProps.className} ${ButtonProps.defaultSize} border`}
      />
    </>
  );
}

export default Radio;
