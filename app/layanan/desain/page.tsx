import ServiceCatalog from "@/components/services/ServiceCatalog";
import PromoBanner from "@/components/shared/PromoBanner";
import { ServiceItem } from "@/hooks/useServiceCatalog";

const DATA_DESAIN: ServiceItem[] = [
  {
    id: 1,
    category: "Branding & Logo",
    name: "Logo Basic",
    originalPrice: "xxx.xxx.xxx",
    price: "Mulai dari 30.000",
    priceNum: 350000,
    isPromo: false,
    desc: "Desain logo profesional yang simpel untuk UMKM dan bisnis yang baru merintis.",
    features: ["Revisi 3x", "File Master", "Format PNG/JPG", "Pengerjaan Mulai dari 1 Hari", "Konsultasi Gratis"],
  },
  {
    id: 2,
    category: "UI/UX Design",
    name: "UI/UX Website",
    originalPrice: "xxx.xxx.xxx",
    price: "Mulai dari 1.899.000",
    priceNum: 1800000,
    isPromo: false,
    desc: "Desain antarmuka website (tanpa coding) yang menarik, modern, dan mudah digunakan.",
    features: ["Wireframing", "Desain UI (Figma)", "Interactive Prototype", "Asset Export Ready", "Konsultasi Gratis"],
  },
  {
    id: 3,
    category: "Sosial Media",
    name: "Feed Instagram",
    originalPrice: "xxx.xxx.xxx",
    price: "Mulai dari 50.000",
    priceNum: 900000,
    isPromo: false,
    desc: "Desain konten feed Instagram bulanan yang estetik, rapi, dan meningkatkan engagement.",
    features: ["Desain Feed", "Ide Caption & Hashtag", "Grid Planning", "Revisi 3x", "Konsultasi Gratis"],
  },
  {
    id: 4,
    category: "Desain Custom",
    name: "Desain Custom",
    originalPrice: "xxx.xxx",
    price: "Hubungi Kami",
    priceNum: 750000,
    isPromo: false,
    desc: "Konsultasi desain anda dengan kami, desain banner, spanduk, logo, stiker??",
    features: ["Revisi Fleksibel","Harga Khusus", "Konsultasi Gratis"],
  },
];

const CATEGORIES = ["Semua Kategori", "Branding & Logo", "UI/UX Design", "Sosial Media", "Desain Grafis"];

export default function DesainPage() {
  return (
    <>
      <ServiceCatalog
        title='Layanan <span className="text-blue-400">Desain Kreatif</span>'
        description="Mulai dari desain logo, UI/UX website, hingga konten sosial media."
        bannerImage="/layanan_desain.png"
        data={DATA_DESAIN}
        categories={CATEGORIES}
      />
      <PromoBanner />
    </>
  );
}
