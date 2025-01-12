import React from 'react'
import Card from "./Card"
import { shoe4,shoe5,shoe6,shoe7,shoe8, } from '../assets/images'
import { star } from '../assets/icons'

const Popular = () => {
  return (
    <div className='p-6  mt-[10vh]'>

        <h2>Our <span className='text-orange-500'>Popular</span>  Products</h2>
        <p>Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>

        <div className='grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5'>
            <Card prodImg={shoe4} star={star}></Card>
            <Card prodImg={shoe5} star={star}></Card>
            <Card prodImg={shoe6} star={star}></Card>
            <Card prodImg={shoe7} star={star}></Card>
        </div>
    </div>
  )
}

export default Popular