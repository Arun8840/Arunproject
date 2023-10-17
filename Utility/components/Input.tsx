import React from "react";

interface InputTypes {
  name?: string;
  type?: string;
  required?: any;
  value?: any;
  placeholder?: string;
  onchange?: (e: any) => void;
  className?: string;
}
function Input(props: InputTypes) {
  // todo props items
  const { name, type, required, value, placeholder, onchange, className } =
    props;

  // todo input properties
  let inputProp = {
    placeholder: placeholder ? placeholder : "Type",
    required: required ? required : false,
    type: type ? type : "text",
    name: name ? name : "",
  };
  return (
    <div className="w-full h-full">
      <input
        className={
          className
            ? className
            : "border rounded-lg p-2 outline-none border-[#27272a] bg-inherit w-full"
        }
        type={inputProp.type}
        value={value}
        name={inputProp.name}
        placeholder={inputProp.placeholder}
        required={inputProp.required}
        onChange={onchange}
      />
    </div>
  );
}

export default Input;
