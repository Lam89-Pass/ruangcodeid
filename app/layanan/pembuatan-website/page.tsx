import ServiceCatalog from "@/components/services/ServiceCatalog";
import PromoBanner from "@/components/shared/PromoBanner";
import { ServiceItem } from "@/hooks/useServiceCatalog";

const DATA_WEBSITE: ServiceItem[] = [
  {
    id: 1,
    category: "Landing Page",
    name: "Landing Page",
    originalPrice: "1.599.000",
    price: "999.000",
    priceNum: 900000,
    isPromo: false,
    desc: "Satu halaman profesional untuk promosi produk atau event tunggal.",
    features: ["Maximal 1 Halaman", "Gratis Domain 1 Tahun", "Desain Responsif", "Integrasi WA", "SEO Basic Setup", "Revisi hingga 2x", "Gratis Konsultasi"],
  },
  {
    id: 2,
    category: "Company Profile",
    name: "Professional Business",
    originalPrice: "3.599.000",
    price: "1.999.000",
    priceNum: 2900000,
    isPromo: true,
    desc: "Website company profile kami dirancang untuk meningkatkan kredibilitas perusahaan dan membuat bisnis Anda lebih terpercaya serta dikenal luas. Dengan tampilan profesional dan informasi yang terstruktur, paket ini membantu Anda membangun kepercayaan di antara calon pelanggan, mitra bisnis, dan investor. Solusi ini cocok bagi perusahaan yang ingin memperkuat kehadiran digital mereka dan memberikan citra profesional yang solid.",
    features: ["Maximal 10 Halaman", "Gratis Domain 1 Tahun", "Garansi Maintenance 1 Bulan", "Desain Responsif", "Integrasi WA", "SEO On-Page Optimization", "Revisi hingga 5x", "Gratis Konsultasi"],
  },
  {
    id: 3,
    category: "UMKM",
    name: "UMKM Digital",
    originalPrice: "4.599.000",
    price: "2.899.000",
    priceNum: 1800000,
    isPromo: true,
    desc: "Bagi bisnis atau UKM yang menjual produk atau jasa langsung ke konsumen, seperti kuliner, properti, konveksi, atau travel, paket Toko Online kami adalah solusi yang tepat. Website ini dilengkapi dengan sistem e-commerce lengkap untuk mengelola produk, transaksi, dan pengiriman, sehingga memudahkan bisnis Anda dalam menjual secara online dan meningkatkan omzet melalui pengalaman belanja yang nyaman bagi pelanggan.",
    features: ["Maximal 3 Halaman", "Gratis Domain 1 Tahun", "Garansi Maintenance 1 Bulan", "Desain Responsif", "Integrasi WA", "SEO On-Page Optimization", "Revisi hingga 3x", "Gratis Konsultasi"],
  },
  {
    id: 4,
    category: "Instansi",
    name: "Website Sekolah",
    originalPrice: "5.599.000",
    price: "4.799.000",
    priceNum: 4800000,
    isPromo: false,
    desc: "Solusi digital lengkap untuk membangun kredibilitas dan mempermudah komunikasi sekolah. Platform terbaik untuk menyajikan profil sekolah, prestasi, informasi akademik, hingga berita terbaru secara transparan dan mudah diakses oleh siswa maupun orang tua",
    features: ["Maximal 20 Halaman", "Gratis Domain 1 Tahun", "Garansi Maintenance 1 Bulan", "Desain Responsif", "Integrasi WA", "SEO On-Page Optimization", "Revisi hingga 7x", "Gratis Konsultasi"],
  },
  {
    id: 5,
    category: "Website Custom",
    name: "Website Custom",
    originalPrice: null,
    price: "Hubungi Kami",
    priceNum: 99999999,
    isPromo: false,
    desc: "Konsultasi dengan kami terlebih dahulu, sistem web khusus dengan fitur, integrasi API, dan tampilan sesuai request eksklusif.",
    features: ["Garansi Maintenance 1 Bulan", "Gratis Domain 1 Tahun", "Kebutuhan & Fitur 100% Custom", "Desain Responsif", "Revisi Fleksibel", "Gratis Konsultasi"],
  },
];

const CATEGORIES = ["Semua Kategori", "Landing Page", "UMKM", "Company Profile", "Website Custom"];

export default function PembuatanWebsitePage() {
  return (
    <>
      <ServiceCatalog
        title='Jasa Pembuatan <span className="text-blue-400">Website</span>'
        description="Pilih paket website yang sesuai dengan kebutuhan dan budget bisnis Anda."
        bannerImage="/layanan_website.png"
        data={DATA_WEBSITE}
        categories={CATEGORIES}
      />
      <PromoBanner />
    </>
  );
}
