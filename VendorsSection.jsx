import { motion } from "framer-motion";
import { FaStore } from "react-icons/fa"; // Using FaStore icon for all cards

const VendorsSection = () => {
  return (
    <div className="py-20 bg-[#EFD4C9]">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#831418]">Our Trusted Tailors</h2>
        <p className="mt-4 text-lg text-[#B17F6B]">Find the best wedding tailors in Pakistan</p>
      </div>

      {/* Vendors List */}
      <div className="flex justify-center gap-16 px-10 flex-wrap">
        {/* Vendor 1 */}
        <motion.div
          className="text-center max-w-sm mx-4 p-6 bg-[#831418] text-white rounded-2xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          style={{ background: 'linear-gradient(135deg, #831418, black)' }}
        >
          <FaStore className="text-6xl mb-4" />
          <h3 className="text-2xl font-semibold">Zeenat's Couture</h3>
          <p className="mt-2 text-[#EFD4C9]">Elegant wedding dresses with custom designs and flawless stitching.</p>
          <div className="mt-4 flex justify-center gap-4">
            <button className="bg-[#B17F6B] text-white px-4 py-2 rounded-lg hover:bg-[black]">View Profile</button>
            <button className="bg-[#B17F6B] text-white px-4 py-2 rounded-lg hover:bg-[black]">Contact</button>
          </div>
        </motion.div>

        {/* Vendor 2 */}
        <motion.div
          className="text-center max-w-sm mx-4 p-6 bg-[#831418] text-white rounded-2xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          style={{ background: 'linear-gradient(135deg, #831418, black)' }}
        >
          <FaStore className="text-6xl mb-4" />
          <h3 className="text-2xl font-semibold">Nida's Stitch</h3>
          <p className="mt-2 text-[#EFD4C9]">Bridal gowns made to perfection with delicate craftsmanship.</p>
          <div className="mt-4 flex justify-center gap-4">
            <button className="bg-[#B17F6B] text-white px-4 py-2 rounded-lg hover:bg-[#831418]">View Profile</button>
            <button className="bg-[#B17F6B] text-white px-4 py-2 rounded-lg hover:bg-[#831418]">Contact</button>
          </div>
        </motion.div>

        {/* Vendor 3 */}
        <motion.div
          className="text-center max-w-sm mx-4 p-6 bg-[#831418] text-white rounded-2xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          style={{ background: 'linear-gradient(135deg, #831418, black)' }}
        >
          <FaStore className="text-6xl mb-4" />
          <h3 className="text-2xl font-semibold">Feroze Bridal</h3>
          <p className="mt-2 text-[#EFD4C9]">Unique, handcrafted wedding outfits that make your big day special.</p>
          <div className="mt-4 flex justify-center gap-4">
            <button className="bg-[#B17F6B] text-white px-4 py-2 rounded-lg hover:bg-[#831418]">View Profile</button>
            <button className="bg-[#B17F6B] text-white px-4 py-2 rounded-lg hover:bg-[#831418]">Contact</button>
          </div>
        </motion.div>

        {/* Vendor 4 */}
        <motion.div
          className="text-center max-w-sm mx-4 p-6 bg-[#831418] text-white rounded-2xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          style={{ background: 'linear-gradient(135deg, #831418, black)' }}
        >
          <FaStore className="text-6xl mb-4" />
          <h3 className="text-2xl font-semibold">Saniya Creations</h3>
          <p className="mt-2 text-[#EFD4C9]">Stunning bridal wear with fine detailing and premium fabric choices.</p>
          <div className="mt-4 flex justify-center gap-4">
            <button className="bg-[#B17F6B] text-white px-4 py-2 rounded-lg hover:bg-[#831418]">View Profile</button>
            <button className="bg-[#B17F6B] text-white px-4 py-2 rounded-lg hover:bg-[#831418]">Contact</button>
          </div>
        </motion.div>

        {/* Vendor 5 */}
        <motion.div
          className="text-center max-w-sm mx-4 p-6 bg-[#831418] text-white rounded-2xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          style={{ background: 'linear-gradient(135deg, #831418, black)' }}
        >
          <FaStore className="text-6xl mb-4" />
          <h3 className="text-2xl font-semibold">Kiran's Stitchery</h3>
          <p className="mt-2 text-[#EFD4C9]">Custom bridal dresses with a blend of traditional and modern styles.</p>
          <div className="mt-4 flex justify-center gap-4">
            <button className="bg-[#B17F6B] text-white px-4 py-2 rounded-lg hover:bg-[#831418]">View Profile</button>
            <button className="bg-[#B17F6B] text-white px-4 py-2 rounded-lg hover:bg-[#831418]">Contact</button>
          </div>
        </motion.div>

        {/* Vendor 6 */}
        <motion.div
          className="text-center max-w-sm mx-4 p-6 bg-[#831418] text-white rounded-2xl shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          style={{ background: 'linear-gradient(135deg, #831418, black)' }}
        >
          <FaStore className="text-6xl mb-4" />
          <h3 className="text-2xl font-semibold">Amina Couture</h3>
          <p className="mt-2 text-[#EFD4C9]">A blend of luxury and style in every stitch of your bridal dress.</p>
          <div className="mt-4 flex justify-center gap-4">
            <button className="bg-[#B17F6B] text-white px-4 py-2 rounded-lg hover:bg-[#831418]">View Profile</button>
            <button className="bg-[#B17F6B] text-white px-4 py-2 rounded-lg hover:bg-[#831418]">Contact</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VendorsSection;
