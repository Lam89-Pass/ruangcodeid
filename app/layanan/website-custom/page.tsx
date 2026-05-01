"use client";

import Link from "next/link";

export default function WebsiteCustomPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
          <span className="text-blue-600">Website Custom</span> & Sistem
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-12">Butuh sistem khusus buat sekolah, kasir, portal instansi, atau ide unik lainnya? Kita bikin sistem yang sesuai sama alur kerja kamu.</p>

        <div className="p-10 rounded-[2.5rem] border-2 border-dashed border-blue-200 bg-blue-50/30 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Harga Berdasarkan Proyek</h3>
          <p className="text-slate-600 mb-8">Karena fiturnya beda-beda, harga bakal disesuaiin sama tingkat kerumitan sistem yang kamu mau.</p>
          <Link href="https://wa.me/628XXXXXXXXXX" className="inline-block px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all">
            Hubungi Tim Dev
          </Link>
        </div>
      </div>
    </main>
  );
}
