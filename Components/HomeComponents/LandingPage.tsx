import useGetFonts from '@/font/fonts'
import React from 'react'
import profilePic from "../../Components/images/profile.jpeg"
import banner2 from "../../Components/images/bannerimage2.jpeg"
import banner3 from "../../Components/images/5e5344373373094088f94ebe_how-to.gif"
import heart from "../../Components/images/wired-flat-20-love-heart.gif"
import logo from "../../Components/images/young-man.png"
import { DarkIcon, MuteIcon, SettingsIcon, UnMuteIcon } from '@/Utility/icons/icons'
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
  return (
    <section className='bg-[#111111]  min-h-screen  grid lg:grid-cols-12 gap-2 auto-rows-max p-3'>
      {/* //todo header */}
      <div className='bg-[#4a9173] text-[#f7fd9c] backdrop-blur-sm   p-3 lg:col-span-5 flex flex-wrap gap-1  rounded'>
        <div className='hidden lg:block w-1/4 h-full'>
          <Image width={500} height={500} src={profile_logo} alt="logo" className='w-full h-full object-contain' />
        </div>
        <div className='flex-1 divide-y divide-stone-700 divide-opacity-35'> <h1 className={`text-[2rem] ${HeaderFont?.className} capitalize tracking-wider`}>Hi i&apos;m arun_</h1>
          <p className={`${ContentFont?.className} capitalize tracking-wider py-2 text-sm leading-7`}>frondend developer, <br /> currently working at zettastack systems PVT. I design and code beautifully simple things, and I love what I do.</p></div>
      </div>
      {/* demo image1 */}
      <ul className='bg-[#ada3fa]   p-2 lg:col-span-2  grid grid-cols-3 lg:grid-cols-2 place-items-center gap-1 rounded'>
        <li className='bg-white rounded-lg p-2 w-full h-full grid place-items-center cursor-pointer'><DarkIcon width={20} className="text-[#ada3fa] textplg" /></li>
        <li className='bg-white rounded-lg p-2 w-full h-full grid place-items-center cursor-pointer'><UnMuteIcon width={20} className="text-[#ada3fa] text-lg" /></li>
        <li className='bg-white rounded-lg p-2 w-full h-full grid place-items-center cursor-pointer'><SettingsIcon width={20} className="text-[#ada3fa]" /></li>
      </ul>
      {/* demo image2 */}
      <div className='bg-[#1d1d1c]/70 border border-stone-700/20  backdrop-blur-sm   lg:col-span-2 w-full h-full rounded'>
        <Image width={500} height={500} src={Banner_Image2} alt="profile" className='w-full h-full  object-cover' />
      </div>
      {/* //todo menu */}
      <div className='bg-[#f6d6ef] text-[#594546]  p-2 lg:col-span-3 flex items-center justify-center gap-3 rounded'>
        <h1 className={`text-[2rem] ${HeaderFont?.className} capitalize tracking-wider`}>hello world !!</h1>
        <div className='size-20'>
          <Image width={500} height={500} src={animatedHeart} alt="profile" className='w-full h-full  object-cover' />
        </div>
      </div>

      {/* //todo profile image */}
      <div className='bg-[#1d1d1c]/70 border border-stone-700/20  backdrop-blur-sm   lg:col-span-2 rounded'>
        <Image width={500} height={500} src={profileBanner} alt="profile" className='w-full h-full  object-cover' />
      </div>
      {/* //todo about */}
      <div className='bg-white   p-2 lg:col-span-4 text-[#020200]   rounded'>
        <div className='divide-y divide-stone-700 divide-opacity-35'> <h1 className={` text-[2rem] ${HeaderFont?.className} capitalize tracking-wider p-1`}>what i&apos;m about?</h1>
        <p className={` ${ContentFont?.className} capitalize tracking-wider px-1 py-3 text-sm leading-7`}> My journey in web
          development began ZettaStack, which has sharpened my skills and
          passion for creating exceptional web applications.</p></div>
       
          <h1 className={` text-lg ${HeaderFont?.className} capitalize tracking-wider p-1`}>what i do best</h1>
        <p className={` ${ContentFont?.className} capitalize tracking-wider px-1 py-2 text-sm leading-7`}>I am an enthusiastic Frontend Developer with a strong penchant for
          creating elegant and responsive user interfaces. </p>
      </div>

      <div className='bg-[#f8fe9d]  lg:col-span-3  rounded'>
      <Image width={500} height={500} src={Banner_Image3} alt="profile" className='w-full h-full  object-contain' />
      </div>
    
      {/* //todo projects */}
      <div className='bg-[#ada3fa] text-[#151736]  lg:col-span-3 rounded'>
        <h1 className={`text-[2rem] ${HeaderFont?.className} capitalize tracking-wider p-2 text-[#f8fe9d]`}>projects</h1>
        <div >
          <ul className='divide-y divide-gray-300 divide-opacity-50'>{ProjectDatas && ProjectDatas?.length > 0 && ProjectDatas?.map((proItems,index:number) => {
            return <li key={index} className='p-2 bg-[#f8fe9d]'>
              <div className='flex-1'><h1 className={` ${HeaderFont?.className} capitalize tracking-wider `}>{proItems?.title}</h1>
                </div>
                <p className={`${ContentFont?.className} capitalize tracking-wider line-clamp-2 text-sm px-2  leading-7`}>{proItems?.description}</p>
                <div className='flex justify-end'>
                <Link href={proItems?.path}><button className='text-sm hover:bg-[#020200]  py-2 px-5 text-[#151736]'>Open</button> </Link>
                </div>
            </li>
          })}</ul>
        </div>
      </div>

      {/* contact */}
      <div className='bg-[#fb7b7c]  p-2 lg:col-span-6 flex flex-col justify-between rounded'>
        <p className={` ${ContentFont?.className} capitalize tracking-wider px-1 py-2 text-sm leading-7`}>Ready to enhance your website&apos;s user experience? Contact me today to discuss your front-end development needs.</p>

        <div className={`flex flex-col lg:flex-row items-center gap-3 ${ContentFont?.className} pt-4`}>
          <input type="text" className='border border-stone-700/50 outline-none -xl bg-transparent p-3 flex-1 w-full lg:w-fit placeholder:text-black' placeholder='Your Email address' />
          <button className='bg-[#151736] -xl text-white transition-colors duration-200 p-3 w-full lg:w-fit'>Get in touch !</button>
        </div>
      </div>

      {/* //todo experience and publications */}
      <div className='bg-[#4a9173]  p-2 lg:col-span-6 grid lg:grid-cols-3 auto-rows-max gap-3 rounded'>
        <div className={`text-center  flex flex-col justify-between `}>
          <h1 className='text-[3rem] text-[#f8fe9d] font-semibold font-mono'>2+</h1>
          <p className={`text-[#f8fe9d] ${ContentFont?.className} capitalize tracking-wider px-1 py-2`}>years of experience</p>
        </div>
        <div className='text-center  flex flex-col justify-between'>
          <h1 className='text-[3rem] text-[#f8fe9d]  font-semibold font-mono'>2</h1>
          <p className={`text-[#f8fe9d] ${ContentFont?.className} capitalize tracking-wider px-1 py-2`}>projects completed</p>
        </div>
        <div className='text-center  flex flex-col justify-between'>
          <h1 className='text-[3rem] text-[#f8fe9d]  font-semibold font-mono'>0</h1>
          <p className={`text-[#f8fe9d] ${ContentFont?.className} capitalize tracking-wider px-1 py-2`}>publication</p>
        </div>
      </div>
      <div className='lg:col-span-12 rounded'>
        <div className='overflow-x-auto  grid grid-cols-3 lg:flex gap-2 scroll p-2 h-full'>  {SkillItems?.length > 0 && SkillItems?.map((items,index:number) => {
          return <div key={index} className='bg-[#1d1d1c]/70  p-3 size-20 grid place-items-center'>
            {items?.icon}
          </div>
        })}</div>


      </div>
    </section>
  )
}

export default LandingPage