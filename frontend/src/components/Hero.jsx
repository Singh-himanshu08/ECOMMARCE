import React from 'react'
import {assets} from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 rounded-tl-2xl rounded-br-2xl overflow-hidden shadow-lg'>


        {/* Hero Left Side  */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
            <div className='flex items-center gap-2 px-4 pb-2'>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                <p className='font-medium text-sm md:text-base text-red-500 drop-shadow-sm'>OUR BEST FOR YOU</p>

            </div>
            <h1 className='.prata-regular sm:px-3 lg:text-5xl text-green-800  leading-relaxed drop-shadow-lg'>Everything You Need Is Here !! </h1>
            <div className='flex items-center gap-2 px-4 pt-3'>
                <p className='font-medium text-sm md:text-base text-red-500 drop-shadow-sm'>SHOP NOW</p>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            </div>

        </div>

        </div>
        {/*HERO RIGHT SIDE*/ }
        <img src={assets.mysite_hero} alt="" className='w-full  sm:w-1/2'/>

    </div>
  )
}

export default Hero