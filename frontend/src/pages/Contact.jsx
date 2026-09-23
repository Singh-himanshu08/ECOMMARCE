import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Discount from '../components/Discount'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'Contact'} text2={'Us'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img alt='' src={assets.contact_img} className='w-full md:max-w-[480px]'/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-black-600'>Our Dukan</p>
          <p className='text-black-600'>06536 , Andheri Galli <br/>420, Purani Haveli ke Peeche</p>
          <p className='text-black-600'>Tel : (415)-555-0132<br />E Mail : yourchoice@gmail.com</p>
          <p className='font-semibold text-2xl text-gray-600'>Carrers At yourchoice</p>
          <p className='text-black-600'>Know More About Us</p>
        </div>
      </div>

      <Discount />
    </div>
  )
}

export default Contact