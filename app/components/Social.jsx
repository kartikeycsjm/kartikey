import React from 'react'
import { SocialIcon } from 'react-social-icons'
const Social = () => {
  return (
    <div id="social" className='w-[100%] md:w-[50%] flex items-center justify-around'>
      <div className="soc">
        <SocialIcon href="https://www.facebook.com/myselfkartikey" url='facebook.com' style={{ height: 50, width: 50, }} bgColor="black" fgColor='white'/>
      </div>
      <div className="soc">
        <SocialIcon href='https://www.instagram.com/myselfkartikey' url="www.instagram.com" style={{ height: 50, width: 50 }} bgColor="black" fgColor='white' />
      </div>
      <div className="soc">
        <SocialIcon href="https://www.linkedin.com" url='linkedin.com' style={{ height: 50, width: 50 }} bgColor="black" fgColor='white' />
      </div>
      <div className="soc">
        <SocialIcon href="https://github.com/kartikeycsjm" url='github.com' style={{ height: 50, width: 50 }} bgColor="black" fgColor='white' />
      </div>
      <div className="soc">
        <SocialIcon href="https://leetcode.com/iamkartikm/" url='leetcode.com' style={{ height: 50, width: 50 }} bgColor="black" fgColor='white' />
      </div>
    </div>
  )
}

export default Social;