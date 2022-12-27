import React from 'react'
import ReactDOM from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home/Home'
import LearnHow from './pages/LearnHow/LearnHow'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "learnhow",
//     element: <LearnHow />
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />


      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/learnhow' exact element={<LearnHow />} />
      </Routes>
      {/* <SectionTwo /> */}


      {/* <RouterProvider router={router} /> */}

      <Footer />
    </Router>
  </React.StrictMode>
)
