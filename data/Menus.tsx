import React from "react";
interface NavTypes {
  name: string;
  path: string;
  icon: string;
}
function useGetMenus() {
  let NavMenus: NavTypes[] = [
    { name: "ShowCase", path: "", icon: "" },
    { name: "Templates", path: "", icon: "" },
    { name: "About", path: "", icon: "" },
  ];

  return { NavMenus };
}

export default useGetMenus;
