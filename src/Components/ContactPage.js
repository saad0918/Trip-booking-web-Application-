import React, { useState, useEffect } from "react";
import successImage from "../assets/404-tick.png";
import hotelImage1 from "../assets/hotel1.jpg";
import hotelImage2 from "../assets/hotel2.jpg";
import hotelImage3 from "../assets/hotel3.jpg";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [popupVisible, setPopupVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hotelImages = [hotelImage1, hotelImage2, hotelImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % hotelImages.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [hotelImages.length]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // ✅ UPDATED handleSubmit – connects to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setPopupVisible(true);
      } else {
        alert("❌ Something went wrong. Please try again!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("⚠️ Server not reachable. Please check backend connection!");
    }
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
    window.location.href = "/";
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % hotelImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + hotelImages.length) % hotelImages.length
    );
  };

  return (
    <section className="contact-form">
      <div className="container">
        <div className="form-wrapper">
          <div className="company-address">
            <div className="address-group">
              <h2 className="lg-heading text-black">Get in Touch</h2>
              <p className="text-gray">
                Have questions or want to plan your dream trip? Fill out the
                form or reach us directly—we’d love to hear from you!
              </p>
              </div>
              <div className="address-group">
              <i className="fas fa-map-marker-alt fa-3x text-red"></i>
              <h2 className="text-gray md-heading">Location</h2>
              <p>#Frazer Town, Bengaluru, Karnataka 560005</p>
            </div>

            <div className="address-group">
              <i className="fas fa-envelope fa-3x text-red"></i>
              <h2 className="text-gray md-heading">E-mail</h2>
              <p>abcd@gmail.com</p>
            </div>

            <div className="address-group">
              <i className="fas fa-phone-square-alt fa-3x text-red"></i>
              <h2 className="text-gray md-heading">Call</h2>
              <p>+91 9876543210</p>
            </div>

            <div className="image-slider">
              <button className="slider-btn prev-btn" onClick={prevImage}>
                &#10094;
              </button>
              <img
                src={hotelImages[currentImageIndex]}
                alt="Hotel View"
                className="hotel-image"
              />
              <button className="slider-btn next-btn" onClick={nextImage}>
                &#10095;
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="form">
            <h1 className="lg-heading text-black">Contact Us</h1>
            <p className="text-gray">We’ll get back to you shortly</p>

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit" className="form-btn">
              Submit
            </button>

            {popupVisible && (
              <div className="popup open-popup">
                <img src={successImage} alt="Success" />
                <h2>Thank You</h2>
                <p>
                  Your details have been successfully submitted. Our team will
                  contact you soon.
                </p>
                <button type="button" onClick={handleClosePopup}>
                  OK
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
