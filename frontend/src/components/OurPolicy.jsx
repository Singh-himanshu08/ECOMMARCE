import React from 'react'
import {assets} from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 py-20 text xs sm:text-sm md:text-base text-gray-700'> 

    <div>
        <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5' />
        <p className='font-semibold'>Our Exchange Policy</p>
        <p className='text-gray-700 drop-shadow-sm'>Hassale Free Exchange</p>

    </div>

     <div>
        <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5' />
        <p className='font-semibold'>5 Days Return Policy Only!!</p>
        <p className='text-gray-700 drop-shadow-sm'>We provide 5 days hassale free return to our customers...</p>

    </div>

     <div>
        <img src={assets.support_img} alt="" className='w-12 m-auto mb-5' />
        <p className='font-semibold'>Our Customer Support</p>
        <p className='text-gray-700 drop-shadow-sm'>Our Services for customers availble 24/7...</p>

    </div>

    </div>
  )
}

export default OurPolicy