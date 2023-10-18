import React from "react";
import Menus from "../Wrappers/MenuBar/Menus";
import MenuItems from "../Wrappers/MenuBar/MenuItems";

interface MenuPropsTypes {
  data: string[];
  classnName: string;
}
function Menubar(props: MenuPropsTypes) {
  // todo props items
  const { data, classnName } = props;

  let defaultStyle = {
    Data: data
      ? data
      : ["Home", "About", "Settings", "Profile", "View", "File", "Edit"],
  };
  return (
    <Menus>
      {defaultStyle.Data.map((items) => {
        return (
          <MenuItems>
            <li className="rounded-lg p-2 active:bg-white/30">{items}</li>
          </MenuItems>
        );
      })}
    </Menus>
  );
}

export default Menubar;
