import { motion } from "framer-motion";
import {
    FaBookReader,
    FaCalculator,
    FaComments,
    FaUserGraduate,
} from "react-icons/fa";
import useSEO from "../../hooks/useSEO";

export default function Primary() {
    // SEO
    useSEO({
        title: "Primary School (Grade 1–2) in Borkheda Kota | The Euro School",
        description:
            "The Primary School program (Grade 1–2) at The Euro School International, Borkheda Kota focuses on building strong foundations in literacy, numeracy and confidence.",
    });

    return (
        <>
            {/* ================= PAGE BANNER ================= */}
            <section className="relative h-[300px] md:h-[360px] overflow-hidden">
                <div className="absolute inset-0 bg-[#3F4196]" />
                <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            Primary School <span className="text-yellow-300">(Grade 1 – 2)</span>
                        </h1>
                        <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
                            Building strong basics in literacy, numeracy and confidence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ================= INTRO SECTION ================= */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-col-2 gap-16 item-center">
                    <motion.img
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        src="../images/programs/primary.png"
                        alt="Pre Primary Classroom"
                        className="rounded-lg shadow-xl w-full"
                    />

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-gray-800"
                    >
                        Early <span className="text-[#3F4196]">Primary Education</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="mt-6 text-gray-600 leading-relaxed"
                    >
                        Our Primary School program for Grade 1 and 2 focuses on strengthening
                        core academic skills while nurturing confidence, curiosity and a
                        positive attitude towards learning.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mt-4 text-gray-600 leading-relaxed"
                    >
                        Students are encouraged to think independently, communicate clearly
                        and develop a strong foundation that prepares them for higher grades.
                    </motion.p>
                </div>
            </section>

            {/* ================= KEY LEARNING AREAS ================= */}
            <section className="py-20 bg-[#EFF2FB]">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Key <span className="text-[#3F4196]">Learning Areas</span>
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Our Primary curriculum focuses on essential academic and personal
                            skills required during the early school years.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            {
                                title: "Literacy Development",
                                icon: <FaBookReader />,
                                desc: "Strengthening reading, writing, vocabulary and comprehension skills.",
                            },
                            {
                                title: "Numeracy Skills",
                                icon: <FaCalculator />,
                                desc: "Building a strong understanding of numbers, operations and logical thinking.",
                            },
                            {
                                title: "Communication Skills",
                                icon: <FaComments />,
                                desc: "Encouraging clear expression, listening skills and classroom participation.",
                            },
                            {
                                title: "Confidence & Independence",
                                icon: <FaUserGraduate />,
                                desc: "Helping students become confident, responsible and self-motivated learners.",
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
                                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#3F4196]/10 text-[#3F4196] flex items-center justify-center text-2xl group-hover:bg-[#3F4196] group-hover:text-white transition">
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

            {/* ================= QUOTE STRIP ================= */}
            <section className="py-16 bg-[#3F4196] text-center text-white relative overflow-hidden">
                <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/10 rounded-full" />
                <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full" />

                <p className="relative z-10 text-xl md:text-2xl font-medium max-w-3xl mx-auto px-6">
                    “Strong foundations in the early years lead to confident and capable
                    learners in the future.”
                </p>
            </section>
        </>
    );
}
