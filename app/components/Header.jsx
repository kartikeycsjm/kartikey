import React from 'react'
import Image from 'next/image'
import img from '@/public/img.jpg'
import Link from 'next/link'
const Header = () => {
    return (
        <div className='w-[97%] h-[70px] md:h-[90px] sm:h-[80px] rounded-full flex items-center 
        justify-between md:justify-between bg-[rgba(0,0,0,0.95)] text-[rgb(255,255,255)]'>
            <div className='w-[40%] sm:w-[45%] md:w-[30%] h-full flex justify-between items-center'>
                <Image src={img} className='w-[60px] md:w-[90px] rounded-full'></Image>
                <h1 id='n' className=' cursor-pointer text-[22px] sm:text-[30px] md:text-[35px] text-[#e0e0fc]'>&lt;Kartikey/&gt;</h1>
            </div>
            <div className='w-[60%] sm:w-[55%] md:w-[70%] text-[13px] md:text-[16px] sm:text-[14px] h-full flex justify-around md:justify-around items-center'>
                <Link href={'/'}>Home</Link>
                <Link href={'/project'}>Projects</Link>
                <Link href={'/skills'}>Skills</Link>
                <Link href={'/contact'} className='bg-black hover:bg-blue-400 px-2 py-1 border border-blue-600 rounded-2xl'>Contact Me</Link>
            </div>
        </div>
    )
}
export default Header