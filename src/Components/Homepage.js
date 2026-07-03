import React from "react";
import "../App.css";
import backgroundImage from "../assets/bg-photo.jpg";
import ootyImage from "../assets/ooty.avif";
import desertImage from "../assets/desert.jpg";

const HomePage = () => {
  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <header
        className="header"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="header-content">
          <h1 className="lg-heading text-light header-attractive">
            Discover the World, One Journey at a Time
          </h1>
          <p className="text-light subheading">
            From misty mountains to golden deserts — we design trips that move
            your soul.
          </p>
          <a href="#explore-places" className="btn btn-primary md-heading">
            Start Your Adventure
          </a>
        </div>
      </header>

      {/* ===== EXPLORE PLACES ===== */}
      <section className="showcase" id="explore-places">
        <div className="container">
          <h2 className="section-heading text-center">
            Handpicked Destinations You’ll Love
          </h2>

          <div className="row row1">
            <div className="img-box">
              <img src={ootyImage} alt="Ooty" />
            </div>
            <div className="text-box">
              <h2 className="heading text-black">Ooty, India</h2>
              <p className="text-gray">
                Nestled in the Nilgiri Hills, Ooty’s rolling tea gardens, cool
                breeze, and colonial charm make it the perfect mountain escape.
              </p>
              <a href="/about" className="btn btn-secondary text-red">
                Discover More
              </a>
            </div>
          </div>

          <div className="row row2">
            <div className="img-box">
              <img src={desertImage} alt="Desert, Egypt" />
            </div>
            <div className="text-box">
              <h2 className="lg-heading text-black">Egyptian Desert Adventure</h2>
              <p className="text-gray">
                Experience the magic of the Sahara — endless dunes, starlit
                nights, and ancient secrets waiting to be uncovered.
              </p>
              <a href="/about" className="btn btn-secondary text-red">
                Discover More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="features">
        <div className="container">
          <h2 className="section-heading text-center">Why Travel With Us?</h2>
          <div className="box-wrapper">
            <div className="box box-1">
              <h2 className="md-heading">Book with Confidence</h2>
              <p>
                Your peace of mind matters. Enjoy 24/7 travel support and
                real traveler reviews to help you choose with clarity.
              </p>
            </div>

            <div className="box box-2">
              <h2 className="md-heading">Best Rates Guaranteed</h2>
              <p>
                We bring you exclusive offers and transparent pricing — no
                hidden fees, just great journeys that fit your budget.
              </p>
            </div>

            <div className="box box-3">
              <h2 className="md-heading">Flexible Travel Plans</h2>
              <p>
                Change of plans? No problem. We offer flexible bookings so
                you can travel your way, stress-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PLAN TRIP ===== */}
      <section className="plan-trip">
        <div className="container text-center">
          <h2 className="section-heading">Plan Your Perfect Getaway</h2>
          <p className="text-gray">
            Tell us where you want to go, and we’ll take care of every detail —
            from stays to adventures.
          </p>
          <a href="/contact" className="btn btn-primary">
            Start Planning
          </a>
        </div>
      </section>
      {/* ===== TESTIMONIALS ===== */}
<section className="testimonials">
  <div className="container">
    <h2 className="section-heading text-center">What Our Travelers Say</h2>

    <div className="testimonial-grid">
        <div className="testimonial-box">
        <i className="fas fa-quote-left quote-icon"></i>
        <img src="/Icon-img/Arjun.png" alt="Traveler 2" className="testimonial-img" />
        <p>
          “Professional, warm, and personal. It felt like my trip was made just for me.”
        </p>
          <div className="stars">
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             </div>
        <h4>- Arjun Mehta</h4>
      </div>
    
         <div className="testimonial-box">
        <i className="fas fa-quote-left quote-icon"></i>
        <img src="/Icon-img/Rohan-sneha.png" alt="Traveler 3" className="testimonial-img" />
        <p>
          “Our honeymoon in Bali was a dream come true — thank you for making it so memorable!”
        </p>
           <div className="stars">
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             </div>
        <h4>- Rohan & Sneha</h4>
      </div>
        <div className="testimonial-box">
        <i className="fas fa-quote-left quote-icon"></i>
        <img src="/Icon-img/Priya.png" alt="Traveler 1" className="testimonial-img" />
        <p>
          “An unforgettable journey! Everything was perfectly arranged — from hotels to local experiences.”
        </p>
           <div className="stars">
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
           </div>
        <h4>- Priya Sharma</h4>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default HomePage;
