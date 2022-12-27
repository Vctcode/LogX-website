import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/home/Home'
import LearnHow from './pages/LearnHow/LearnHow'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "learnhow",
    element: <LearnHow />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />

    {/* <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/learnhow' exact element={<LearnHow />} />
      </Routes>
      {/* <SectionTwo />
    </Router> */}

    <RouterProvider router={router} />

    <Footer />
  </React.StrictMode>
)
