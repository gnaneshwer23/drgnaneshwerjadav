import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PersonalHero from "@/components/PersonalHero";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      document.getElementById(location.hash.replace("#", ""))?.scrollIntoView();
    }
  }, [location.hash]);

  return (
    <main className="min-h-dvh overflow-x-clip">
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
