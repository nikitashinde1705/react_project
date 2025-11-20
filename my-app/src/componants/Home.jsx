import Reactlogo from '../assets/react.svg'
const Home = () =>{
    return(
        <>

        <div className="container">
            <div className="row align-item-center">

                <div className="col-md-6">
                <h1>Welcome to react UI Components</h1>
                <p>Bootstrap is a popular, free, and open-source framework for front-end web development that helps build responsive, mobile-first websites and applications quickly. It provides pre-designed templates, CSS classes, and JavaScript components for common elements like forms, buttons, and navigation, simplifying the development process by offering a collection of reusable code and a responsive grid system. By using Bootstrap</p>
                <button type="button" class="btn btn-lg me-2 btn-warning">Get Started</button>
                <button type="button" class="btn btn-success">Read More</button>
            </div>
            <div className="col-md-6">
                <img src={Reactlogo}  className="img-fluid w-100" alt="" />
              
            </div>

            </div>
        </div>

    
        
        </>
    );
};

export default Home;