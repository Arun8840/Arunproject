import { AnalyticsData } from "@/data/AnalyticsData";
import useGetSkills from "@/data/SkillsData";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Lobster } from "next/font/google";
import React, { useEffect, useRef } from "react";
import Analytics from "./Analytics";
const HeaderFont = Lobster({
  weight: "400",
  subsets: ["latin"],
  display: "block",
});
function Skills() {
  let ScrollanimationTrigger = useRef(null);
  let skillsListref: any = useRef(null);
  let containerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const skillItems = gsap.fromTo(
      skillsListref.current.children,
      { opacity: 0, y: 50 },
      {
        y: 0,
        opacity: 1,
        duration: 0.2,
        delay: 0.1,
        ease: "expo.out",
        stagger: 0.2,
        yoyo: true,
        scrollTrigger: {
          trigger: ScrollanimationTrigger.current,
          start: "top top",
          end: "bottom bottom",
        },
      }
    );
    const animate = gsap.timeline();
    animate.fromTo(
      containerRef.current,
      {
        y: -120,
        scale: "1.2",
      },
      {
        y: 0,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ScrollanimationTrigger.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    return () => {
      skillItems.kill();
    };
  }, []);
  return (
    <div
      ref={ScrollanimationTrigger}
      className="w-full grid place-items-center lg:h-[100vh] bg-[#fffce1] p-3 sm:overflow-hidden lg:overflow-visible "
    >
      <div ref={containerRef} className="bg-black container rounded-3xl">
        <h1
          className={`text-center text-[6rem] block py-2 bg-gradient-to-br from-[#FF6C22] to-[#2B3499] bg-clip-text text-transparent font-extrabold ${HeaderFont.className}`}
        >
          Introduce Something
        </h1>

        <div className="w-full h-full py-10">
          <ul
            ref={skillsListref}
            className="w-1/2  mx-auto grid grid-cols-2 justify-center gap-2 px-5"
          >
            {AnalyticsData.map((items, index) => {
              return (
                <li
                  id={items.title}
                  className="bg-white rounded-lg p-2 w-full h-full flex gap-2"
                >
                  <div className="w-16 h-w-16 rounded-lg">
                    <div className="w-full h-full p-1">{items.icon}</div>
                  </div>
                  <div className="flex-1 flex justify-between flex-col pb-2 ">
                    <div className="flex justify-between text-sm">
                      <h1 className="text-slate-800 font-semibold">
                        {items.title}
                      </h1>
                      <div className="p-1 text-slate-800 font-bold">
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
    </div>
  );
}

export default Skills;

{
  /* <ul
ref={skillsListref}
className="lg:container mx-auto h-full p-5 grid grid-cols-4 place-items-center gap-4"
>
{AnalyticsData.map((items, index) => {
  return (
    <li
      id={items.title}
      className="bg-white/5 rounded-lg p-2 w-full h-full flex gap-2"
    >
      <div className="w-16 h-w-16 rounded-lg bg-white/5">
        <div className="w-full h-full p-1">{items.icon}</div>
      </div>
      <div className="flex-1 flex justify-between flex-col pb-2">
        <div className="flex justify-between text-sm">
          <h1>{items.title}</h1>
          <div className="border border-white/10 p-1 rounded-lg">
            {items.value}
          </div>
        </div>
        <Analytics items={items} index={index} />
      </div>
    </li>
  );
})}
</ul> */
}
