import React from 'react'
import Image from 'next/image'
const skill = ({name,img,text}) => {
  return (
    <div className='md:flex-col md:min-h-[250px] md:w-[300px] md:h-[300px] border border-blue-700 my-1 h-[150px] w-[100%] flex items-center justify-around rounded-lg'>
        <Image src={img} className='w-[30%] md:h-[130px] md:w-[130px]'></Image>
        <div className='w-[60%] md:min-h-[20px] md:w-[100%] text-center flex flex-col justify-around items-center text-white'>
            <h3 className='text-[20px] font-bold underline p-1'>{name}</h3>
            <p className='md:px-5 md:p-2'>{text}</p>
        </div>
    </div>
  )
}

export default skill