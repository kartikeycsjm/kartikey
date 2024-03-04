import React from 'react'
const skills = ({ children, heading }) => {
    return (
        <div className='m-4 min-w-[90%] h-[90px] p-2 md:w-[50%] md:h-[130px] flex justify-center md:justify-around items-center flex-col'>
            <h1 className='text-white md:text-[20px] text-[15px] mb-1 rounded-lg '>{heading}</h1>
            <div className='w-[100%] h-[70px] md:h-[100px] flex justify-around md:justify-around items-center flex-row md:flex-row'>
                {children}
            </div>
        </div>
    )
}
export default skills