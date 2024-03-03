import React from 'react'
import Image from 'next/image'
import img from '@/public/img.jpg'
import Link from 'next/link'
const Header = () => {
    return (
        <div className='sticky top-0 w-[99%] rounded-xl h-[60px] bg-[rgba(0,0,0,0.97)] md:h-[70px] sm:h-[70px] flex items-center 
        justify-between md:justify-between text-[rgb(255,255,255)]'>
            <div className='w-[40%] sm:w-[45%] md:w-[30%] h-full flex justify-around items-center'>
                <Image src={img} className='w-[50px] md:w-[60px] rounded-full'></Image>
                <h1 id='n' className=' text-[22px] sm:text-[30px] md:text-[35px] text-[#e0e0fc]'>&lt;Kartikey/&gt;</h1>
            </div>
            <div className='w-[60%] sm:w-[55%] md:w-[70%] text-[12px] md:text-[16px] sm:text-[14px] h-full flex justify-around md:justify-around items-center'>
                <Link className='bg-black duration-[0.5s] hover:bg-blue-400 px-2 py-[1px] rounded-2xl' href={'/'}>Home</Link>
                <Link className='bg-black duration-[0.5s] hover:bg-blue-400 px-2 py-[1px] rounded-2xl' href={'/project'}>Projects</Link>
                <Link className='bg-black duration-[0.5s] hover:bg-blue-400 px-2 py-[1px] rounded-2xl' href={'/skills'}>Skills</Link>
                <Link href={'/contact'} className='bg-black duration-[0.5s] hover:bg-blue-400 px-1 py-[1px] border border-blue-600 rounded-2xl'>Contact Me</Link>
            </div>
        </div>
    )
}
export default Header