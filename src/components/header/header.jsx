import React from 'react'
import './header.css'
import CTA from './CTA'
// import ME from '../../assets/me.png';
const header = () => {
  return (
    <header>
      <div className="cotainer header_container">
        <h5> Hello, I'm</h5>
        <h1>Hardik Bhasin</h1>
        <h5 className="text-light"> developer...</h5>
        <CTA />
        {/* <div className='me'>
          <img src={ME} alt='me' />
        </div> */}
        <a href='#contact' className='scroll_down'>Scroll down</a>
      </div>
    </header>
  )
}

export default header
