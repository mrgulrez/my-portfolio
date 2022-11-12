import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'


const Footer = () => {
  return (
     <footer>
      <a href='#' className='footer__logo'>Gulrez Alam</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.instagram.com/gulrez__alam/' target='_blank'><BsInstagram /></a>
        <a href='https://www.facebook.com/gulrez.alam.7330/' target='_blank'><BsFacebook /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy;Gulrez Alam. All rights reserved</small>
      </div>
     </footer>
  )
}

export default Footer