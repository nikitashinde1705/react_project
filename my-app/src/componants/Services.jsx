import Card1Img from '../assets/hello-world-1333103_1280.webp'
import Card2Img from '../assets/istockphoto-1452604857-2048x2048.jpg'
import Card3Img from '../assets/technology-1283624_1280.jpg'

const Services = () => {
    return(
        <>
        <div id="services" className="container mb-5 ">
            <h1>Services</h1>
            <div className="row align-item-center">
                
                <div className="col-md-4 ">
                    <div className="card ">
                    <div className="card-body ">
                        <h5 className="card-title text-center fs-2">Coding</h5>
                        <img src={Card1Img} className='img-fluid img-thumbnail ' alt="card1 Image" />
                        <p className="card-text">Coding is the process of writing instructions for a computer to perform specific tasks using a programming language. These instructions are called "code".</p>
                        <a href="#" className="btn btn-lg btn-dark">Read More</a>
                    </div>
                    </div>
                </div>
               
               <div className="col-md-4">
                    <div className="card">
                    <div className="card-body ">
                        <h5 className="card-title text-center fs-2">AIML</h5>
                        <img src={Card2Img} className='img-fluid img-thumbnail rounded' alt="card2 Image" />
                        <p className="card-text">AIML most commonly refers to either Artificial Intelligence and Machine Learning (AI/ML) as a field of study and technology or the Artificial Intelligence Markup Language, a specific language for creating chatbots. </p>
                        <a href="#" className="btn btn-lg btn-dark">Read More</a>
                    </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title text-center fs-2">Programing</h5>
                        <img src={Card3Img} className='img-fluid img-thumbnail' alt="" />
                        <p className="card-text">Programming is the process of creating instructions for a computer to perform a specific task. It involves writing code in a specific programming language, which is then translated into machine-readable instructions.</p>
                        <a href="#" className="btn btn-lg btn-dark">Read More</a>
                    </div>
                    </div>
                </div>
               
            </div>
        </div>
        </>
    );
};

export default Services;