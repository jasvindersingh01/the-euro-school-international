import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaSchool,
  FaBrain,
  FaUsers,
  FaBookOpen,
  FaChild,
} from "react-icons/fa";

const points = [
  {
    title: "Trusted Educational Institution",
    desc: "A well-established school in Borkheda, Kota, trusted by parents for quality education and care.",
    icon: <FaSchool />,
  },
  {
    title: "Experienced & Caring Teachers",
    desc: "Highly qualified educators who create a supportive and nurturing learning environment.",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Child-Centric Learning Approach",
    desc: "A blend of play-based and structured learning that encourages curiosity and active participation.",
    icon: <FaChild />,
  },
  {
    title: "Strong Academic Foundation",
    desc: "Focus on language, numeracy and conceptual understanding aligned with global standards.",
    icon: <FaBookOpen />,
  },
  {
    title: "Holistic Development",
    desc: "Equal emphasis on academics, creativity, life skills and personality development.",
    icon: <FaBrain />,
  },
  {
    title: "Parent–School Partnership",
    desc: "Regular communication, meetings and involvement in school activities.",
    icon: <FaUsers />,
  },
];

export default function WhyChooseUs() {
  return (
    <>
<section className="relative bg-[#3F4196] overflow-hidden">
  
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-30"
    style={{
      backgroundImage:
        "url('images/trust.png')",
    }}
  />

  {/* Subtle Decorative Shapes (NO pink) */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400 rounded-full opacity-20" />
  <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-300 rounded-full opacity-20" />

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center text-white"
  >
    <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
      A School Parents <span className="text-yellow-300">Trust</span>
    </h2>

    <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-blue-100 leading-relaxed">
      At The Euro School International, we nurture excellence from early years
      to middle school through strong academics, values, and a supportive
      learning environment.
    </p>
  </motion.div>
</section>

    <section className="py-20 bg-[#FAF5FF]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800">
            Why <span className="text-[#3F4196]">Choose Us</span>
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-xl">
            We provide a safe, nurturing and academically strong environment
            where children grow with confidence from early years to middle school.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {points.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#e9d8fd] text-[#3F4196] text-xl shrink-0">
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Image */}
          <img
            src="images/why-choose.jpg"
            alt="School Environment"
            className="rounded-3xl shadow-xl w-full"
          />

          {/* Small Overlay Image */}
          <img
            src="images/why-choose2.jpg"
            alt="Student Activities"
            className="absolute -bottom-15 -right-8 w-65 rounded-2xl shadow-lg border-4 border-white hidden md:block"
          />

          {/* Decorative Shape */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-300 rounded-full opacity-20 -z-10" />
        </motion.div>

      </div>
    </section>
    </>
  );
}
