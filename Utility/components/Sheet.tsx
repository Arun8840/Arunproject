import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Close } from "../icons/icons";
interface SheetpropTypes {
  className: string;
  label: string;
  children?: any;
  title: string;
  handleOpen?: () => void;
}
function Sheet(props: SheetpropTypes) {
  // todo props items
  const { label, children, className, handleOpen, title } = props;
  let SheetContainer: any = useRef(null);
  let BlurLayer: any = useRef(null);
  let defaultStyle = {
    button: className ? className : `bg-white text-slate-800 p-2 rounded-lg text-sm`,
  };
  const clickOpenSheet = () => {
    handleOpen && handleOpen();

    gsap.to(BlurLayer, 0.2, {
      opacity: 1,
      display: "block",
      width: "100%",
      height: "100%",
    });
    gsap.to(SheetContainer, 0.2, {
      opacity: 1,
      display: "block",
      x: 0,
    });
  };
  // todo close model sheet
  const handleClose = () => {
    gsap.to(BlurLayer, 0.2, {
      opacity: 0,
      display: "none",
    });
    gsap.to(SheetContainer, 0.2, {
      opacity: 0,
      display: "none",
    });
  };
  return (
    <>
      <div
        ref={(el) => (BlurLayer = el)}
        className="w-full h-full bg-white/10 fixed top-0 left-0 right-0 z-10 backdrop-blur-[1px] rounded opacity-0 hidden"
      ></div>

      {/* //todo sheet container */}
      <div
        ref={(el) => (SheetContainer = el)}
        className="w-[300px] bg-black h-full fixed top-0 right-0 z-50 p-2 opacity-0 hidden"
      >
        {children ? (
          children
        ) : (
          <div>
            {/* header */}
            <div className="flex items-center justify-between">
              <h1 className="text-sm py-2">{title ? title : "Edit Profile"}</h1>
              <button onClick={handleClose}>
                <Close width={15} />
              </button>
            </div>
            <label htmlFor="username" className="text-sm py-2 block">
              Username
            </label>
            <input
              type="text"
              className="border border-[#27272a] rounded-lg p-2 bg-inherit w-full"
            />
            <label htmlFor="password" className="text-sm py-2 block">
              Password
            </label>
            <input
              type="text"
              className="border border-[#27272a] rounded-lg p-2 bg-inherit w-full"
            />
            <div className="text-sm flex justify-end gap-2 py-5">
              <button className="rounded-lg bg-white/20 p-2">cancel</button>
              <button className="rounded-lg bg-white text-slate-800 p-2">
                Update
              </button>
            </div>
          </div>
        )}
      </div>
      {/* open button */}
      <button onClick={clickOpenSheet} className={`${defaultStyle.button}`}>
        {label ? label : "Open Sheet"}
      </button>
    </>
  );
}

export default Sheet;
