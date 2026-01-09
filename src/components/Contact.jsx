import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

export default function ContactBanner() {
  return (
    <section className="relative w-full h-[560px] md:h-[460px] overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('images/designbanner.png')",
        }}
      />

      {/* Overlay – matches logo blue */}
      <div className="absolute inset-0 bg-[#3F4196]/75" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white max-w-4xl"
          >
            Nurturing Excellence,  
            <span className="text-yellow-300"> Inspiring Futures</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-5 text-lg text-blue-100 max-w-2xl"
          >
            At The Euro School International, we provide a safe, inspiring and
            academically strong environment where students grow with confidence,
            values and global perspective.
          </motion.p>

          {/* Contact Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            {/* Phone */}
            <div className="flex items-center gap-3 text-white text-lg font-semibold">
              <FaPhoneAlt className="text-yellow-300" />
              <a href="tel:8003392221" className="hover:underline">
                +91 80033 92221
              </a>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-8 bg-white/30" />

            {/* CTA Button */}
            <Link
              to="/contact"
              className="inline-block bg-white text-[#3F4196] px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition"
            >
              Contact Us
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
