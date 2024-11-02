import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Hero from './components/HeroSection/Hero';
import About from './components/About/About';
import WhyUs from './components/WhyUS/WhyUs';
import Services from './components/Services/Services';
import Contact from './components/Contact/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap pages inside Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Hero />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/whyus" element={<WhyUs />} />
          <Route path="/Contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
