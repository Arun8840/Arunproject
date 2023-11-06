import { AnalyticsData } from "@/data/AnalyticsData";
import useGetSkills from "@/data/SkillsData";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Poppins } from "next/font/google";
import React, { useEffect, useRef } from "react";
import Analytics from "./Analytics";
const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  display: "block",
});
function Skills() {
  let ScrollanimationTrigger = useRef(null);
  let skillsListref: any = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const skillItems = gsap.fromTo(
      skillsListref.current.children,
      { opacity: 0, y: -50 },
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

    return () => {
      skillItems.kill();
    };
  }, []);
  return (
    <div ref={ScrollanimationTrigger} className="w-full p-3">
      <h1 className="text-center text-[3rem] block py-2 bg-gradient-to-br from-[#FF9130] to-[#FECDA6] bg-clip-text text-transparent font-extrabold">
        Introduce Something
      </h1>

      <div className="w-full h-full py-10">
        <div className="w-1/2 mx-auto">
          <ul
            ref={skillsListref}
            className="flex flex-1 flex-col justify-center gap-2 border-l border-l-slate-800 px-5"
          >
            {AnalyticsData &&
              AnalyticsData.map((values, index) => {
                return (
                  <li
                    id={values.title}
                    className="bg-white/5 border border-slate-800 rounded-lg p-2 w-full h-full flex gap-2"
                  >
                    <div className="w-16 h-w-16 rounded-lg bg-white/5">
                      <div className="w-full h-full p-1">{values.icon}</div>
                    </div>
                    <div className="flex-1 flex justify-between flex-col pb-2">
                      <div className="flex justify-between text-sm">
                        <h1>{values.title}</h1>
                        <div className="border border-white/10 p-1 rounded-lg">
                          {values.value}
                        </div>
                      </div>
                      <Analytics items={values} index={index} />
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
