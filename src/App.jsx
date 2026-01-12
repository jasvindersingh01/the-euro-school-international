import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Academics from "./pages/Academics";
import GallerySection from "./pages/Gallery";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import FlootingCallButton from "./components/FlootingCallButton";

// Program Pages
import PrePrimary from "./pages/programs/Pre-Primary";
import Primary from "./pages/programs/Primary";
import MiddleSchool from "./pages/programs/MiddleSchool";
import UpperPrimary from "./pages/programs/UpperSchool";

export default function App() {
  return (
    <BrowserRouter basename="/theeuroschool">
      <ScrollToTop />
      <FlootingCallButton />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/gallery" element={<GallerySection />} />
        <Route path="/contact" element={<Contact />} />

    {/* { name: "Pre-Primary", to: "/programs/pre-primary" },
        { name: "Primary School", to: "/programs/primary-school" },
        { name: "Middle School", to: "/programs/middle-school" },
        { name: "Upper School", to: "/programs/upper-school" },
        { name: "Academic Excellence", to: "/programs/acadamic-excellence" },
        { name: "Co-Curricular Activities", to: "/programs/co-curricular-activities" }, */}

        <Route path="/programs/pre-primary" element={<PrePrimary />} />
        <Route path="/programs/primary-school" element={<Primary />} />
        <Route path="/programs/middle-school" element={<MiddleSchool />} />
        <Route path="/programs/upper-school" element={<UpperPrimary />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
