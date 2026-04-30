"use client";

import Link from "next/link";

export default function RedesignWebsitePage() {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
          Jasa <span className="text-blue-600">Redesign Website</span>
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-12">Punya website tapi tampilannya jadul atau lemot? Kita sulap jadi modern, responsif di HP, dan jauh lebih ringan!</p>

        <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] text-left max-w-3xl mx-auto shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">Estimasi Biaya Redesign</h3>
          <p className="text-blue-400 text-4xl font-black mb-6">Mulai Rp 1.000.000</p>
          <div className="space-y-4 text-slate-300 mb-8">
            <p>✔ Ganti tampilan jadi kekinian</p>
            <p>✔ Optimasi kecepatan loading</p>
            <p>✔ Perbaikan struktur SEO</p>
            <p>✔ Penyesuaian konten baru</p>
          </div>
          <Link href="https://wa.me/628XXXXXXXXXX" className="inline-block px-10 py-4 bg-blue-600 rounded-full font-bold hover:bg-blue-700 transition-all">
            Konsultasi Dulu
          </Link>
        </div>
      </div>
    </main>
  );
}
