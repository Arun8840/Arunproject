import React, { useEffect, useRef } from "react";
import splineframe from "../../Components/images/splineFrame.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import figmaframe from "../../Components/images/figmaFrame.png";

function DetailPage1() {
  let BannerImage: any = splineframe.src;
  let FigmaImage: any = figmaframe.src;

  let ScrollContainer = useRef(null);
  let Sectionref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const HorizointalAnimation = gsap.fromTo(
      Sectionref.current,
      {},
      {
        scrollTrigger: {
          trigger: ScrollContainer.current,
          start: "center center",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
    return () => {
      HorizointalAnimation.kill();
    };
  }, []);

  return (
    <div
      ref={ScrollContainer}
      className="w-full lg:h-[100vh] grid place-items-center gap-5 py-2"
    >
      <div className="container h-full grid lg:grid-cols-4 place-items-center gap-5">
        <div className="w-full col-span-2">
          <h1 className="text-[3rem] bg-gradient-to-br from-[#FF6000] to-[#FFA559] bg-clip-text text-transparent font-bold tracking-wider">
            Spline
          </h1>
          <p className=" tracking-wider leading-8 text-justify block text-sm ">
            I'm a dedicated 3D designer with a strong passion for pushing the
            boundaries of creativity and design. My journey in the world of 3D
            art began with the discovery of Spline 3D Editor, which has since
            become my go-to tool for bringing my ideas to life. I am constantly
            exploring new techniques, learning from the community, and striving
            to enhance my skills in 3D design.
          </p>
        </div>
        <div className="rounded-lg col-span-2">
          <img
            src={BannerImage}
            alt="spline page"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

        <div className="rounded-lg col-span-2">
          <img
            src={FigmaImage}
            alt="spline page"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <div className="col-span-2">
          <h1 className="text-[3rem] bg-gradient-to-br from-[skyblue] to-[blue] bg-clip-text text-transparent font-bold tracking-wider">
            Figma
          </h1>
          <p className=" tracking-wider leading-8 text-justify block text-sm ">
            I'm a dedicated designer with a strong passion for creating visually
            appealing and user-friendly designs. Figma has played a crucial role
            in my design journey, allowing me to collaborate seamlessly with
            teams and clients while bringing my creative concepts to life. I am
            continually exploring new design trends and techniques to deliver
            the best possible design solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailPage1;
