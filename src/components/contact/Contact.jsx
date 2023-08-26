import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
 

  const alertFunction=(e) => {
    alert('Thank you for submitting your message. I will be in contact with you soon.');
  }
 
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_nsw2bs6', 'template_orlw9lt', form.current, 'j91gfy3S_FDeRbFUO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      alertFunction();
  };


  return (
    <section id='contact' >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>egulrezalam@gmail.com</h5>
            <a href='mailto:egulrezalam@gmail.com' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon' />
            <h4>Linkedin</h4>
            <h5>Gulrez Alam</h5>
            <a href='https://www.linkedin.com/in/mrgulrez/' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 9060*****2</h5>
            <a href='https://api.whatsapp.com/send?phone=91 9060287292&text=Hello,%20%20Gulez%20Alam' target='_blank'>Send a message</a>
          </article>

        </div>
        {/* ================= END OF CONTACT OPTION ===================*/}


         <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='9' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send a Message</button>



         </form>

      </div>
    </section>
  )
}

export default Contact