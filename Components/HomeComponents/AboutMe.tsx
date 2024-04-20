import useGetFonts from "@/font/fonts"
import _ScrollTrigger from "gsap/ScrollTrigger"
import React, { useEffect, useRef } from "react"
import bannerImage from "../images/aboutBanner.jpeg"
import Image from "next/image"
import gsap, { Expo } from "gsap"
function AboutMe() {
  const { HeaderNameNormal, HeaderName } = useGetFonts()
  const aboutImage: any = bannerImage.src
  let aboutbanner=useRef(null)
  useEffect(()=>{
    let timeLine1=gsap.timeline({paused:true})

    timeLine1.to(aboutbanner?.current,{
      
      opacity:1,
      duration:1,
      ease:Expo.easeInOut
    })

   
  },[])
  return (
    <div
      className={`w-full lg:min-h-screen bg-black overflow-hidden relative group flex flex-col`}
    >
      
       <div className="grid lg:grid-cols-2 gap-5 h-full">
         {/* //todo about image */}
         <div ref={aboutbanner} className="w-[80%] h-full overflow-hidden">
           <img src={aboutImage} alt="about banner" className="w-full max-h-[700px] object-cover rounded-r-lg" />
           </div>


           <div className="w-full  p-2">
           <h1
               className={`lg:text-[8rem] text-[#2C7865] tracking-wider ${HeaderName.className}`}
             >
               ABOUT ME
             </h1>
             <p
               className={`capitalize tracking-wider text-[#2C7865] leading-[2rem] ${HeaderNameNormal?.className}`}
             >
               I am an enthusiastic Frontend Developer with a strong penchant for
               creating elegant and responsive user interfaces. My journey in web
               development began ZettaStack, which has sharpened my skills and
               passion for creating exceptional web applications.
             </p>
             <h1 className={`${HeaderName?.className} tracking-wide text-[#2C7865] py-4`}>EXPERIENCE</h1>
             <p className={`capitalize tracking-wider leading-[2rem] text-[#2C7865] ${HeaderNameNormal?.className}`}>During my two years at Zettastack System Pvt Ltd in Tidel Coimbatore, I honed my skills as a frontend developer, collaborating with cross-functional teams to deliver responsive web solutions. I focused on designing intuitive user interfaces and leveraging modern technologies such as HTML5, CSS3,Tailwind CSS,JavaScript frameworks. By optimizing performance and continuously learning, I contributed to the success of various projects while staying updated with industry trends.</p>
           </div>
       </div>
        
    </div>
  )
}

export default AboutMe
