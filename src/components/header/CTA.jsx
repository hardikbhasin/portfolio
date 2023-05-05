import React from 'react'
import resume from '../../assets/resume.pdf';
const CTA = () => {
  return (
    <div className='cta'>
        <a href={resume} download>Download resume</a>
        <a href='#contact'>Let's Talk</a>
      
    </div>
  )
}

export default CTA
