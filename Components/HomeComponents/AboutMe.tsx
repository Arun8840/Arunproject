import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Poppins } from "next/font/google";
import React, { useEffect, useRef } from "react";
const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  display: "block",
});
function AboutMe() {
  let TriggerRef = useRef(null);
  let Image1Ref: any = useRef(null);
  let Image2Ref: any = useRef(null);
  let Image3Ref: any = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const animation = gsap.fromTo(
      [Image1Ref.current, Image2Ref.current, Image3Ref.current],
      { opacity: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "bounce.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: TriggerRef.current,
          start: "top center", // Start the animation when the element enters the viewport
          end: "center bottom", // End the animation when the element is centered in the viewport
        },
      }
    );
    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div
      ref={TriggerRef}
      className="w-full h-[100vh] flex flex-col  container mx-auto p-5 bg-black"
    >
      <div className="grid grid-cols-2 place-items-center gap-4 h-full">
        {/* image group */}
        <div className=" w-full h-full grid place-items-center relative">
          <div
            ref={Image1Ref}
            className="w-[350px]  to-[black] absolute top-10 left-10 shadow-lg origin-center scale-0"
          >
            <img
              src="https://images.pexels.com/photos/3254429/pexels-photo-3254429.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="banner image"
              className="w-full h-full "
            />
          </div>
          <div
            ref={Image2Ref}
            className="w-[350px]  to-[black] absolute right-0 top-[30%] border border-dashed border-slate-800 origin-center scale-0"
          >
            <img
              src="https://images.pexels.com/photos/1671643/pexels-photo-1671643.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="banner image"
              className="w-full h-full "
            />
          </div>
          <div
            ref={Image3Ref}
            className="w-[350px]  to-[black] absolute top-[20%] left-[30%]  origin-center scale-0"
          >
            <img
              src="https://images.pexels.com/photos/2629372/pexels-photo-2629372.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="banner image"
              className="w-full h-full "
            />
          </div>
        </div>
        <div>
          <h1 className="capitalize tracking-wider font-bold text-[4rem]">
            About Me
          </h1>
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
    </div>
  );
}

export default AboutMe;
