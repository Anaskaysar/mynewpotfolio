import React from 'react';

import Header from './components/Header/Header';
import About from './components/About/About';
import Brands from './components/Organisation/Brands';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills/Skills';
import Services from './components/Services';
import Contact from './components/Contacts/Contact';
import Footer from './components/Footer/Footer';
import Testimonials from './components/Testimonials/Testimonials';
import BackTopBtn from './components/Buttons/BackTopBtn';

const App = () => {
  return (
    <div className='bg-white relative'>
      <Header />
      {/* <Hero /> */}
      <About />
      {/* <Skills /> */}
      {/* <Portfolio />
      <Services />
      <Testimonials /> */}
      <Brands />
      <Contact />
      <Footer />
      <BackTopBtn />
    </div>
  );
};

export default App;
