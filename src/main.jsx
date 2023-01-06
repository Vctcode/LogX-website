import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { SiWhatsapp as WhatsappIcon } from 'react-icons/si'

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
    <IconContext.Provider value={{ color: '#fff', size: '30px', }}>

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


        <div className='whatsapp__container'>
        <p className='bubble'>Request for a dispatch here</p>
        <a href="https://api.whatsapp.com/send?phone=7013423935&text=Hello,%20I%20need%20a%20dispatch%20rider" className='whatsapp' target='_blank' ><WhatsappIcon /></a>
       
        </div>

        <Footer />
      </Router>
    </IconContext.Provider>

  </React.StrictMode>
)
