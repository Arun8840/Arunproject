import gsap from "gsap";
import React, { useRef, useState } from "react";

interface ButtonPropTypes {
  className: string;
  varient: string;
  size: string;
  data: string[];
  handleSelect?: (item: string) => void;
}
function DropdownMenu(props: ButtonPropTypes) {
  // todo props items
  const { className, varient, size, data, handleSelect } = props;
  let DropdownContainer: any = useRef(null);
  const [isOpen, setOpen] = useState(false);
  let buttonProp = {
    className: className
      ? className
      : "text-sm border rounded-lg p-2 border-[#27272a] hover:bg-white/5",
    varient: varient ? varient : "bg-white/10",
    size: size ? size : "",
    data: data
      ? data
      : [
          "Profile",
          "Billing",
          "Settings",
          "Team",
          "New Team",
          "Support",
          "Logout",
        ],
  };

  // todo handle click dropdown
  const handleOpen = () => {
    setOpen(!isOpen);
    if (isOpen) {
      gsap.to(DropdownContainer, 0.1, {
        opacity: 1,
        scale: 1,
        display: "block",
      });
    } else {
      gsap.to(DropdownContainer, 0.1, {
        opacity: 0,
        scale: 0.9,
        display: "none",
      });
    }
  };
  const handleSeletlist = (items: string) => {
    handleSelect && handleSelect(items);
    setOpen(!isOpen);
    gsap.to(DropdownContainer, 0.1, {
      opacity: 0,
      scale: 0.9,
      display: "none",
    });
  };
  return (
    <div className="relative">
      <button
        onClick={handleOpen}
        className={`${buttonProp.className} ${buttonProp.varient}`}
      >
        Dropdown Menu
      </button>
      {/* items */}
      <ul
        ref={(el) => (DropdownContainer = el)}
        className="border border-[#27272a] p-1 rounded-lg bg-black absolute top-10 w-full left-0 text-sm opacity-0 hidden scale-95 "
      >
        {buttonProp.data &&
          buttonProp.data.length > 0 &&
          buttonProp.data.map((items) => {
            return (
              <li
                onClick={() => handleSeletlist(items)}
                className="p-1 hover:bg-white/10 rounded-lg"
              >
                {items}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default DropdownMenu;
