import React from 'react'
import Nav from './Components/Nav';
import Header from './Components/Header';
import Products from './Components/Products';
import Testimonial from './Components/Testimonial';
import Eventexample from './Components/Eventexample';
import FloatingNav from './Components/FloatingNav';
import Services from './Components/Services/Services';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';

import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <>
    {/* <Nav /> */}
    <Header />
    <Products/>
    <Testimonial/>
    <Eventexample />
    <FloatingNav />
    <Services/>
    <Projects/>
    <About/>
    <Contact/>

    

    </>
  )
}

export default App