import React from 'react'
// import * as Sentry from '@sentry/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//  Components
import Navbar from './components/Navbar/Navbar'
// import Hero from './components/Hero/Hero'
import LearnHow from './components/LearnHow/LearnHow'
// import SectionFour from './components/SectionFour/SectionFour'
import Footer from './components/Footer/Footer'
import SectionTwo from './components/Section2/Section2'
// import SectionThree from './components/Section3/Section3'
import Home from './pages/home/Home'


function App() {

  return (
    <div className="App">
      <Navbar />

      <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/learnhow' element={<LearnHow />} />
      </Routes>
      {/* <SectionTwo /> */}
      </Router>

      <Footer />
    </div>
  )
}

export default App
