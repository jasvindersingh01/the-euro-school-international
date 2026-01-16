import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Pre-Primary (Playgroup – KG)",
    age: "Early Childhood",
    desc: "A joyful foundation program focused on play, creativity and early learning.",
    image: "images/programs/pre.jpg",
    link: "/programs/pre-primary",
  },
  {
    title: "Primary (Grade 1 – 2)",
    age: "Early Primary",
    desc: "Building strong basics in literacy, numeracy and confidence.",
    image: "images/programs/primary.jpg",
    link: "/programs/primary-1-2",
  },
  {
    title: "Primary (Grade 3 – 5)",
    age: "Middle Primary",
    desc: "Encouraging independent thinking, problem solving and curiosity.",
    image: "images/programs/mid.webp",
    link: "/programs/primary-3-5",
  },
  {
    title: "Middle School (Grade 6 – 8)",
    age: "Upper Primary",
    desc: "Preparing students academically and emotionally for higher classes.",
    image: "images/programs/six-eight.jfif",
    link: "/programs/middle-school",
  },
];

export default function Programs() {
  return (
    <section className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            Our <span className="text-[#3F4196]">Programs</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From early years to middle school, we provide a nurturing and
            structured learning journey for every child.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-8">
          {programs.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 relative">
                {/* Pink hover background */}
                <div className="absolute inset-0 bg-[#FAF5FF] opacity-0 group-hover:opacity-100 transition" />

                <div className="relative z-10">
                  <p className="text-sm text-[#3F4196] font-semibold">
                    {item.age}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-600">
                    {item.desc}
                  </p>

                  <Link
                    to={item.link}
                    className="inline-block mt-4 text-[#3F4196] font-semibold hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-10 text-center text-gray-600">
           Each program is thoughtfully designed to nurture academic excellence, values,
  and lifelong learning skills at every stage.
        </p>

      </div>
    </section>
  );
}
