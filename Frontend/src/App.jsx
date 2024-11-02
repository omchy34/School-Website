import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from "./components/HeroSection/Hero"
import About from "./components/About/About"
import Navbar from "./components/Navbar/Navbar"
import Services from './components/Services/Services'
import Footer from "./components/Footer/Footer"
import WhyUs from './components/WhyUS/WhyUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <WhyUs/>
    <Footer/>
    </>
  )
}

export default App
