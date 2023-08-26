import React from 'react'
import './about.css'
import me from '../../assets/Agmh.gif'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {HiAcademicCap} from 'react-icons/hi'
import TextSphere from '../cloud/Text'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
           <div className="about__me-image">
           {/* <img src= {me} alt='About Image' /> */}
           <TextSphere />
           </div>
        </div>

        <div className="about__content">
          <div className="about__cards">


          <article className='about__card'>
            <HiAcademicCap className='about__icon' />
             <h5>3rd year</h5>
             <small>Electronics and Communication Engineering Student</small>
            </article>



             <article className='about__card'>
            <FaAward className='about__icon' />
             <h5>Experience</h5>
             <small>2+ Years Working</small>
            </article>


            <article className='about__card'>
            <VscFolderLibrary className='about__icon' />
             <h5>Projects</h5>
             <small>7+ Completed</small>
            </article>
            </div>

            <p>
            I am a FullStack developer with
                 problem-solving skills. Skilled in developing
                 web sites & applications using FrontEnd and BackEnd tools. Good Creative
                  thinking and Time managing skills. Ability to
                     work under pressure

            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About
