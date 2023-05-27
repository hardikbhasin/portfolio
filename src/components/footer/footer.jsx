import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'


const footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Hardik Bhasin</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#portfolio'>Projects</a></li>
        <li><a href='#qualification'>Qualifications</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href='https://www.linkedin.com/in/hardik-bhasin/'><BsLinkedin /></a>
        <a href='https://github.com/hardikbhasin'><BsGithub/></a>
        <a href='https://twitter.com/hardik_bhasin_'><BsTwitter/></a>
        <a href='https://leetcode.com/hardikbhasin/'><SiLeetcode/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Hardik Bhasin. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer
