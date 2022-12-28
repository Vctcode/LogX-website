import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/LandingPage/Home'
import LearnHow from './pages/LearnHow/LearnHow'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />


      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path={'/learnhow'} exact element={<LearnHow />} />
      </Routes>
      {/* <SectionTwo /> */}



      <Footer />
    </Router>
  </React.StrictMode>
)
