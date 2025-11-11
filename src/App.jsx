import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Packages from './components/Packages'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  return (
    <div style={{ background: '#000', color: '#fff', fontFamily: 'Outfit, Poppins, Inter, system-ui, sans-serif' }}>
      <Navbar />
      <Hero />
      <Packages />
      <Benefits />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
