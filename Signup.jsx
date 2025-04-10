import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import { FaUser, FaEnvelope, FaLock, FaGoogle } from "react-icons/fa"; // Import icons

const Signup = () => {
  // Google OAuth URL (replace with your actual OAuth URL for your app)
  const googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth";  // Example Google OAuth link

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Side Text */}
      <div className="w-1/2 bg-gradient-to-br from-[#831418] to-black text-white flex flex-col justify-center items-center p-10">
        <h1 className="text-6xl font-bold mb-4">Hello, Friend!</h1>
        <p className="text-xl text-center max-w-md">
          Enter your personal details and start your journey with us.
        </p>
      </div>

      {/* Right Side Form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-semibold mb-6 text-gray-700">Create Account</h2>
          <form className="space-y-6">
            {/* Full Name */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 pr-10 pl-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#831418] focus:border-transparent"
              />
              <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            {/* Email */}
            <div className="relative mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 pr-10 pl-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#831418] focus:border-transparent"
              />
              <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            {/* Password */}
            <div className="relative mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 pr-10 pl-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#831418] focus:border-transparent"
              />
              <FaLock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            {/* Confirm Password */}
            <div className="relative mb-4">
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-4 pr-10 pl-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#831418] focus:border-transparent"
              />
              <FaLock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm">
                <p className="text-gray-500">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-600 hover:underline">
                    Login
                  </Link>
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#831418] text-white py-3 rounded-lg font-semibold hover:bg-black transition duration-300"
            >
              Sign Up
            </button>

            {/* Social Registration Text */}
            <div className="mt-4 text-center text-gray-500">
              <p>or register with a social platform</p>
            </div>

            {/* Google "Continue with Google" Button */}
            <a
              href={googleAuthUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center bg-[#0000FF] text-white py-3 rounded-lg font-semibold hover:bg-[#c1351d] mt-4 transition duration-300"
            >
              <FaGoogle size={24} className="mr-3" /> {/* Google icon */}
              <span>Continue with Google</span>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
