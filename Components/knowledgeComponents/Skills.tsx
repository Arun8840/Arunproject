import { AnalyticsData } from "@/data/AnalyticsData";
import { Poppins } from "next/font/google";
import React, { useEffect, useRef } from "react";
import Analytics from "./Analytics";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const HeaderFont = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "block",
});
function Skills() {
  let scrollContainer = useRef(null);
  let blackContainerRef = useRef(null);
  let skillContainerRef: any = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const BlackContainerAnimation = gsap.fromTo(
      skillContainerRef.current.children,
      {
        display: "none",
        opacity: 0,
      },
      {
        display: "flex",
        opacity: 1,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: scrollContainer.current,
          start: "top center",
          end: "bottom bottom",
        },
      }
    );

    return () => {
      BlackContainerAnimation.kill();
    };
  }, []);
  return (
    <div
      ref={scrollContainer}
      className="w-full h-[100vh] overflow-hidden bg-[#fffce1] grid place-items-center"
    >
      <div
        ref={blackContainerRef}
        className="bg-slate-900 min-w-[700px] min-h-[500px] rounded-3xl flex justify-center items-center relative origin-center"
      >
        <h1
          className={`text-center text-[4rem] block py-2 bg-gradient-to-br from-[#FF6C22] to-[#2B3499] bg-clip-text text-transparent font-extrabold ${HeaderFont.className}`}
        >
          Introduce
          <br /> Something
        </h1>
        <ul ref={skillContainerRef}>
          {AnalyticsData.map((items, index) => {
            return (
              <li
                style={items.style}
                className="min-w-[300px] bg-white/90 shadow-lg backdrop-blur-sm rounded-lg absolute p-1 gap-3 opacity-0 hidden"
              >
                <div className="w-16 h-w-16 rounded-lg bg-white">
                  <div className="w-full h-full p-1">{items.icon}</div>
                </div>
                <div className="flex-1 flex justify-between flex-col pb-2 ">
                  <div className="flex justify-between text-sm px-2">
                    <h1 className="text-slate-500 font-semibold">
                      {items.title}
                    </h1>
                    <div className="p-1 text-slate-500 font-bold">
                      {items.value}
                    </div>
                  </div>
                  <Analytics items={items} index={index} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
