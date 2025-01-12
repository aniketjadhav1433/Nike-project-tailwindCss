import React from 'react'
import { headerLogo ,} from '../assets/images'
import { hamburger } from '../assets/icons'


const Navbar = () => {
  return (
    <nav className='flex justify-between z-10 p-6 md:text-3xl fixed left-0 right-0 top-0 font-[800]'>
        <img src={headerLogo} alt="" />

        <ul className=' gap-10 hidden lg:flex'>
            <a href="">Home</a>
            <a href="">About us</a>
            <a href="">Products</a>
            <a href="">Contact Us</a>
        </ul>

        <button className='capitalize  lg:flex hidden'> sign in / register </button>

        <div>
          <img src={hamburger} className='flex lg:hidden size-10' alt="" />
        </div>
    </nav>
  )
}

export default Navbar