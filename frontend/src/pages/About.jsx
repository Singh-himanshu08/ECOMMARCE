import React from 'react'
import Title from '../components/Title'
import {assets}from '../assets/assets'
import Discount from '../components/Discount'


const About = () => {
  return (
    <div>

    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'About'} text2={'Us'}  />
    </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.shopp} className='w-full md:max-w-[450px] rounded-tr-2xl rounded-bl-2xl' alt='' />
        <div className='flex flex-col justify-center gap-3 md:w-2/4 text-gray-600'>
        <p> <span className='text-red-700 font-medium text-base'>yourchoice</span> is all about trends, convenience, and confidence. We’re here to bring you the latest styles and must-have products at prices you’ll love. Whether you’re upgrading your wardrobe or shopping for everyday essentials, Shopora makes it easy to discover, shop, and shine. Fast checkout, secure payments, and smooth delivery — shopping made simple, just the way you like it.</p>
        <p> <span className='text-red-700 font-medium text-base'>yourchoice</span>  is a premium shopping destination designed for those who value quality, elegance, and trust. We bring you a carefully curated selection of products that blend timeless style with modern trends. With secure payments, reliable delivery, and dedicated customer support, we aim to make luxury accessible and shopping effortless.</p>
        <b className='text-black-600'>Our Mission</b>
        <p>At <span className='text-red-700 font-medium text-base'>yourchoice</span>, our mission is to redefine online shopping through quality, elegance, and trust. We are committed to offering thoughtfully curated products that combine timeless design with modern trends, delivering a refined and seamless shopping experience for every customer.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'Why we'} text2={'are best ?'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-5'>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality You Can Trust</b>
          <p className='text-gray-600'>At  <span className='text-red-700 font-medium text-base'>yourchoice</span>, quality is never compromised. Every product is carefully selected and checked to meet high standards of durability, comfort, and design. We believe our customers deserve products that not only look good but also last long and deliver true value for money.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Customers First Commitment</b>
          <p className='text-gray-600'>We are dedicated to creating a seamless and secure shopping experience. With user-friendly navigation, trusted payment systems, and dependable delivery,  <span className='text-red-700 font-medium text-base'>yourchoice</span> puts customer satisfaction at the core of everything we do.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Style, Value and Convenience</b>
          <p className='text-gray-600'> <span className='text-red-700 font-medium text-base'>yourchoice</span> brings together modern trends, affordable pricing, and everyday convenience. We make it easy for you to discover products you love and shop with confidence, saving you time while delivering satisfaction.</p>
        </div>

      </div>
      {/* <div className='mt-10'>
        <Discount/>
      </div>
       */}
    </div>
  )
}

export default About