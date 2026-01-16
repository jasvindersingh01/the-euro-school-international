import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaPuzzlePiece,
  FaBook,
  FaGlobe,
} from "react-icons/fa";
import useSEO from "../../hooks/useSEO";
import Breadcrumb from "../../components/Breadcrumb";

export default function MiddleSchool() {
  useSEO({
    title: "Primary School (Grade 3–5) in Borkheda Kota | The Euro School",
    description:
      "The Primary School (Grade 3–5) program at The Euro School International in Borkheda, Kota encourages independent thinking, problem solving and curiosity through structured learning.",
  });

  return (
    <>
      {/* ================= BANNER ================= */}
      <section className="relative h-[300px] md:h-[360px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('../images/aboutus2.jpg')",
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
              Primary School <span className="text-yellow-300">(Grade 3 - 5 )</span>
            </h1>
            <p className="mt-4 text-lg text-blue-100 max-w-2xl">
              Encouraging independent thinking, problem solving and curiosity.
            </p>
            <Breadcrumb
              parent="Programs"
              parentLink="/programs"
              page="Primary (Grade 3-5)"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl font-bold text-gray-800">
              Middle <span className="text-[#3F4196]">Primary Education</span>
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              The Middle Primary program for Grades 3 to 5 is designed to
              strengthen academic understanding while developing independent
              thinking and curiosity. Students begin to explore concepts in
              greater depth across subjects.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our approach encourages students to ask questions, solve problems
              and take responsibility for their learning, preparing them for
              higher academic challenges.
            </p>
          </motion.div>

          {/* Image */}
          <motion.img
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            src="../images/programs/grade3.jpg"
            alt="Middle Primary Students"
            className="rounded-3xl shadow-xl w-full"
          />
        </div>
      </section>

      {/* ================= SKILLS GRID ================= */}
      <section className="py-20 bg-[#EFF2FB]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-800">
              Key <span className="text-[#3F4196]">Focus Areas</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our curriculum helps students grow academically while developing
              essential life skills.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Critical Thinking",
                icon: <FaLightbulb />,
                desc: "Encouraging students to think independently and analyze information.",
              },
              {
                title: "Problem Solving",
                icon: <FaPuzzlePiece />,
                desc: "Developing logical reasoning and practical problem-solving skills.",
              },
              {
                title: "Strong Academics",
                icon: <FaBook />,
                desc: "Building deeper understanding in core subjects like Maths and English.",
              },
              {
                title: "Global Awareness",
                icon: <FaGlobe />,
                desc: "Introducing students to the world beyond textbooks and classrooms.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition text-center"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-yellow-300 text-[#3F4196] flex items-center justify-center text-2xl group-hover:bg-[#3F4196] group-hover:text-yellow-300 transition">
                  {item.icon}
                </div>

                <h4 className="font-semibold text-gray-800 text-lg">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUOTE ================= */}
      <section className="py-16 bg-[#3F4196] text-center text-white relative overflow-hidden">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/10 rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full" />

        <p className="relative z-10 text-xl md:text-2xl font-medium max-w-3xl mx-auto px-6">
          “Curiosity and critical thinking are the foundation of lifelong
          learning.”
        </p>
      </section>
    </>
  );
}
