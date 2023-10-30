import useGetSkills from "@/data/SkillsData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Poppins } from "next/font/google";
import { useEffect, useRef } from "react";
const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "block",
});
function LandingPage() {
  let SectionLoaderref = useRef(null);
  let Headerref = useRef(null);
  let Image1ref = useRef(null);
  let Image2ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  // todo animation
  useEffect(() => {
    const pin = gsap.fromTo(
      SectionLoaderref.current,
      {
        width: 0,
        height: "2px",
        backgroundColor: "white",
        opacity: 1,
      },
      {
        width: "100%",
        height: "2px",
        duration: 1,
        ease: "bounce.out",
        onComplete: () => {
          gsap.to(SectionLoaderref.current, {
            height: "100%",
            backgroundColor: "black",
          });

          gsap.to(Headerref.current, {
            display: "block",
            y: 0,
            x: 0,
            opacity: 1,
            delay: 1,
          });

          gsap.to([Image1ref.current, Image2ref.current], {
            duration: 1,
            scale: 1,
            delay: 2,
            stagger: 0.5,
          });
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);
  return (
    <div className="w-full h-[100vh] bg-black relative grid place-items-center py-3">
      {/* //todo loader */}
      <div
        ref={SectionLoaderref}
        className="flex justify-center items-center flex-col relative z-0"
      >
        <div
          style={{ clipPath: "polygon(0 10%, 100% 10%, 100% 100%, 0% 100%)" }}
        >
          <h1
            ref={Headerref}
            className={`text-[6rem] tracking-wider  ${poppins.className} capitalize opacity-0 hidden translate-y-28 translate-x-28 relative`}
          >
            hi i'm Arun{" "}
            <span className="bg-gradient-to-br from-[#adfa1d] to-[#adfa1d] bg-clip-text text-transparent">
              FrontEnd Developer
            </span>
          </h1>
        </div>
      </div>

      {/* //image */}

      <div
        ref={Image1ref}
        className="w-[400px] h-[50%]  to-[black] absolute mix top-28 left-[71%] mix-blend-exclusion origin-center scale-0"
      >
        <img
          src="https://images.pexels.com/photos/3254429/pexels-photo-3254429.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="banner image"
          className="w-full h-full "
        />
      </div>

      <div
        ref={Image2ref}
        className="w-[300px] h-[40%]  to-[black] absolute mix top-[50%] left-[60%]  mix-blend-exclusion origin-center scale-0"
      >
        <img
          src="https://images.pexels.com/photos/3254429/pexels-photo-3254429.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="banner image"
          className="w-full h-full "
        />
      </div>
    </div>
  );
}

export default LandingPage;
