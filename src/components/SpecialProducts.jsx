import React from 'react'
import { offer, } from '../assets/images'
import { arrowRight } from '../assets/icons'

const SpecialProducts = () => {
  return (
    <div className='grid grid-cols-1 items-center lg:grid-cols-2 gap-14 mt-10 p-6'>
        <img src={offer} alt="" />
        <div className='space-y-5'>
            <h1 className='font-bold'><span className='text-orange-500'>Special </span>Offer</h1>
            <p>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
            <p>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
            <div className='flex items-center gap-2 sm:gap-5'>
                <button className='  p-5 rounded-2xl flex gap-2 sm:gap-5 items-center text-white bg-orange-500'>Shop Now <img src={arrowRight} alt="" /> </button>
                <button className='  p-5 rounded-2xl border-2 border-gray-300'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default SpecialProducts