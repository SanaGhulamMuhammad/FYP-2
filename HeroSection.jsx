import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect, } from "react";
import { TypeAnimation } from "react-type-animation";
import heroImg1 from "../assets/bride-groom1.png";
import heroImg2 from "../assets/bride-groom2.png";
import heroImg3 from "../assets/bride-groom3.png";

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const imagePairs = [
    [heroImg1, heroImg2],
    [heroImg2, heroImg3],
    [heroImg3, heroImg1],
  ];

 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imagePairs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [imagePairs.length]);



  return (
    <div className="flex items-center justify-between px-10 py-20 bg-light relative overflow-hidden">
      {/* Left Side: Text & Buttons */}
      <div className="max-w-xl">
  <h1 className="text-5xl font-extrabold text-primary leading-tight mb-4">
    Where Dreams Meets Design
  </h1>
  <TypeAnimation
    sequence={[
      "Design Your Dream Dress",
      2000,
      "Customize Every Detail",
      2000,
      "Experience 3D Previews",
      2000,
    ]}
    wrapper="span"
    speed={50}
    className="text-2xl text-secondary font-normal block mb-6"
    repeat={Infinity}
  />
  <div className="mt-6 flex space-x-4">
  <button
            onClick={() => navigate("/customization")}
            className="px-6 py-3 text-white bg-primary rounded-lg hover:bg-opacity-90 transition"
          >
            Start Designing
          </button>
    
          <button
            onClick={() => navigate("/vendors")}
            className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition"
          >
            Explore Vendors
          </button>
  </div>
</div>

      {/* Right Side: Animated Floating Images with Glass Effect */}
      <motion.div 
        className="relative w-1/2 flex justify-center items-center space-x-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute w-[400px] h-[400px] bg-white bg-opacity-20 backdrop-blur-md rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {imagePairs[currentImage].map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Wedding Outfit ${index + 1}`}
            className={`w-64 h-auto rounded-[20%] transform ${
              index === 0 ? "rotate-2" : "-rotate-2"
            }`}
            animate={{
              y: index === 0 ? [-5, 5, -5] : [5, -5, 5],
              scale: [1, 1.02, 1],
              opacity: [0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.7,
            }}
            whileHover={{ scale: 1.05, rotate: index === 0 ? 3 : -3 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default HeroSection;
