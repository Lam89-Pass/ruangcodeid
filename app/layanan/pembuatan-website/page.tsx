"use client";

import Link from "next/link";

export default function PembuatanWebsitePage() {
  const packages = [
    {
      name: "Paket Starter",
      price: "Rp 1.500.000",
      desc: "Cocok buat kamu yang baru mulai bisnis atau butuh portofolio pribadi.",
      features: ["Landing Page 1 Halaman", "Gratis Domain & Hosting", "Desain Mobile Friendly", "Tombol Chat WA", "Proses 3-5 Hari"],
    },
    {
      name: "Paket Bisnis",
      price: "Rp 3.500.000",
      desc: "Pilihan terbaik buat UMKM atau Perusahaan yang mau tampil profesional.",
      features: ["Hingga 5 Halaman Utama", "Halaman Admin (Bisa Edit Sendiri)", "Optimasi Google (SEO)", "Keamanan SSL", "Proses 7-14 Hari"],
    },
  ];

  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Jasa Pembuatan <span className="text-blue-600">Website Baru</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">Kita bantu bangun website dari nol yang nggak cuma cakep, tapi juga kenceng dan gampang ditemuin di Google. Cocok buat jualan atau profil perusahaan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {packages.map((pkg, i) => (
            <div key={i} className="p-8 rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:shadow-2xl hover:bg-white transition-all">
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <p className="text-blue-600 font-black text-3xl mb-4">{pkg.price}</p>
              <p className="text-slate-500 mb-6 text-sm">{pkg.desc}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-slate-700 text-sm">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="https://wa.me/628XXXXXXXXXX" className="block w-full py-4 bg-blue-600 text-white text-center rounded-xl font-bold hover:bg-blue-700 transition-all">
                Pesan Sekarang
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
