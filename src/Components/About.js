import React from 'react';
import '../App.css';

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <h2 className="lg-heading text-black about-heading">About Us</h2>
              <p className="text">
                 We’re a passionate team of travel enthusiasts dedicated to making your journeys unforgettable. From exotic getaways to local escapes, we help you explore the world your way — safely, comfortably, and affordably.</p>

                <div className="about-wrapper">
                    <div className="left">
                         <ul>
                            <li>Customized travel packages for every budget.</li>
                            <li>Expert local guides in every destination.</li>
                            <li>24/7 customer support for a worry-free experience.</li>
                            </ul>
                            </div>
                            <div className="right">
                                <ul>
                                    <li>Exclusive hotel and flight deals.</li>
                                    <li>Eco-friendly and sustainable travel options.</li>
                                    <li>Memorable group and solo experiences.</li>
                                    </ul>
                                    
                                </div>
                                <div className="counts">
                                    <div className="count-item"><span>10k+</span><p>Happy Travelers</p></div>
                                    <div className="count-item"><span>500+</span><p>Destinations Worldwide</p></div>
                                    <div className="count-item"><span>150+</span><p>Professional Guides</p></div>
                                    <div className="count-item"><span>200+</span><p>Partner Hotels</p></div>
                                </div>
                                <div className="cta-banner">
                                    <div className="cta-banner-left">
                                        <p className="cta-line">Ready for your next adventure? Let’s plan your perfect trip today!</p>
                                        </div>
                                        <div className="cta-banner-right">
                                            <a href="/contact" className="btn-cta">Get in Touch</a>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                            </section>
                                            );
                                        };
export default About;