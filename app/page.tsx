import HeroSection from "@/components/HeroSection";
import StatsCounter from "@/components/StatsCounter";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import BrandPartners from "@/components/BrandPartners";
import ProjectsGallery from "@/components/ProjectsGallery";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsCounter />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <BrandPartners />
      <ProjectsGallery />
      <Testimonials />
      <FAQSection />
      <ContactSection />
    </>
  );
}
