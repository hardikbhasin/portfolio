import React from 'react'
import './qualifications.css';
import {FaUserGraduate} from 'react-icons/fa';
const Qualifications = () => {
  return (
    <section class="qualification section">

      <h5>My personal journey</h5>
      <h2 >Qualification</h2>

      <div class="qualification__container container">
        <div class="qualification__tabs">
          <div class="qualification__button button--flex qualification__active" data-target="#education">
            <FaUserGraduate className='qualification__icon'/>
            Education
          </div>

          {/* <div class="qualification__button button--flex" data-target="#work">
            <i class="uil uil-briefcase-alt qualification__icon"></i>
            Work
          </div> */}
        </div>

        <div class="qualification__sections">

          <div class="qualification__content qualification__active" data-content id="education">

            <div class="qualification__data">
              <div>
                <h3 class="qualification__title">Guru Gobind Singh Indraprastha University</h3>
                <span class="qualification__subtitle">Information Technology</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  2020 - 2024
                </div>
              </div>

              <div>
                <span class="qualification__rounder"></span>
                <span class="qualification__line"></span>
              </div>
            </div>


            <div class="qualification__data">
              <div></div>

              <div>
                <span class="qualification__rounder"></span>
                <span class="qualification__line"></span>
              </div>

              <div>
                <h3 class="qualification__title">Sant Gyaneshwar Model School</h3>
                <span class="qualification__subtitle">Senior Secondary Education</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  2017 - 2019
                </div>
              </div>
            </div>


            <div class="qualification__data">
              <div>
                <h3 class="qualification__title">St. John's Sr. Sec. School</h3>
                <span class="qualification__subtitle">Secondary Education</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  2005 - 2017
                </div>
              </div>

              <div>
                <span class="qualification__rounder"></span>
                {/* <span class="qualification__line"></span> */}
              </div>
            </div>


            <div class="qualification__data">
              <div></div>

              <div class="qualification__time">
                {/* <span class="qualification__rounder"></span> */}

              </div>


            </div>
          </div>



        </div>
      </div>
    </section>
  )
}

export default Qualifications
