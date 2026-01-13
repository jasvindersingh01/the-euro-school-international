import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-[#F3E8FF] py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-gray-800 leading-tight ">
            Learning Through <br />
            <span className="text-[#3F4196]">Play & Happiness</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            A joyful preschool experience where children grow with creativity,
            confidence and care.
          </p>

          <div className="mt-10 flex gap-5 flex-wrap">
            <a
              href="tel:8003392221"
              className="bg-[#3F4196] text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#4f52c2] transition"
            >
              <FaPhoneAlt /> Call Now
            </a>

            <a
              href="https://wa.me/918003392221"
              target="_blank"
              className="border-2 border-[#3F4196] text-[#3F4196] px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#3F4196] hover:text-white transition"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </motion.div>

        {/* IMAGES */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-6">
            <img src="images/kid1.png" className="rounded-3xl shadow-lg" />
            <img src="images/kid2.jpg" className="rounded-3xl shadow-lg mt-10" />
            <img src="images/kid3.webp" className="rounded-3xl shadow-lg" />
            <img src="images/kid4.webp" className="rounded-3xl shadow-lg mt-10" />
          </div>

          <div className="absolute -top-12 -right-12 w-40 h-40 bg-pink-300 rounded-full opacity-20 -z-10" />
          <div className="absolute bottom-0 -left-12 w-32 h-32 bg-blue-300 rounded-full opacity-20 -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
