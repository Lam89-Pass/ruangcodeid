import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Paket Pembuatan Website | Ruang Code',
  description: 'Pilih paket pembuatan website sesuai kebutuhan bisnis Anda. Tersedia paket Basic, Profesional, dan Custom.',
};

export default function LayananPage() {
  const packages = [
    {
      name: "Basic",
      price: "Rp 1.500.000",
      description: "Cocok untuk UMKM dan portofolio personal.",
      features: ["Gratis Domain (.com/.id) 1 Tahun", "Hosting 1GB", "Desain Responsif (Max 5 Halaman)", "Integrasi WhatsApp", "Bantuan Upload Konten", "Revisi 2x"],
      isPopular: false,
    },
    {
      name: "Profesional",
      price: "Rp 3.500.000",
      description: "Ideal untuk perusahaan dan instansi resmi.",
      features: ["Gratis Domain (.com/.id) 1 Tahun", "Hosting Unlimited", "Desain Premium (Max 10 Halaman)", "SEO Basic Setup", "Integrasi Sosial Media", "Email Bisnis Profesional", "Garansi Maintenance Selamanya"],
      isPopular: true,
    },
    {
      name: "Custom",
      price: "Hubungi Kami",
      description: "Sistem khusus dengan fitur sesuai permintaan.",
      features: ["Desain UI/UX Eksklusif", "Sistem Database Kompleks", "Integrasi API Pihak Ketiga", "Dashboard Admin Kustom", "Optimasi Kecepatan Lanjutan", "Prioritas Support 24/7"],
      isPopular: false,
    }
  ];

  return (
    <div className="pt-24 pb-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Pilih Paket Sesuai Kebutuhan Anda</h1>
          <p className="text-lg text-slate-600">Investasi terbaik untuk digitalisasi bisnis Anda dengan harga transparan tanpa biaya tersembunyi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative p-8 rounded-3xl border ${pkg.isPopular ? 'border-blue-600 shadow-xl shadow-blue-900/5 bg-slate-900 text-white' : 'border-slate-200 bg-white shadow-sm'}`}>
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                  Paling Diminati
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${pkg.isPopular ? 'text-white' : 'text-slate-900'}`}>{pkg.name}</h3>
              <p className={`text-sm mb-6 ${pkg.isPopular ? 'text-slate-300' : 'text-slate-500'}`}>{pkg.description}</p>
              <div className="mb-8">
                <span className="text-3xl font-extrabold">{pkg.price}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg className={`w-5 h-5 shrink-0 ${pkg.isPopular ? 'text-blue-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className={`text-sm ${pkg.isPopular ? 'text-slate-200' : 'text-slate-700'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href={`https://wa.me/628XXXXXXXXXX?text=Halo%20Ruang%20Code,%20saya%20tertarik%20dengan%20Paket%20${pkg.name}`}
                target="_blank"
                className={`block w-full text-center py-3 rounded-full font-semibold transition-colors ${pkg.isPopular ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}
              >
                Pilih Paket
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}