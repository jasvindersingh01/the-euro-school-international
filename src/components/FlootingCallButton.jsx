import { FaPhoneAlt } from "react-icons/fa";

export default function FlootingCallButton() {
    return (
        <>
            <style>{`
            @keyframes pulsering {
                0% {
                    transform: scale(0.9);
                    opacity: 0.8;
                }
                100% {
                    transform: scale(1.6);
                    opacity: 0;
                }
                 100% {
            opacity: 0;
                }
            }
        `}</style>
          <a
        href="tel:8003392221"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Call Us"
      >
        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-[#3F4196]/40 animate-[pulseRing_2s_infinite]" />

        {/* Button */}
        <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white shadow-lg
          transition-all duration-300
          group-hover:scale-110
          group-hover:shadow-2xl
          active:scale-95
        ">
          <FaPhoneAlt className="text-xl rotate-0 group-hover:rotate-12 transition-transform duration-300 " />
        </span>
      </a>
        </>
    )
}