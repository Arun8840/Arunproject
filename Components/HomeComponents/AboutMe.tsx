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
  let contentRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const title = gsap.fromTo(
      TitleRef.current,
      {
        translateX: "300%",
      },
      {
        translateX: "0%",
        duration: 2,
        ease: "circ.out",
        scrollTrigger: {
          trigger: ScrollanimationTrigger.current,
          start: "top center",
          end: "900",
          scrub: true,
        },
        onStart: () => {
          gsap.fromTo(
            contentRef.current,
            { opacity: 0, scale: 0 },
            {
              opacity: 1,
              scale: 1,
              color: "#232323",
              duration: 0.5,
              delay: 1,
            }
          );
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
        className="absolute text-[30rem] bg-gradient-to-br from-[#FF9130] to-[#FECDA6] bg-clip-text text-transparent font-extrabold"
      >
        About
      </span>
      <div
        ref={contentRef}
        className="max-w-[50%] min-h-[300px] bg-white/80  shadow-lg mx-auto p-4 rounded-lg backdrop-blur-lg flex flex-col justify-center gap-5 opacity-0"
      >
        <div className="w-28 h-28 border rounded-lg">
          <img
            src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="profile"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
        <p
          className={`capitalize tracking-wider leading-7 text-lg ${poppins.className}`}
        >
          I am an enthusiastic Frontend Developer with a strong penchant for
          creating elegant and responsive user interfaces. My journey in web
          development began ZettaStack, which has sharpened my skills and
          passion for creating exceptional web applications.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
