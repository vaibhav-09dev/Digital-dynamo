"use client";
import React from 'react';
import RollingGallery from '../components/ui/RollingGallery';
import { useRouter } from 'next/navigation';

const Seventh = () => {
  const router=useRouter();
  const sendp=()=>{
    router.push('/portfolio')

  }
  return (
    <div className="h-auto md:h-[750px] w-full bg-gray-300">
      <div className="flex justify-center items-center">
        <p className="text-4xl md:text-4xl font-bold mt-50 md:mt-30 ml-4 md:ml-8 text-center md:text-left ">
          Want to check out our portfolio?
        </p>
      </div>
      <RollingGallery autoplay={true} pauseOnHover={true} />
      <div className='flex justify-center items-center mb-10 '>
        <button onClick={sendp} className="relative inline-flex items-center justify-center p-0.5 mb-10 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
          <span className="text-xl font-bold relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
           OUR WORK
          </span>
        </button>
      </div>
    </div>
  )
}

export default Seventh