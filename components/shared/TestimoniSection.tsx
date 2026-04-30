"use client";

import { useState, useEffect } from "react";

export default function TestimoniSection() {
  const originalTestimonials = [
    { name: "Fokus pada Kualitas", role: "", content: "Setiap website dibangun dengan standar tinggi untuk memastikan performa dan keamanan." },
    { name: "Proses yang Transparan", role: "", content: "Kami memberikan timeline yang jelas dan komunikasi yang terbuka di setiap tahap pengerjaan." },
    { name: "Berorientasi pada Kebutuhan Klien", role: "", content: "Solusi yang kami berikan disesuaikan dengan kebutuhan bisnis, bukan sekadar template." },
  ];

  const testimonials = [...originalTestimonials, ...originalTestimonials];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex, isMobile, mounted]);

  const nextSlide = () => {
    const maxIndex = isMobile ? testimonials.length - 1 : testimonials.length - 3;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxIndex = isMobile ? testimonials.length - 1 : testimonials.length - 3;
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  if (!mounted) return null;

  return (
    <section id="testimoni" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Mengapa Klien Memilih Kami?</h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden px-2 py-4">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (isMobile ? 100 : 33.3333)}%)` }}>
              {testimonials.map((testi, index) => (
                <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col justify-between transition-transform hover:-translate-y-1 hover:shadow-md">
                    <p className="text-slate-600 mb-6 italic">"{testi.content}"</p>
                    <div>
                      <h4 className="font-bold text-slate-900">{testi.name}</h4>
                      <p className="text-sm text-slate-500">{testi.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-2 md:-left-6 -translate-y-1/2 w-10 md:w-12 h-10 md:h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all z-10"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-2 md:-right-6 -translate-y-1/2 w-10 md:w-12 h-10 md:h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all z-10"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
