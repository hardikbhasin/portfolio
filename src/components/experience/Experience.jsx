import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './experience.css'
const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My experience</h2>
      <div className="container experience_container">
        <div className="experience_dev">
          <h3>Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons' />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>

            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons' />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>

            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons' />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>

            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons' />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Intermediate</small>
              </div>

            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons' />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>

            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons' />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Intermediate</small>
              </div>

            </article>

          </div>

        </div>
        {/* END OF DEVELOPMENT */}
        <div className="experience_core">
          <h3>Core</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons' />
              <div>
                <h4>Data structures</h4>
                <small className="text-light">Experienced</small>
              </div>

            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons' />
              <div>
                <h4>Algorithms</h4>
                <small className="text-light">Experienced</small>
              </div>

            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons' />
              <div>
                <h4>OOPS</h4>
                <small className="text-light">Experienced</small>
              </div>

            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons' />
              <div>
                <h4>DBMS</h4>
                <small className="text-light">Intermediate</small>
              </div>

            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons' />
              <div>
                <h4>OS/Networks</h4>
                <small className="text-light">Beginner</small>
              </div>

            </article>


          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
