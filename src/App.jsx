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
import Primary from "./pages/programs/Primary12";
import MiddleSchool from "./pages/programs/Primary35";
import UpperPrimary from "./pages/programs/MiddleSchool";

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

        <Route path="/programs/pre-primary" element={<PrePrimary />} />
        <Route path="/programs/primary-1-2" element={<Primary />} />
        <Route path="/programs/primary-3-5" element={<MiddleSchool />} />
        <Route path="/programs/middle-school" element={<UpperPrimary />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
