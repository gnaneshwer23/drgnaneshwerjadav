import Navbar from "@/components/Navbar";
import PersonalHero from "@/components/PersonalHero";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-dvh">
      <Navbar />
      <PersonalHero />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
