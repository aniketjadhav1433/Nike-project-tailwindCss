import React from 'react'
import { customer1,customer2 } from '../assets/images'
import { star } from '../assets/icons'

const Customer = () => {
  return (
    <div className='bg-[#F5F6FF] min-h-[85vh] flex flex-col items-center'>

        <div className='flex gap-4 flex-col mt-10'>
            <h1 className='text-center'>What Our <span className='text-orange-500 text-center'> Customers</span> Say?</h1>
            <p className='text-center'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-7 '>

            <div className='flex gap-4  px-[110px] flex-col items-center text-center '>
                <img className='rounded-full size-[80px]' src={customer1} alt="" />
                <p>The attention to detail and the quality of the product exceeded my expectations. Highly recommended!</p>
                <h2 className='flex gap-2 items-center'><img src={star} alt="" />4.5</h2>
                <h2>Aniket</h2>
            </div>

            <div className='flex gap-4  px-[110px] flex-col items-center text-center '>
                <img className='rounded-full size-[80px]' src={customer2} alt="" />
                <p>The attention to detail and the quality of the product exceeded my expectations. Highly recommended!</p>
                <h2 className='flex gap-2 items-center'><img src={star} alt="" />4.5</h2>
                <h2>Aniket</h2>
            </div>

        </div>
    </div>
  )
}

export default Customer