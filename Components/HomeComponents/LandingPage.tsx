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
    <section className='bg-gradient-to-bl from-[#1E5128] via-black to-[black]  min-h-screen  grid lg:grid-cols-12 gap-3 auto-rows-max p-3'>
      {/* //todo header */}
      <div className='bg-[#1d1d1c]/70 border border-stone-700/20  backdrop-blur-sm  rounded-2xl p-3 lg:col-span-5 lg:row-span-3 flex flex-wrap gap-1 '>
        <div className='hidden lg:block w-1/4 h-full'>
          <img src={profile_logo} alt="logo" className='w-full h-full object-contain' />
        </div>
        <div className='flex-1 divide-y divide-stone-700 divide-opacity-35'> <h1 className={`text-white text-[2rem] ${HeaderFont?.className} capitalize tracking-wider`}>Hi i'm arun_</h1>
          <p className={`text-[#696969] ${ContentFont?.className} capitalize tracking-wider py-2`}>frondend developer, <br /> currently working at zettastack systems PVT. I design and code beautifully simple things, and I love what I do.</p></div>
      </div>
      {/* demo image1 */}
      <ul className='bg-[#1d1d1c]/70 border border-stone-700/20  backdrop-blur-sm  rounded-2xl p-2 lg:col-span-2 lg:row-span-3 grid grid-cols-3 lg:grid-cols-2 place-items-center gap-3'>
        <li className='bg-stone-800/70  border border-stone-700/50 rounded-xl p-2 w-full min-h-[5rem] grid place-items-center cursor-pointer'><DarkIcon width={20} className="text-[#696969] textplg" /></li>
        <li className='bg-stone-800/70  border border-stone-700/50 rounded-xl p-2 w-full min-h-[5rem] grid place-items-center cursor-pointer'><UnMuteIcon width={20} className="text-[#696969] text-lg" /></li>
        <li className='bg-stone-800/70  border border-stone-700/50 rounded-xl p-2 w-full min-h-[5rem] grid place-items-center cursor-pointer'><SettingsIcon width={20} className="text-[#696969]" /></li>
      </ul>
      {/* demo image2 */}
      <div className='bg-[#1d1d1c]/70 border border-stone-700/20  backdrop-blur-sm  rounded-2xl lg:col-span-2 lg:row-span-3 w-full h-full'>
        <img src={Banner_Image2} alt="profile" className='w-full h-full rounded-2xl object-cover' />
      </div>
      {/* //todo menu */}
      <div className='bg-[#1d1d1c]/70 border border-stone-700/20  backdrop-blur-sm  rounded-2xl p-2 lg:col-span-3 lg:row-span-3 flex items-center justify-center gap-3 '>
        <h1 className={`text-white text-[2rem] ${HeaderFont?.className} capitalize tracking-wider`}>hello world !!</h1>
        <div className='size-20'>
          <img src={animatedHeart} alt="profile" className='w-full h-full rounded-2xl object-cover' />
        </div>
      </div>

      {/* //todo profile image */}
      <div className='bg-[#1d1d1c]/70 border border-stone-700/20  backdrop-blur-sm  rounded-2xl lg:col-span-2 lg:row-span-4'>
        <img src={profileBanner} alt="profile" className='w-full h-full rounded-2xl object-cover' />
      </div>
      {/* about */}
      <div className='bg-[#1d1d1c]/70 border border-stone-700/20  backdrop-blur-sm  rounded-2xl p-2 lg:col-span-4 lg:row-span-4 '>
        <div className='divide-y divide-stone-700 divide-opacity-35'> <h1 className={`text-white text-[2rem] ${HeaderFont?.className} capitalize tracking-wider p-1`}>what i'm about?</h1>
        <p className={`text-[#696969] ${ContentFont?.className} capitalize tracking-wider px-1 py-3`}> My journey in web
          development began ZettaStack, which has sharpened my skills and
          passion for creating exceptional web applications.</p></div>
       
          <h1 className={`text-[#696969] text-lg ${HeaderFont?.className} capitalize tracking-wider p-1`}>what i do best</h1>
        <p className={`text-[#696969] ${ContentFont?.className} capitalize tracking-wider px-1 py-2`}>I am an enthusiastic Frontend Developer with a strong penchant for
          creating elegant and responsive user interfaces. </p>
      </div>

      <div className='bg-[#1d1d1c]/70 border border-stone-700/20  backdrop-blur-sm  rounded-2xl lg:col-span-3 lg:row-span-4 '>
      <img src={Banner_Image3} alt="profile" className='w-full h-full rounded-2xl object-cover' />
      </div>
    
      {/* //todo projects */}
      <div className='bg-[#1d1d1c]/70 border border-stone-700/20  backdrop-blur-sm  rounded-2xl p-2 lg:col-span-3 lg:row-span-9 divide-y divide-stone-700 divide-opacity-35'>
        <h1 className={`text-white text-[2rem] ${HeaderFont?.className} capitalize tracking-wider`}>projects</h1>
        <div className='pt-2'>
          <ul className='flex flex-col gap-2'>{ProjectDatas && ProjectDatas?.length > 0 && ProjectDatas?.map((proItems) => {
            return <li className='border border-stone-700/50 rounded-xl p-2'>
              <div className='flex-1 flex justify-between'><h1 className={`text-white ${ContentFont?.className} capitalize tracking-wider`}>{proItems?.title}</h1> <Link href={proItems?.path}><button className='text-sm bg-[#1E5128] rounded-lg py-1 px-2 text-white'>View</button> </Link>
                </div>
                <p className={`text-[#696969] ${ContentFont?.className} capitalize tracking-wider line-clamp-2 text-sm pt-2`}>{proItems?.description}</p>
            </li>
          })}</ul>
        </div>
      </div>

      {/* contact */}
      <div className='bg-[#1d1d1c]/70 border border-stone-700/20  backdrop-blur-sm  rounded-2xl p-2 lg:col-span-5 lg:row-span-3 flex flex-col justify-between'>
        <p className={`text-[#696969] ${ContentFont?.className} capitalize tracking-wider px-1 py-2`}>Ready to enhance your website's user experience? Contact me today to discuss your front-end development needs.</p>

        <div className={`flex flex-col lg:flex-row items-center gap-3 ${ContentFont?.className} pt-4`}>
          <input type="text" className='border border-stone-700/50 text-[#4E9F3D] rounded-xl bg-transparent p-3 flex-1 w-full lg:w-fit' placeholder='Your Email address' />
          <button className='border border-stone-700/50  rounded-xl bg-stone-800/70 hover:bg-[#1E5128] shadow-lg hover:shadow-[#1E5128]/30 text-[#696969] hover:text-white transition-colors duration-200 p-3 w-full lg:w-fit'>Get in touch !</button>
        </div>
      </div>

      {/* //todo experience and publications */}
      <div className='bg-[#1d1d1c]/70 border border-stone-700/20  backdrop-blur-sm  rounded-2xl p-2 lg:col-span-4 lg:row-span-3 grid lg:grid-cols-3 gap-3'>
        <div className={`text-center  flex flex-col justify-between `}>
          <h1 className='text-[3rem] text-[#4E9F3D] font-semibold font-mono'>2+</h1>
          <p className={`text-[#696969] ${ContentFont?.className} capitalize tracking-wider px-1 py-2`}>years of experience</p>
        </div>
        <div className='text-center  flex flex-col justify-between'>
          <h1 className='text-[3rem] text-[#4E9F3D]  font-semibold font-mono'>2</h1>
          <p className={`text-[#696969] ${ContentFont?.className} capitalize tracking-wider px-1 py-2`}>projects completed</p>
        </div>
        <div className='text-center  flex flex-col justify-between'>
          <h1 className='text-[3rem] text-[#4E9F3D]  font-semibold font-mono'>0</h1>
          <p className={`text-[#696969] ${ContentFont?.className} capitalize tracking-wider px-1 py-2`}>publication</p>
        </div>
      </div>
      <div className='bg-[#1d1d1c]/70 border border-stone-700/20  backdrop-blur-sm  rounded-2xl lg:col-span-9 lg:row-span-2 '>
        <div className='overflow-x-auto  grid grid-cols-3 lg:flex gap-2 scroll p-2 h-full'>  {SkillItems?.length > 0 && SkillItems?.map((items) => {
          return <div className='rounded-xl p-3 min-w-24 grid place-items-center'>
            {items?.icon}
          </div>
        })}</div>


      </div>
    </section>
  )
}

export default LandingPage