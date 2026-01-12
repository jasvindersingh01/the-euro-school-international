import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaBrain,
  FaUsers,
  FaAward,
} from "react-icons/fa";
import useSEO from "../hooks/useSEO";
import Breadcrumb from "../components/Breadcrumb";

export default function Academics() {
  useSEO({
    title: "Academics | The Euro School International Borkheda Kota",
    description:
      "Explore the academic approach of The Euro School International in Borkheda, Kota. Learn about our curriculum, teaching methodology, assessments and academic excellence.",
  });

  return (
    <>
      {/* ================= HERO ================= */}
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
              Academics at <span className="text-yellow-300">The Euro School</span>
            </h1>
            <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
              Building strong foundations through quality teaching, structured
          curriculum and a supportive learning environment.
            </p>
            <Breadcrumb
              parent="Academics"
              parentLink="/academics"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= ACADEMIC PHILOSOPHY ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800">
              Our <span className="text-[#3F4196]">Academic Philosophy</span>
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              At The Euro School International, we believe that every child is
              unique and learns best when taught in a supportive, engaging and
              structured environment. Our academic approach focuses on
              understanding concepts rather than rote learning.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We encourage curiosity, creativity and critical thinking so that
              students develop a strong foundation for lifelong learning.
            </p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            src="images/academics.jpg"
            alt="Academic Environment"
            className="rounded-3xl shadow-xl w-full"
          />
        </div>
      </section>

      {/* ================= CURRICULUM ================= */}
      <section className="py-20 bg-[#EFF2FB]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Our <span className="text-[#3F4196]">Curriculum</span>
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our curriculum is designed to build strong academic foundations and
            support holistic development across all age groups.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "English Language", icon: <FaBookOpen /> },
              { title: "Mathematics", icon: <FaBrain /> },
              { title: "Science", icon: <FaChalkboardTeacher /> },
              { title: "Social Studies", icon: <FaUsers /> },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#3F4196]/10 text-[#3F4196] flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-gray-800">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ASSESSMENT & EXCELLENCE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Assessment & <span className="text-[#3F4196]">Academic Excellence</span>
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              We follow a continuous assessment system that focuses on tracking
              student progress, understanding and skill development rather than
              just exam scores.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Regular evaluations, assignments and teacher feedback help
              students improve and reach their full potential.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {[
              { value: "Regular", label: "Assessments", icon: <FaClipboardCheck /> },
              { value: "Strong", label: "Academic Standards", icon: <FaAward /> },
              { value: "Focused", label: "Student Progress", icon: <FaBrain /> },
              { value: "Supportive", label: "Faculty Guidance", icon: <FaUsers /> },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-[#EFF2FB] rounded-2xl p-8 text-center shadow"
              >
                <div className="text-2xl text-[#3F4196] mb-2">{stat.icon}</div>
                <h3 className="text-xl font-bold text-[#3F4196]">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUOTE ================= */}
      <section className="py-16 bg-[#3F4196] text-center text-white relative overflow-hidden">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/10 rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full" />

        <p className="relative z-10 text-xl md:text-2xl font-medium max-w-3xl mx-auto px-6">
          “Strong academics create confident learners and a successful future.”
        </p>
      </section>
    </>
  );
}
