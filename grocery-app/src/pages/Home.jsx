
import home_bg from "../assets/home_bg.png"
import vegImg from '../assets/home_1.png'
// import offer1Img from '../assets/off-one.png'
// // import groceryImg from '../assets/home_2.png'
// // import fruitsImg from '../assets/home_3.png'

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

 
      <div class="container my-5">
  <div class="row g-4">


    <div class="col-md-4">
      <div class="promo-card position-relative">
        
        <div class="p-4 left-area">
          <p class="tagline">Organically</p>
          <h2 class="title">ORGANIC VEGETABLES</h2>
          <p class="subtitle">Best For Health</p>

          <button class="btn view-btn">VIEW MORE</button>
        </div>

        <div class="right-area"></div>

       
        <div class="discount-badge">
          <span>30% OFF</span>
        </div>

        
        <img src={vegImg} class="product-img" />
      </div>
    </div>

  </div>
</div>


        </>
    );
};

export default Home;