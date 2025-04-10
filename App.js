import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";  // Importing the FeaturesSection
import VendorsSection from "./components/VendorsSection";  // Importing the VendorsSection
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import TestimonialSection from "./components/TestimonialSection";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><HeroSection /><FeaturesSection /><TestimonialSection /></>} />
        <Route path="/home" element={<><HeroSection /><FeaturesSection /><TestimonialSection /></>} />
        <Route path="/customization" element={<><div className="text-center py-20 text-4xl text-[#B17F6B]"></div><FeaturesSection /></>} />
        <Route path="/vendors" element={<VendorsSection />} /> {/* Vendors page without FeaturesSection */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Chatbot" element={<Chatbot />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
