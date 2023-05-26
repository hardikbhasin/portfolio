import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2wwv1c9', 'template_h0qv7tr', form.current, '6Ba4633biHRNzIE6o')
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icons' />
            <h4>Email</h4>
            <h5>hardikbhasin398@gmail.com</h5>
            <a href="mailto:hardikbhasin398@gmail.com" target='_blank' rel='noreferrer'>Send a message</a>

          </article>

          <article className="contact_option">
            <BsWhatsapp className='contact_option-icons' />
            <h4>WhatsApp</h4>
            <h5>+91-9140842553</h5>
            <a href="https://api.whatsapp.com/send?phone=+919140842553" target='_blank' rel='noreferrer'>Send a message</a>

          </article>

          <article className="contact_option">
            <BsLinkedin className='contact_option-icons' />
            <h4>Linkedin</h4>
            {/* <h5>Hardik Bhasin</h5> */}
            <a href="https://www.linkedin.com/in/hardik-bhasin/" target='_blank' rel='noreferrer'>Send a message</a>

          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your full name' required></input>
          <input type='email' name='email' placeholder='Your email' required></input>
          <textarea name="message" placeholder='Type your message here' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>

      </div>

    </section>
  )
}

export default Contact
