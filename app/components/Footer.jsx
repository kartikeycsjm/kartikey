import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='border-t-[1px] text-[12px] border-[#303030] w-[100%] h-[80px] text-white flex justify-around flex-col items-center'>
      <p>&copy; Kartikey Mishra 2024</p>
      <Link href={'/contact'} className='underline text-blue-500'>Source Code? Message me.</Link>
    </div>
  )
}

export default Footer