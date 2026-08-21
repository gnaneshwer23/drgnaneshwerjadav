import Navbar from "@/components/Navbar";
import PersonalHero from "@/components/PersonalHero";
import ProductStage from "@/components/ProductStage";
import Footer from "@/components/Footer";
import Seo, { personJsonLd, websiteJsonLd } from "@/components/Seo";
import { site } from "@/data/site";

const Index = () => {
  return (
    <main className="home-ink min-h-dvh overflow-x-clip">
      <Seo
        title={site.defaultTitle}
        description={site.defaultDescription}
        path="/"
        jsonLd={[personJsonLd, websiteJsonLd]}
      />
      <Navbar />
      <PersonalHero />
      <ProductStage />
      <Footer />
    </main>
  );
};

export default Index;
