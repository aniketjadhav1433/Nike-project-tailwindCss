import React from 'react'
import { copyrightSign,twitter,facebook,instagram } from '../assets/icons'
import { footerLogo } from '../assets/images'

const Footer = () => {
  return (
    <div className=' min-h-[80vh] bg-black p-6 text-white flex flex-col justify-between'>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center md:mt-[100px]'>

            <div className='space-y-5'>
                <img src={footerLogo} alt="" />
                <p>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
                <div className='flex gap-4'>
                    <img className='bg-white rounded-full p-4'  src={twitter} alt="" />
                    <img className='bg-white rounded-full p-4' src={facebook} alt="" />
                    <img className='bg-white rounded-full p-4' src={instagram} alt="" />
                </div>
            </div>

            <div className=' flex gap-10 flex-wrap justify-between'>
                <div>
                   <h3 >Products</h3> 
                   <ul className='flex flex-col gap-5 mt-2'>
                        <a className='text-gray-400 hover:text-gray-500' href="">Air Force 1</a>
                        <a className='text-gray-400 hover:text-gray-500' href="">Air Max 1</a>
                        <a className='text-gray-400 hover:text-gray-500' href="">Air Jordan 1</a>
                        <a className='text-gray-400 hover:text-gray-500' href="">Air Force 2</a>
                        <a className='text-gray-400 hover:text-gray-500' href="">Nike Waffle Racer</a>
                        <a className='text-gray-400 hover:text-gray-500' href="">Nike Cortez</a>
                   </ul>
                </div>

                <div>
                   <h3 >Help</h3> 
                   <ul className='flex flex-col gap-5 mt-2'>
                        <a className='text-gray-400 hover:text-gray-500' href="">About Us</a>
                        <a className='text-gray-400 hover:text-gray-500' href="">FAQ's</a>
                        <a className='text-gray-400 hover:text-gray-500' href="">How It Works</a>
                        <a className='text-gray-400 hover:text-gray-500' href="">Privacy Policy</a>
                        <a className='text-gray-400 hover:text-gray-500' href="">Payment Policy</a>
                   </ul>
                </div>

                <div>
                   <h3 >Get In Touch</h3> 
                   <ul className='flex flex-col gap-5 mt-2'>
                        <a className='text-gray-400 hover:text-gray-500' href="">customer@nike.com</a>
                        <a className='text-gray-400 hover:text-gray-500'href="">+92554862354</a>
                   </ul>
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-2 items-center sm:justify-between mt-8'>
            <p className='flex gap-4'><img src={copyrightSign} alt="" /> Copyright. All rights reserved.</p>
            <p>Terms & Conditions</p>
        </div>
    </div>
  )
}

export default Footer