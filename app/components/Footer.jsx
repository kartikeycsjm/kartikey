import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='bg-[rgba(0,0,0,0.9)] w-[97%] h-[80px] text-white flex justify-around flex-col items-center'>
      <p>&copy; Kartikey Mishra 2024</p>
      <Link href={'/contact'} className='underline text-blue-500'>Source Code? Message me.</Link>
    </div>
  )
}

export default Footer