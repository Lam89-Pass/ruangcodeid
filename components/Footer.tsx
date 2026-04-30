"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <Image src="/logoRC.PNG" alt="Logo Ruang Code" width={180} height={80} className="object-contain brightness-0 invert" priority />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Partner strategis Anda dalam solusi digital masa depan. Kami membantu bisnis, perusahaan, organisasi, instansi, hingga UMKM membangun website profesional dengan performa tinggi, desain eksklusif, dan kualitas yang
              berkelanjutan.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com/ruangcode.id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white transition-all shadow-lg hover:shadow-pink-500/30 group"
              >
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              <a
                href="https://tiktok.com/@ruangcode.id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#000000] hover:text-white transition-all shadow-lg hover:shadow-white/10 border border-transparent hover:border-slate-600 group"
              >
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.28 6.28 0 005.4 15.6a6.28 6.28 0 006.28 6.28A6.32 6.32 0 0018 15.65V8.12a8.14 8.14 0 004 .96V5.63a5.45 5.45 0 01-2.41-.94z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold tracking-widest uppercase text-sm">Tautan Lainnya</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-400 hover:text-blue-500 text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-600"></span> Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-slate-400 hover:text-blue-500 text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-600"></span> About Us
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-slate-400 hover:text-blue-500 text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-600"></span> Layanan
                </Link>
              </li>
              <li>
                <Link href="/#testimoni" className="text-slate-400 hover:text-blue-500 text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-600"></span> Testimoni
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold tracking-widest uppercase text-sm">Kontak Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-slate-400 text-sm mt-1">Bandung, Jawa Barat, Indonesia</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span className="text-slate-400 text-sm mt-1">+62 856-2408-9970</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" className="font-bold text-slate-400 hover:text-blue-500 transition-colors">
              Ruang Code ID
            </Link>{" "}
            — Hak cipta dilindungi.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-slate-500 hover:text-white text-xs transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="/terms" className="text-slate-500 hover:text-white text-xs transition-colors">
              Syarat dan Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
