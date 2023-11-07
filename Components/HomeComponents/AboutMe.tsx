import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Poppins } from "next/font/google";
import React, { useEffect, useRef } from "react";
import Arun from "../images/arun.jpg";
const FontStyle = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "block",
});
function AboutMe() {
  let bannerImage: any = Arun.src;
  let ScrollanimationTrigger = useRef(null);
  let containerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const title = gsap.fromTo(
      containerRef.current,
      {
        y: -210,
        scale: "1.2",
      },
      {
        y: 0,
        scale: 1,
        duration: 2,
        ease: "circ.out",
        scrollTrigger: {
          trigger: ScrollanimationTrigger.current,
          start: "top bottom",
          end: "bottom",
          scrub: true,
        },
      }
    );
    const animate = gsap.fromTo(
      ["#Square", "#Circle"],
      { width: 0, height: 0 },
      {
        width: 200,
        height: 200,
        duration: 1,
        ease: "bounce.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: ScrollanimationTrigger.current,
          start: "top bottom",
          end: "bottom",
        },
      }
    );
    return () => {
      title.kill();
      animate.kill();
    };
  }, []);
  return (
    <div
      ref={ScrollanimationTrigger}
      className={`w-full h-[100vh] sm:overflow-hidden lg:overflow-visible flex justify-center items-center bg-[#fffce1] ${FontStyle.className}`}
    >
      <div
        ref={containerRef}
        className="container flex justify-center items-center pt-5 border bg-black rounded-3xl relative z-0"
      >
        <div className="w-[400px]">
          <img src={bannerImage} alt="bannerimage" className="object-contain" />
        </div>
        <div className="w-1/2">
          <span className="text-lg bg-gradient-to-br from-[#FF6C22] to-[#2B3499] bg-clip-text text-transparent font-extrabold">
            About Me
          </span>
          <h1 className="text-[4rem] bg-gradient-to-br from-[#FF6C22] to-[#2B3499] bg-clip-text text-transparent font-extrabold">
            I'm Arun.
          </h1>
          <p className="text-lg capitalize tracking-wider leading-[2rem] border-l border-l-slate-700 pl-5">
            I am an enthusiastic Frontend Developer with a strong penchant for
            creating elegant and responsive user interfaces. My journey in web
            development began ZettaStack, which has sharpened my skills and
            passion for creating exceptional web applications.
          </p>
        </div>

        {/* animation ball */}
        <div
          id="Circle"
          className=" absolute bg-red-400 -bottom-10 rounded-full left-10  origin-center"
        ></div>
        <div
          id="Square"
          className="absolute bg-lime-400 -top-10 rounded-3xl right-10 z-[-2] origin-center"
        ></div>
      </div>
    </div>
  );
}

export default AboutMe;
