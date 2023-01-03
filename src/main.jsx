import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/LandingPage/Home'
import Demo from './pages/Demo/Demo'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Faq from './pages/Faq/Faq'
import Privacy from './pages/Privacy/Privacy'
import ScrollToTop from './components/ScrollToTop'
import AboutUs from './pages/AboutUs/AboutUs'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path={'/demo'} exact element={<Demo />} />
        <Route path='/faq' exact element={<Faq />} />
        <Route path='/privacy-policy' exact element={<Privacy />} />
        <Route path='/about-us' exact element={<AboutUs />} />
      </Routes>
      {/* <SectionTwo /> */}



      <Footer />
    </Router>
  </React.StrictMode>
)
