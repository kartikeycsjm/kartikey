import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='border-t-[1px] bg-black text-[12px] w-[100%] h-[80px] text-white flex justify-around flex-col items-center'>
      <p>&copy; Kartikey Mishra 2024</p>
      <Link href={'/contact'} className='underline text-blue-500'>Source Code? Message me.</Link>
    </div>
  )
}

export default Footer