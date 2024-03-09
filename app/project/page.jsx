import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Project from './project'
const page = () => {
  return (
    <div className='w-full min-h-screen flex justify-between items-center flex-col bg-[rgba(0,0,0,0.9)]'>
      <div id="main" className='w-full min-h-screen flex justify-around items-center flex-col
      md:flex-row'>
        <Project
          name={'Diary'}
          text={`Created a diary web app allowing users to add writings and notes, which are saved locally for easy access. Users can search for his notes by date or title, delete individual notes, and clear the entire diary.`}
          techstack={"Next.js, Tailwind CSS"}
          githublink={'https://github.com/kartikeycsjm/diary'}
          livelink={'https://diary1.vercel.app'}
        />
      <Project name={'Letswrite'} text={`Developed Let'sWrite, a social media platform utilizing Next.js framework with Tailwind CSS for design.
        The platform enables seamless account creation through email, username, password, and phone
        number, fostering connectivity and interaction.`}
          techstack={'Next.js, TailwindCSS, MongoDB'}
          githublink={'https://github.com/kartikeycsjm/letswrite'}
          livelink={'https://letswrite1.vercel.app'} />
        
      </div>
    </div>
  )
}
export default page