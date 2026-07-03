// src/Footer.js
import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* --- Centered Brand --- */}
        <div className="footer-brand">
          <h2 className="footer-logo">Airbnb Travels</h2>
          <p>
            Discover beautiful destinations, plan your perfect trip, and travel with confidence.
          </p>
        </div>

        {/* --- Centered Columns Row --- */}
        <div className="footer-columns">
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
         
          <div className="footer-section contact">
            <h3>Get in Touch</h3>
            <p>📍 Frazer Town, Bengaluru, India</p>
            <p>📞 +91 9876543210</p>
            <p>✉️ airbnb@travels.com</p>
            <div className="social-media-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Airbnb Travels. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
