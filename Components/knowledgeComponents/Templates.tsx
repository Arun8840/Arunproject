import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import Skills from "./Skills";

function Templates() {
  let sectionRef = useRef(null);
  let triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-[100vh] w-[400vw] flex flex-row">
          <div className="w-full h-full grid place-items-center p-2">
            <div className="p-2 rounded-lg container h-full ">
              <h1 className="text-center capitalize tracking-wider font-bold text-[2rem]">
                I have a Knowledge of
              </h1>

              <Skills />
            </div>
          </div>
          <div className="w-full h-full bg-green-400"></div>
          <div className="w-full h-full bg-black">
            <h1>sections3</h1>
          </div>
          <div className="w-full h-full bg-orange-400">
            <h1>sections4</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Templates;
