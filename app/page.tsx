import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import FaqSection from '@/components/shared/FaqSection';
// import Testimoni from '@/components/home/Testimoni'; // Buka komentar ini saat komponennya sudah dibuat

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />

      
      <FaqSection />
    </>
  );
}