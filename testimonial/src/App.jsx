import './App.css'
import {Route, Routes} from "react-router-dom";
// import reviews from "./data"
import Testimonial from './componants/Testimonial'
import Navbar from './componants/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard';
import { useState } from 'react';


function App() {
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>

    {/* <div className="d-flex flex-column w-100 h-100 justify-content-center align-items-center">

      <div>
          <h1>Our Testimonials</h1>
          <div></div>
          <Testimonial reviews={reviews}/>
      </div>

    </div> */}

    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>

      </Routes>

     
    </div>

       
  
      
    </>
  )
}

export default App
