import './App.css'
import reviews from "./data"
import Testimonial from './componants/Testimonial'

function App() {
 

  return (
    <>

    <div className="d-flex flex-column w-100 h-100 justify-content-center align-items-center">

      <div>
          <h1>Our Testimonials</h1>
          <div></div>
          <Testimonial reviews={reviews}/>
      </div>

    </div>

  
      
    </>
  )
}

export default App
