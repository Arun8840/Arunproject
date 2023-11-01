import gsap, { Power4 } from "gsap";
import React, { useEffect, useRef } from "react";

function AnalyticsBars({ values, index, Tabcomponent }: any) {
  const barsRef: any = useRef([]);
  useEffect(() => {
    const animation = gsap.to(barsRef.current, {
      height: `${values.value}`,
      duration: 1.5,
      ease: "bounce.out",
      stagger: 0.5,
      scrollTrigger: {
        trigger: barsRef.current,
        start: "top bottom",
        end: "center bottom",
      },
    });
    return () => {
      animation.kill();
    };
  }, [Tabcomponent]);
  return (
    <li
      ref={barsRef}
      className={`w-[70px] bg-gradient-to-t from-[#FF9130] to-[white]/20 shadow-custom p-1 rounded-t-lg relative backdrop-blur-sm`}
    >
      <div className="absolute -top-10 left-0 text-center w-full">
        <div className="w-[30px] mx-auto">{values.icon}</div>
      </div>
      <h1 className="text-center font-semibold">
        {values.value}
        <small className="block">{values.title}</small>
      </h1>
    </li>
  );
}

export default AnalyticsBars;
