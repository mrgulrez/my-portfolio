import React from 'react'
import './testimonials.css'
// import AVTR1 from '../../assets/avatar1.jpg'
import AVTR1 from '../../assets/Asad.jpg'
import AVTR2 from '../../assets/aqib.jpg'
// import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/Naju.jpg'
// import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/download1.jpeg'
// import AVTR4 from '../../assets/avatar4.jpg'


//import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';





const data = [
  {
    avatar: AVTR1,
    name:'Asad Jamal',
    review: 'I was so shocked seeing one of my Classmates doing fantabulous in coding. Through his skills he created sites and apps which are still under work and soon will be online available . Well done Gulrez Alam. Best wishes from from my side and all the very best for your future. Congratulations in advance for yours future success🏆'
    
  },
  {
    avatar: AVTR2,
    name:'Aqib Khan',
    review: 'It is really amazing to see that one of my friend doing great in the field of development. He has created a superb portfolio website which is available on Google search engine. He always inspires me by his skills and hardwork. Good going Gulrez Alam. Hope,  you achieve great heights in your life. Best of luck for your great future🌟.'
  },
  {
    avatar: AVTR3,
    name:'Mohd. Najmuddin',
    review: 'When I used YouTube to learn certain programming topics, I usually suffered from doubts, Gulrez always helped me. His problem-solving skills are awesome.I realized that his mentorship was the reason for getting better knowledge in the computer science field. Thanks Gulrez Alam.'
  },
  {
    avatar: AVTR4,
    name:'Andrew',
    review: "Gulrez, is a great programmer, he understand problems clearly, break them down into hypotheses, and propose solutions in a coherent manner. He understand concepts quickly, or ask the right questions to help make him clear, and don't need to have everything written down in a specifications document."
  }
]

const testimonials = () => {
  return (
    <section id='testomonials'>
     <h5>Review from clients</h5>
     <h2>Testimonials</h2>

     <Swiper className='container testimonials__container'
     // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
     {
          data.map(({avatar, name, review}, index) =>  {
             return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar}  />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                 {review}
                </small>
              </SwiperSlide>
             )
          })
         }
     </Swiper>
    </section>
  )
}

export default testimonials
