import gsap from "gsap";
import React, { useRef } from "react";
interface ButtonpropTypes {
  className: string;
  varient: "Primary" | "Secondary" | "Success" | "Warning";
  label: string;
}
function Dialog(props: ButtonpropTypes) {
  // todo props items
  const { className, varient="Primary", label } = props;
  let BlurLayer: any = useRef(null);
  let CardContainer: any = useRef(null);
  let defaultStyle = `text-sm font-semibold px-5 py-2 rounded-lg ${
    varient?.includes("Primary")
      ? "bg-blue-600 text-white"
      : varient?.includes("Secondary")
      ? "bg-slate-600 text-white"
      : varient?.includes("Success")
      ? "bg-green-600 text-white"
      : varient?.includes("Warning")
      ? "bg-yellow-600 text-white"
      : "bg-white text-slate-800"
  }`;

  let ButtonProps = {
    className: className ? className : defaultStyle,
  };

  const handleAction = () => {
    gsap.to(CardContainer, 0.2, { opacity: 1, y: 0, display: "block" });
    gsap.to(BlurLayer, 0.2, { opacity: 1, display: "grid" });
  };
  const cancleAction = () => {
    gsap.to(CardContainer, 0.2, { opacity: 0, y: 10, display: "none" });
    gsap.to(BlurLayer, 0.2, { opacity: 0, display: "none" });
  };
  return (
    <>
      <button onClick={handleAction} className={ButtonProps.className}>
        {label ? label : "Dialog"}
      </button>

      <div
        ref={(el) => (BlurLayer = el)}
        className="w-full h-full hidden opacity-0 bg-black/0 backdrop-blur-sm fixed top-0 left-0 right-0 bottom-0 z-50 rounded  place-items-center"
      >
        {/* //todo card container */}
        <div
          ref={(el) => (CardContainer = el)}
          className="min-w-[400px] min-h-[200px] bg-white rounded-lg shadow-lg hidden opacity-0 translate-y-6"
        >
          <h1 className="text-slate-800 p-2 font-semibold">Edit Profile</h1>
          <p className="text-slate-800 text-xs p-2 break-words">
            Make changes to your profile here. Click save when you're done.
          </p>
          <div className="text-slate-800 flex flex-col p-2">
            <label htmlFor="username">Username</label>
            <input type="text" className="border rounded-lg p-1" />
            <label htmlFor="password">Password</label>
            <input type="text" className="border rounded-lg p-1" />
            <div className="text-sm flex justify-end gap-2 py-5">
              <button
                onClick={cancleAction}
                className="rounded-lg bg-zinc-100 p-2"
              >
                cancel
              </button>
              <button className="rounded-lg bg-slate-800 text-white p-2">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dialog;
