import React from 'react'
import './portfolio.css'
import IMG9 from '../../assets/fyle2.png'
import IMG8 from '../../assets/music-room.png'
import IMG7 from '../../assets/crm-system.png'
import IMG6 from '../../assets/jamia.png'
import IMG5 from '../../assets/birthday.png'
import IMG4 from '../../assets/calculator.png'
import IMG3 from '../../assets/todo.png'
import IMG2 from '../../assets/tribe.png'
import IMG1 from '../../assets/portfolio0.png'



//Image ration is 3:2

const data= [
  {
    id:9,
    image:IMG9,
    title:'GitHub User Search',
    github: 'https://github.com/mrgulrez/fyle-internship-challenge-23',
    demo: 'https://fyle2023.netlify.app/'
  },
  {
    id:8,
    image:IMG8,
    title:'Party Room',
    github: 'https://github.com/mrgulrez/music-room',
    demo: 'https://github.com/mrgulrez/music-room'
  },
  {
    id:7,
    image:IMG7,
    title:'Customer Management System',
    github: 'https://github.com/mrgulrez/crm-system',
    demo: 'https://github.com/mrgulrez/crm-system'
  },

  {
    id:6,
    image:IMG6,
    title:'Fully Functional University🎓 Website',
    github: 'https://github.com/mrgulrez/fet-jmi',
    demo: 'https://jamiamilliaislamia.netlify.app'
  },
  {
    id:5,
    image:IMG5,
    title:'Happy Birthday wishing! 🎉 App',
    github: 'https://github.com/mrgulrez/birthday-message/tree/master/2',
    demo: 'https://gulrez-birthday.netlify.app/'
  },
  {
    id:4,
    image:IMG4,
    title:'Calculator App',
    github: 'https://github.com/mrgulrez/OIBGRIP',
    demo: 'https://g1-calculator.netlify.app'
  },
  {
    id:3,
    image:IMG3,
    title:'ToDO App',
    github: 'https://github.com/mrgulrez/OIBGRIP2',
    demo: 'https://g1todoapp.netlify.app'
  },
  {
    id:2,
    image:IMG2,
    title:'Tribe Page',
    github: 'https://github.com/mrgulrez/OIBGRIP3',
    demo: 'https://g1tribe.netlify.app'
  },

  // {
  //   id:1,
  //   image:IMG1,
  //   title:'1st Portfolio 😀',
  //   github: 'https://github.com/mrgulrez/myPortfolio',
  //   demo: 'https://gulrezalamportfolio.netlify.app/'
  // }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.sort((a, b) => b.id - a.id).map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel='noopener noreferrer'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
                </div>
              </article>
            );
          })
        }
      </div>
    </section>
  );
}

export default Portfolio