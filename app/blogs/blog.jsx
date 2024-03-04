import React from 'react'
const blog = ({heading,text}) => {
  return (
    <div className='bg-[#333333] rounded-lg w-[90%] min-h-[500px] md:min-h-[280px] text-white'>
        <h1 className='p-3 text-[20px] font-bold'>{heading}</h1>
        <p className='p-3 text-[14px] md:text-[16px] text-justify'>{text}</p>
    </div>
  )
}
export default blog