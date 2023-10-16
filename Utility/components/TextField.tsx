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
function TextField(props: InputTypes) {
  // todo props items
  const { name, type, required, value, placeholder, onchange, className } =
    props;
  return (
    <>
      <input
        className={
          className
            ? className
            : "border rounded-lg p-2 outline-none border-[#27272a]"
        }
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onchange}
      />
    </>
  );
}

export default TextField;
