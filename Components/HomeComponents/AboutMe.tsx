import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Poppins } from "next/font/google";
import React, { useEffect, useRef } from "react";
const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  display: "block",
});
function AboutMe() {
  let ScrollanimationTrigger = useRef(null);
  let TitleRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const title = gsap.fromTo(
      TitleRef.current,
      {
        translateY: "300%",
        translateX: "0%",
        fontSize: "30rem",
      },
      {
        translateX: "-0%",
        translateY: "-200%",
        fontSize: "6rem",
        duration: 2,
        ease: "circ.out",
        scrollTrigger: {
          trigger: ScrollanimationTrigger.current,
          start: "top center",
          end: "900",
          scrub: true,
        },
      }
    );
    return () => {
      title.kill();
    };
  }, []);
  return (
    <div
      ref={ScrollanimationTrigger}
      className="w-full h-[100vh] grid place-items-center bg-black relative  overflow-hidden"
    >
      <span
        ref={TitleRef}
        className="absolute bg-gradient-to-br from-[#FF9130] to-[#FECDA6] bg-clip-text text-transparent font-extrabold"
      >
        About Me
      </span>

      <p className="w-[50%] text-lg capitalize tracking-wider leading-[2rem] border-l border-l-slate-700 pl-5">
        I am an enthusiastic Frontend Developer with a strong penchant for
        creating elegant and responsive user interfaces. My journey in web
        development began ZettaStack, which has sharpened my skills and passion
        for creating exceptional web applications.
      </p>
    </div>
  );
}

export default AboutMe;
