import Reactlogo from '../assets/react.svg'
import "../App.css"
import "./Home.css"
import variable_name from "../componants/Home.module.css"

const headingColor = {
    color : "blue",
    fontSize : 30,
}

const Home = () =>{

    const paraColor = {
        color : "green"
    }
    return(
        <>

        <div id="home" className="container py-5">
            <div className="row align-item-center">

                <div className="col-md-6 py-5">
                    <h1 style={{color:"black", backgroundColor:"white"}} className="fw-bold display-5 mb-3">Welcome to react UI Components</h1>
                    <h2 style={headingColor} >This is my first React website</h2>
                    <h3 className="heading3">What is React ? Let's learn</h3>
                    <h4 className="heading4">It is an Javascript Library</h4>
                    <h5 className={variable_name.nikita}>Welcome Nikita</h5>
                    <p style={paraColor} className="fs-5">Bootstrap is a popular, free, and open-source framework for front-end web development that helps build responsive, mobile-first websites and applications quickly. It provides pre-designed templates, CSS classes, and JavaScript components for common elements like forms, buttons, and navigation, simplifying the development process by offering a collection of reusable code and a responsive grid system. By using Bootstrap</p>
                    <div className="mt-4">
                        <button type="button" className="btn btn-lg btn-info me-4">Get Started</button>
                        <button type="button" className="btn btn-lg btn-dark">Read More</button>
                    </div>
                    
                </div>
                <div className="col-md-6 text-center">
                    <img src={Reactlogo}  className="img-fluid w-100" alt="React Logo" />
                
                </div>

            </div>
        </div>

    
        
        </>
    );
};

export default Home;

