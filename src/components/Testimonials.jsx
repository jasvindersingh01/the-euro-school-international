import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaGoogle } from "react-icons/fa";

const reviews = [
    { name: "Payal Gour", text: "The school provides a joyful start to education through creative activities and caring guidance.Children feel secure, motivated, and eager to learn each day.", rating: 5 },
    { name: "Varsha Singh", text: "Good school with supportive management and disciplined students. Encourages quality teaching and continuous learning for teachers.", rating: 5 },
    { name: "Honey Saxena", text: "This preschool provides a warm, safe and nurturing environment where children love to learn and grow.", rating: 5 },
    { name: "CP Chaudhary", text: "The teachers are caring, patient, and highly dedicated to each child’s overall development.", rating: 5 },
    { name: "Lovely Porwal", text: "The school focuses on learning through play, which builds confidence and curiosity in children.", rating: 5 },
    { name: "Naresh Bairwa", text: "The classrooms are colourful,child friendly,and well maintained.", rating: 5 },
    { name: "Vikas Gupta", text: "Best School Euro Kids International. Course curriculum & activities are awesome. Recommend to all parents.", rating: 5 },
];

const avatarColors = [
    "bg-blue-600",
    "bg-indigo-600",
    "bg-purple-600",
    "bg-teal-600",
    "bg-cyan-600",
    "bg-sky-600",
];

export default function TestimonialsSlider() {
    return (
<section className="relative py-20 overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('images/testimonial.jpg')",
    }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-[#3F4196]/75" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-14 text-white">
      <h2 className="text-4xl font-bold">
        What Parents <span className="text-yellow-300">Say About Us</span>
      </h2>
      <p className="mt-4 text-lg text-blue-100">
        Real reviews shared by parents on Google.
      </p>
    </div>

    {/* Swiper */}
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={3}
      spaceBetween={30}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="pb-12"
    >
      {reviews.map((review, i) => (
        <SwiperSlide key={i}>
          <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition h-full">

            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div
                className={`w-12 h-12 rounded-full text-white flex items-center justify-center text-lg font-bold ${
                  avatarColors[i % avatarColors.length]
                }`}
              >
                {review.name.charAt(0)}
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  {review.name}
                </p>
                <div className="flex gap-1 text-yellow-400 text-sm">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <FaStar key={j} />
                  ))}
                </div>
              </div>
            </div>

            {/* Review text */}
            <p className="text-gray-600 leading-relaxed">
              “{review.text}”
            </p>

            {/* Google icon */}
            <div className="mt-4 flex justify-end">
              <FaGoogle className="text-[#3F4196]" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Buttons */}
    <div className="mt-14 flex flex-col sm:flex-row justify-center gap-6">
      <a
        href="https://www.google.com/search?q=the+euro+school#lrd=0x396f9bbe7d57a773:0x90ae7b5dadc4adf5,3,,,,"
        target="_blank"
        className="bg-white text-[#3F4196] px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition"
      >
        ✍️ Write a Review
      </a>

      <a
        href="https://www.google.com/search?q=the+euro+school#lrd=0x396f9bbe7d57a773:0x90ae7b5dadc4adf5,1,,,,"
        target="_blank"
        className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition"
      >
        👀 View All Reviews
      </a>
    </div>

  </div>
</section>

    );
}
