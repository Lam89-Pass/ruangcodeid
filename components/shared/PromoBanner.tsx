"use client";

import Image from "next/image";
import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="py-16 md:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 md:p-12 border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          <div className="w-full lg:w-5/12 space-y-6 text-center lg:text-left">
            <div className="inline-block bg-blue-50 text-blue-600 font-bold px-4 py-2 rounded-full text-xs uppercase tracking-widest border border-blue-100">🔥 Spesial Promo</div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              Diskon Launching <span className="text-blue-600">Terbatas!</span>
            </h2>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Wujudkan website impian dan desain profesional untuk bisnis Anda dengan harga super hemat. Klaim promo sekarang sebelum kehabisan slot bulan ini!
            </p>

            <div className="pt-4">
              <Link
                href="/#layanan" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 group"
              >
                Cek Paket Promo
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-7/12 flex justify-center">
            <div className="relative w-full aspect-[297/210] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/60 border-4 border-slate-50 transform hover:-translate-y-2 transition-transform duration-500 bg-slate-50">
              <Image src="/promo_launching.png" alt="Promo Launching Ruang Code" fill className="object-contain" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
