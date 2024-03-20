import React from 'react'
import Link from 'next/link'
const Header = () => {
    return (
        <div className='w-[90%] text-white h-[50px] bg-[rgba(0,0,0,0.9)] m-auto rounded-[50px] flex justify-around items-center sticky top-[2px]
        md:w-[80%] md:h-[70px]'>
            <h1 id='n' className='text-[19px] duration-[0.5s] hover:text-blue-500
            md:text-[23px]'>&lt;Kartikey Mishra/&gt;</h1>
            <div id="links" className='w-[60%] text-white text-[13px] flex justify-around items-center
            md:text-[16px]'>
                <Link className='px-2 rounded-[30px] border border-black hover:border-blue-500 duration-[0.5s]' href={'/'}>Home</Link>
                <Link className='px-2 rounded-[30px] border border-black hover:border-blue-500 duration-[0.5s]' href={'/blogs'}>Blogs</Link>
                <Link className='px-2 rounded-[30px] border border-black hover:border-blue-500 duration-[0.5s]' href={'/projects'}>Projects</Link>
                <Link className='px-2 border border-blue-500 duration-[0.5s] hover:bg-blue-500 rounded-[30px]' href={'/contact'}>Contact Me</Link>
            </div>
        </div>
    )
}
export default Header