import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is the minimum age requirement for admission?",
    answer:
      "The minimum age for admission to kindergarten is 2.5 years. Age criteria may vary for higher classes.",
  },
  {
    question: "Where is Euro School located in Borkheda, Kota?",
    answer:
      "Euro School is located at Samridhi Nagar Royal, near Borkheda Police Station, Kota-Rajasthan.",
  },
  {
    question: "Does the school provide pick-up and drop facilities?",
    answer:
      "Transportation facilities may be available. Parents are advised to contact the school directly for confirmation.",
  },
  {
    question: "What do children learn at Euro School?",
    answer:
      "Students develop strong foundations in academics, language, numeracy, critical thinking, and life skills through engaging and structured learning.",
  },
  {
    question: "Is there a proper daily schedule for students?",
    answer:
      "Yes, the school follows a well-structured daily schedule that includes academic learning, activities, playtime, and breaks.",
  },
  {
    question: "Are the teachers qualified and experienced?",
    answer:
      "Yes, all teachers are trained, experienced, and dedicated to providing a nurturing and supportive learning environment.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#FAF5FF]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            <p className="text-base font-medium text-slate-600 pb-4">FAQ</p>
            Looking for <span className="text-[#3F4196]">Answer?</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Answers to common questions parents ask about our school.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-6 text-left text-lg md:text-xl
  font-semibold hover:bg-[#FAF5FF] transition"
              >
                <span>{faq.question}</span>
                <FaChevronDown
                  className={`text-[#3F4196] text-lg transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
