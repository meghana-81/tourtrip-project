import React from "react";
import img1 from "./img0.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
import img7 from "./img7.jpg";
import img8 from "./img8.jpg";
import galy from "./galy1.jpg";
import galy1 from "./galy2.jpg";
import galy2 from "./galy3.jpg";
import image from "./image2.jpg";
import image1 from "./image1.jpg";
import image2 from "./image3.jpg";
import dest from "./dest2.jpg";
 


import "./home.css";
import { useNavigate } from "react-router-dom";

 const Home = () => {
  const navigate=useNavigate();
  const handleBook=()=>{
    navigate("/AddUser");
  }


  

    return(
      <div>
      <nav>
      <div className="nav__logo"><span>T</span>our <span>T</span>rip</div>
      <ul className="nav__links">
        <li className="link"><a href="#">Home</a></li>
        <li className="link"><a href="#">Destinations</a></li>
        <li className="link"><a href="#">Packages</a></li>
        <li className="link"><a href="#">Blogs</a></li>
        <li className="link"><a href="#">Reviews</a></li>
      </ul>
      <button className="btn">Contact Us</button>
      </nav>
    
    <header>
      <div className="section__container header__container">
        <div className="header__image">
          <img src ={img7} alt="header" />
          <img src={img8} alt="header" />
        </div>
        <div className="header__content">
          <div>
            <p className="sub__header">Book Now</p>
            <h1>The <span>Smiling</span> 😊<br />agent for travel</h1>
            <p className="section__subtitle">
             <h2> Make your travel more enjoyable with us. We are the best travel
              agency and we are providing the best travel services for our
              clients.</h2>
            </p>
            <div className="action__btns">
              <button className="btn">Plan a Trip</button>
              
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="section__container destination__container">
      <div className="section__header">
        <div>
          <h2 className="section__title">Explore top destinations</h2>
          <p className="section__subtitle">
            Explore your suitable and dream places around the world. Here you
            can find your right destination.
          </p>
        </div>
        
      </div>
      <div className="destination__grid">
        <div className="destination__card">
          <img src={image} alt="destination" />
          <div className="destination__details">
            <p className="destination__subtitle">Maldevies</p>
            <p className="destination__subtitle">Lakshadweep Islands</p>
          </div>
        </div>
        <div className="destination__card">
          <img src={image1} alt="destination" />
          <div className="destination__details">
            <p className="destination__title">Ladakh</p>
            <p className="destination__subtitle">Tibet</p>
          </div>
        </div>
        <div className="destination__card">
          <img src={dest} alt="destination" />
          <div className="destination__details">
            <p className="destination__title">UNESCO World Heritage </p>
            <p className="destination__subtitle">The UNESCO World Heritage Site, located near Udaipur</p>
          </div>
        </div>
        <div className="destination__card">
          <img src={image2} alt="destination" />
          <div className="destination__details">
            <p className="destination__title">Valley Of Flowers</p>
            <p className="destination__subtitle">Uttarkhand</p>
          </div>
        </div>
      </div>
    </section>

    <section className="trip">
      <div className="section__container trip__container">
        <h2 className="section__title">Best trip package</h2>
        <p className="section__subtitle">
          Explore your suitable and dream places around the world. Here you can
          find your right destination.
        </p>
        <div className="trip__grid">
          <div className="trip__card">
            <img src={img1} alt="trip" />
            <div className="trip__details">
              <p>Goa</p>
              <div className="rating"><i className="ri-star-fill"></i> 4.2</div>
              <div className="booking__price">
                <div className="price"><span>From</span>Rs.3500</div>
                <button className="book__now" onClick={handleBook}>Book Now</button>
              </div>
            </div>
          </div>
          <div className="trip__card">
            <img src={img2}  alt="trip" />
            <div className="trip__details">
              <p>Kerala</p>
              <div className="rating"><i className="ri-star-fill"></i> 4.5</div>
              <div className="booking__price">
                <div className="price"><span>From</span> Rs.3200</div>
                <button className="book__now" onClick={handleBook}>Book Now</button>
              </div>
            </div>
          </div>
          <div className="trip__card">
            <img src={img3}  alt="trip" />
            <div className="trip__details">
              <p>Darjeeling,WestBengal</p>
              <div className="rating"><i className="ri-star-fill"></i> 4.7</div>
              <div className="booking__price">
                <div className="price"><span>From</span> Rs.7800</div>
                <button className="book__now" onClick={handleBook}>Book Now</button>
              </div>
            </div>
          </div>
          <div className="trip__card">
            <img src={img4} alt="trip" />
            <div className="trip__details">
              <p>Kedarnath</p>
              <div className="rating"><i className="ri-star-fill"></i> 4.7</div>
              <div className="booking__price">
                <div className="price"><span>From</span> Rs.7200</div>
                <button className="book__now" onClick={handleBook}>Book Now</button>
             </div>
           </div>
         </div>
         <div className="trip__card">
            <img src={img5} alt="trip" />
            <div className="trip__details">
              <p>New Delhi</p>
              <div className="rating"><i className="ri-star-fill"></i> 4.7</div>
              <div className="booking__price">
                <div className="price"><span>From</span> Rs.5200</div>
                <button className="book__now" onClick={handleBook}>Book Now</button>
             </div>
           </div>
         </div>
         <div className="trip__card">
            <img src={img6} alt="trip" />
            <div className="trip__details">
              <p>Hampi,karnataka</p>
              <div className="rating"><i className="ri-star-fill"></i> 4.7</div>
              <div className="booking__price">
                <div className="price"><span>From</span> Rs.8000</div>
                <button className="book__now" onClick={handleBook}>Book Now</button>
             </div>
           </div>
         </div>
       </div>
        <div className="view__all">
          <button className="btn" onClick={handleBook}>Book Now</button>
        </div>
      </div>
    </section>

    <section className="gallary">
      <div className="section__container gallary__container">
        <div className="image__gallary">
          <div className="gallary__col">
            <img src={galy}alt="gallary" />
          </div>
          <div className="gallary__col">
            <img src={galy1} alt="gallary" />
            <img src={galy2} alt="gallary" />
          </div>
        </div>
        <div className="gallary__content">
          <div>
            <h2 className="section__title">
              Our trip gallary that will inspire you
            </h2>
            <p className="section__subtitle">
              Explore your suitable and dream places around the world. Here you
              can find your right destination.
            </p>
            <button className="btn">View All</button>
          </div>
        </div>
      </div>
    </section>

    <section className="subscribe">
      <div className="section__container subscribe__container">
        <div className="subscribe__content">
          <h2 className="section__title">Subscribe to get special prize</h2>
          <p className="section__subtitle">
            Explore your suitable and dream places around the world. Here you
            can find your right destination.
          </p>
        </div>
        <div className="subscribe__form">
          <form>
            <input type="email" placeholder="Your email here" />
            <button className="btn" type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>

    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <h3><span>T</span>our <span>T</span>rip</h3>
          <p>
            Explore your suitable and dream places around the world. Here you
            can find your right destination.
          </p>
        </div>
        <div className="footer__col">
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
        <div className="footer__col">
          <h4>Address</h4>
          <p>
            <span>Address:</span> 6/844,Gandhiroad,Proddatur
            India
          </p>
          <p><span>Email:</span> info@tourtrip.com</p>
          <p><span>Phone:</span> +91 9000089427</p>
        </div>
      </div>
      
    </footer>  


      </div>
    )
 }
 export default Home

