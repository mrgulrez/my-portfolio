import React from 'react'
import './portfolio.css'
import IMG0 from '../../assets/portfolio1.png'
import IMG1 from '../../assets/portfolio0.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'




// DO NOT USE THE IMAGE IN PRODUCTION

const data= [
  {
    id:1,
    image:IMG0,
    title:'Fully Functional Web Application',
    github: 'https://github.com/GulrezAlam07/GulrezAlam07.github.io',
    demo: 'https://gulrezalam07.github.io/'
  },
  {
    id:2,
    image:IMG1,
    title:'1st Portfolio',
    github: 'https://github.com/GulrezAlam07/myPortfolio',
    demo: 'https://gulrezalamportfolio.netlify.app/'
  },
  // {
  //   id:3,
  //   image:IMG3,
  //   title:'Admin dashboard with analytics ',
  //   github: 'https://github.com',
  //   demo: 'https://cdn.dribbble.com/users/8244207/screenshots/18204618/media/83a85f9d872b8b23b63eb6675735885f.mp4'
  // },
  // {
  //   id:4,
  //   image:IMG4,
  //   title:'Property Landing Page Website',
  //   github: '',
  //   demo: 'https://cdn.dribbble.com/users/1413843/screenshots/19808872/media/a395f56eccddbe8de9f683defa731cb4.mp4'
  // },
  // {
  //   id:5,
  //   image:IMG5,
  //   title:'Automated Invoice',
  //   github: 'https://github.com',
  //   demo: 'https://cdn.dribbble.com/users/4042800/screenshots/19809717/media/fbef57b898cbebfebcca1c8ffd0ac46e.mp4'
  // },
  // {
  //   id:6,
  //   image:IMG6,
  //   title:'Crypto wallet',
  //   github: 'https://github.com',
  //   demo: 'https://cdn.dribbble.com/users/260900/screenshots/16921853/media/5c3c0624ddc7536770ad4d4bee4ee045.mp4'
  // } 
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