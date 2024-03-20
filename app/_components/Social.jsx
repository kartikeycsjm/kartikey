import React from 'react'
import { SocialIcon } from 'react-social-icons'
const Social = () => {
  return (
    <div id="social" className='w-[300px] md:w-[400px] flex items-center justify-around'>
      <div className="soc">
        <SocialIcon href="https://github.com/kartikeycsjm" url='github.com' style={{ height: 40, width: 40}} bgColor="black" fgColor='white' />
      </div>
      <div className="soc">
        <SocialIcon href="https://x.com/myself_kartik_" url='x.com' style={{ height: 40, width: 40 }} bgColor="black" fgColor='white' />
      </div>
      <div className="soc">
        <SocialIcon href='https://www.instagram.com/myselfkartikey' url="www.instagram.com" style={{ height: 40, width: 40 }} bgColor="black" fgColor='white' />
      </div>
      <div className="soc">
        <SocialIcon href="https://www.linkedin.com/in/kartikey-mishra-637a442b5" url='linkedin.com' style={{ height: 40, width: 40 }} bgColor="black" fgColor='white' />
      </div>
      <div className="soc">
        <SocialIcon href="https://leetcode.com/iamkartikm/" url='leetcode.com' style={{ height: 40, width: 40 }} bgColor="black" fgColor='white' />
      </div>
    </div>
  )
}
export default Social;