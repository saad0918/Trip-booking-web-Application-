import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import ContactPage from './Components/ContactPage'; 
import HomePage from './Components/Homepage';  
import Footer from './Components/Footer';
import About from './Components/About';
import Chatbot from './Components/Chatbot';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Chatbot />
      <Footer />
    </Router>
  );
};

export default App;
