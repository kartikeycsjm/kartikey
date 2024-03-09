import React from 'react'
import Front from '@/app/components/Front'
import Header from './components/Header'
import Footer from './components/Footer'
import Skills from './components/skills/skillset'
const page = () => {
  return (
    <div className='w-full min-h-screen flex items-center flex-col bg-[rgba(0,0,0,0.9)]'>
      <Front />
      <Skills />
    </div>
  )
}

export default page