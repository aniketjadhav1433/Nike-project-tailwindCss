import React from 'react'
import { headerLogo ,} from '../assets/images'
import { hamburger } from '../assets/icons'


const Navbar = () => {
  return (
    <nav className='flex justify-between z-10 p-6 md:text-3xl fixed left-0 right-0 top-0 font-[800]'>
        <img src={headerLogo} alt="" />

        <ul className=' gap-10 hidden lg:flex'>
            <a href="" className='after:content-[""] relative after:absolute after:block after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-red-300 hover:after:w-full after:transition-all after:duration-400 after:rounded-xl'>Home</a>
            <a href="" className='after:content-[""] relative after:absolute after:block after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-red-300 hover:after:w-full after:transition-all after:duration-400 after:rounded-xl'>About us</a>
            <a href="" className='after:content-[""] relative after:absolute after:block after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-red-300 hover:after:w-full after:transition-all after:duration-400 after:rounded-xl'>Products</a>
            <a href="" className='after:content-[""] relative after:absolute after:block after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-red-300 hover:after:w-full after:transition-all after:duration-400 after:rounded-xl'>Contact Us</a>
        </ul>

        <button className='capitalize  lg:flex hidden'> sign in / register </button>

        <div className='flex lg:hidden '>
          <img src={hamburger} className=' size-10' alt="" />
        </div>

    </nav>
  )
}

export default Navbar