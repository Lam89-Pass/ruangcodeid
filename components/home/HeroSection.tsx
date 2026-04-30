"use client";

import Link from "next/link";
import Image from "next/image"; 

export default function HeroSection() {
  return (
    <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-blue-50/80 backdrop-blur-sm text-blue-600 font-bold text-xs tracking-widest uppercase rounded-full border border-blue-100">Web Solution Digital</span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                Jasa Pembuatan <br />
                <span className="text-blue-600">Website Profesional</span>
              </h1>

              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Spesialis Jasa Pembuatan Website kebutuhan Bisnis, Organisasi, Instansi, UMKM.
                <span className="block font-semibold text-slate-800 mt-2">Gratis Hosting & Domain</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 justify-center lg:justify-start">
              <Link
                href="https://wa.me/6285624089970?text=Halo%20Ruang%20Code,%20saya%20ingin%20konsultasi%20pembuatan%20website"
                target="_blank"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg shadow-xl shadow-blue-600/20 transition-all transform hover:-translate-y-1 text-center"
              >
                Konsultasi Gratis
              </Link>
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/2 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,#dbeafe,transparent_60%)] -z-10"></div>

            <div className="relative group shadow-2xl rounded-2xl border-8 border-white bg-slate-100/50 aspect-[4/3] overflow-hidden group transition-all duration-500 hover:scale-[1.01]">
              <Image
                src="/hero-banner.png" 
                alt="Ruang Code Hero Banner"
                width={600}
                height={450}
                priority
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
