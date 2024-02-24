'use client'
import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [apimsg, setApimsg] = useState('');
  const handleClick = async () => {
    if (!name || !phone || !email || !message) {
      alert('Please fill all the details')
    }
    else {
      const f = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name, phone, email, message
        })
      })
      const res = await f.json();
      console.log(res);
      setApimsg(res)
    }
  }
  return (
    <div className='w-full h-[900px]  flex justify-between items-center flex-col bg-[rgba(0,0,0,0.9)]'>
      <Header></Header>
      <h1 className='text-white text-[30px]'>Get connected with me.</h1>
      <div id="form" className='w-[400px] md:w-[400px] bg-black rounded-lg h-[500px] md:h:[600px] flex justify-around items-center flex-col'>
        <h2 className='text-[25px] text-white'>Send Me Message</h2>
        <input type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='your name' />
        <input type="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder='Your phone number' />
        <input type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='Your email' />
        <textarea name="" id="" cols="30" rows="7"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder='Your Message'>
        </textarea>
        {apimsg === 'message recieved' ?<p className='text-white'>Your message is recieved</p> :
          <button className='text-white border border-blue-800 px-2 py-1' onClick={handleClick}>
            Send
          </button>}
      </div>
      <Footer></Footer>
    </div>
  )
}
export default Contact;