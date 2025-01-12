import React from 'react'
import { shoe8 } from '../assets/images'

const OneProduct = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center p-6'>

        <div className='flex flex-col gap-8'>
            <h1>We Provide You <span className='text-orange-500'>Super Quality</span> Shoes</h1>
            <p>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
            <p>Our dedication to detail and excellence ensures your satisfaction</p>
            <button className='p-5 rounded-2xl w-fit  bg-orange-500 text-white'>View Details</button>
        </div>

       

        <div>
            <img src={shoe8} alt="" />
        </div>

    </div>
  )
}

export default OneProduct