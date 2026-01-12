import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import useSEO from "../hooks/useSEO";
import Breadcrumb from "../components/Breadcrumb";

export default function Contact() {

  useSEO({
    title: "Contact The Euro School International | Borkheda Kota",
    description:
      "Contact The Euro School International in Borkheda, Kota for admissions, inquiries and school information. We are happy to assist parents and students."
  });

  return (
    <>
      {/* ================= CONTACT BANNER ================= */}
      <section className="relative h-[300px] md:h-[360px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('images/aboutbanner.webp')",
          }}
        />
        <div className="absolute inset-0 bg-[#3F4196]/75" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Contact <span className="text-yellow-300">Us</span>
            </h1>
            <p className="mt-4 text-lg text-blue-100 max-w-2xl">
              We are always happy to connect with parents and guide you on your
              child’s educational journey.
            </p>
            <Breadcrumb
              parent="Contact"
              parentLink="/contact"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT DETAILS ================= */}
      <section className="py-20 bg-[#EFF2FB]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {/* Address */}
          <div className="bg-white rounded-3xl p-8 shadow-md text-center hover:shadow-lg transition">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#3F4196] text-white flex items-center justify-center text-xl">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Our Address
            </h3>
            <p className="text-gray-600 leading-relaxed">
              186, Baran Rd, Samridhi Nagar Royal, <br />
              Near Borkheda Police Station, <br />
              Kota, Rajasthan
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-3xl p-8 shadow-md text-center hover:shadow-lg transition">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#3F4196] text-white flex items-center justify-center text-xl">
              <FaPhoneAlt />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Call Us
            </h3>
            <a
              href="tel:8003392221"
              className="text-gray-600 hover:text-[#3F4196]"
            >
              +91 80033 92221
            </a>
          </div>

          {/* Email */}
          <div className="bg-white rounded-3xl p-8 shadow-md text-center hover:shadow-lg transition">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#3F4196] text-white flex items-center justify-center text-xl">
              <FaEnvelope />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Email Us
            </h3>
            <a
              href="mailto:eurokidsbaranroadkota@gmail.com"
              className="text-gray-600 hover:text-[#3F4196]"
            >
              eurokidsbaranroadkota@gmail.com
            </a>
          </div>

        </div>
      </section>

      {/* ================= QUOTE STRIP ================= */}
      <section className="py-16 bg-[#3F4196] text-center text-white relative overflow-hidden">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/10 rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full" />

        <p className="relative z-10 text-xl md:text-2xl font-medium max-w-3xl mx-auto px-6">
          “Every child deserves a nurturing environment where learning feels
          joyful, safe and inspiring.”
        </p>
      </section>

      {/* ================= SOCIAL MEDIA ================= */}
      <section className="py-16 bg-white text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Connect With <span className="text-[#3F4196]">Us</span>
        </h3>

        <div className="flex justify-center gap-6">
          <a href="https://www.facebook.com/THEEUROSCHOOL/" target="_blank" className="w-14 h-14 rounded-full bg-[#3F4196] text-white flex items-center justify-center text-xl hover:bg-yellow-300 hover:text-[#3F4196] transition">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/eurokids_baran_road_kota?igsh=M2xhbWR2cXdoOWg2" target="_blank" className="w-14 h-14 rounded-full bg-[#3F4196] text-white flex items-center justify-center text-xl hover:bg-yellow-300 hover:text-[#3F4196] transition">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@eurokidsbaranroadkota" target="_blank" className="w-14 h-14 rounded-full bg-[#3F4196] text-white flex items-center justify-center text-xl hover:bg-yellow-300 hover:text-[#3F4196] transition">
            <FaYoutube />
          </a>
        </div>
      </section>

      {/* ================= GOOGLE MAP ================= */}
      <section className="h-[420px]">
        <iframe
          title="School Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.4539759268073!2d75.88762597521115!3d25.18790847771693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f9bbe7d57a773%3A0x90ae7b5dadc4adf5!2sEUROKIDS%20PRE-SCHOOL%20%7C%20THE%20EURO%20SCHOOL%20Baran%20Road%20KOTA%20%7C%20BEST%20SCHOOL%20IN%20KOTA%2C%20BEST%20PLAY%20SCHOOL%20IN%20BORKHEDA!5e0!3m2!1sen!2sin!4v1767779184465!5m2!1sen!2sin"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </section>
    </>
  );
}
