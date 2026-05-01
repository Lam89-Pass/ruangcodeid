import ServiceCatalog from "@/components/services/ServiceCatalog";
import PromoBanner from "@/components/shared/PromoBanner";
import { ServiceItem } from "@/hooks/useServiceCatalog";

const DATA_REDESIGN: ServiceItem[] = [
  {
    id: 1,
    category: "Redesign UI/UX",
    name: "Redesign Landing Page",
    originalPrice: "1.599.000",
    price: "999.000",
    priceNum: 800000,
    isPromo: true,
    desc: "Rombak total tampilan landing page agar lebih modern dan konversi tinggi.",
    features: ["Desain UI Kekinian", "Copywriting Ulang", "Mobile Friendly", "Revisi 3x"],
  },
  {
    id: 2,
    category: "Maintenance",
    name: "Maintenance Bulanan",
    originalPrice: "2.499.000",
    price: "1.999.000",
    priceNum: 1000000,
    isPromo: true,
    desc: "Biar kami yang rawat website Anda dari error, virus, dan update rutin setiap bulannya.",
    features: ["Update Plugin/Tema", "Backup Mingguan", "Scan Malware", "Prioritas Support"],
  },
];

const CATEGORIES = ["Semua Kategori", "Redesign UI/UX", "Optimasi Kecepatan", "Migrasi Platform", "Maintenance"];

export default function RedesignWebsitePage() {
  return (
    <>
      <ServiceCatalog
        title='Layanan <span className="text-blue-400">Redesign & Maintenance</span>'
        description="Punya website lawas yang lambat atau kurang menarik? Kami bantu rombak ulang dan optimasi."
        bannerImage="/layanan_redesign.png"
        data={DATA_REDESIGN}
        categories={CATEGORIES}
      />
      <PromoBanner />
    </>
  );
}
