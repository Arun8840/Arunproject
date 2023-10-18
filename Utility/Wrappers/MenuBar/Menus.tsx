import React from "react";
interface MenuPropsTypes {
  data?: string[];
  classnName?: string;
  children: any;
}
function Menus(props: MenuPropsTypes) {
  // todo props items
  const { data, classnName, children } = props;

  let defaultStyle = {
    classnName: classnName
      ? classnName
      : "w-full flex justify-between text-sm border border-[#27272a]/50 rounded-lg p-1 select-none bg-white text-slate-800",
    Data: data
      ? data
      : ["Home", "About", "Settings", "Profile", "View", "File", "Edit"],
  };
  return <ul className={defaultStyle.classnName}>{children}</ul>;
}

export default Menus;
