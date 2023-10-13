import React, { useEffect, useRef, useState } from "react";
import NavHeader from "./NavHeader";
import Overview from "../knowledgeComponents/Overview";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
interface TabTypes {
  name: string;
  component: any;
  componentName: string;
}
function Knowledge() {
  const animatedElementRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const [Tabcomponent, settabComponent] = useState<any>({
    name: "Overview",
    component: <Overview />,
  });
  const Tablist: TabTypes[] = [
    { name: "Overview", component: "OverView", componentName: "OverView" },
    { name: "Analytics", component: "Analytics", componentName: "Analytics" },
    { name: "Projects", component: "Projects", componentName: "Projects" },
    {
      name: "Components",
      component: "Components",
      componentName: "Components",
    },
    { name: "Package", component: "Package", componentName: "Package" },
    { name: "Templates", component: "Templates", componentName: "Templates" },
  ];

  //   todo handle tab click
  const handleTabclick = (items: any) => {
    settabComponent((prev: any) => ({
      ...prev,
      component: items.component,
      name: items.name,
    }));
  };
  useEffect(() => {
    const animation = gsap.fromTo(
      animatedElementRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        scrollTrigger: {
          trigger: animatedElementRef.current,
          start: "top bottom", // Start the animation when the element enters the viewport
          end: "center center", // End the animation when the element is centered in the viewport
          scrub: false, // Smoothly updates animation as the user scrolls
          markers: false, // Add markers to visualize trigger and animation positions (optional)
        },
      }
    );

    // When the component unmounts, kill the animation to prevent memory leaks
    return () => {
      animation.kill();
    };
  }, []);
  return (
    <div className="w-full h-[100vh] p-5 flex flex-col gap-3">
      <h1 className="text-center capitalize tracking-wider font-bold text-[2rem]">
        lets introduce something
      </h1>
      {/* //todo dashboard */}
      <div
        ref={animatedElementRef}
        className="border container mx-auto border-[#27272a] rounded-lg w-full h-full flex flex-col"
      >
        {/* dash header */}
        <NavHeader />

        {/* tab header */}
        <div className="p-2">
          <ul className="text-sm flex items-center gap-1 bg-[#27272a] w-fit p-1 rounded-lg">
            {Tablist.map((items) => {
              return (
                <li
                  onClick={() => handleTabclick(items)}
                  className={`${
                    items.name === Tabcomponent.name && "bg-[#09090b]"
                  } py-1 px-2 rounded-lg cursor-pointer transition-colors duration-200`}
                >
                  {items.name}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="p-2 w-full h-full">{Tabcomponent.component}</div>
      </div>
    </div>
  );
}

export default Knowledge;
