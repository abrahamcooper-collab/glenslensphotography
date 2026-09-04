import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import FamilyFeature from "@/components/FamilyFeature";
import CouplesFeature from "@/components/CouplesFeature";
import Experience from "@/components/Experience";
import WhyChooseMe from "@/components/WhyChooseMe";
import ReviewsGrid from "@/components/ReviewsGrid";
import FeaturedGallery from "@/components/FeaturedGallery";
import AboutPhotographer from "@/components/AboutPhotographer";
import Sessions from "@/components/Sessions";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Testimonial />
        <About />
        <Portfolio />
        <FamilyFeature />
        <CouplesFeature />
        <Experience />
        <WhyChooseMe />
        <ReviewsGrid />
        <FeaturedGallery />
        <AboutPhotographer />
        <Sessions />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
