import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function Analytics({ items, index }: any) {
  let progressBar: any = useRef(null);
  useEffect(() => {
    gsap.to(progressBar.current, {
      width: items.value,
      duration: 1,
      delay: 3,
      ease: "bounce.out",
    });
  }, []);
  return (
    <div className=" w-full rounded-full h-2 bg-white/10">
      {/* inner progress value */}
      <div
        ref={progressBar}
        className="bg-gradient-to-r from-[white]/10 to-[#FF9130] w-0 h-full rounded-full"
      ></div>
    </div>
  );
}

export default Analytics;
