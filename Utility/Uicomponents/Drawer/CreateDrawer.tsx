import Switch from '@/Utility/components/Switch'
import { AddIcon, RocketIcon } from '@/Utility/icons/icons'
import React from 'react'

function CreateDrawer({children,handleClose}:any) {
  return (
    <>
    {children}
     <div
        id="test"
        className="bg-black/20 backdrop-blur-sm fixed bottom-0 left-0 right-0 h-full z-10 opacity-0 hidden justify-center items-center overflow-hidden"
      >
        <div className=" p-2 rounded-lg max-w-[400px] w-full bg-white px-5">
          <h1 className="text-3xl text-center pb-10 font-bold">
            Create task
          </h1>
         <form>
            <label htmlFor="title" className='font-medium tracking-wide'>Title</label>
            <input type="text" className='border-b border-stone-500 p-2 outline-none w-full' />
            <label htmlFor="title" className='font-medium tracking-wide pt-5 block pb-3'>Description</label>
            <textarea className='border rounded border-stone-500 p-2 outline-none w-full' />

            <div className='flex justify-between py-5'>
<label htmlFor="isPriority" className='font-medium tracking-wider'>Ispriority ?</label>
<Switch
            varient="#202020"
          />
            </div>

            {/* //todo  buttons group */}
            <div className='flex justify-end  gap-2'>
                <button type='button' onClick={handleClose} className='text-stone-700 tracking-wide font-medium bg-stone-100 rounded-lg px-4 py-1 flex items-center justify-between'>Cancel</button>
                <button type='button' className='text-white tracking-wide font-medium bg-[#232323] rounded-lg px-3 py-[5px] flex gap-x-4 items-center justify-between divide-x divide-gray-500/50'><span>Create</span> <span className='pl-2'><AddIcon width={20} /></span></button>
            </div>
         </form>
        </div>
      </div>
    </>
  )
}

export default CreateDrawer