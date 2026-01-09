import AboutSection from "../components/About";
import ContactPreview from "../components/Contact";
import Faq from "../components/FAQ";
import Hero from "../components/Hero";
import Programs from "../components/Programs";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/gallery";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
    <div className="overflow-x-hidden">
      <Hero />
        <AboutSection />
        <Programs />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Faq />
        <ContactPreview />
        </div>
    </>
  );
}