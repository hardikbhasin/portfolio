import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'


const footer = () => {
  return (
    <footer>
      <a href='#about' className='footer_logo'>Hardik Bhasin</a>
      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#portfolio'>Projects</a></li>
        <li><a href='#qualification'>Qualifications</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href='https://www.linkedin.com/in/hardik-bhasin/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/hardikbhasin' target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href='https://twitter.com/hardik_bhasin_' target='_blank' rel="noreferrer"><BsTwitter/></a>
        <a href='https://leetcode.com/hardikbhasin/' target='_blank' rel="noreferrer"><SiLeetcode/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Hardik Bhasin. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer
