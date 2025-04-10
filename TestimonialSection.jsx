import { motion } from "framer-motion";

const TestimonialsSection = () => {
  return (
    <div className="py-16 bg-[#EFD4D9]">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#831418]">What Our Customers Say</h2>
        <p className="mt-4 text-lg text-[#B17F6B]">Hear from couples who trusted us for their big day!</p>
      </div>

      <div className="flex justify-center gap-8 px-10">
        {/* Testimonial 1 */}
        <motion.div
          className="max-w-md bg-#B17F6B p-6 rounded-lg shadow-lg hover:bg-primary transition"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg italic text-[black]">"The design process was so easy and enjoyable! Our dress was exactly how we imagined it."</p>
          <p className="mt-4 font-bold text-[black]">Sarah & John</p>
        </motion.div>

        {/* Testimonial 2 */}
        <motion.div
          className="max-w-md bg-#B17F6B p-6 rounded-lg shadow-lg  hover:bg-primary transition"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg italic text-[black]">"We loved the 3D previews! It really helped us finalize the details of our outfits."</p>
          <p className="mt-4 font-bold text-[black]">Emily & Michael</p>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
