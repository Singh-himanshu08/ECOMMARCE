import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
              
               <h1 className='text-xl font-medium mb-5 text-red-700'>yourchoice.com</h1>
                <p className='w-full md:w-2/3 font-medium text-gray-700 drop-shadow-sm'>
               Have questions or need assistance? The <span className='text-red-600'>yourchoice</span> team is always here to help. Whether it’s about an order, a product, or general inquiries, reach out to us anytime and we’ll respond as quickly as possible to ensure a smooth and satisfying shopping experience.

                </p>
            </div>

            <div>
                <h1 className='text-xl font-medium mb-5 text-red-700'>Company </h1>

                <ul className='flex flex-col gap-1 font-medium text-gray-700 drop-shadow-sm'>
                    <li>Home</li>
                       <li>About Us</li>
                          <li>Privacy Policy</li>
                             <li>Delivery</li>
                </ul>
            </div>

            <div>
                <h1 className='text-xl font-medium mb-5 text-red-700'>Get In touch with Us</h1>
                <ul className='flex flex-col gap-1 font-medium text-gray-700 drop-shadow-sm'>
                    <li>+91-9876-543-210</li>
                         <li>support_yourchoice@gmail.com</li>

                </ul>
            </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center font-medium text-gray-700 drop-shadow-sm'>CopyRight 2025@ yourchoice.com - All Rights Reversed !!!</p>
        </div>
    </div>
  )
}

export default Footer