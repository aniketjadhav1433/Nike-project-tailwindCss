import React from 'react'

const Card = ({prodImg,star}) => {
  return (
    <div>
      <img src={prodImg} alt="" />
      <p className='flex gap-3 items-center'><img src={star} alt="" /> 4.5</p>
      <p>Nike Air Jordan One</p>
      <h2 className='text-orange-500'>$111.0</h2>
    </div>
  )
}

export default Card