import useGetSkills from "@/data/SkillsData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Poppins } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import Skills from "../knowledgeComponents/Skills";
const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "block",
});
function LandingPage() {
  let triggerRef: any = useRef(null);
  let sectionRef = useRef(null);
  let HeaderRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        width: 500,
        height: 500,
        background: "linear-gradient(to right,#FF9130,#FECDA6)",
        scale: 0.3,
      },
      {
        scale: 5,
        duration: 1,
        ease: "circ.in",
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="w-full h-[100vh] grid place-items-center overflow-hidden relative">
      <div
        ref={sectionRef}
        className="absolute rounded-full  origin-center"
      ></div>
      <div className="z-[3] flex flex-col gap-2">
        <h1
          className={`tracking-widest ${poppins.className}  text-black text-[3rem] text-center`}
        >
          Hi I'm ARUN FrontEnd Developer
        </h1>
        <div className="h-[1px] w-1/2 mx-auto bg-black"></div>
        <p className="text-center text-black">
          Passionate about creating responsive and user-friendly web
          applications with a focus on front-end technologies
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
