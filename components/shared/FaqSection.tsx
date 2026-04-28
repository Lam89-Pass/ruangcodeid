"use client";

import { useState } from "react";

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { q: "Apa yang perlu saya persiapkan untuk Membuat Website?", a: "Cukup data data penting seperti No WhatsApp, Email, Logo jika ada dan Domain yang di inginkan. Selebihnya bisa dikoordinasikan bersama." },
    { q: "Berapa lama proses pembuatan Website?", a: "Normalnya selesai kurang lebih 7-14 hari kerja, Tergantung Kompleksitas Konten Website." },
    { q: "Apa Ruang Code Melayani Jasa Website Custom?", a: "Benar Sekali, Kami siap membuatkan website custom sesuai request fitur dan tampilan yang kamu inginkan." },
    { q: "Berapa lama Masa aktif Website?", a: "Masa aktif website umumnya 1 Tahun, akan ada Perpanjangan tiap tahunnya dengan harga yang jauh lebih murah dari biaya awal pembuatan." },
    { q: "Apa membuat website harus tatap muka?", a: "Perlu tidak perlu, tergantung kebutuhan saja, Kami juga menyediakan Layanan Zoom Meeting atau via Telfon." },
    { q: "Apakah logo website nantinya dibuatkan?", a: "Logo dibuat pelanggan sendiri, bantuan edit logo hanya sebatas resize saja." },
    { q: "Apakah bisa menambahkan logo sosmed yang terhubung langsung ke sosmednya?", a: "Ya. Integrasi ke sosial media (Facebook, Instagram, dan Twitter) dapat dilakukan." },
  ];

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            FAQs <span className="text-blue-600"></span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base">Pertanyaan pertanyaan umum dalam Pembuatan Website yang sering ditanyakan, Cari tau jawabannya disini</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className={`border rounded-2xl transition-all duration-300 overflow-hidden ${activeIndex === index ? "border-blue-200 bg-blue-50/30" : "border-slate-200 bg-white/60 backdrop-blur-md"}`}>
              <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between p-6 text-left outline-none">
                <h3 className={`text-base md:text-lg font-bold transition-colors ${activeIndex === index ? "text-blue-600" : "text-slate-900"}`}>{faq.q}</h3>
                <span className={`flex-shrink-0 ml-4 transition-transform duration-300 ${activeIndex === index ? "rotate-180 text-blue-600" : "text-slate-400"}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              <div className={`transition-all duration-300 ease-in-out px-6 overflow-hidden ${activeIndex === index ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base border-t border-blue-100/50 pt-4">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
