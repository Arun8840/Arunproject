import useGetFonts from '@/font/fonts'
import React from 'react'
import profilePic from "../../Components/images/profile.jpeg"
import banner2 from "../../Components/images/bannerimage2.jpeg"
import banner3 from "../../Components/images/5e5344373373094088f94ebe_how-to.gif"
import heart from "../../Components/images/wired-flat-20-love-heart.gif"
import logo from "../../Components/images/young-man.png"
import { DarkIcon, MuteIcon, RightArrow, SettingsIcon, UnMuteIcon } from '@/Utility/icons/icons'
import useGetSkills from '@/data/SkillsData'
import { ProjectDatas } from '@/data/ProjectData'
import Link from 'next/link'
import Image from 'next/image'
function LandingPage() {
  let profileBanner: any = profilePic.src
  let animatedHeart: any = heart.src
  let Banner_Image2: any = banner2.src
  let Banner_Image3: any = banner3.src
  let profile_logo: any = logo.src
  // todo getfonts
  const { HeaderFont, ContentFont } = useGetFonts()

  // get tools and skills data
  const { SkillItems } = useGetSkills()

  const handleDarkmode=()=>{
    debugger
    console.log("hello")
  }
  return (
    <section className='bg-[#101010]  min-h-screen  grid lg:grid-cols-12 auto-rows-max gap-5  p-3'>
      {/* //todo header */}
      <div className='bg-[#f8fe9d] w-full h-full backdrop-blur-sm   p-3 lg:col-span-6 flex items-center justify-center flex-wrap gap-5  rounded-3xl'>
        <div className='hidden lg:block w-1/5 h-full'>
          <Image width={200} height={200} src={Banner_Image3} alt="profile" className='object-contain' />
        </div>
        <div className='flex-1 divide-y divide-stone-700 divide-opacity-35'> <h1 className={`text-[2rem] ${HeaderFont?.className} capitalize tracking-wider`}>Hi i&apos;m arun_</h1>
          <p className={`${ContentFont?.className} capitalize tracking-wider py-2 text-sm leading-7`}>frondend developer, <br /> currently working at zettastack systems PVT. I design and code beautifully simple things, and I love what I do.</p></div>
      </div>


      {/* //todo about */}
      <div className='bg-[#4842fe]  p-3 lg:col-span-4 text-white   rounded-3xl'>
        <div className='divide-y divide-stone-700 divide-opacity-35'> <h1 className={` text-[2rem] ${HeaderFont?.className} capitalize tracking-wider p-1`}>what i&apos;m about?</h1>
          <p className={` ${ContentFont?.className} capitalize tracking-wider px-1 py-3 text-sm leading-7`}> My journey in web
            development began ZettaStack, which has sharpened my skills and
            passion for creating exceptional web applications.</p></div>


      </div>
    
      {/* //todo settings icons */}
      <ul className='bg-[#d1fe06] text-[#d1fe06] w-fit mx-auto lg:w-full h-full  p-2 lg:col-span-2  grid place-items-center gap-1 rounded-3xl'>
        <li onClick={handleDarkmode} className='p-5 grid place-items-center cursor-pointer bg-[#232323] rounded-full'><DarkIcon width={20} /></li>
      </ul>

      {/* //todo projects */}
      <div className='bg-[#DCFFB7] text-[black]  lg:col-span-5 rounded-3xl p-3'>
        <h1 className={`text-[2rem] ${HeaderFont?.className} capitalize tracking-wider p-2 `}>projects</h1>
        <div >
          <ul className='divide-y divide-gray-300 divide-opacity-50'>{ProjectDatas && ProjectDatas?.length > 0 && ProjectDatas?.map((proItems, index: number) => {
            return <li key={index} className='p-2 '>
              <div className='flex-1'><h1 className={` ${HeaderFont?.className} capitalize tracking-wider `}>{proItems?.title}</h1>
              </div>
              <p className={`${ContentFont?.className} capitalize tracking-wider line-clamp-2 text-sm px-2  leading-7`}>{proItems?.description}</p>
              <div className='flex justify-end'>
                <Link href={proItems?.path}><button className='text-sm bg-black  p-2 rounded-full text-white'><RightArrow width={20} /></button> </Link>
              </div>
            </li>
          })}</ul>
        </div>
      </div>
      <div className='bg-[white] grid place-items-center  lg:col-span-3  rounded-3xl overflow-hidden'>

        <Image width={400} height={400} src={profileBanner} alt="profile" className='w-full h-full  object-cover' />
      </div>

      <div className='lg:col-span-4  flex flex-col justify-between gap-3'> 
       <div className='bg-[#f8fe9d]  p-3 col-span-4 grid lg:grid-cols-3 auto-rows-max gap-3 rounded-3xl'>
        <div className={`text-center  flex flex-col justify-between `}>
          <h1 className='text-[3rem]  font-semibold font-mono'>2+</h1>
          <p className={` ${ContentFont?.className} capitalize tracking-wider px-1 py-2`}>years of experience</p>
        </div>
        <div className='text-center  flex flex-col justify-between'>
          <h1 className='text-[3rem]   font-semibold font-mono'>2</h1>
          <p className={` ${ContentFont?.className} capitalize tracking-wider px-1 py-2`}>projects completed</p>
        </div>
        <div className='text-center  flex flex-col justify-between'>
          <h1 className='text-[3rem]   font-semibold font-mono'>0</h1>
          <p className={` ${ContentFont?.className} capitalize tracking-wider px-1 py-2`}>publication</p>
        </div>
      </div>
        <div className='grid grid-cols-4 place-items-center bg-[white] rounded-3xl flex-1 p-3'>  {SkillItems?.length > 0 && SkillItems?.map((items, index: number) => {
          return <div key={index} className=' rounded-3xl  p-3 size-20 grid place-items-center'>
            {items?.icon}
          </div>
        })}</div>


      </div>

      {/* //todo sample content */}
      <div className='bg-[#FF8400] p-3 lg:col-span-6 text-white   rounded-3xl'>


        <h1 className={`text-[1.5rem] ${HeaderFont?.className} capitalize tracking-wider p-1`}>what i do best</h1>
        <p className={` ${ContentFont?.className} capitalize tracking-wider px-1 py-2 text-sm leading-7`}>I am an enthusiastic Frontend Developer with a strong penchant for
          creating elegant and responsive user interfaces. </p>
      </div>

      {/* contact */}
      <div className='bg-[#D67BFF]  p-3 lg:col-span-6 flex flex-col justify-between rounded-3xl'>
      <h1 className={`text-[1.5rem] ${HeaderFont?.className} capitalize tracking-wider p-1`}>Contact</h1>
        <p className={` ${ContentFont?.className} capitalize tracking-wider px-1 py-2 text-sm leading-7`}>Ready to enhance your website&apos;s user experience? Contact me today to discuss your front-end development needs.</p>

        <div className={`flex flex-col lg:flex-row items-center gap-3 ${ContentFont?.className} pt-4`}>
          <input type="text" className='bg-white outline-none rounded-2xl bg-transparent p-3 flex-1 w-full lg:w-fit placeholder:text-black' placeholder='Your Email address' />
          <button className='bg-[white] rounded-2xl  transition-colors duration-200 p-3 w-full lg:w-fit'>Get in touch !</button>
        </div>
      </div>



    </section>
  )
}

export default LandingPage