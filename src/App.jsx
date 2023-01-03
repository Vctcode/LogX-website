import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//  Components
import Navbar from './components/Navbar/Navbar'
import LearnHow from './pages/LearnHow/LearnHow'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'


function App() {

  return (
    <div className="App">
      <Navbar />

      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/learnhow' exact element={<LearnHow />} />
        </Routes>
        {/* <SectionTwo /> */}
      </Router>

      <Footer />
    </div>
  )
}

export default App
