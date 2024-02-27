import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Project from './project'
const page = () => {
  return (
    <div className='w-full min-h-screen flex justify-between items-center flex-col bg-[rgba(0,0,0,0.9)]'>
      <Header></Header>
      <Footer></Footer>
    </div>
  )
}
export default page