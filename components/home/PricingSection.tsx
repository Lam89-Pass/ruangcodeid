"use client";

import Link from "next/link";

export default function PricingSection() {
  const packages = [
    {
      name: "Basic",
      price: "1.5JT",
      description: "Solusi hemat untuk landing page, profil personal, atau portofolio sederhana.",
      features: ["Gratis Domain (.com/.id)", "Hosting 1GB High Speed", "Desain Responsif (Max 5 Hal)", "Integrasi WhatsApp Chat", "Bantuan Upload Konten", "Revisi 2x"],
      isPopular: false,
    },
    {
      name: "Profesional",
      price: "3.5JT",
      description: "Paket lengkap paling diminati untuk profil perusahaan, instansi, atau bisnis UMKM.",
      features: ["Semua Fitur Paket Basic", "Hosting Unlimited SSD", "Desain Premium (Max 10 Hal)", "Optimasi SEO Dasar", "Integrasi Sosial Media", "Email Bisnis Profesional", "Garansi Maintenance Selamanya"],
      isPopular: true,
    },
    {
      name: "Custom",
      price: "Hubungi Kami",
      description: "Sistem web khusus dengan fitur, integrasi API, dan tampilan sesuai request eksklusif.",
      features: ["Desain UI/UX Eksklusif", "Sistem Database Kompleks", "Integrasi API Pihak Ketiga", "Dashboard Admin Khusus", "Optimasi Kecepatan Lanjutan", "Prioritas Support 24/7"],
      isPopular: false,
    },
  ];

  return (
    <section id="layanan" className="relative py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            Pilih Paket <span className="text-blue-600">Website Anda.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">Pilihan paket pembuatan website sesuai dengan kebutuhan Anda.</p>
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
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-black tracking-tighter">{pkg.price}</span>
                  {pkg.name !== "Custom" && <span className={`text-sm font-bold ${pkg.isPopular ? "text-slate-400" : "text-slate-500"}`}>/proyek</span>}
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
                href={`https://wa.me/6285624089970?text=Halo%20Ruang%20Code,%20saya%20tertarik%20dengan%20Paket%20${pkg.name}`}
                target="_blank"
                className={`w-full py-4 rounded-2xl font-black text-xs tracking-widest text-center transition-all uppercase ${
                  pkg.isPopular ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30" : "bg-slate-900 hover:bg-blue-600 text-white"
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
