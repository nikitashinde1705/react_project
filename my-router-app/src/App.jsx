
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './componants/Header'
import Footer from './componants/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'

function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
