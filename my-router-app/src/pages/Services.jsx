import Card1 from "../assets/react.svg"
import "./Services.css"
const Services = () => {
    return(
        <>

        <div className="container mt-5">
            <h1 className="services-h1">Our Services</h1>
            <div className="row mb-5">
                
                <div className="col-md-4">

                    <div className="card service">
 
                        <div className="card-body cards">
                            <h5 className="card-title">Card title</h5>
                            <img src={Card1} className="w-100" />
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a  className="btn btn-primary button">Go somewhere</a>
                        </div>
                        </div>

                </div>
                <div className="col-md-4">

                    <div className="card service">
 
                        <div className="card-body cards">
                            <h5 className="card-title">Card title</h5>
                            <img src={Card1} className="w-100" />
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a  className="btn btn-primary button">Go somewhere</a>
                        </div>
                        </div>

                </div>

                <div className="col-md-4">

                    <div className="card service" >
 
                        <div className="card-body cards">
                            <h5 className="card-title">Card title</h5>
                            <img src={Card1} className="w-100" />
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a  className="btn btn-primary button">Go somewhere</a>
                        </div>
                        </div>

                </div>
            </div>
        </div>


        </>
    );
};
export default Services;