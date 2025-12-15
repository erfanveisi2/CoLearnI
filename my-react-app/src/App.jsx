import React from 'react';

// Import only the section components for the home page
import Hero from './components/Hero/Hero';
import StatsBanner from './components/StatsBanner/StatsBanner';
import PopularCourses from './components/PopularCourses/PopularCourses';
import WhyUs from './components/WhyUs/WhyUs';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    // The Navbar and Footer are removed from here
    <>
      <Hero />
      <StatsBanner />
      <PopularCourses />
      <WhyUs />
      <Testimonials />
    </>
  );
}

export default App;