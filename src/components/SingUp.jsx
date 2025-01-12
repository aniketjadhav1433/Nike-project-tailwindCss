import React from 'react'

const SingUp = () => {
  return (
    <div className='h-[70vh] px-10 flex flex-col lg:flex-row items-center justify-center'>

        <h1 className='text-center'>Sign Up for <span className='text-orange-500'>Updates</span> & Newsletter</h1>

        <div className=' w-full mt-10 relative '>

            <input className='rounded-full  w-full border-2 border-black outline-none p-5' placeholder='person@gmail.com' type="text" name="" id="" />
            <button className='p-4 px-8 rounded-full relative w-full sm:w-fit  sm:right-[20px] sm:bottom-[5px] right-0 bottom-0 sm:absolute text-center mt-4 items-center text-white bg-orange-500'>Sign Up</button>

        </div>
    </div>
  )
}

export default SingUp