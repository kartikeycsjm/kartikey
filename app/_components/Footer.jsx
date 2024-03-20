import React from 'react'
import Social from './Social'
const Footer = () => {
  return (
    <div className='bg-black w-full h-[100px] text-white flex justify-around items-center flex-col'>
         <Social />
         <p>&copy; Kartikey Mishra</p>
    </div>
  )
}

export default Footer