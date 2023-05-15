import React from 'react'
import './about.css'
import ME from '../../assets/about-me.jpg'
const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt='my-img'></img>
          </div>

        </div>
        <div className="about_content">

        </div>
      </div>
    </section>
  )
}

export default about
