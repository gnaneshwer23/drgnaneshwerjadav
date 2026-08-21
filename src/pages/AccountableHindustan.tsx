import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EnginesSection from "@/components/EnginesSection";
import SegmentsSection from "@/components/SegmentsSection";
import JourneySection from "@/components/JourneySection";
import MetricsSection from "@/components/MetricsSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const AccountableHindustan = () => {
  return (
    <main className="min-h-dvh">
      <Navbar variant="project" />
      <HeroSection />
      <div id="engines">
        <EnginesSection />
      </div>
      <div id="segments">
        <SegmentsSection />
      </div>
      <div id="journey">
        <JourneySection />
      </div>
      <MetricsSection />
      <div id="philosophy">
        <PrinciplesSection />
      </div>
      <CTASection />
      <Footer />
    </main>
  );
};

export default AccountableHindustan;
