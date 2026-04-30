"use client";

import Link from "next/link";

export default function DesainPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
          Jasa <span className="text-blue-600">Desain Visual</span>
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-12">Gak butuh coding? Cuma mau desain tampilannya aja di Figma? Atau butuh logo dan aset banner? Kami siap bantu.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 text-left">
            <h4 className="font-bold text-lg mb-1">Desain UI/UX (Figma)</h4>
            <p className="text-blue-600 font-black text-2xl mb-4">Rp 500rb /halaman</p>
            <Link href="https://wa.me/628XXXXXXXXXX" className="text-sm font-bold text-slate-500 hover:text-blue-600">
              Order Desain →
            </Link>
          </div>
          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 text-left">
            <h4 className="font-bold text-lg mb-1">Logo & Branding</h4>
            <p className="text-blue-600 font-black text-2xl mb-4">Mulai Rp 300rb</p>
            <Link href="https://wa.me/628XXXXXXXXXX" className="text-sm font-bold text-slate-500 hover:text-blue-600">
              Order Logo →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
