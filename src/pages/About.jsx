import { motion } from "framer-motion";
import {
    FaBullseye, FaEye, FaChalkboardTeacher,
    FaBookOpen,
    FaShieldAlt,
    FaBrain,
} from "react-icons/fa";
import useSEO from "../hooks/useSEO";

export default function About() {
    useSEO({
  title: "About The Euro School International | Borkheda Kota",
  description:
    "Learn about The Euro School International in Borkheda, Kota – our vision, mission, teaching approach and commitment to nurturing confident and capable learners."
});

    return (
        <>
            {/* ================= HERO / PAGE BANNER ================= */}
            <section className="relative h-[380px] md:h-[420px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('images/aboutbanner.webp')" }}
                />
                <div className="absolute inset-0 bg-[#3F4196]/75" />

                <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-6 text-white">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold"
                        >
                            About <span className="text-yellow-300">The Euro School International</span>
                        </motion.h1>
                        <p className="mt-4 text-lg text-blue-100 max-w-2xl">
                            A trusted institution committed to academic excellence, values and
                            holistic development from early years to middle school.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= ABOUT SCHOOL ================= */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                    {/* Image */}
                    <motion.img
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        src="images/about.jpg"
                        alt="About Euro School"
                        className="rounded-3xl shadow-xl w-full"
                    />

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-800">
                            <span className="underline underline-offset-8 decoration-[#3F4196]">
                                About
                            </span>{" "} Our <span className="text-[#3F4196]">School</span>
                        </h2>

                        <p className="mt-5 text-gray-600 leading-relaxed">
                            The Euro School International is a well-established educational institution
                            located in Borkheda, Kota, Rajasthan, dedicated to delivering quality education
                            in a safe, structured and nurturing environment. Our school is committed to
                            creating a positive learning atmosphere where every student feels valued,
                            respected and encouraged to achieve their full potential.
                        </p>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            We believe that education goes beyond textbooks. Along with strong academic
                            instruction, we focus on developing discipline, confidence, creativity and
                            ethical values in our students. Our teaching approach promotes curiosity,
                            critical thinking and active participation, enabling students to become
                            independent learners.
                        </p>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            At The Euro School International, equal emphasis is placed on academic
                            excellence, character building and life skills. Through a balanced curriculum
                            and a supportive school culture, we prepare students from early years to
                            middle school to face future academic and personal challenges with confidence
                            and responsibility.
                        </p>

                    </motion.div>

                </div>
            </section>

            {/* ================= MISSION & VISION ================= */}
            <section className="py-20 bg-[#EFF2FB]">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Section Heading */}
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Our <span className="text-[#3F4196]">Purpose & Direction</span>
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Guided by strong values and a clear vision, we are committed to shaping
                            confident, responsible and capable learners.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">

                        {/* Mission */}
                        <div className="relative bg-white rounded-3xl p-10 shadow-md hover:shadow-xl transition">

                            {/* Icon */}
                            <div className="absolute -top-8 left-8 w-16 h-16 rounded-full bg-[#3F4196] text-white flex items-center justify-center text-2xl shadow-lg">
                                <FaBullseye />
                            </div>

                            <h3 className="text-2xl font-bold text-[#3F4196] mt-6 mb-4">
                                Our Mission
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                Our mission is to provide quality education that nurtures academic
                                excellence, creativity, discipline and confidence in every student.
                            </p>

                            <p className="mt-3 text-gray-600 leading-relaxed">
                                We strive to create a supportive learning environment that encourages
                                curiosity, critical thinking and ethical values, empowering students
                                to grow into responsible and capable global citizens.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="relative bg-white rounded-3xl p-10 shadow-md hover:shadow-xl transition">

                            {/* Icon */}
                            <div className="absolute -top-8 left-8 w-16 h-16 rounded-full bg-[#3F4196] text-white flex items-center justify-center text-2xl shadow-lg">
                                <FaEye />
                            </div>

                            <h3 className="text-2xl font-bold text-[#3F4196] mt-6 mb-4">
                                Our Vision
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                Our vision is to be a leading educational institution recognized for
                                innovation, integrity and excellence in education.
                            </p>

                            <p className="mt-3 text-gray-600 leading-relaxed">
                                We aim to shape young minds for lifelong learning by fostering strong
                                values, leadership skills and a global perspective that prepares
                                students for future academic and life challenges.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* ================= WHY EURO SCHOOL ================= */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Why Choose <span className="text-[#3F4196]">Euro School</span>
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            We are committed to providing a balanced education that focuses on
                            academic excellence, values and overall development.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

                        {/* Card 1 */}
                        <div className="group bg-[#EFF2FB] rounded-3xl p-8 text-center hover:bg-white hover:shadow-lg transition">
                            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#3F4196] text-white flex items-center justify-center text-2xl">
                                <FaChalkboardTeacher />
                            </div>
                            <h4 className="font-semibold text-lg text-gray-800">
                                Experienced Faculty
                            </h4>
                            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                Highly qualified and dedicated teachers who guide students with care,
                                discipline and individual attention.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="group bg-[#EFF2FB] rounded-3xl p-8 text-center hover:bg-white hover:shadow-lg transition">
                            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#3F4196] text-white flex items-center justify-center text-2xl">
                                <FaBookOpen />
                            </div>
                            <h4 className="font-semibold text-lg text-gray-800">
                                Strong Academics
                            </h4>
                            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                A well-structured curriculum designed to build strong foundations and
                                encourage critical thinking.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="group bg-[#EFF2FB] rounded-3xl p-8 text-center hover:bg-white hover:shadow-lg transition">
                            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#3F4196] text-white flex items-center justify-center text-2xl">
                                <FaShieldAlt />
                            </div>
                            <h4 className="font-semibold text-lg text-gray-800">
                                Safe Environment
                            </h4>
                            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                A secure, disciplined and nurturing campus where students feel safe,
                                respected and confident.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="group bg-[#EFF2FB] rounded-3xl p-8 text-center hover:bg-white hover:shadow-lg transition">
                            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#3F4196] text-white flex items-center justify-center text-2xl">
                                <FaBrain />
                            </div>
                            <h4 className="font-semibold text-lg text-gray-800">
                                Holistic Development
                            </h4>
                            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                Equal focus on academics, creativity, life skills and character
                                building for overall growth.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= INFRASTRUCTURE ================= */}
            <section className="py-20 bg-[#353781] text-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-3xl font-bold">
                            Infrastructure & Learning{" "}
                            <span className="text-yellow-300">Environment</span>
                        </h2>

                        <p className="mt-5 text-blue-100 leading-relaxed">
                            Our campus offers modern classrooms, activity areas and a safe
                            learning environment that supports both academic and co-curricular
                            growth.
                        </p>

                        <p className="mt-4 text-blue-100 leading-relaxed">
                            We ensure a clean, secure and child-friendly infrastructure to
                            promote effective learning.
                        </p>
                    </div>

                    <img
                        src="images/infrastructure.jpg"
                        alt="School Infrastructure"
                        className="rounded-2xl shadow-xl"
                    />
                </div>
            </section>

        </>
    );
}
