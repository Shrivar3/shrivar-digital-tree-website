import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navigation } from "@/components/Navigation";
import { NowSection } from "@/components/NowSection";
import { PathSection } from "@/components/PathSection";
import { ThinkingSection } from "@/components/ThinkingSection";
import { ThesisSection } from "@/components/ThesisSection";
import { WorkSection } from "@/components/WorkSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <NowSection />
        <WorkSection />
        <ThinkingSection />
        <PathSection />
        <ThesisSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
