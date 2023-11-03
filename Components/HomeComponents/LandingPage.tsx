import useGetSkills from "@/data/SkillsData";
import gsap from "gsap";
import _ScrollTrigger, { ScrollTrigger } from "gsap/ScrollTrigger";
import { Poppins } from "next/font/google";
import { useEffect, useRef, useState } from "react";
const HeaderFont = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "block",
});
function LandingPage() {
  let Header1ref = useRef(null);
  let Header2ref = useRef(null);
  gsap.registerPlugin(_ScrollTrigger);
  useEffect(() => {
    const headeranimation1 = gsap.fromTo(
      [Header1ref.current, Header2ref.current],
      { translateY: "-700%" },
      {
        translateX: "0%",
        translateY: "0%",
        ease: "bounce.out",
        duration: 1,
        stagger: 0.5,
      }
    );
    return () => {
      headeranimation1.kill();
    };
  }, []);
  return (
    <div
      className={`w-full h-[100vh] overflow-hidden flex justify-center items-center gap-5 bg-white ${HeaderFont.className}`}
    >
      <div className="w-full h-full border-r"></div>
      <div className=" text-slate-700 flex flex-col gap-5 container">
        <h1
          ref={Header1ref}
          className="capitalize tracking-wider text-3xl origin-top"
        >
          Hi Im arun
        </h1>
        <h1
          ref={Header2ref}
          className="capitalize text-[5rem] tracking-wider leading-[5rem] origin-top"
        >
          frontend developer
        </h1>
        <p>
          I am an enthusiastic Frontend Developer with a strong penchant for
          creating elegant and responsive user interfaces. My journey in web
          development began ZettaStack, which has sharpened my skills and
          passion for creating exceptional web applications.
        </p>

        <span className="animate-pulse">Scroll Down</span>
      </div>
    </div>
  );
}

export default LandingPage;
{
  /* <div className="border text-slate-700 ">
<h1 className="capitalize tracking-wider text-3xl">Hi Im</h1>
<h1 className="capitalize text-[5rem] tracking-wider leading-[5rem]">
  arun fontend
  <br /> developer
</h1>
<p className="w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nam perferendis nisi laboriosam esse aperiam molestias nihil. Atque dolorum quibusdam nulla sunt, odit quos tempora? Dolorem, ipsa quos. Sunt, nihil.</p>
</div> */
}
