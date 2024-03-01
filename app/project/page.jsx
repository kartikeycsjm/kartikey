import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Project from './project'
const page = () => {
  return (
    <div className='w-full min-h-screen flex justify-between items-center flex-col bg-[rgba(0,0,0,0.9)]'>
      <Header></Header>
      <div id="project" className='p-5 rounded-lg w-[80%] border border-blue-500 h-[100%] flex justify-around items-center'>
        <Project name={'letswrite'} text={`Developed Let'sWrite, a social media platform utilizing Next.js framework with Tailwind CSS for design.
        The platform enables seamless account creation through email, username, password, and phone
        number, fostering connectivity and interaction.`}
          techstack={'Next.js, TailwindCSS, MongoDB'}
          githublink={'https://github.com/kartikeycsjm/letswrite'}
          livelink={'https://letswrite1.vercel.app'} />
      </div>
      <Footer></Footer>
    </div>
  )
}
export default page