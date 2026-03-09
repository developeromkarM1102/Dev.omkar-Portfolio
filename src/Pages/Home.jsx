import React from 'react'
import { useState, useEffect } from 'react'
import Loader from '../Components/Loader'
import { ThemeToggle } from '../Components/ThemeToggle'
import {StarBackground} from '../Components/StarBackground'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
const Home = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='min-h-screen'>
      {/* theme toggle */}
      <ThemeToggle/>
      {/*background effect*/}
      <StarBackground/>
      {/* Navbar */}
      <Navbar/>
      {/* main content */}
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default Home
