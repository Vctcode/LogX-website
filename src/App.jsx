import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { FaWhatsapp as Whatsapp } from 'react-icons/fa'


//  Components
import Navbar from './components/Navbar/Navbar'
import LearnHow from './pages/LearnHow/LearnHow'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'

import "./index.css"


function App() {

  return (
    <IconContext.Provider value={{ color: '#fff', size: '24px', }}>
      <div className="App">
        {/* <Navbar /> */}

        <Router>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/learnhow' exact element={<LearnHow />} />
          </Routes>
          {/* <SectionTwo /> */}
        </Router>

        {/* <Footer /> */}
      </div>
    </IconContext.Provider>

  )
}

export default App
