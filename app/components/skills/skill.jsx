import React from 'react'
import Image from 'next/image'
const skill = ({name,img,text}) => {
  return (
    <div className='md:flex-col md:w-[100px] md:h-[100px] my-1 h-[60px] w-[60px] flex items-center flex-col justify-around rounded-lg bg-[#333333]'>
        <Image src={img} className='transition duration-[2s] hover:rotate-[360deg] md:hover:size-[60px] hover:size-[35px] w-[30px] md:h-[50px] md:w-[50px]'></Image>
        <div className='w-[60%] md:min-h-[20px] md:w-[100%] text-center flex flex-col justify-around items-center text-[#cccccc]'>
            <h3 className='text-[10px] p-1 text-[#ffffff] md:text-[15px]'>{name}</h3>
        </div>
    </div>
  )
}
export default skill