import React from 'react'
import { SocialIcon } from 'react-social-icons'
const project = ({ name, text, techstack, githublink, livelink }) => {
  return (
    <div className='rounded-lg min-h-[250px] w-[95%] md:w-[400px] bg-[#333333] text-[#cccccc] flex justify-between items-center flex-col m-3'>
      <h1 className='text-[20px] text-[white] bg-blue-500 m-2 px-1 py-1 rounded-md'>{name}</h1>
      <p className='px-5 py-3 flex justify-center items-center text-justify text-[14px]'>{text}</p>
      <div id="techstack" className='text-bold text-center m-2'>
        <b>Tech Stack-</b> {techstack}
      </div>
      <div id="links" className='w-[150px] flex justify-around items-center h-[50px]'>
        <SocialIcon href={githublink} url='github.com' style={{ height: 35, width: 35 }} />
        <SocialIcon href={livelink} url='w.com' style={{ height: 35, width: 35 }} />
      </div>
    </div>
  )
}
export default project