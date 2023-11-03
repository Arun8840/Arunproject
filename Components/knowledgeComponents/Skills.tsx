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

    // todo time line animation
    const detailsShow = gsap.timeline({
      scrollTrigger: {
        trigger: ScrollanimationTrigger.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: true,
      },
    });
    detailsShow.to("#HTML", {
      scale: 1,
      translateY: "0%",
      translateX:"0%",
      backgroundColor: "white",
      color: "gray",
      duration: 1,
    });
    detailsShow.to("#HTML", {
      scale: 2,
      translateY: "1000%",
      translateX:"300%",
      backgroundColor: "white",
      color: "gray",
      duration: 1,
    });
    detailsShow.to("#HTML", {
      translateY: "1000%",
      translateX:"0%",
      color: "gray",
      backgroundColor: "white",
      duration: 1,
    });
    return () => {
      skillItems.kill();
      detailsShow.kill();
    };
  }, []);

  return (
    <div
      ref={ScrollanimationTrigger}
      className="w-full min-h-[200vh] h-full  bg-black flex flex-col"
    >
      <h1 className="text-center text-[5rem] block py-10 bg-gradient-to-br from-[#FF9130] to-[#FECDA6] bg-clip-text text-transparent font-extrabold">
        Introduce Something
      </h1>

      <ul
        ref={skillsListref}
        className="lg:container mx-auto h-full p-5 grid grid-cols-4 place-items-center gap-4"
      >
        {AnalyticsData.map((items, index) => {
          return (
            <li
              id={items.title}
              className="bg-white/5 rounded-lg p-2 w-full h-full flex gap-2"
            >
              {/* image */}
              <div className="w-16 h-w-16 rounded-lg bg-white/5">
                <div className="w-full h-full p-1">{items.icon}</div>
              </div>
              {/* title and percentage */}
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
      </ul>
    </div>
  );
}

export default Skills;
