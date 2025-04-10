import React, { useState, useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMoon, FaSun, FaArrowUp, FaBriefcase, FaHandshake, FaBuilding } from "react-icons/fa";

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-[#831418] text-white"} relative`}>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923001234567"
        className="fixed bottom-5 left-5 bg-green-500 p-3 rounded-full shadow-lg z-50 hover:scale-110 transition"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp className="text-white text-xl" />
      </a>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-[#B17F6B] p-3 rounded-full shadow-lg z-50 hover:scale-110 transition"
        >
          <FaArrowUp className="text-white text-xl" />
        </button>
      )}

      <div className="py-10 px-6 md:px-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Wed & Wear</h2>
          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="text-xl text-[#EFD4C9] hover:text-white">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* About */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold mb-4 text-[#EFD4C9]">About Us</h3>
            <p className="text-sm text-[#EFD4C9]">
              We specialize in customizable wedding wear and connect you with top-rated local vendors. Your dream wedding starts here!
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/4">
            <h3 className="text-xl font-semibold mb-4 text-[#EFD4C9]">Quick Links</h3>
            <ul className="space-y-2 text-[#EFD4C9]">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/explore" className="hover:text-white transition">Customization</a></li>
              <li><a href="/vendors" className="hover:text-white transition">Vendors</a></li>
              {/* Updated to link to the chatbot */}
              <li><a href="/chatbot" className="hover:text-white transition">Chatbot</a></li>
            </ul>
          </div>

          {/* Business Icons */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold mb-4 text-[#EFD4C9]">Stay Connected</h3>
            <form className="flex mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded-l-md text-black w-full"
              />
              <button type="submit" className="bg-[#B17F6B] text-white px-4 rounded-r-md hover:bg-[#a56b55]">
                Subscribe
              </button>
            </form>
            <div className="flex gap-4">
              <a href="https://weddingwear.pk/services" target="_blank" rel="noreferrer" className="text-[#EFD4C9] hover:text-white text-xl transition"><FaBriefcase /></a>
              <a href="https://weddingwear.pk/partners" target="_blank" rel="noreferrer" className="text-[#EFD4C9] hover:text-white text-xl transition"><FaHandshake /></a>
              <a href="https://weddingwear.pk/about" target="_blank" rel="noreferrer" className="text-[#EFD4C9] hover:text-white text-xl transition"><FaBuilding /></a>
              <a href="mailto:info@weddingwear.pk" className="text-[#EFD4C9] hover:text-white text-xl transition"><FaEnvelope /></a>
              <a href="tel:+923001234567" className="text-[#EFD4C9] hover:text-white text-xl transition"><FaPhoneAlt /></a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-[#EFD4C9]" />
        <p className="text-center text-sm text-[#EFD4C9]">
          © {new Date().getFullYear()} Wed & Wear. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;