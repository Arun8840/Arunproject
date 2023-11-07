import Arun from "../images/arun.jpg";

import gsap from "gsap";
import _ScrollTrigger, { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lobster, Poppins } from "next/font/google";
import { useEffect, useRef, useState } from "react";
const HeaderFont = Lobster({
  weight: "400",
  subsets: ["latin"],
  display: "block",
});
function LandingPage() {
  let Header2ref = useRef(null);
  gsap.registerPlugin(_ScrollTrigger);
  useEffect(() => {
    const headeranimation1 = gsap.fromTo(
      [Header2ref.current],
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
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
      className={`w-full h-[100vh] flex flex-col justify-center gap-16  bg-[#fffce1] z-2`}
    >
      <h1
        ref={Header2ref}
        className={`w-1/2 mx-auto capitalize text-[3rem] lg:text-[13rem]  text-center tracking-wider leading-[11rem] origin-top  ${HeaderFont.className} bg-gradient-to-br from-[#FF6C22] to-[#2B3499] bg-clip-text text-transparent`}
      >
        Frontend Developer
      </h1>
      <p className="text-center font-semibold text-lg tracking-wider text-slate-700">
        I design and code beautifully simple things, and I love what I do.
      </p>
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
