import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#3F4196] text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">

        {/* Logo & About */}
        <div>
          <img
            src="logo (2).jpg"
            alt="The Euro School International"
            className="h-20 mb-4 bg-white"
          />
          <p className="text-blue-100 text-sm leading-relaxed">
            The Euro School International is committed to providing quality
            education in a safe, supportive and inspiring learning environment
            from early years to middle school.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-yellow-300">
            Quick Links
          </h4>
          <ul className="space-y-3 text-blue-100">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-yellow-300">
            Our Programs
          </h4>
          <ul className="space-y-3 text-blue-100">
            <li>Pre-Primary</li>
            <li>Primary School</li>
            <li>Middle School (Up to Class 8)</li>
            <li>Academic Excellence</li>
            <li>Co-curricular Activities</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-yellow-300">
            Contact Us
          </h4>
          <ul className="space-y-4 text-blue-100 text-sm">
            <li className="flex gap-3 items-start">
              <FaMapMarkerAlt className="text-yellow-300 text-lg flex-shrink-0 mt-1" />
              <span>
                186, Baran Rd, Samridhi Nagar Royal,<br />
                Near Borkheda Police Station,<br />
                Kota, Rajasthan
              </span>
            </li>

            <li className="flex gap-3 items-center">
              <FaPhoneAlt className="text-yellow-300 text-lg flex-shrink-0" />
              <a href="tel:80033 92221" className="hover:text-white">
                +91 80033 92221
              </a>
            </li>

            <li className="flex gap-3 items-center">
              <FaEnvelope className="text-yellow-300 text-lg flex-shrink-0" />
              <a href="mailto:eurokidsbaranroadkota@gmail.com" className="hover:text-white">
                eurokidsbaranroadkota@gmail.com
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="https://www.facebook.com/THEEUROSCHOOL/" target="_blank" className="bg-white/10 p-3 rounded-full hover:bg-yellow-300 hover:text-[#3F4196] transition">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/eurokids_baran_road_kota?igsh=M2xhbWR2cXdoOWg2" target="_blank" className="bg-white/10 p-3 rounded-full hover:bg-yellow-300 hover:text-[#3F4196] transition">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@eurokidsbaranroadkota" target="_blank" className="bg-white/10 p-3 rounded-full hover:bg-yellow-300 hover:text-[#3F4196] transition">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-5 text-center text-sm text-blue-100">
        © {new Date().getFullYear()} The Euro School International.
        All Rights Reserved.
        <span className="mx-2 hidden sm:inline">|</span>
        <span className="block sm:inline mt-1 sm:mt-0">
          Designed & Developed by{" "}
          <a
            href="https://rightadsdigital.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 font-semibold transition"
          >
            Right Ads
          </a>
        </span>
      </div>
    </footer>
  );
}
