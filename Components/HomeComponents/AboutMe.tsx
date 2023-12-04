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

    return () => {
      title.kill();
    };
  }, []);
  return (
    <div
      ref={ScrollanimationTrigger}
      className={`w-full h-[100vh] sm:overflow-hidden lg:overflow-visible flex justify-center items-center bg-gradient-radial from-[#FFF5C2] to-[white] ${FontStyle.className}`}
    >
      <div
        ref={containerRef}
        className="container flex justify-center items-center p-5 gap-10 bg-white shadow-lg rounded-3xl relative z-0"
      >
        <div className="w-[400px] h-[400px] bg-zinc-200 rounded-full">
          {/* <img src={bannerImage} alt="bannerimage" className="object-contain" /> */}
        </div>
        <div className="w-1/2">
          <span className="text-lg bg-gradient-to-br from-[#FF6C22] to-[#2B3499] bg-clip-text text-transparent font-extrabold">
            About Me
          </span>
          <h1 className="text-[4rem] bg-gradient-to-br from-[#FF6C22] to-[#2B3499] bg-clip-text text-transparent font-extrabold">
            I'm Arun.
          </h1>
          <p className="capitalize tracking-wider leading-[2rem]">
            I am an enthusiastic Frontend Developer with a strong penchant for
            creating elegant and responsive user interfaces. My journey in web
            development began ZettaStack, which has sharpened my skills and
            passion for creating exceptional web applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
