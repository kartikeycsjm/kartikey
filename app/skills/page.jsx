import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
const page = () => {
  return (
    <div className='w-full min-h-[1600px] flex justify-between items-center flex-col bg-[rgba(0,0,0,0.9)]'>
      <Header></Header>

      <Footer></Footer>
    </div>
  )
}

export default page