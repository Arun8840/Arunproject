import React from "react";
import Menus from "../Wrappers/MenuBar/Menus";
import MenuItems from "../Wrappers/MenuBar/MenuItems";

interface MenuPropsTypes {
  data: string[];
  classnName: string;
}
function NavigationMenu(props: MenuPropsTypes) {
  // todo props items
  const { data, classnName } = props;

  let defaultStyle = {
    Data: data
      ? data
      : ["Home", "About", "Settings", "Profile"],
  };
  return (
    <Menus>
      {defaultStyle.Data.map((items) => {
        return (
          <MenuItems>
            <li className="w-full rounded-lg p-2 active:bg-white/30 text-center">{items}</li>
          </MenuItems>
        );
      })}
    </Menus>
  );
}

export default NavigationMenu;
