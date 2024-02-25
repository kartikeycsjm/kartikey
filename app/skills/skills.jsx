import React from 'react'
const skills = ({ children, heading }) => {
    return (
        <div className='w-[75%] min-h-[400px] md:w-[90%] md:h-[300px] flex justify-center md:justify-around items-center flex-col'>
            <h1 className='text-white px-2 md:text-[30px] text-[23px] mb-1 bg-blue-600 rounded-lg '>{heading}</h1>
            <div className='w-[100%] min-h-[300px] md:h-[400px] flex justify-around md:justify-around items-center flex-col md:flex-row'>
                {children}
            </div>
        </div>
    )
}
export default skills