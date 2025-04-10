import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import { FaEnvelope, FaLock } from "react-icons/fa"; // Import icons

const Login = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Side Text */}
      <div className="w-1/2 bg-gradient-to-br from-[#831418] to-black text-white flex flex-col justify-center items-center p-10">
        <h1 className="text-5xl font-bold mb-4">Welcome Back!</h1>
        <p className="text-lg text-center max-w-md">
          To keep connected with us, please login with your personal info.
        </p>
      </div>

      {/* Right Side Form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-semibold mb-6 text-gray-700">Login</h2>
          <form className="space-y-6">
            {/* Email */}
            <div className="relative mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 pr-10 pl-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#831418] focus:border-transparent"
              />
              <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" /> {/* Icon inside the input */}
            </div>

            {/* Password */}
            <div className="relative mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 pr-10 pl-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#831418] focus:border-transparent"
              />
              <FaLock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" /> {/* Icon inside the input */}
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm">
                <p className="text-gray-500">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-blue-600 hover:underline">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#831418] text-white py-3 rounded-lg font-semibold hover:bg-black transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


