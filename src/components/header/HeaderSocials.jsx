import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/hardik-bhasin/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/hardikbhasin" target='_blank'> <BsGithub /></a>
        <a href="https://leetcode.com/hardikbhasin/" target='_blank'><SiLeetcode /></a>
      
    </div>
  )
}

export default HeaderSocials
