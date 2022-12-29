import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/LandingPage/Home'
import Demo from './pages/Demo/Demo'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Faq from './pages/Faq/Faq'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />


      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path={'/demo'} exact element={<Demo />} />
        <Route path='/faq' exact element={<Faq />} />
      </Routes>
      {/* <SectionTwo /> */}



      <Footer />
    </Router>
  </React.StrictMode>
)
