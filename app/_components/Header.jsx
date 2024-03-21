import React from 'react'
import Link from 'next/link'
const Header = () => {
    return (
        <div className='w-[97%] text-white h-[50px] bg-[#000650] rounded-[50px] flex justify-around items-center sticky top-[2px]
        md:w-[80%] md:h-[70px]'>
            <Link href={'https://github.com/kartikeycsjm'} id='n' className='text-[19px] duration-[0.5s]
            md:text-[23px]'>&lt;Kartikey Mishra/&gt;</Link>
            <div id="links" className='w-[60%] text-white text-[11px] flex justify-around items-center
            md:text-[16px]'>
                <Link className='px-2 rounded-[30px] border border-[#000640] hover:border-blue-500 duration-[0.5s]' href={'/'}>Home</Link>
                <Link className='px-2 rounded-[30px] border border-[#000640] hover:border-blue-500 duration-[0.5s]' href={'/blogs'}>Blogs</Link>
                <Link className='px-2 rounded-[30px] border border-[#000640] hover:border-blue-500 duration-[0.5s]' href={'/projects'}>Projects</Link>
                <Link className='px-2 border border-white duration-[0.5s] hover:bg-black hover:border-black rounded-[30px]' href={'/contact'}>Contact Me</Link>
            </div>
        </div>
    )
}
export default Header