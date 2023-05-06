import React from 'react'
import './header.css'
import CTA from './CTA'

import HeaderSocial from './HeaderSocials'
const header = () => {
  return (
    <header>
      <div className="cotainer header_container">
        <h4> Hello, I'm</h4>
        <h1>Hardik Bhasin</h1>
        <h4 className="text-light"> developer...</h4>
        <CTA />
        <HeaderSocial />
        <a href='#contact' className='scroll_down'>Scroll down</a>
      </div>
    </header>
  )
}

export default header
