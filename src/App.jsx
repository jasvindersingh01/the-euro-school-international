import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import GallerySection from "./pages/Gallery";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import FlootingCallButton from "./components/FlootingCallButton";

// Program Pages
import PrePrimary from "./pages/programs/Pre-Primary";
import Primary from "./pages/programs/Primary";

export default function App() {
  return (
    <BrowserRouter basename="/theeuroschool">
      <ScrollToTop />
      <FlootingCallButton />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<GallerySection />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/programs/pre-primary" element={<PrePrimary />} />
        <Route path="/programs/primary-school" element={<Primary />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
