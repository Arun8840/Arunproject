import gsap, { Power4 } from "gsap";
import React, { useEffect, useRef } from "react";

function AnalyticsBars({ values, index, Tabcomponent }: any) {
  const barsRef: any = useRef([]);
  useEffect(() => {
    const animation = gsap.to(barsRef.current, {
      // height: barsref?.current?.value,
      background: `linear-gradient(to bottom, #adfa1d, #09090bbd)`,
      height: `${values.value}`,
      duration: 1.5,
      ease: Power4.easeOut,
      stagger: 0.5,
      scrollTrigger: {
        trigger: barsRef.current,
        start: "top bottom", // Start the animation when the element enters the viewport
        end: "bottom bottom", // End the animation when the element is centered in the viewport
        scrub: false, // Smoothly updates animation as the user scrolls
        markers: false, // Add markers to visualize trigger and animation positions (optional)
      },
    });
    return () => {
      animation.kill();
    };
  }, [Tabcomponent]);
  return (
    <li
      ref={(el) => (barsRef.current[index] = el)}
      className={`w-[70px] p-1 rounded-t-lg relative `}
    >
      <span className="absolute -top-4 left-0 text-center w-full">
        {values.title}
      </span>
      <h1 className="text-center p-1 text-slate-800 font-semibold">
        {values.value}
      </h1>
    </li>
  );
}

export default AnalyticsBars;
