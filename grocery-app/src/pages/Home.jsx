
import home_bg from "../assets/home_bg.png"
import vegImg from '../assets/home_1.png'
import offer1Img from '../assets/off-one.png'
import groceryImg from '../assets/home_2.png'
import fruitsImg from '../assets/home_3.png'

import './Home.css'

const Home = () => {
    return(
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active position-relative">
                    <img src={home_bg} className="d-block w-100 hero-bg" alt="..."/>
                    <div className="hero-content">
                      <h1>Fresh Grocery
                          <span className="highlight-green">Shopping</span>
                      </h1>
                    
                      <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s.
                    </p>
                    <button className="hero-btn">VIEW MORE</button>
                    </div>
                    
                  </div>

                  <div className="carousel-item position-relative">
                    <img src={home_bg} className="d-block w-100 hero-bg" alt="..."/>
                    <div className="hero-content">
                      <h1>Fresh Grocery
                          <span className="highlight-green">Shopping</span>
                      </h1>
                      
                      <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s.
                    </p>
                    <button className="hero-btn">VIEW MORE</button>
                    </div>
                    
                  </div>

                  <div className="carousel-item position-relative">
                    <img src={home_bg} className="d-block w-100 hero-bg" alt="..."/>
                    <div className="hero-content">
                      <h1>Fresh Grocery
                          <span className="highlight-green">Shopping</span>
                      </h1>
                    
                      <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s.
                    </p>
                    <button className="hero-btn">VIEW MORE</button>
                    </div>
                    
                  </div>

                </div>
  
            </div>

            {/* Home Discount section start */}

            <section id="discount">
              <div className="dis-container">
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="dis-card-container">

                    <div className="dis-left-part">

                      <p className="small-heading">Organically</p>
                      <h4 className="main-heading">ORGANIC VEGETABLES</h4>
                      <p className="common">Best For Health</p>
                      <a className="dis-btn">
                        <button className="btn dis1-btn">VIEW MORE</button>
                      </a>
                      <img className="dis-img" src={vegImg} alt="Veg Image" />

                    </div>
                    <div className="dis-right-part">
                      <img className="dis-offerImg" src={offer1Img} alt="30% Off" />
                    </div>

                  </div>

                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="dis-card-container">

                    <div className="dis-left-part">

                      <p className="small-heading">Explore Seasonal</p>
                      <h4 className="main-heading">HEALTHY & FRESH GROCERY</h4>
                      <p className="common">Best For Health</p>
                      <a className="dis-btn">
                        <button className="btn dis1-btn">VIEW MORE</button>
                      </a>
                      <img className="dis-img" src={groceryImg} alt="Veg Image" />

                    </div>
                    <div className="dis-right-part">
                      <img className="dis-offerImg" src={offer1Img} alt="30% Off" />
                    </div>

                  </div>

                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="dis-card-container">

                    <div className="dis-left-part">

                      <p className="small-heading">Explore Seasonal</p>
                      <h4 className="main-heading">100% NATURAL FRUITS</h4>
                      <p className="common">Best For Health</p>
                      <a className="dis-btn">
                        <button className="btn dis1-btn">VIEW MORE</button>
                      </a>
                      <img className="dis-img" src={fruitsImg} alt="Veg Image" />

                    </div>
                    <div className="dis-right-part">
                      <img className="dis-offerImg" src={offer1Img} alt="30% Off" />
                    </div>

                  </div>

                </div>

                
              </div>
            </div>
            </section>










 
      


        </>
    );
};

export default Home;