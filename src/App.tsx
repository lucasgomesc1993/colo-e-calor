import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PainPointsSection } from "@/components/PainPointsSection";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SuccessStorySection } from "@/components/SuccessStorySection";
import { MethodSection } from "@/components/MethodSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { OfferSection } from "@/components/OfferSection";
import { BonusSection } from "@/components/BonusSection";
import { ConsultantSection } from "@/components/ConsultantSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
// Importando seções faltantes
import { PricingSection } from "@/components/PricingSection";
import { AboutSection } from "@/components/AboutSection";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TestimonialsSection />
        <OfferSection />
        <PainPointsSection />
        <ConsultantSection />
        <MethodSection />
        <BonusSection />
        <SuccessStorySection />
        <TargetAudienceSection />
        <PricingSection />
        <GuaranteeSection />
        <AboutSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;