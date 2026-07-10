import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { CombinationSection } from "@/components/CombinationSection";
import { DigitalTreeHero } from "@/components/DigitalTreeHero";
import { FeaturedBuilds } from "@/components/FeaturedBuilds";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { FoundationSection } from "@/components/FoundationSection";
import { Navigation } from "@/components/Navigation";
import { ResearchSection } from "@/components/ResearchSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <DigitalTreeHero />
        <FeaturedBuilds />
        <CapabilitiesSection />
        <CombinationSection />
        <ResearchSection />
        <FoundationSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
