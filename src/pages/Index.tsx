import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PersonalHero from "@/components/PersonalHero";
import ProofStrip from "@/components/ProofStrip";
import ArcTimeline from "@/components/ArcTimeline";
import WorkSection from "@/components/WorkSection";
import AudienceAndThink from "@/components/AudienceAndThink";
import FeaturedShelf from "@/components/FeaturedShelf";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Seo, { personJsonLd, websiteJsonLd } from "@/components/Seo";
import { site } from "@/data/site";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      document.getElementById(location.hash.replace("#", ""))?.scrollIntoView();
    }
  }, [location.hash]);

  return (
    <main className="min-h-dvh overflow-x-clip">
      <Seo
        title={site.defaultTitle}
        description={site.defaultDescription}
        path="/"
        jsonLd={[personJsonLd, websiteJsonLd]}
      />
      <Navbar />
      <PersonalHero />
      <ProofStrip />
      <ArcTimeline />
      <WorkSection />
      <AudienceAndThink />
      <FeaturedShelf />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
