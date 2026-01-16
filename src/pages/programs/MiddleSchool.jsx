import { motion } from "framer-motion";
import {
    FaBrain,
    FaChartLine,
    FaUsers,
    FaChalkboardTeacher,
} from "react-icons/fa";
import useSEO from "../../hooks/useSEO";
import Breadcrumb from "../../components/Breadcrumb";

export default function UpperPrimary() {
    useSEO({
        title: "Middle School (Grade 6–8) in Borkheda Kota | The Euro School",
        description:
            "The Middle School program (Grade 6–8) at The Euro School International, Borkheda Kota prepares students academically and emotionally for higher classes and future success.",
    });

    return (
        <>
            {/* ================= HERO ================= */}
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
                            Middle School <span className="text-yellow-300">(Grade 6 - 8)</span>
                        </h1>
                        <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
                            Preparing students academically and emotionally for higher classes.
                        </p>
                        <Breadcrumb
                            parent="Programs"
                            parentLink="/programs"
                            page="Middle School Grade (6 - 8)"
                        />
                    </motion.div>
                </div>
            </section>

            {/* ================= INTRO + STATS ================= */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-800">
                            Upper <span className="text-[#3F4196]">Primary Education</span>
                        </h2>

                        <p className="mt-5 text-gray-600 leading-relaxed">
                            Our Upper Primary program for Grades 6 to 8 is designed to help
                            students grow academically while also supporting their emotional
                            and social development during this crucial stage.
                        </p>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Students are guided to think critically, manage responsibilities
                            and develop the confidence required to face higher academic
                            challenges.
                        </p>
                    </motion.div>

                    {/* Right Stats */}
                    <motion.img
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        src="../images/programs/grade6.jpeg"
                        alt="Primary Classroom"
                        className="rounded-lg shadow-xl w-full"
                    />
                </div>
            </section>

            {/* ================= FOCUS AREAS ================= */}
            <section className="py-20 bg-[#EFF2FB]">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Key <span className="text-[#3F4196]">Focus Areas</span>
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            We prepare students to handle both academic pressure and personal
                            growth with confidence.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            {
                                title: "Critical Thinking",
                                icon: <FaBrain />,
                                desc: "Encouraging logical reasoning, analysis and independent thinking.",
                            },
                            {
                                title: "Academic Excellence",
                                icon: <FaChartLine />,
                                desc: "Strengthening subject knowledge and performance across subjects.",
                            },
                            {
                                title: "Teamwork & Leadership",
                                icon: <FaUsers />,
                                desc: "Developing collaboration, leadership and communication skills.",
                            },
                            {
                                title: "Teacher Mentorship",
                                icon: <FaChalkboardTeacher />,
                                desc: "Providing guidance, motivation and academic support to every student.",
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
                    “Middle school is where students discover their strengths and prepare
                    for their future.”
                </p>
            </section>
        </>
    );
}
