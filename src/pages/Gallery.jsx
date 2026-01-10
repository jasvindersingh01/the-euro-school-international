import { motion } from "framer-motion";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import useSEO from "../hooks/useSEO";

const images = [
  "images/gallery/g1.webp",
  "images/gallery/g2.webp",
  "images/gallery/g3.webp",
  "images/gallery/g4.webp",
  "images/gallery/g5.webp",
  "images/gallery/g6.webp",
  "images/gallery/g7.webp",
  "images/gallery/g8.webp",
  "images/gallery/g9.webp",
  "images/gallery/g10.webp",
  "images/gallery/g11.webp",
  "images/gallery/g12.webp",
  "images/gallery/g13.webp",
  "images/gallery/g14.webp",
  "images/gallery/g15.webp"
];

export default function GallerySection() {
  const [active, setActive] = useState(null);

  useSEO({
  title: "School Gallery | The Euro School International Borkheda Kota",
  description:
    "Explore our school gallery showcasing classrooms, activities, events and campus life at The Euro School International in Borkheda, Kota."
});

  return (
    <>
      <section className="relative h-[300px] md:h-[360px]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('images/aboutbanner.webp')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#3F4196]/75" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            School <span className="text-yellow-300">Gallery</span>
          </h1>

          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Explore moments from our classrooms, activities and campus life.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-[#EFF2FB]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-800">
            School <span className="text-[#3F4196]">Gallery</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into our classrooms, activities and learning environment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden shadow-md cursor-pointer group"
              onClick={() => setActive(img)}
            >
              <img
                src={img}
                alt="Euro School Gallery"
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#3F4196]/20 opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setActive(null)}
          >
            <FaTimes />
          </button>

          <img
            src={active}
            alt="Preview"
            className="max-h-[85vh] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
    </>
  );
}
