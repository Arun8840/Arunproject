import useGetAnimations from "@/Utility/animations/Ripple";
import { DownArrow } from "@/Utility/icons/icons";
import gsap, { TweenMax } from "gsap";
import React, { useEffect, useRef, useState } from "react";

function LandingPage() {
  const { handleRipple, ripple } = useGetAnimations();

  let Headerref: any = useRef(null);
  let Contentref: any = useRef(null);
  useEffect(() => {
    TweenMax.staggerTo([Headerref, Contentref], 0.3, { scaleY: 1 }, 0.2);
  }, []);

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center gap-3  group select-none">
      <h1
        ref={(el) => (Headerref = el)}
        className={`text-start text-[3rem] font-bold italic overflow-hidden px-2 origin-bottom scale-y-[0]`}
      >
        <span className="transition-colors duration-200 bg-gradient-to-br from-orange-500 to-pink-600 px-2 bg-clip-text text-transparent block text-center">
          Hello!
        </span>
        🫡 I'M Arun FrontEnd Developer
      </h1>
      <p
        ref={(el) => (Contentref = el)}
        className="capitalize tracking-wide break-words text-center leading-7 overflow-hidden px-2 origin-bottom scale-y-[0]"
      >
        front end Developer who focuses on writing clean <br />
        elegant and efficent code
      </p>
      <button
        onClick={handleRipple}
        className={` border border-[#333333] rounded-full p-3 overflow-hidden relative ${
          ripple ? "pointer-events-none" : ""
        }`}
      >
        <DownArrow width={15} />
      </button>
    </div>
  );
}

export default LandingPage;
