import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What experience I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
         <div className="experience__frontend">
           <h3>Frontend Development</h3>
           <div className='experience__content'>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
             </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
             <h4>React</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
             <h4>Redux</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
           </div>
         </div>

      {/*==============================================================*/}
         <div className="experience__backend">
           <h3>Backend Development</h3>
           <div className='experience__content'>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Java</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Experienced</small>
             </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Django</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
             <h4>Rest APIs</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
             <h4>Algorithms</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
           </div>
         </div>

{/*=================================================================*/}
         <div className="experience__backend">
           <h3>Other Technologies</h3>
           <div className='experience__content'>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
             <div ><h4>Git</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>GitHub</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>

            
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Visual Studio Code</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Insomina</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>


            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Linux</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>



            
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Linux</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>


            
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Figma</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>



            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4> jQuery</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>

           

            {/* <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>Tailwilnd</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
            </article> */}
           </div>
         </div>
      </div>
    </section>
  )
}

export default Experience