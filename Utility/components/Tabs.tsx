import React, { useState } from "react";
interface TabTypes {
  name: string;
  component: any;
  componentName: string;
}
function Tabs() {
  const [Tabcomponent, settabComponent] = useState<any>({
    name: "Account",
    component: "Account",
  });
  const Tablist: TabTypes[] = [
    { name: "Account", component: "Account", componentName: "Account" },
    { name: "Settings", component: "Settings", componentName: "Settings" },
    { name: "Security", component: "Security", componentName: "Security" },
  ];
  //   todo handle tab click
  const handleTabclick = (items: any) => {
    settabComponent((prev: any) => ({
      ...prev,
      component: items.component,
      name: items.name,
    }));
  };
  return (
    <>
      <div className="border container mx-auto border-[#27272a] rounded-lg w-full h-full flex flex-col">
        {/* tab header */}
        <div className="p-2 select-none">
          <ul className="text-sm flex justify-evenly items-center gap-1 bg-[#27272a] w-full p-1 rounded-lg">
            {Tablist.map((items) => {
              return (
                <li
                  onClick={() => handleTabclick(items)}
                  className={`${
                    items.name === Tabcomponent.name && "bg-[#09090b]"
                  } w-full text-center py-1 px-2 rounded-lg cursor-pointer transition-colors duration-200`}
                >
                  {items.name}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="p-2 w-full h-full">{Tabcomponent.component}</div>
      </div>
    </>
  );
}

export default Tabs;
