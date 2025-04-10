import React from "react";
import { NavLink ,useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // Add your logo image here

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-[#831418] shadow-lg sticky top-0 z-10">
      {/* Decorative Curved Bottom Shape */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-[#B17F6B] rounded-tl-full rounded-tr-full"></div>

      <div className="max-w-screen-xl mx-auto px-6 py-12 flex justify-between items-center">
        {/* Left: Logo + Wedding Wear Text (Adjusted with left margin) */}
        <div className="flex items-center space-x-4 absolute left-6">  {/* Added left margin here */}
          <img src={logo} alt="Wedding Logo" className="h-16 w-16 rounded-full" /> {/* Increased logo size */}
          <h1 className="text-[#EFD4C9] text-4xl font-extrabold italic tracking-wide leading-tight">
            Wed & Wear
          </h1>
        </div>

        {/* Center: Navigation Links */}
        <nav className="space-x-8 hidden sm:flex justify-center flex-1">
          {["Home", "Customization", "Vendors", "Chatbot"].map((link, index) => (
            <NavLink
              key={index}
              to={`/${link.toLowerCase()}`} // Dynamic route
              className="text-xl font-semibold text-[#EFD4C9] hover:text-[#B17F6B] hover:scale-110 transition-transform duration-300"
            >
              {link}
            </NavLink>
          ))}
        </nav>

        {/* Right: Login & Signup Buttons (with margin) */}
        <div className="space-x-6 absolute right-6"> {/* Added right margin here */}
        <button
            onClick={() => navigate("/login")}
            className="px-6 py-3 bg-light text-primary font-semibold rounded-lg shadow-md hover:bg-secondary hover:text-white transition"
          >
            Login
          </button>
  
          <button
            onClick={() => navigate("/signup")}
            className="px-6 py-3 border border-light text-light font-semibold rounded-lg hover:bg-light hover:text-primary transition"
          >
            Signup
          </button>
 
        </div>
      </div>
    </header>
  );
};

export default Navbar;
