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
            <article className='about_content'>
              <HiOutlineCode className='about_icon' />
              <h5>Developer</h5>
              <small>Problems solving using DSA</small>

            </article>
            <article className='about_content'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>5+ projects</small>

            </article>
          </div>
          <p>Pre-final year student pursuing B.tech in IT domain, enthusiastic about programming and enjoys solving problems. Currenlty my focus is on enhancing my proficiency in data strcutures and algorithms and learning web technologies. I am thrilled about the prospect of utilizing my abilities to tackle real-world issues and pursuing a profession in software developement.</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
