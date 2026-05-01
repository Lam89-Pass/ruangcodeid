import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import PricingSection from "@/components/home/PricingSection";
import TestimoniSection from "@/components/shared/TestimoniSection";
import FaqSection from "@/components/shared/FaqSection";
import PromoPopup from "@/components/shared/PromoPopup";
import PromoBanner from "@/components/shared/PromoBanner";

export default function Home() {
  return (
    <>
      <PromoPopup />
      <HeroSection />
      <AboutSection />
      <PricingSection />
      <TestimoniSection />
      <FaqSection />
      <PromoBanner />
    </>
  );
}
