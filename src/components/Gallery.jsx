import { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const images = [
  "images/gallery/g1.webp",
  "images/gallery/g2.webp",
  "images/gallery/g3.webp",
  "images/gallery/g4.webp",
  "images/gallery/g5.webp",
  "images/gallery/g6.webp",
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            School <span className="text-[#3F4196]">Gallery</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A glimpse into our classrooms, activities and joyful learning moments.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer overflow-hidden shadow-md"
              onClick={() => setSelected(img)}
            >
              <img
                src={img}
                alt="School Gallery"
                className="w-full h-64 object-cover hover:scale-110 transition duration-300"
              />
            </motion.div>
          ))}
          <div className="mt-10 mx-auto col-span-full w-50">
            <Link to="/gallery" className="inline block bg-[#3F4196] text-white text-center font-semibold py-3 px-6 rounded-full hover:bg-[#35378C] transition w-full">
              View All Gallery →
            </Link>
          </div>
        </div>
      </div>
npm 
     {/* Popup / Lightbox */}
{selected && (
  <div
    className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
    onClick={() => setSelected(null)}
  >
    {/* Close Button */}
    <button
      onClick={() => setSelected(null)}
      className="absolute top-6 right-6 text-white text-3xl z-50"
    >
      <FaTimes />
    </button>

    {/* Image */}
    <motion.img
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      src={selected}
      alt="Preview"
      onClick={(e) => e.stopPropagation()}
      className="max-h-[85vh] shadow-2xl"
    />
  </div>
)}
    </section>
  );
}
