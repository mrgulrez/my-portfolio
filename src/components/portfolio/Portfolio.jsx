import React from 'react'
import './portfolio.css'
import IMG0 from '../../assets/portfolio1.png'
import IMG1 from '../../assets/jamia.png'
import IMG2 from '../../assets/birthday.png'
import IMG3 from '../../assets/calculator.png'
import IMG4 from '../../assets/todo.png'
import IMG5 from '../../assets/tribe.png'
import IMG6 from '../../assets/portfolio0.png'




// DO NOT USE THE IMAGE IN PRODUCTION

const data= [
  {
    id:1,
    image:IMG1,
    title:'Fully Functional University🎓 Website',
    github: 'https://github.com/GulrezAlam07/fet-jmi',
    demo: 'https://jamiamilliaislamia.netlify.app'
  },
  {
    id:2,
    image:IMG2,
    title:'Happy Birthday wishing! 🎉 App',
    github: 'https://github.com/GulrezAlam07/birthday-message/tree/master/2',
    demo: 'https://gulrez-birthday.netlify.app/'
  },
  {
    id:3,
    image:IMG3,
    title:'Calculator App',
    github: 'https://github.com/GulrezAlam07/OIBGRIP',
    demo: 'https://g1-calculator.netlify.app'
  },
  {
    id:4,
    image:IMG4,
    title:'ToDO App',
    github: 'https://github.com/GulrezAlam07/OIBGRIP2',
    demo: 'https://g1todoapp.netlify.ap'
  },
  {
    id:5,
    image:IMG5,
    title:'Tribe Page',
    github: 'https://g1tribe.netlify.app',
    demo: 'https://github.com/GulrezAlam07/OIBGRIP3'
  },
  {
    id:6,
    image:IMG6,
    title:'1st Portfolio',
    github: 'https://github.com/GulrezAlam07/myPortfolio',
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