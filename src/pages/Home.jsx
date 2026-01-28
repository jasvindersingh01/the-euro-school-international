import AboutSection from "../components/About";
import ContactPreview from "../components/Contact";
import Faq from "../components/FAQ";
import Hero from "../components/Hero";
import Programs from "../components/Programs";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/gallery";
import Testimonials from "../components/Testimonials";
import useSEO from "../hooks/useSEO";

export default function Home() {
  useSEO({
  title: "The Euro School International | Best School in Borkheda Kota",
  description:
    "The Euro School International in Borkheda, Kota offers quality education from Pre-Primary to Middle School with a focus on academics, values and holistic development."
});

  return (
    <>
      <Hero />
        <AboutSection />
        <Programs />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Faq />
        <ContactPreview />
    </>
  );
}