import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Poppins } from "next/font/google";
import React, { useEffect, useRef, useState } from "react";
import NavHeader from "./NavHeader";
import Analytics from "../knowledgeComponents/Analytics";
import Components from "../knowledgeComponents/Components";
const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  display: "block",
});
interface TabTypes {
  name: string;
  component: any;
  componentName: string;
}
function Knowledge() {
  let titleRef = useRef(null);
  let scrollingTrigger = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const [Tabcomponent, settabComponent] = useState<any>({
    name: "Analytics",
    component: <Analytics />,
  });
  const Tablist: TabTypes[] = [
    { name: "Analytics", component: Analytics, componentName: "Analytics" },
    {
      name: "Components",
      component: Components,
      componentName: "Components",
    },
  ];

  //   todo handle tab click
  const handleTabclick = (items: any) => {
    settabComponent((prev: any) => ({
      ...prev,
      component: <items.component Tabcomponent={Tabcomponent.name} />,
      name: items.name,
    }));
  };
  useEffect(() => {
    let titleAnimation = gsap.fromTo(
      titleRef.current,
      { translateX: "-300rem", duration: 2, ease: "power1.out" },
      {
        translateX: "0rem",
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: scrollingTrigger.current,
          start: "center bottom",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    return () => {
      titleAnimation.kill();
    };
  }, []);
  return (
    <div
      ref={scrollingTrigger}
      className={`w-full h-[100vh] bg-black relative  overflow-hidden ${poppins.className}`}
    >
      <h1
        ref={titleRef}
        className="text-center absolute top-[30%] w-full h-full text-[9rem] bg-gradient-to-br from-[#FECDA6] to-[#FECDA6] bg-clip-text text-transparent font-extrabold"
      >
        lets introduce something
      </h1>

      <Analytics />
    </div>
  );
}

export default Knowledge;
