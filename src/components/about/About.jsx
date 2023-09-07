import React from 'react'
import './about.css'
import ME from '../../assets/about-me.jpg'
import { HiOutlineCode } from 'react-icons/hi'
import {VscFolderLibrary} from 'react-icons/vsc'
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
          <div className="about_cards">
            <article className='about_card'>
              <HiOutlineCode className='about_icon' />
              <h5>Developer</h5>
              <small>Problems solving using DSA</small>

            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>5+ projects</small>

            </article>
          </div>
          <p>Final year student pursuing B.tech in IT domain from USICT, New Delhi. Enthusiastic about programming and enjoys solving problems. Proficient in Data Structures and Algorithms (DSA). Enthusiastic about creating dynamic and engaging user experiences through frontend web development using React JS. Actively seeking opportunities to contribute my expertise...</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
