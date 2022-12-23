import { useState } from 'react'
import { Route } from 'react-router-dom'
//  Components
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import LearnHow from './components/LearnHow/LearnHow'
import Bottom from './components/Bottom/Bottom'
import Footer from './components/Footer/Footer'
import SectionTwo from './components/Section2/Section2'
import SectionThree from './components/Section3/Section3'


function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SectionThree />
      {/* <SectionTwo /> */}
      {/* <LearnHow /> */}
      <Bottom />
      <Footer />
    </div>
  )
}

export default App
