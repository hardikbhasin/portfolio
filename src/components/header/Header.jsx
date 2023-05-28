import React from 'react'
import './header.css'
import CTA from './CTA'

import HeaderSocial from './HeaderSocials'
const Header = () => {
  return (
    <header id="home">
      <div className="cotainer header_container">
        <h4> Hello, I'm</h4>
        <h1>Hardik Bhasin</h1>
        <h4 className="text-light"> a developer...</h4>
        <CTA />
        
        <a href='#contact' className='scroll_down'>Scroll down</a>
        <HeaderSocial />
      </div>
    </header>
  );
};

export default Header
