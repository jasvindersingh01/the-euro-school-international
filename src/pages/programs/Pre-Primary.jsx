import { motion } from "framer-motion";
import useSEO from "../../hooks/useSEO";
import {
    FaLanguage,
    FaCalculator,
    FaPaintBrush,
    FaSmile,
} from "react-icons/fa";


export default function PrePrimary() {

    useSEO({
        title: "Pre-Primary School in Borkheda Kota | Euro Preschool",
        description:
            "Euro Preschool in Borkheda, Kota offers a nurturing Pre-Primary program focused on play-based learning, creativity and early development.",
    });

    return (
        <>
            {/* ================= PAGE BANNER ================= */}
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
                            Pre-Primary <span className="text-yellow-300">Program</span>
                        </h1>
                        <p className="mt-4 text-lg text-blue-100 max-w-2xl">
                            A joyful and nurturing beginning to your child’s learning journey.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ================= INTRO SECTION ================= */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                    {/* Image */}
                    <motion.img
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        src="../images/programs/preprimary.jpg"
                        alt="Pre Primary Classroom"
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
                            Building Strong <span className="text-[#3F4196]">Foundations</span>
                        </h2>

                        <p className="mt-5 text-gray-600 leading-relaxed">
                            Our Pre-Primary program is designed to provide a warm, safe and
                            stimulating environment where young children begin their formal
                            learning journey with confidence and joy.
                        </p>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Through play-based activities, guided exploration and positive
                            interaction, we focus on developing language skills, motor skills,
                            social behavior and emotional growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ================= LEARNING AREAS ================= */}
            <section className="py-20 bg-[#EFF2FB]">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Key <span className="text-[#3F4196]">Learning Areas</span>
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Our Pre-Primary curriculum focuses on essential skills that support
                            early learning and overall child development.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

                        {[
                            {
                                title: "Language & Communication",
                                icon: <FaLanguage />,
                                desc: "Building vocabulary, listening skills and early reading through stories and interaction.",
                            },
                            {
                                title: "Early Numeracy Skills",
                                icon: <FaCalculator />,
                                desc: "Developing number sense, patterns and basic problem-solving in a fun way.",
                            },
                            {
                                title: "Creative Expression",
                                icon: <FaPaintBrush />,
                                desc: "Encouraging imagination through art, music, movement and creative activities.",
                            },
                            {
                                title: "Social & Emotional Development",
                                icon: <FaSmile />,
                                desc: "Helping children build confidence, empathy and positive social behavior.",
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
                                {/* Icon */}
                                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#3F4196]/10 text-[#3F4196] flex items-center justify-center text-2xl group-hover:bg-[#3F4196] group-hover:text-white transition">
                                    {item.icon}
                                </div>

                                {/* Title */}
                                <h4 className="font-semibold text-gray-800 text-lg">
                                    {item.title}
                                </h4>

                                {/* Description */}
                                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>


            {/* ================= OUR APPROACH ================= */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-800">
                            Our <span className="text-[#3F4196]">Teaching Approach</span>
                        </h2>

                        <p className="mt-5 text-gray-600 leading-relaxed">
                            We follow a child-centric teaching approach that encourages
                            curiosity, creativity and exploration. Learning is made enjoyable
                            through stories, music, art, games and hands-on activities.
                        </p>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Our experienced educators ensure that each child receives
                            individual attention and grows at their own pace in a supportive
                            and caring environment.
                        </p>
                    </motion.div>

                    {/* Image */}
                    <motion.img
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        src="../images/programs/teaching.webp"
                        alt="Kids Learning Activities"
                        className="rounded-3xl shadow-xl w-full"
                    />
                </div>
            </section>

            {/* ================= QUOTE STRIP ================= */}
            <section className="py-16 bg-[#3F4196] text-center text-white relative overflow-hidden">
                <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/10 rounded-full" />
                <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full" />

                <p className="relative z-10 text-xl md:text-2xl font-medium max-w-3xl mx-auto px-6">
                    “The early years lay the foundation for lifelong learning, curiosity
                    and confidence.”
                </p>
            </section>
        </>
    );
}
