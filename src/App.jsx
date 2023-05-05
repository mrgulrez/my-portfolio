import React from 'react'
import Headers from './components/header/Header'
 import Nav from './components/nav/Nav'
 import About from './components/about/About'
 import Experience from './components/experience/Experience'
 import Services from './components/services/Services'
 import Portfolio from './components/portfolio/Portfolio'
 import Testimonials from './components/testimonials/Testimonials'
 import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'



const App = () => {
  return (
    <>
      
      <Headers /> 
      <Nav /> 
      <About />
      <Experience /> 
      <Services />
      <Portfolio /> 
      <Testimonials />  
      <Contact /> 
      <Footer />  

    </>
  )
}

export default App
