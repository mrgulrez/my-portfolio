import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/music-room.png'
import IMG2 from '../../assets/crm-system.png'
import IMG3 from '../../assets/jamia.png'
import IMG4 from '../../assets/birthday.png'
import IMG5 from '../../assets/calculator.png'
import IMG6 from '../../assets/todo.png'
import IMG7 from '../../assets/tribe.png'
import IMG8 from '../../assets/portfolio0.png'




// DO NOT USE THE IMAGE IN PRODUCTION

const data= [
  {
    id:1,
    image:IMG1,

    title:'Party Room',
    github: 'https://github.com/mrgulrez/music-room',
    demo: 'https://github.com/mrgulrez/music-room'
  },
  {
    id:2,
    image:IMG2,
    title:'Customer Management System',
    github: 'https://github.com/mrgulrez/crm-system',
    demo: 'https://github.com/mrgulrez/crm-system'
  },

  {
    id:3,
    image:IMG3,

    title:'Fully Functional University🎓 Website',
    github: 'https://github.com/mrgulrez/fet-jmi',
    demo: 'https://jamiamilliaislamia.netlify.app'
  },
  {

    id:4,
    image:IMG4,

    title:'Happy Birthday wishing! 🎉 App',
    github: 'https://github.com/mrgulrez/birthday-message/tree/master/2',
    demo: 'https://gulrez-birthday.netlify.app/'
  },
  {

    id:5,
    image:IMG5,

    title:'Calculator App',
    github: 'https://github.com/mrgulrez/OIBGRIP',
    demo: 'https://g1-calculator.netlify.app'
  },
  {

    id:6,
    image:IMG6,

    title:'ToDO App',
    github: 'https://github.com/mrgulrez/OIBGRIP2',
    demo: 'https://g1todoapp.netlify.app'
  },
  {

    id:7,
    image:IMG7,

    title:'Tribe Page',
    github: 'https://github.com/mrgulrez/OIBGRIP3',
    demo: 'https://g1tribe.netlify.app'
  },


  {
    id:8,
    image:IMG8,
    title:'1st Portfolio 😀',

    github: 'https://github.com/mrgulrez/myPortfolio',
    demo: 'https://gulrezalamportfolio.netlify.app/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {

          return(

            <article key ={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title}/>
          </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href= {demo}
            className=' btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
          )
        })
      }


      </div>
    </section>
  )
}

export default Portfolio