import React from 'react'
import Front from '@/app/components/Front'
import Header from './components/Header'
import Footer from './components/Footer'
const page = () => {
  return (
    <div className='w-full min-h-screen flex items-center flex-col bg-[rgba(0,0,0,0.9)]'>
      <Header/>
      <Front/>
      <Footer/>
    </div>
  )
}

export default page