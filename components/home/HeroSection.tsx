"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* SISI KIRI: Tipografi */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-blue-50/80 backdrop-blur-sm text-blue-600 font-bold text-xs tracking-widest uppercase rounded-full border border-blue-100">#1 Web Solution Partner</span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                Jasa Pembuatan <br />
                <span className="text-blue-600">Website Profesional</span>
              </h1>

              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Spesialis Jasa Pembuatan Website kebutuhan Bisnis, Organisasi, Instansi, UMKM.
                <span className="block font-semibold text-slate-800 mt-2">Gratis Hosting & Domain + Garansi Selamanya.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link
                href="https://wa.me/628XXXXXXXXXX?text=Halo%20Ruang%20Code,%20saya%20ingin%20konsultasi%20pembuatan%20website"
                target="_blank"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg shadow-xl shadow-blue-600/20 transition-all transform hover:-translate-y-1 text-center"
              >
                Konsultasi Gratis
              </Link>

              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <span className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-white border-2 border-slate-100 shadow-sm flex items-center justify-center text-[10px] font-bold text-slate-400">
                      RC
                    </div>
                  ))}
                </span>
                <span className="ml-2 font-medium">Dipercaya 50+ Klien</span>
              </div>
            </div>
          </div>

          {/* SISI KANAN: Hero Section (Mockup/Visual) */}
          <div className="w-full lg:w-1/2 relative">
            {/* Dekorasi glow yang menyatu dengan grid */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,#dbeafe,transparent_60%)] -z-10"></div>

            <div className="relative group shadow-2xl rounded-2xl overflow-hidden border-8 border-white/80 backdrop-blur-sm bg-slate-100/50 aspect-[4/3] flex items-center justify-center transition-transform duration-500 hover:scale-[1.02]">
              <div className="text-center px-6">
                <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 text-2xl">💻</div>
                <p className="text-slate-600 font-bold uppercase tracking-wider text-sm">Professional Web Display</p>
                <p className="text-slate-400 text-xs mt-1">Mockup Ruang Code</p>
              </div>

              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white hidden md:block">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Status Proyek</p>
                <p className="text-blue-600 font-extrabold">Online & Aktif</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
