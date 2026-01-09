import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="images/about.jpg"
            alt="Euro School Borkheda Kota"
            className="rounded-3xl shadow-xl w-full"
          />

          {/* Decorative Shape */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-300 rounded-full opacity-20 -z-10" />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800">
            Welcome to <span className="text-[#3F4196]">Euro School</span>
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Euro School in Borkheda, Kota-Rajasthan is a trusted educational
            institution committed to nurturing young minds in a safe,
            supportive and inspiring learning environment.
          </p>

          <p className="mt-4 text-gray-600">
            From early years to middle school, we focus on academic excellence,
            creativity, values and overall personality development through a
            child-centric approach.
          </p>

          {/* Highlights */}
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-[#3F4196] font-bold">✔</span>
              <p className="text-gray-600">Experienced & caring educators</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#3F4196] font-bold">✔</span>
              <p className="text-gray-600">Strong academic foundation</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#3F4196] font-bold">✔</span>
              <p className="text-gray-600">Holistic child development</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#3F4196] font-bold">✔</span>
              <p className="text-gray-600">Safe & nurturing environment</p>
            </div>
          </div>

          {/* Read More Button */}
          <div className="mt-8">
            <Link
              to="/about"
              className="inline-block bg-[#3F4196] text-white px-7 py-3 rounded-full font-medium hover:bg-[#4f52c2] transition"
            >
              Read More →
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
