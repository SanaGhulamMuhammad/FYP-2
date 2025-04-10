import { motion } from "framer-motion";
import { FaTshirt, FaCube, FaShareAlt } from "react-icons/fa"; // Updated icons for a professional look

const FeaturesSection = () => {
  return (
    
    <div className="py-6 bg-[#EFD4C9]">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#831418]">Why Choose Us?</h2>
        <p className="mt-4 text-lg text-[#B17F6B]">Discover our exclusive features for creating your dream wedding attire!</p>
      </div>

      {/* Feature Icons Container */}
      <div className="flex justify-center gap-16 px-10 flex-wrap">
        {/* Feature 1: Customizable Designs */}
        <motion.div
          className="text-center max-w-sm mx-4 p-6 bg-[#831418] text-white rounded-2xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          style={{ background: 'linear-gradient(135deg, #831418, black)' }}
        >
          <FaTshirt className="text-6xl mb-4" />
          <h3 className="text-2xl font-semibold">Customizable Designs</h3>
          <p className="mt-2 text-[#EFD4C9]">Choose fabrics, colors, and embellishments to design your perfect wedding dress.</p>
        </motion.div>

        {/* Feature 2: 3D Dress Preview */}
        <motion.div
          className="text-center max-w-sm mx-4 p-6 bg-[#831418] text-white rounded-2xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          style={{ background: 'linear-gradient(135deg, #831418, black)' }}
        >
          <FaCube className="text-6xl mb-4" />
          <h3 className="text-2xl font-semibold">3D Dress Preview</h3>
          <p className="mt-2 text-[#EFD4C9]">Visualize your dress in 3D to get the perfect look before finalizing your design.</p>
        </motion.div>

        {/* Feature 3: Save & Share Your Design */}
        <motion.div
          className="text-center max-w-sm mx-4 p-6 bg-[#831418] text-white rounded-2xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          style={{ background: 'linear-gradient(135deg, #831418, black)' }}
        >
          <FaShareAlt className="text-6xl mb-4" />
          <h3 className="text-2xl font-semibold">Save & Share Your Design</h3>
          <p className="mt-2 text-[#EFD4C9]">Save your creations and easily share them with friends or vendors for stitching.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesSection;
