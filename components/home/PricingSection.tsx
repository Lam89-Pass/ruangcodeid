"use client";

import Link from "next/link";

export default function PricingSection() {
  const packages = [
    {
      name: "Hemat",
      originalPrice: "1.500.000",
      price: "899.000",
      description: "Solusi hemat untuk landing page, profil personal, atau portofolio sederhana.",
      features: [
        "Garansi Maintenance 1 Bulan",
        "Gratis Domain 1 Tahun",
        "Hosting 1GB High Speed",
        "Desain Responsif",
        "SEO Basic Setup",
        "Maximal 5 Halaman",
        "Revisi hingga 2x",
        "Tanpa Akses Admin Panel",
        "Integrasi WhatsApp",
        "Belum termasuk fitur custom",
        "Gratis Konsultasi",
      ],
      isPopular: false,
    },
    {
      name: "Professional",
      originalPrice: "3.500.000",
      price: "2.899.000",
      description: "Paket lengkap paling diminati untuk profil perusahaan, instansi, atau bisnis UMKM.",
      features: [
        "Garansi Maintenance 1 Bulan",
        "Gratis Domain 1 Tahun",
        "Hosting Unlimited",
        "Desain Responsif",
        "SEO On-Page Optimization",
        "Maximal 10 Halaman",
        "Revisi hingga 5x",
        "Full Akses Admin Panel",
        "Integrasi WhatsApp",
        "Gratis Konsultasi",
      ],
      isPopular: true,
    },
    {
      name: "Custom",
      originalPrice: null,
      price: "Hubungi Kami",
      description: "Sistem web khusus dengan fitur, integrasi API, dan tampilan sesuai request eksklusif.",
      features: ["Garansi Maintenance 1 Bulan", "Gratis Domain 1 Tahun", "Kebutuhan & Fitur 100% Custom", "Desain Responsif", "Revisi Fleksibel", "Gratis Konsultasi"],
      isPopular: false,
    },
  ];

  return (
    <section id="layanan" className="relative py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            Pilih Paket <span className="text-blue-600">Website Anda</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
            Mumpung lagi ada <span className="font-bold text-red-500">Harga Spesial</span>, amankan paket pilihanmu sekarang!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                pkg.isPopular ? "bg-slate-900 border-slate-800 text-white shadow-2xl shadow-blue-900/20" : "bg-white/60 backdrop-blur-md border-slate-200 text-slate-900"
              }`}
            >
              {pkg.isPopular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase shadow-lg shadow-blue-600/30">Best Value</div>}

              <div className="mb-8">
                <h3 className={`text-lg font-black mb-2 uppercase tracking-widest ${pkg.isPopular ? "text-blue-400" : "text-blue-600"}`}>{pkg.name}</h3>

                <div className="flex flex-col gap-1">
                  {pkg.originalPrice && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-lg font-bold line-through decoration-red-500/80 ${pkg.isPopular ? "text-slate-500" : "text-slate-400"}`}>{pkg.originalPrice}</span>
                      <span className="bg-red-500 text-white px-2 py-0.5 rounded text-[10px] font-black animate-pulse tracking-widest uppercase">PROMO</span>
                    </div>
                  )}

                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-black tracking-tighter">{pkg.price}</span>
                    {pkg.name !== "Custom" && <span className={`text-sm font-bold ${pkg.isPopular ? "text-slate-400" : "text-slate-500"}`}></span>}
                  </div>
                </div>

                <p className={`mt-4 text-sm leading-relaxed ${pkg.isPopular ? "text-slate-400" : "text-slate-500"}`}>{pkg.description}</p>
              </div>

              <ul className="flex-grow space-y-4 mb-10">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${pkg.isPopular ? "bg-blue-500 text-slate-900" : "bg-blue-100 text-blue-600"}`}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`https://wa.me/6285624089970?text=Halo%20Ruang%20Code,%20saya%20tertarik%20dengan%20Paket%20${pkg.name}${pkg.originalPrice ? "%20yang%20lagi%20diskon" : ""}`}
                target="_blank"
                className={`w-full py-4 rounded-2xl font-black text-xs tracking-widest text-center transition-all uppercase ${
                  pkg.isPopular ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30" : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
              >
                Pilih Paket
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-slate-400 italic">*Harga perpanjangan tahun berikutnya jauh lebih murah karena hanya membayar biaya Domain & Hosting saja.</p>
        </div>
      </div>
    </section>
  );
}
