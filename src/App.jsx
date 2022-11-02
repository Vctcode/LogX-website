import { useState } from 'react'
//  Components
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import LearnHow from './components/LearnHow/LearnHow'
import Bottom from './components/Bottom/Bottom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <LearnHow />
      <Bottom />
    </div>
  )
}

export default App
