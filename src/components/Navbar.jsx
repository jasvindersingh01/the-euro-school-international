import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaChevronDown
} from "react-icons/fa";
import logo from "/logo.png";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [openPrograms, setOpenPrograms] = useState(false);
    const menuRef = useRef(null);

    const links = [
        { name: "Home", to: "/" },
        { name: "About", to: "/about" },
        { name: "Programs", to: "/programs" },
        { name: "Academics", to: "/academics" },
        { name: "Gallery", to: "/gallery" },
        { name: "Contact", to: "/contact" },
    ];

    const programLinks = [
        { name: "Pre-Primary", to: "/programs/pre-primary" },
        { name: "Primary (Grade 1–2)", to: "/programs/primary-1-2" },
        { name: "Primary (Grade 3–5)", to: "/programs/primary-3-5" },
        { name: "Middle School (Grade 6–8)", to: "/programs/middle-school" },

    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenPrograms(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="sticky top-0 z-50 bg-[#3F4196]">
            <div className="mx-auto px-6 py-1 flex items-center justify-between">

                {/* LOGO */}
                <Link to="/" className="flex items-center">
                    <img
                        src={logo}
                        alt="EuroKids Logo"
                        className="h-18 w-auto rounded-md p-2"
                    />
                </Link>

                {/* DESKTOP MENU */}
                <nav>
                    {
                        links.map((link) => (
                            link.name === "Programs" ? (
                                <div className="hidden md:inline-flex relative group">
                                    <button
                                        type="button"
                                        className="flex items-center gap-1 text-white mx-4 relative
      after:content-['']
      after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-0
      after:bg-yellow-300
      after:transition-all after:duration-300
      hover:after:w-full"
                                    >
                                        Programs
                                        <FaChevronDown className="ml-1 text-xs transition-transform duration-300 group-hover:rotate-180" />
                                    </button>

                                    <div
                                        className="
      absolute left-0 top-full mt-2 w-64
      bg-white text-black rounded-md shadow-lg z-50
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-200
    "
                                    >
                                        {programLinks.map((programLink) => (
                                            <Link
                                                key={programLink.name}
                                                to={programLink.to}
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                {programLink.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    className="hidden md:inline-block text-white mx-4   hidden md:inline-block mx-4 text-white relative
                                    after:content-['']
                                    after:absolute after:left-0 after:-bottom-1
                                    after:h-[2px] after:w-0
                                    after:bg-yellow-300
                                    after:transition-all after:duration-300
                                    hover:after:w-full"
                                >
                                    {link.name}
                                </Link>
                            )
                        ))
                    }
                </nav>

                {/* SOCIAL ICONS (DESKTOP) */}
                <div className="hidden md:flex items-center gap-5 text-white text-2xl">
                    <a href="https://www.facebook.com/THEEUROSCHOOL/" target="_blank" className="hover:text-yellow-300 transition">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.instagram.com/eurokids_baran_road_kota?igsh=M2xhbWR2cXdoOWg2" target="_blank" className="hover:text-yellow-300 transition">
                        <FaInstagram />
                    </a>
                    <a href="https://www.youtube.com/@eurokidsbaranroadkota" target="_blank" className="hover:text-yellow-300 transition">
                        <FaYoutube />
                    </a>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-3xl text-white"
                >
                    {open ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div >

            {/* MOBILE MENU */}
            {/* MOBILE MENU */}
            <div
                ref={menuRef}
                className={`md:hidden bg-[#3F4196] text-white px-6
  text-lg font-medium space-y-5
  transition-all duration-300 ease-in-out overflow-hidden
  ${open ? "max-h-[600px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"}
`}
            >
                <Link onClick={() => setOpen(false)} to="/" className="block hover:text-yellow-300">
                    Home
                </Link>

                <Link onClick={() => setOpen(false)} to="/about" className="block hover:text-yellow-300">
                    About
                </Link>

                {/* 🔽 PROGRAMS DROPDOWN (MOBILE) */}
                <div>
                    <button
                        onClick={() => setOpenPrograms(!openPrograms)}
                        className="flex items-center justify-between w-full hover:text-yellow-300"
                    >
                        Programs
                        <FaChevronDown
                            className={`transition-transform duration-300 ${openPrograms ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    {openPrograms && (
                        <div className="ml-4 mt-3 space-y-3 text-sm text-gray-200">
                            {programLinks.map((program) => (
                                <Link
                                    key={program.name}
                                    to={program.to}
                                    onClick={() => {
                                        setOpen(false);
                                        setOpenPrograms(false);
                                    }}
                                    className="block hover:text-yellow-300"
                                >
                                    {program.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                <Link onClick={() => setOpen(false)} to="/gallery" className="block hover:text-yellow-300">
                    Gallery
                </Link>

                <Link onClick={() => setOpen(false)} to="/contact" className="block hover:text-yellow-300">
                    Contact
                </Link>

                {/* SOCIAL ICONS */}
                <div className="flex gap-6 pt-4 text-2xl">
                    <FaFacebookF />
                    <FaInstagram />
                    <FaYoutube />
                </div>
            </div>

        </header >
    );
}
